import React, { useEffect, useCallback, useRef, useState } from "react";
import dayjs from "dayjs";
// hooks
import { useLocalStorage } from "usehooks-ts";
// types
import { TMemo } from "./type";
// components
import SingleBtnModal from "@component/modal/SingleBtnModal";
import Divider from "@component/UI/Divider";
import MemoTitleList from "./MemoTitleList";
import EmptyMemo from "./EmptyMemo";

function Memo() {
  const [memos, setMemos] = useLocalStorage<TMemo[]>("memo", []);
  const [curMemo, setCurMemo] = useState(memos[0]);
  const [open, setOpen] = useState(false);
  const [newMemoTitle, setNewMemoTitle] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const curShowingMemo = memos.filter(({ date }) => date === curMemo?.date)[0];

  const addMemo = useCallback(() => {
    setMemos((prev) => [
      {
        title: newMemoTitle || `새로운 메모 ${memos.length + 1}`,
        content: "",
        date: dayjs().format(),
      },
      ...prev,
    ]);
    closeModal();
  }, [memos, setMemos, newMemoTitle]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setNewMemoTitle("");
  }, [open]);

  return (
    <div className="w-full h-full flex text-gray-900 dark:text-white">
      {memos.length ? (
        <>
          <MemoTitleList openModal={openModal} setCurMemo={setCurMemo} />

          <Divider
            className="p-[0.5px] bg-gray-400 dark:bg-gray-950"
            vertical
          />

          <div className="w-full p-5">
            <textarea
              className="w-full h-full outline-none dark:caret-white inline bg-transparent resize-none"
              value={curShowingMemo?.content}
              onChange={({ target: { value } }) => {
                setMemos((prev) =>
                  prev.map((prevMemo) => {
                    if (prevMemo.date !== curShowingMemo?.date) return prevMemo;
                    return { ...prevMemo, content: value };
                  })
                );
              }}
            />
          </div>
        </>
      ) : (
        <EmptyMemo openModal={openModal} />
      )}

      <SingleBtnModal
        open={open}
        onClose={closeModal}
        btnText="확인"
        btnHandler={addMemo}
        closeOnClickOutside
        className="text-black dark:text-white"
      >
        <input
          className="w-3/4 h-10 p-1 bg-transparent outline-none border-b-[1px] border-slate-600 dark:caret-white"
          ref={inputRef}
          onChange={({ target: { value } }) => setNewMemoTitle(value)}
          placeholder={`새로운 메모 ${memos.length + 1}`}
        />
      </SingleBtnModal>
    </div>
  );
}

export default React.memo(Memo);
