import { create } from "zustand";
import { StaticImageData } from "next/image";
import { backgroundList } from "@constant/background";

export interface backgroundState {
  name: string;
  src: StaticImageData;
}

interface setBackgroundState {
  setImage: (image: backgroundState) => void;
}

const initialState: backgroundState = backgroundList[0];

export const backgroundStore = create<backgroundState & setBackgroundState>(
  (set) => ({
    ...initialState,
    setImage: (newImage) => {
      set({ name: newImage.name, src: newImage.src });
      window.localStorage.setItem("background", JSON.stringify(newImage));
    },
  })
);
