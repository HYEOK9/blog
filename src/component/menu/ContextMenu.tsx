import { useState, useEffect, useRef, useCallback } from "react";
// store
import { menuStore } from "@store/menuStore";
import { cursorStore, type TPosition } from "@store/cursorStore";
// constants
import { CONTEXT_MENU } from "@constant/menu";
// components
import SubMenuModal from "@component/modal/SubMenuModal";

export default function ContextMenu() {
  const { curMenu, setCurMenu } = menuStore();
  const { rightClicked, setRightClicked, draggable } = cursorStore();

  const [startPosition, setStartPosition] = useState<TPosition>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (!draggable) {
        if (curMenu) setCurMenu(null);
        return;
      }
      setRightClicked(true);
      setStartPosition({ x: e.clientX, y: e.clientY });
    },
    [draggable, setRightClicked, curMenu, setCurMenu]
  );

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleContextMenu]);

  useEffect(() => {
    if (!rightClicked) return;

    setStartPosition((prev) => {
      if (!prev || !ref.current) return null;

      return {
        x: Math.min(prev.x, window.innerWidth - ref.current.offsetWidth - 3),
        y: Math.min(prev.y, window.innerHeight - ref.current.offsetHeight - 77),
      };
    });
  }, [rightClicked]);

  return (
    rightClicked && (
      <div
        className="absolute w-48 animate-fade z-subMenu"
        style={{ top: startPosition?.y, left: startPosition?.x }}
        ref={ref}
      >
        <SubMenuModal subMenu={CONTEXT_MENU} />
      </div>
    )
  );
}
