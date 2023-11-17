import { create } from "zustand";
import dayjs from "dayjs";
import "dayjs/locale/ko";
// constants
import { MENU_DATE_FORMAT, DATE_LOCALE } from "@constant/menu";

interface dateState {
  now: string;
}

interface setDateState {
  setNow: () => void;
}

export const dateStore = create<dateState & setDateState>((set) => ({
  now: "",
  setNow: () =>
    set(() => ({
      now: dayjs().locale(DATE_LOCALE).format(MENU_DATE_FORMAT),
    })),
}));
