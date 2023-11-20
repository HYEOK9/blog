import React, { useCallback } from "react";
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
  setCurMemo: React.Dispatch<React.SetStateAction<TMemo>>;
}

function MemoTitleList({ openModal, setCurMemo }: MemoTitleListProps) {
  const [memos, setMemos] = useLocalStorage<TMemo[]>("memo", []);

  const removeMemo = useCallback(
    (targetIdx: number) =>
      setMemos((prev) => prev.filter((_, idx) => idx !== targetIdx)),
    [setMemos]
  );

  return (
    <div className="flex flex-col items-center w-52 shrink-0 py-5 px-3 overflow-scroll">
      <AddMemo
        className="w-8 h-8 dark:fill-gray-500 mb-6 hover:scale-105 transition-all"
        onClick={openModal}
      />
      {memos.map((memo, idx) => (
        <React.Fragment key={`${memo.date}${memo.title}`}>
          <div
            className="group flex items-center justify-between w-full p-3 mt:10 hover:bg-yellow-500 dark:hover:bg-yellow-600 rounded-md"
            onClick={() => setCurMemo(memo)}
            role="presentation"
          >
            <div className="flex flex-col">
              {memo.title}
              <span className="text-xs pt-0.5">
                {dayjs(memo.date).format("YYYY년 M월 D일")}
              </span>
            </div>
            <Trash
              className="invisible group-hover:visible dark:fill-white hover:scale-110 transition-all"
              onClick={() => removeMemo(idx)}
            />
          </div>
          <Divider className="!w-11/12" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default React.memo(MemoTitleList);
