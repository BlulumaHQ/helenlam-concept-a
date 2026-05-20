// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "fs";
import path from "path";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
  vite: {
    plugins: [
      {
        name: "copy-server-js",
        apply: "build",
        enforce: "pre",
        async writeBundle(options) {
          if (options.dir?.endsWith("dist/server")) {
            const indexPath = path.resolve("dist/server/index.js");
            const serverPath = path.resolve("dist/server/server.js");
            if (fs.existsSync(indexPath) && !fs.existsSync(serverPath)) {
              fs.copyFileSync(indexPath, serverPath);
            }
          }
        },
      },
    ],
  },
});
