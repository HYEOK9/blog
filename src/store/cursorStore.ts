import { create } from "zustand";
import type { ControlPosition } from "react-draggable";

export type TPosition = ControlPosition | null;

interface cursorState {
  cursorPosition: TPosition;
  draggable: boolean;
  isDragging: boolean;
  rightClicked: boolean;
}

interface setCursorState {
  setCursorPosition: (cursorPosition: TPosition) => void;
  setDraggable: (draggable: boolean) => void;
  setIsDragging: (isDragging: boolean) => void;
  setRightClicked: (rightClicked: boolean) => void;
}

const initialHomeState: cursorState = {
  cursorPosition: null,
  draggable: true,
  isDragging: false,
  rightClicked: false,
};

export const cursorStore = create<cursorState & setCursorState>((set) => ({
  ...initialHomeState,
  setCursorPosition: (cursorPosition) =>
    set((prev) => ({ ...prev, cursorPosition })),
  setDraggable: (draggable) => set((prev) => ({ ...prev, draggable })),
  setIsDragging: (isDragging) => set((prev) => ({ ...prev, isDragging })),
  setRightClicked: (rightClicked) => set((prev) => ({ ...prev, rightClicked })),
}));
