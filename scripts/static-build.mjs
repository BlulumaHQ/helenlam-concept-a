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

if (!fs.existsSync(distClient)) {
  console.error(`[static-build] ERROR: ${distClient} does not exist. Run vite build first.`);
  process.exit(1);
}
if (!fs.existsSync(distServer)) {
  console.error(`[static-build] ERROR: ${distServer} does not exist. Run vite build first.`);
  process.exit(1);
}

// Alias server/index.js -> server/server.js so TanStack's preview plugin can find it
const serverIndex = path.join(distServer, "index.js");
const serverAlias = path.join(distServer, "server.js");
if (fs.existsSync(serverIndex) && !fs.existsSync(serverAlias)) {
  fs.copyFileSync(serverIndex, serverAlias);
  log("Aliased dist/server/index.js -> dist/server/server.js");
}

const PORT = 4910;
const PREVIEW_URL = `http://localhost:${PORT}/`;

log("Starting vite preview...");
const preview = spawn("npx", ["vite", "preview", "--port", String(PORT)], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
  env: { ...process.env },
});

preview.stdout.on("data", (d) => process.stdout.write(`[preview] ${d}`));
preview.stderr.on("data", (d) => process.stderr.write(`[preview] ${d}`));

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return res;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function killPreview() {
  try {
    preview.kill("SIGTERM");
  } catch {}
  await new Promise((r) => setTimeout(r, 500));
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

function countFiles(dir) {
  let n = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) n += countFiles(path.join(dir, entry.name));
    else n += 1;
  }
  return n;
}

try {
  const res = await waitForServer(PREVIEW_URL, 30000);
  const html = await res.text();
  const indexPath = path.join(distClient, "index.html");
  fs.writeFileSync(indexPath, html);
  log(`Wrote prerendered HTML to ${indexPath} (${html.length} bytes)`);
} catch (err) {
  console.error(`[static-build] ${err.message}`);
  await killPreview();
  process.exit(1);
}

await killPreview();
log("Preview server stopped");

// Flatten dist/client/* into dist/
moveAllUp(distClient, dist);
fs.rmSync(distClient, { recursive: true, force: true });
log("Flattened dist/client -> dist");

// Delete dist/server entirely
fs.rmSync(distServer, { recursive: true, force: true });
log("Removed dist/server");

// Ensure _redirects exists
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

const total = countFiles(dist);
log(`SUCCESS: dist/ contains ${total} files`);
