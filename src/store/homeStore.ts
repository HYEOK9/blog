import { create } from "zustand";

interface homeState {
  isMenuOpened: boolean;
  curMenu: string | null;
  curApp: string | null;
}

interface setHomeState {
  resetHomeState: () => void;
  setCurMenu: (param: string | null) => void;
  setCurApp: (param: string | null) => void;
}

const initialHomeState: homeState = {
  isMenuOpened: false,
  curMenu: null,
  curApp: null,
};

export const homeStore = create<homeState & setHomeState>((set) => ({
  ...initialHomeState,

  resetHomeState: () => set((prev) => ({ ...prev, ...initialHomeState })),

  setCurMenu: (menu: string | null) =>
    set((prev) => ({ ...prev, curMenu: menu, isMenuOpened: Boolean(menu) })),

  setCurApp: (curApp: string | null) =>
    set((prev) => {
      if (prev.isMenuOpened) {
        return {
          ...prev,
          curApp,
          isMenuOpened: false,
          curMenu: null,
        };
      }

      return { ...prev, curApp };
    }),
}));
