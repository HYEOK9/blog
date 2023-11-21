import { create } from "zustand";

export interface IApp {
  name: string;
  open: boolean;
  hide: boolean;
  zIndex: number;
  fullScreen: boolean;
}

interface appState {
  curApp: string | null;
  allApps: IApp[];
}

interface setAppState {
  setCurApp: (appName: string) => void;
  openApp: (appName: string) => void;
  closeApp: (appName: string) => void;
  hideApp: (appName: string) => void;
  setFullScreen: (appName: string, value: boolean) => void;
}

const defaultState = {
  open: false,
  hide: false,
  zIndex: 21,
  fullScreen: false,
};

const initialAppState: appState = {
  curApp: null,
  allApps: [
    { ...defaultState, name: "Finder" },
    { ...defaultState, name: "ITerm" },
    { ...defaultState, name: "Vscode" },
    { ...defaultState, name: "Memo" },
    { ...defaultState, name: "About Developer", open: true },
    { ...defaultState, name: "DisplaySetting" },
  ],
};

export const appStore = create<appState & setAppState>((set) => ({
  ...initialAppState,
  setCurApp: (appName: string) =>
    set((prev) => {
      if (prev.curApp === appName) return prev;

      const zIndex =
        Math.max.apply(
          null,
          prev.allApps.map((app) => app.zIndex)
        ) + 1;

      return {
        ...prev,
        curApp: prev.allApps.find(({ name }) => name === appName)?.name,
        allApps: prev.allApps.map((app) =>
          app.name === appName ? { ...app, zIndex } : app
        ),
      };
    }),

  openApp: (appName: string) =>
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

  closeApp: (appName: string) =>
    set((prev) => ({
      ...prev,
      curApp: appName,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, open: false, zIndex: 21 }
      ),
    })),

  hideApp: (appName: string) =>
    set((prev) => ({
      ...prev,
      curApp: appName,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, hide: true }
      ),
    })),
  setFullScreen: (appName: string, value: boolean) =>
    set((prev) => ({
      ...prev,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { ...app, fullScreen: value }
      ),
    })),
}));
