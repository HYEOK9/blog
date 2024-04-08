import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type RefObject,
} from "react";
// store
import { memoStore } from "@store/memoStore";
// types
import type { TPosition } from "@store/cursorStore";
// constants
import { MEMO_CONTEXT_MENU } from "@constant/menu";
// components
import MemoSubMenuModal from "@component/modal/MemoSubMenuModal";

interface MemoContextMenuProps {
  memoKey: number;
  parentRef: RefObject<HTMLDivElement>;
  openModal: () => void;
}

export default function MemoContextMenu({
  memoKey,
  parentRef,
  openModal,
}: MemoContextMenuProps) {
  const { setCurMemo, removeMemo } = memoStore();
  const [rightClicked, setRightClicked] = useState(false);
  const [startPosition, setStartPosition] = useState<TPosition>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (!parentRef.current?.contains(e.target as Element)) {
        setRightClicked(false);
        return;
      }
      setCurMemo(memoKey);
      setRightClicked(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    },
    [setRightClicked, parentRef, memoKey, setCurMemo]
  );

  const leftClick = () => {
    setRightClicked(false);
    setStartPosition(null);
  };

  const onMenuClick = (title: string) => {
    setRightClicked(false);
    if (title === "이름 변경") {
      openModal();
    } else if (title === "삭제") {
      removeMemo(memoKey);
    }
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("click", leftClick);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("contextmenu", leftClick);
    };
  }, [handleContextMenu]);

  return (
    rightClicked && (
      <div
        className="absolute w-48 animate-fade z-subMenu"
        style={{ top: startPosition?.y, left: startPosition?.x }}
        ref={ref}
      >
        <MemoSubMenuModal
          subMenu={MEMO_CONTEXT_MENU}
          onMenuClick={onMenuClick}
        />
      </div>
    )
  );
}
