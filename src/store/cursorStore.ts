import { create } from "zustand";

export type position = {
  x: number;
  y: number;
} | null;

interface cursorState {
  curPosition: position;
}

interface setCursorState {
  setCurPosition: (curPosition: position) => void;
}

const initialHomeState: cursorState = {
  curPosition: null,
};

export const cursorStore = create<cursorState & setCursorState>((set) => ({
  ...initialHomeState,
  setCurPosition: (curPosition: position) =>
    set((prev) => ({ ...prev, curPosition })),
}));
