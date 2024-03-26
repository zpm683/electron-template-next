/* eslint-disable no-var */
/* eslint-disable vars-on-top */

declare global {
  namespace globalThis {
    var logger: {
      info: (title: string, msg?: any) => void;
      warn: (title: string, msg?: any) => void;
      error: (title: string, msg?: any) => void;
      debug: (title: string, msg?: any) => void;
    };
  }
}

export {};
