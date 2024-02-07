import { useState, useEffect, useRef, useCallback, RefObject } from "react";
// constants
import { MEMO_CONTEXT_MENU } from "@constant/menu";
// types
import type { position } from "@store/cursorStore";
// components
import MemoSubMenuModal from "@component/modal/MemoSubMenuModal";

interface MemoContextMenuProps {
  parentRef: RefObject<HTMLDivElement>;
  openModal: () => void;
  deleteMemo: () => void;
}

export default function MemoContextMenu({
  parentRef,
  openModal,
  deleteMemo,
}: MemoContextMenuProps) {
  const [rightClicked, setRightClicked] = useState(false);
  const [startPosition, setStartPosition] = useState<position>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (!parentRef.current.contains(e.target as Element)) {
        setRightClicked(false);
        return;
      }

      setRightClicked(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    },
    [setRightClicked, parentRef]
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
      deleteMemo();
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
