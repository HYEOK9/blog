import { create } from "zustand";
import type { ControlPosition } from "react-draggable";

export interface IApp {
  name: string;
  open: boolean;
  hide: boolean;
  zIndex: number;
  position: ControlPosition | undefined;
  fullScreen: boolean;
}

interface appState {
  curApp: string;
  allApps: IApp[];
}

interface setAppState {
  setCurApp: (appName: string) => void;
  openApp: (appName: string) => void;
  closeApp: (appName: string) => void;
  hideApp: (appName: string) => void;
  setPosition: (appName: string, position: IApp["position"]) => void;
  setFullScreen: (appName: string, value: boolean) => void;
}

const defaultState = {
  open: false,
  hide: false,
  zIndex: 21,
  position: undefined,
  fullScreen: false,
};

const initialAppState: appState = {
  curApp: "About Developer",
  allApps: [
    { ...defaultState, name: "Finder" },
    { ...defaultState, name: "ITerm" },
    { ...defaultState, name: "Code" },
    { ...defaultState, name: "Memo" },
    { ...defaultState, name: "About Developer", open: true },
    { ...defaultState, name: "Display Setting" },
  ],
};

export const appStore = create<appState & setAppState>((set) => ({
  ...initialAppState,
  setCurApp: (appName) =>
    set((prev) => {
      if (prev.curApp === appName) return prev;

      const zIndex =
        Math.max.apply(
          null,
          prev.allApps.map((app) => app.zIndex)
        ) + 1;

      return {
        ...prev,
        curApp: appName,
        allApps: prev.allApps.map((app) =>
          app.name === appName ? { ...app, zIndex } : app
        ),
      };
    }),
  openApp: (appName) =>
    set((prev) => {
      const zIndex =
        Math.max.apply(
          null,
          prev.allApps.map((app) => app.zIndex)
        ) + 1;

      return {
        ...prev,
        curApp: appName,
        allApps: prev.allApps.map((app) =>
          app.name !== appName
            ? app
            : app.hide
            ? { ...app, hide: false, zIndex }
            : { ...app, open: true, zIndex }
        ),
      };
    }),
  closeApp: (appName) =>
    set((prev) => ({
      ...prev,
      curApp:
        prev.allApps
          .filter((app) => app.open && app.name !== appName)
          .sort((a, b) => b.zIndex - a.zIndex)[0]?.name ?? null,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, ...defaultState }
      ),
    })),
  hideApp: (appName) =>
    set((prev) => ({
      ...prev,
      curApp: appName,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, hide: true }
      ),
    })),
  setPosition: (appName, position) =>
    set((prev) => ({
      ...prev,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, position }
      ),
    })),
  setFullScreen: (appName, value) =>
    set((prev) => ({
      ...prev,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, fullScreen: value }
      ),
    })),
}));
