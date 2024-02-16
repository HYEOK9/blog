import { useState, useRef } from "react";
import dayjs from "dayjs";
// store
import { memoStore, type TMemo } from "@store/memoStore";
// components
import MemoContextMenu from "@component/menu/MemoContextMenu";
import ModalPortal from "@component/modal/portal";
import SingleBtnModal from "@component/modal/SingleBtnModal";
import Divider from "@component/UI/Divider";

interface MemoTitleViewProps {
  type: "list" | "square";
  memo: TMemo;
}

export default function MemoTitleView({ type, memo }: MemoTitleViewProps) {
  const { curMemoKey, setCurMemo, renameMemo } = memoStore();

  const { key, title, date } = memo;

  const active = key === curMemoKey;

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

  const changeCurMemo = () => setCurMemo(memo.key);

  const rename = () => {
    renameMemo(memo.key, inputRef.current?.value);
    closeModal();
  };

  const dateString = dayjs(date).format("YYYY년 M월 D일");

  return (
    <>
      {type === "list" ? (
        <>
          <div
            className={`group flex flex-col justify-between w-full p-3 rounded-md ${
              active ? "bg-amber-200 dark:bg-yellow-600" : ""
            }`}
            onClick={changeCurMemo}
            ref={ref}
            role="presentation"
          >
            <span className="flex flex-col">{title} </span>
            <span className="text-xs pt-0.5">{dateString}</span>
          </div>
          <Divider className="!w-11/12" />
        </>
      ) : (
        <div className="flex flex-col w-full items-center mt-3">
          <div
            className={`w-full aspect-4/3 mb-1 rounded-xl border-2 border-transparent bg-white dark:bg-[var(--color-navy)] overflow-hidden ${
              active ? "border-yellow-500" : ""
            }`}
            onClick={changeCurMemo}
            role="presentation"
            ref={ref}
          >
            <p className="w-full p-3 text-xs">{memo.content}</p>
          </div>
          <span className="text-xs">{title}</span>
          <span className="text-xs text-gray-500">{dateString}</span>
        </div>
      )}

      <ModalPortal>
        <MemoContextMenu
          key={key}
          memoKey={key}
          parentRef={ref}
          openModal={openModal}
        />
      </ModalPortal>

      <SingleBtnModal
        open={open}
        onClose={closeModal}
        btnText="확인"
        btnHandler={rename}
        closeOnClickOutside
        className="text-black dark:text-white"
      >
        <input
          className="w-3/4 h-10 p-1 bg-transparent outline-none border-b-[1px] border-slate-600 dark:caret-white cursor-text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              rename();
            } else if (e.key === "Escape") {
              closeModal();
            }
          }}
          placeholder={title}
        />
      </SingleBtnModal>
    </>
  );
}
