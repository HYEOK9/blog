import { create } from "zustand";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface dateState {
  now: string;
}

interface setDateState {
  getNow: () => void;
}

export const dateStore = create<dateState & setDateState>((set) => ({
  now: "",
  getNow: () =>
    set(() => ({
      now: dayjs().locale("ko").format("M월 D일 (ddd) A h:mm"),
    })),
}));
