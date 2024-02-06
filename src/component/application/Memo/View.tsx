import type { Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import type { TMemo } from "./type";

interface ViewProps {
  memo: TMemo;
  showingMemoDate: string;
  setShowingMemoDate: Dispatch<SetStateAction<string>>;
}

export function ListView({
  memo,
  showingMemoDate,
  setShowingMemoDate,
}: ViewProps) {
  const { date, title } = memo;
  const active = date === showingMemoDate;

  return (
    <div
      className={`group flex flex-col justify-between w-full p-3 mt-1 rounded-md ${
        active ? "bg-yellow-500 dark:bg-yellow-600" : ""
      }`}
      onClick={() => setShowingMemoDate(date)}
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
  showingMemoDate,
  setShowingMemoDate,
}: ViewProps) {
  const { date, title } = memo;
  const active = date === showingMemoDate;

  return (
    <div className="flex flex-col w-full items-center mt-3">
      <div
        className={`w-full aspect-square mb-1 rounded-md border-[3px] border-transparent bg-white dark:bg-[var(--color-navy)] overflow-hidden ${
          active ? "border-yellow-500" : ""
        }`}
        onClick={() => setShowingMemoDate(date)}
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
