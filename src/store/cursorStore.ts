import { create } from "zustand";

export type position = {
  x: number;
  y: number;
} | null;

interface cursorState {
  cursorPosition: position;
}

interface setCursorState {
  setCursorPosition: (cursorPosition: position) => void;
}

const initialHomeState: cursorState = {
  cursorPosition: null,
};

export const cursorStore = create<cursorState & setCursorState>((set) => ({
  ...initialHomeState,
  setCursorPosition: (cursorPosition: position) =>
    set((prev) => ({ ...prev, cursorPosition })),
}));
