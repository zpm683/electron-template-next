import { app, BrowserWindow } from "electron";
import { join } from "node:path";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "true";

let win: BrowserWindow | null = null;

async function createMainWin() {
  // Here, you can also use other preload
  const preload = join(process.env.DIST_ELECTRON, "preloads", "index.js");
  const url = process.env.VITE_DEV_SERVER_URL;
  const indexHtml = join(process.env.DIST, "index.html");

  win = new BrowserWindow({
    title: "Main window",
    icon: join(process.env.PUBLIC, "favicon.ico"),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(url);
  } else {
    win.loadFile(indexHtml);
  }
}

app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

export { createMainWin };
