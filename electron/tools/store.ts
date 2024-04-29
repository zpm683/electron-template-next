import Store from "electron-store";
import type { Rectangle } from "electron";

const WIN_BOUNDS_KEY = "bounds";

const getStore = () => {
  if (global.store) return global.store;
  const store = new Store();
  global.store = store;
  return store;
};

type GetWinPosition = () => undefined | Rectangle;

export const getWinBounds: GetWinPosition = () => {
  const store = getStore();
  const bounds = store.get(WIN_BOUNDS_KEY) as Rectangle | undefined;

  return bounds ?? undefined;
};

export const saveWinBounds = (bounds: Rectangle) => {
  const store = getStore();
  store.set(WIN_BOUNDS_KEY, bounds);
};
