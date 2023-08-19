import { useState, useEffect, useCallback, useRef } from "react";
// style
import WallPaper from "public/wall-paper.jpg";
// store
import { homeStore } from "@store/homeStore";
import { cursorStore } from "@store/cursorStore";
// components
import HomeLoading from "@components/layout/HomeLoading";
import Header from "@components/layout/header/Header";
import Dock from "@components/dock/Dock";
import Background from "@components/layout/background/Background";
import DraggableBox from "@components/util/dragBox/DragBox";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement>(null);

  const { curApp, curMenu } = homeStore();
  const { setCursorPosition, setDraggable } = cursorStore();

  const mouseMoving = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      setCursorPosition({ x: e.clientX, y: e.clientY });

      const doingWork = curApp || curMenu;
      const cursorOnNotDraggable =
        headerRef.current?.contains(e.target as Element) ||
        dockRef.current?.contains(e.target as Element);

      setDraggable(!doingWork && !cursorOnNotDraggable);
    },
    [curApp, curMenu, setCursorPosition, setDraggable]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoving);

    return () => window.removeEventListener("mousemove", mouseMoving);
  }, [mouseMoving]);

  return (
    <div className="flex justify-center">
      {loading && <HomeLoading />}

      <section className="fixed w-full" ref={headerRef}>
        <Header />
      </section>

      <section ref={appRef} />

      <section className="h-18 absolute bottom-1" ref={dockRef}>
        <Dock />
      </section>

      <DraggableBox />
      <Background setLoading={setLoading} image={WallPaper} />
    </div>
  );
}
