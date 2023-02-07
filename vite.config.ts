import { rmSync } from "node:fs";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import electron from "vite-electron-plugin";
import renderer from "vite-plugin-electron-renderer";
import { customStart, loadViteEnv } from "vite-electron-plugin/plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { visualizer } from "rollup-plugin-visualizer";
import progress from "vite-plugin-progress";
import eslint from "vite-plugin-eslint";
import colors from "picocolors";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  rmSync("dist-electron", { recursive: true, force: true });
  const sourcemap = command === "serve" || !!process.env.VSCODE_DEBUG;

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      eslint(),
      {
        ...visualizer(),
        apply: "build",
      },
      progress({
        format: `${colors.green(colors.bold("Building"))} ${colors.cyan(
          "[:bar]",
        )} :percent`,
      }),
      electron({
        include: ["electron"],
        transformOptions: {
          sourcemap,
        },
        plugins: [
          ...(!!process.env.VSCODE_DEBUG
            ? [
                // Will start Electron via VSCode Debug
                customStart(
                  debounce(() =>
                    console.log(
                      /* For `.vscode/.debug.script.mjs` */ "[startup] Electron App",
                    ),
                  ),
                ),
              ]
            : []),
          // Allow use `import.meta.env.VITE_SOME_KEY` in Electron-Main
          loadViteEnv(),
        ],
      }),
      // Use Node.js API in the Renderer-process
      renderer({
        nodeIntegration: true,
      }),
    ],
    server: !!process.env.VSCODE_DEBUG
      ? (() => {
          const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
          return {
            host: url.hostname,
            port: +url.port,
          };
        })()
      : undefined,
    clearScreen: false,
    envPrefix: "ENV_",
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./src/test/setup.ts",
    },
  };
});

function debounce<Fn extends (...args: any[]) => void>(
  fn: Fn,
  delay = 299,
): Fn {
  let t: NodeJS.Timeout;
  return ((...args: Parameters<Fn>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  }) as Fn;
}
