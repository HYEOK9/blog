import React from "react";
// components
import Paper from "/public/icon/paper.svg";

interface EmptyMemoProps {
  openModal: () => void;
}

function EmptyMemo({ openModal }: EmptyMemoProps) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <span className="text-gray-500 text-2xl">메모 없음</span>
      <button
        className="flex flex-col items-center [&>*]:cursor-pointer"
        type="button"
        onClick={openModal}
      >
        <Paper className="w-20 fill-gray-500 py-3 [&>path]:cursor-pointer" />
        <span className="text-xs text-gray-500">눌러서 추가</span>
      </button>
    </div>
  );
}

export default React.memo(EmptyMemo);
