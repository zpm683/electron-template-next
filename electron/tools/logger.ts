import { app } from "electron";
import log4js from "log4js";
import { join } from "path";

const LOG_FOLDER_PATH = app.isPackaged
  ? join(app.getAppPath(), "../../logs/")
  : app.getAppPath();
const LOG_NAME = "karte-html.log";

log4js.configure({
  appenders: {
    app: {
      type: "dateFile",
      pattern: "yyyyMMdd",
      filename: `${LOG_FOLDER_PATH}/${LOG_NAME}`,
      alwaysIncludePattern: true,
      keepFileExt: true,
    },
  },
  categories: {
    default: {
      appenders: ["app"],
      level: "DEBUG",
    },
  },
});

const mainLogger = log4js.getLogger("main");

const createLog =
  (lv: "info" | "warn" | "error" | "debug") =>
  (title: string, msg: string | object | undefined) => {
    let log = "";

    if (!msg) {
      log = title;
    } else {
      if (typeof msg === "object") msg = JSON.stringify(msg);
      log = `${title}:　${msg}`;
    }

    console[lv](log);
    mainLogger[lv](log);
  };

global.logger = {
  info: createLog("info"),
  warn: createLog("warn"),
  error: createLog("error"),
  debug: createLog("debug"),
};
