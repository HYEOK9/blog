import { create } from "zustand";

interface menuState {
  isMenuOpened: boolean;
  curMenu: string | null;
}

interface setMenuState {
  setCurMenu: (param: string | null) => void;
}

const initialMenuState: menuState = {
  isMenuOpened: false,
  curMenu: null,
};

export const menuStore = create<menuState & setMenuState>((set) => ({
  ...initialMenuState,
  setCurMenu: (menu: string | null) =>
    set((prev) => ({ ...prev, curMenu: menu, isMenuOpened: Boolean(menu) })),
}));
