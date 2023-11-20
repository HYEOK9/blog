import React from "react";
import dayjs from "dayjs";
// hooks
import { useLocalStorage } from "usehooks-ts";
// types
import type { TMemo } from "./type";
// components
import Divider from "@component/UI/Divider";
import AddMemo from "/public/icon/add-memo.svg";
import Trash from "/public/icon/trash.svg";

interface MemoTitleListProps {
  openModal: () => void;
  showingMemoDate: string;
  setShowingMemoDate: React.Dispatch<React.SetStateAction<string>>;
}

function MemoTitleList({
  openModal,
  showingMemoDate,
  setShowingMemoDate,
}: MemoTitleListProps) {
  const [memos, setMemos] = useLocalStorage<TMemo[]>("memo", []);

  const removeMemo = (targetDate: string) =>
    setMemos((prev) => prev.filter(({ date }) => date !== targetDate));

  return (
    <div className="flex flex-col items-center w-52 shrink-0 py-5 px-3 overflow-scroll">
      <AddMemo
        className="w-8 h-8 dark:fill-gray-500 mb-6 hover:scale-105 transition-all"
        onClick={openModal}
      />
      {memos.map(({ title, date }) => (
        <React.Fragment key={date}>
          <div
            className={`group flex items-center justify-between w-full p-3 mt:1 rounded-md ${
              date === showingMemoDate ? "bg-yellow-500 dark:bg-yellow-600" : ""
            }`}
            onClick={() => setShowingMemoDate(date)}
            role="presentation"
          >
            <div className="flex flex-col">
              {title}
              <span className="text-xs pt-0.5">
                {dayjs(date).format("YYYY년 M월 D일")}
              </span>
            </div>
            <Trash
              className="invisible group-hover:visible dark:fill-white hover:scale-110 transition-all"
              onClick={() => removeMemo(date)}
            />
          </div>
          <Divider className="!w-11/12" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default React.memo(MemoTitleList);
