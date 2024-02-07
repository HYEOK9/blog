import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import dayjs from "dayjs";
// hooks
import { useLocalStorage } from "usehooks-ts";
// types
import type { TMemo } from "./type";
// components
import SingleBtnModal from "@component/modal/SingleBtnModal";
import Divider from "@component/UI/Divider";
import MemoTitleList from "./MemoTitleList";
import EmptyMemo from "./EmptyMemo";

function Memo() {
  const [memos, setMemos] = useLocalStorage<TMemo[]>("memo", []);

  const [showingMemoKey, setShowingMemoKey] = useState(memos[0]?.key);
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const lastKey = useMemo(
    () =>
      memos.length
        ? Math.max.apply(
            null,
            memos.map((prev) => prev.key)
          )
        : 0,
    [memos]
  );

  const showingMemo = memos.filter(({ key }) => key === showingMemoKey)[0];

  const addMemo = useCallback(() => {
    const date = dayjs().format();
    const key = lastKey + 1;

    setMemos((prev) => [
      {
        key,
        title: inputRef.current.value || `새로운 메모 ${key}`,
        content: "",
        date,
      },
      ...prev,
    ]);
    setShowingMemoKey(key);
    closeModal();
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 100);
  }, [setMemos, lastKey]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (memos.some(({ key }) => key === showingMemoKey)) return;

    setShowingMemoKey(memos[0]?.key);
  }, [memos, showingMemoKey]);

  return (
    <div className="w-full h-full flex text-gray-900 dark:text-white">
      {memos.length ? (
        <>
          <MemoTitleList
            openModal={openModal}
            showingMemoKey={showingMemoKey}
            setShowingMemoKey={setShowingMemoKey}
          />

          <Divider className="p-[0.5px] mt-10" vertical />

          <div className="w-full p-5">
            <textarea
              className="w-full h-full outline-none bg-transparent cursor-text dark:caret-white inline resize-none"
              value={showingMemo?.content}
              onChange={({ target: { value } }) => {
                setMemos((prev) =>
                  prev.map((prevMemo) => {
                    if (prevMemo.key !== showingMemoKey) return prevMemo;
                    return { ...prevMemo, content: value };
                  })
                );
              }}
              ref={textAreaRef}
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
          className="w-3/4 h-10 p-1 bg-transparent outline-none border-b-[1px] border-slate-600 dark:caret-white cursor-text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addMemo();
            }
          }}
          placeholder={`새로운 메모 ${lastKey + 1}`}
        />
      </SingleBtnModal>
    </div>
  );
}

export default React.memo(Memo);
