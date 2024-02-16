import { useState, useEffect, useRef, useCallback, memo } from "react";
// store
import { memoStore } from "@store/memoStore";
// components
import SingleBtnModal from "@component/modal/SingleBtnModal";
import Divider from "@component/UI/Divider";
import MemoTitleList from "./MemoTitleList";
import EmptyMemo from "./EmptyMemo";

function Memo() {
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { memos, setCurMemo, curMemoKey, addMemo, changeContent } = memoStore();

  const lastKey = memos.length
    ? Math.max.apply(
        null,
        memos.map(({ key }) => key)
      )
    : 0;

  const openModal = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };
  const closeModal = () => setOpen(false);

  const add = useCallback(() => {
    addMemo(inputRef.current?.value || `새로운 메모 ${lastKey + 1}`);
    closeModal();
    setTimeout(() => {
      textAreaRef.current?.focus();
    }, 100);
  }, [addMemo, lastKey]);

  useEffect(() => {
    if (memos.some(({ key }) => key === curMemoKey)) return;

    setCurMemo(memos[0]?.key);
  }, [memos, curMemoKey, setCurMemo]);

  useEffect(() => () => setCurMemo(null), [setCurMemo]);

  const showingMemo = memos.filter(({ key }) => key === curMemoKey)[0];

  return (
    <div className="w-full h-full flex text-gray-900 dark:text-white">
      {memos.length ? (
        <>
          <MemoTitleList openModal={openModal} />

          <Divider className="p-[0.5px] mt-10" vertical />

          <div className="w-full p-5">
            <textarea
              className="w-full h-full outline-none bg-transparent cursor-text dark:caret-white inline resize-none"
              value={showingMemo?.content}
              onChange={({ target: { value } }) =>
                changeContent(showingMemo.key, value)
              }
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
        btnHandler={add}
        closeOnClickOutside
        className="text-black dark:text-white"
      >
        <input
          className="w-3/4 h-10 p-1 bg-transparent outline-none border-b-[1px] border-slate-600 dark:caret-white cursor-text"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              add();
            } else if (e.key === "Escape") {
              closeModal();
            }
          }}
          placeholder={`새로운 메모 ${lastKey + 1}`}
        />
      </SingleBtnModal>
    </div>
  );
}

export default memo(Memo);
