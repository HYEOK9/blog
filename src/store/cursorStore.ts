import { create } from "zustand";

export type position = {
  x: number;
  y: number;
} | null;

interface cursorState {
  cursorPosition: position;
  draggable: boolean;
  isDragging: boolean;
}

interface setCursorState {
  setCursorPosition: (cursorPosition: position) => void;
  setDraggable: (draggable: boolean) => void;
  setIsDragging: (isDragging: boolean) => void;
}

const initialHomeState: cursorState = {
  cursorPosition: null,
  draggable: true,
  isDragging: false,
};

export const cursorStore = create<cursorState & setCursorState>((set) => ({
  ...initialHomeState,
  setCursorPosition: (cursorPosition: position) =>
    set((prev) => ({ ...prev, cursorPosition })),
  setDraggable: (draggable: boolean) => set((prev) => ({ ...prev, draggable })),
  setIsDragging: (isDragging: boolean) =>
    set((prev) => ({ ...prev, isDragging })),
}));
