import { useState, useRef, type Dispatch, type SetStateAction } from "react";
import dayjs from "dayjs";
// hooks
import { useLocalStorage } from "usehooks-ts";
// types
import type { TMemo } from "./type";
// components
import MemoContextMenu from "@component/menu/MemoContextMenu";
import ModalPortal from "@component/modal/portal";
import SingleBtnModal from "@component/modal/SingleBtnModal";
import Divider from "@component/UI/Divider";

interface MemoTitleViewProps {
  type: "list" | "square";
  memo: TMemo;
  showingMemoKey: number;
  setShowingMemoKey: Dispatch<SetStateAction<number>>;
}

export default function MemoTitleView({
  type,
  memo,
  showingMemoKey,
  setShowingMemoKey,
}: MemoTitleViewProps) {
  const { key, title, date } = memo;
  const active = key === showingMemoKey;
  const [, setMemos] = useLocalStorage<TMemo[]>("memo", []);

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };
  const closeModal = () => setOpen(false);

  const renameMemo = () => {
    setMemos((prev) =>
      prev.map((prevMemo) => {
        if (prevMemo.key !== key) return prevMemo;
        return {
          ...prevMemo,
          title: inputRef.current?.value || prevMemo.title,
        };
      })
    );
    closeModal();
  };

  const deleteMemo = () => {
    setMemos((prev) => prev.filter(({ key: memoKey }) => memoKey !== key));
  };

  return (
    <>
      {type === "list" ? (
        <>
          <div
            className={`group flex flex-col justify-between w-full p-3 rounded-md ${
              active ? "bg-amber-200 dark:bg-yellow-600" : ""
            }`}
            onClick={() => setShowingMemoKey(key)}
            ref={ref}
            role="presentation"
          >
            <span className="flex flex-col">{title} </span>
            <span className="text-xs pt-0.5">
              {dayjs(date).format("YYYY년 M월 D일")}
            </span>
          </div>
          <Divider className="!w-11/12" />
        </>
      ) : (
        <div className="flex flex-col w-full items-center mt-3">
          <div
            className={`w-full aspect-4/3 mb-1 rounded-xl border-2 border-transparent bg-white dark:bg-[var(--color-navy)] overflow-hidden ${
              active ? "border-yellow-500" : ""
            }`}
            onClick={() => setShowingMemoKey(key)}
            role="presentation"
            ref={ref}
          >
            <p className="w-full p-3 text-xs">{memo.content}</p>
          </div>
          <span className="text-xs">{title}</span>
          <span className="text-xs text-gray-500">
            {dayjs(date).format("YYYY년 M월 D일")}
          </span>
        </div>
      )}

      <ModalPortal>
        <MemoContextMenu
          key={key}
          parentRef={ref}
          openModal={openModal}
          deleteMemo={deleteMemo}
        />
      </ModalPortal>

      <SingleBtnModal
        open={open}
        onClose={closeModal}
        btnText="확인"
        btnHandler={renameMemo}
        closeOnClickOutside
        className="text-black dark:text-white"
      >
        <input
          className="w-3/4 h-10 p-1 bg-transparent outline-none border-b-[1px] border-slate-600 dark:caret-white cursor-text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              renameMemo();
            }
          }}
          placeholder={title}
        />
      </SingleBtnModal>
    </>
  );
}
