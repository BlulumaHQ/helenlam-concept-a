#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const distClient = path.join(dist, "client");
const distServer = path.join(dist, "server");

function log(msg) {
  console.log(`[static-build] ${msg}`);
}

const PORT = 4910;
const HOST = "127.0.0.1";
const PREVIEW_URL = `http://${HOST}:${PORT}/`;

async function killPreview(preview) {
  try {
    preview.kill("SIGTERM");
  } catch {}
  await new Promise((r) => setTimeout(r, 3000));
  try {
    if (!preview.killed) preview.kill("SIGKILL");
  } catch {}
}

function moveAllUp(srcDir, destDir) {
  for (const entry of fs.readdirSync(srcDir)) {
    const from = path.join(srcDir, entry);
    const to = path.join(destDir, entry);
    if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
    fs.renameSync(from, to);
  }
}

async function main() {
  if (!fs.existsSync(distClient)) {
    throw new Error(`${distClient} does not exist. Run vite build first.`);
  }
  if (!fs.existsSync(distServer)) {
    throw new Error(`${distServer} does not exist. Run vite build first.`);
  }

  const serverIndex = path.join(distServer, "index.js");
  const serverAlias = path.join(distServer, "server.js");
  if (fs.existsSync(serverIndex) && !fs.existsSync(serverAlias)) {
    fs.copyFileSync(serverIndex, serverAlias);
    log("Aliased dist/server/index.js -> dist/server/server.js");
  }

  log("Starting vite preview...");
  const preview = spawn(
    "npx",
    ["vite", "preview", "--host", HOST, "--port", String(PORT), "--strictPort"],
    { cwd: root, stdio: ["ignore", "pipe", "pipe"], env: { ...process.env } },
  );
  preview.stdout.on("data", (d) => process.stdout.write(`[preview] ${d}`));
  preview.stderr.on("data", (d) => process.stderr.write(`[preview] ${d}`));

  try {
    await new Promise((r) => setTimeout(r, 2000));

    let html = null;
    for (let i = 0; i < 150; i++) {
      try {
        const res = await fetch(PREVIEW_URL);
        const body = await res.text();
        if (body.includes("<html")) {
          html = body;
          break;
        }
      } catch {}
      await new Promise((r) => setTimeout(r, 200));
    }
    if (!html) throw new Error(`Timed out waiting for ${PREVIEW_URL}`);

    const indexPath = path.join(distClient, "index.html");
    fs.writeFileSync(indexPath, html);
    log(`Wrote prerendered HTML to ${indexPath} (${html.length} bytes)`);
  } finally {
    await killPreview(preview);
    log("Preview server stopped");
  }

  moveAllUp(distClient, dist);
  fs.rmSync(distClient, { recursive: true, force: true });
  log("Flattened dist/client -> dist");

  fs.rmSync(distServer, { recursive: true, force: true });
  log("Removed dist/server");

  const redirectsOut = path.join(dist, "_redirects");
  if (!fs.existsSync(redirectsOut)) {
    const src = path.join(root, "public", "_redirects");
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, redirectsOut);
      log("Copied public/_redirects -> dist/_redirects");
    } else {
      fs.writeFileSync(redirectsOut, "/*    /index.html   200\n");
      log("Created dist/_redirects");
    }
  }

  log("SUCCESS");
}

try {
  await main();
  process.exit(0);
} catch (err) {
  console.error(`[static-build] ${err?.message || err}`);
  process.exit(1);
}
