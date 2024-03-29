import { create } from "zustand";
import { persist } from "zustand/middleware";
import { backgroundList } from "@constant/background";

export interface backgroundState {
  name: string;
  src: string;
}

interface setBackgroundState {
  setImage: (image: backgroundState) => void;
}

const initialState: backgroundState = backgroundList[0];

export const backgroundStore = create<backgroundState & setBackgroundState>()(
  persist(
    (set) => ({
      ...initialState,
      setImage: (newImage) => set({ name: newImage.name, src: newImage.src }),
    }),
    { name: "background" }
  )
);
