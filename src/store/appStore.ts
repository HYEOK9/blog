import { create } from "zustand";

export interface Iapp {
  name: string;
  open: boolean;
  zIndex: number;
}

interface appState {
  curApp: string | null;
  allApps: Iapp[];
}

interface setAppState {
  setCurApp: (appName: string) => void;
  openApp: (appName: string) => void;
  closeApp: (appName: string) => void;
}

const initialAppState = {
  curApp: null,
  allApps: [
    { name: "Finder", open: false, zIndex: 20 },
    { name: "ITerm", open: false, zIndex: 20 },
    { name: "Vscode", open: false, zIndex: 20 },
    { name: "Postman", open: false, zIndex: 20 },
    { name: "Memo", open: false, zIndex: 20 },
    { name: "Github", open: false, zIndex: 20 },
    { name: "Velog", open: false, zIndex: 20 },
  ],
};

export const appStore = create<appState & setAppState>((set) => ({
  ...initialAppState,
  setCurApp: (appName: string) =>
    set((prev) => {
      const zIndex =
        Math.max.apply(
          null,
          prev.allApps.map((app) => app.zIndex)
        ) + 1;

      return {
        ...prev,
        curApp: prev.allApps.find(
          ({ name }) => name.toLowerCase() === appName.toLowerCase()
        )?.name,
        allApps: prev.allApps.map((app) =>
          app.name === appName ? { ...app, zIndex } : app
        ),
      };
    }),

  openApp: (appName: string) =>
    set((prev) => ({
      ...prev,
      curApp: appName,
      allApps: prev.allApps.map((app) =>
        app.name.toLowerCase() !== appName.toLowerCase()
          ? app
          : { name: appName, open: true, zIndex: 21 }
      ),
    })),

  closeApp: (appName: string) =>
    set((prev) => ({
      ...prev,
      curApp: appName,
      allApps: prev.allApps.map((app) =>
        app.name !== appName ? app : { name: appName, open: false, zIndex: 21 }
      ),
    })),
}));
