import { create } from "zustand";

export interface IApp {
  name: string;
  open: boolean;
  hide: boolean;
  zIndex: number;
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
}

const initialAppState = {
  curApp: null,
  allApps: [
    { name: "Finder", open: false, hide: false, zIndex: 21 },
    { name: "ITerm", open: false, hide: false, zIndex: 21 },
    { name: "Vscode", open: false, hide: false, zIndex: 21 },
    { name: "Postman", open: false, hide: false, zIndex: 21 },
    { name: "Memo", open: false, hide: false, zIndex: 21 },
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
}));
