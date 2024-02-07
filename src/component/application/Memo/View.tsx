import type { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import type { TMemo } from "./type";

interface ViewProps {
  memo: TMemo;
  showingMemoKey: number;
  setShowingMemoKey: Dispatch<SetStateAction<number>>;
}

export function ListView({
  memo,
  showingMemoKey,
  setShowingMemoKey,
}: ViewProps) {
  const { key, title, date } = memo;
  const active = key === showingMemoKey;

  return (
    <div
      className={`group flex flex-col justify-between w-full p-3 rounded-md ${
        active ? "bg-amber-200 dark:bg-yellow-600" : ""
      }`}
      onClick={() => setShowingMemoKey(key)}
      role="presentation"
    >
      <span className="flex flex-col">{title} </span>
      <span className="text-xs pt-0.5">
        {dayjs(date).format("YYYY년 M월 D일")}
      </span>
    </div>
  );
}

export function SquareView({
  memo,
  showingMemoKey,
  setShowingMemoKey,
}: ViewProps) {
  const { key, title, date } = memo;
  const active = key === showingMemoKey;

  return (
    <div className="flex flex-col w-full items-center mt-3">
      <div
        className={`w-full aspect-4/3 mb-1 rounded-xl border-2 border-transparent bg-white dark:bg-[var(--color-navy)] overflow-hidden ${
          active ? "border-yellow-500" : ""
        }`}
        onClick={() => setShowingMemoKey(key)}
        role="presentation"
      >
        <p className="w-full p-3 text-xs">{memo.content}</p>
      </div>
      <span className="text-xs">{title}</span>
      <span className="text-xs text-gray-500">
        {dayjs(date).format("YYYY년 M월 D일")}
      </span>
    </div>
  );
}
