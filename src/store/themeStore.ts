import { create } from "zustand";

interface themeState {
  theme: "dark" | "light";
}

interface setThemeState {
  setTheme: (theme: "dark" | "light") => void;
  toggleTheme: () => void;
}

export const themeStore = create<themeState & setThemeState>((set) => ({
  theme: "dark",
  setTheme: (theme) => set(() => ({ theme })),
  toggleTheme: () =>
    set((prev) => {
      document.documentElement.classList.toggle("dark");
      return { ...prev, theme: prev.theme === "dark" ? "light" : "dark" };
    }),
}));
