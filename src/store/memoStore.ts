import { create } from "zustand";
import { persist } from "zustand/middleware";
import dayjs from "dayjs";

export type TMemo = {
  key: number;
  title: string;
  date: string;
  content: string;
};

interface memoState {
  curMemoKey: number | null;
  memos: TMemo[];
}

interface setMemoState {
  setCurMemo: (key: number | null) => void;
  addMemo: (title: string) => void;
  removeMemo: (key: number) => void;
  renameMemo: (key: number, title?: string) => void;
  changeContent: (key: number, content: string) => void;
}

const initialMemoState: memoState = {
  curMemoKey: null,
  memos: [],
};

export const memoStore = create<memoState & setMemoState>()(
  persist(
    (set) => ({
      ...initialMemoState,
      setCurMemo: (key) => set((prev) => ({ ...prev, curMemoKey: key })),
      addMemo: (title) =>
        set((prev) => {
          const lastKey = prev.memos.length
            ? Math.max.apply(
                null,
                prev.memos.map(({ key }) => key)
              )
            : 0;

          const date = dayjs().format();
          const key = lastKey + 1;

          return {
            ...prev,
            curMemoKey: key,
            memos: [
              {
                key,
                title,
                content: "",
                date,
              },
              ...prev.memos,
            ],
          };
        }),
      removeMemo: (key) =>
        set((prev) => ({
          ...prev,
          memos: prev.memos.filter((memo) => memo.key !== key),
        })),
      renameMemo: (key, title) =>
        set((prev) => ({
          ...prev,
          memos: prev.memos.map((memo) => {
            if (memo.key !== key) return memo;
            return { ...memo, title: title || memo.title };
          }),
        })),
      changeContent: (key, content) =>
        set((prev) => ({
          ...prev,
          memos: prev.memos.map((memo) => {
            if (memo.key !== key) return memo;
            return { ...memo, content };
          }),
        })),
    }),
    { name: "memo" }
  )
);
