import React, { useState, useMemo } from "react";
// store
import { memoStore } from "@store/memoStore";
// components
import Divider from "@component/UI/Divider";
import AddMemo from "/public/icon/add-memo-icon.svg";
import ListViewIcon from "/public/icon/list-view-icon.svg";
import AppsIcon from "/public/icon/apps-icon.svg";
import Trash from "/public/icon/trash.svg";
import MemoTitleView from "./MemoTitleView";

interface MemoTitleListProps {
  openModal: () => void;
}

function MemoTitleList({ openModal }: MemoTitleListProps) {
  const [view, setView] = useState<"list" | "square">("list");

  const { memos, curMemoKey, removeMemo } = memoStore();

  const memoTopIcons = useMemo(
    () => [
      { key: "add", Component: AddMemo, onClick: openModal },
      { key: "list", Component: ListViewIcon, onClick: () => setView("list") },
      { key: "square", Component: AppsIcon, onClick: () => setView("square") },
      {
        key: "remove",
        Component: Trash,
        onClick: () => removeMemo(curMemoKey),
      },
    ],
    [openModal, curMemoKey, removeMemo]
  );

  return (
    <div className="flex flex-col items-center w-52 shrink-0 py-5 px-3">
      <div className="flex w-4/5 justify-between pb-4">
        {memoTopIcons.map(({ key, Component, onClick }) => (
          <button
            key={key}
            className={`w-8 h-8 p-1.5 rounded-lg hover:bg-white-transparent ${
              view === key
                ? "bg-slate-200 hover:bg-slate-200 dark:bg-white-transparent-deep dark:hover:bg-white-transparent-deep"
                : ""
            }`}
            onClick={onClick}
            type="button"
          >
            <Component className="w-full h-full dark:fill-gray-500" />
          </button>
        ))}
      </div>

      <Divider className="p-[0.5px]" />

      <div className="w-full overflow-scroll">
        {memos.map((memo) => (
          <React.Fragment key={memo.key}>
            <MemoTitleView type={view} memo={memo} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default React.memo(MemoTitleList);
