import { useState, useEffect, useRef } from "react";
// store
import { homeStore } from "@src/store/homeStore";
import { cursorStore } from "@src/store/cursorStore";
// components
import Header from "@src/layout/header/Header";
import DraggableBox from "@src/components/util/DragBox";

export default function Home() {
  const [draggable, setDraggable] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const { curApp, curMenu } = homeStore();
  const { setCurPosition } = cursorStore();

  useEffect(() => {
    const mouseMoving = (e: any) => {
      setCurPosition({ x: e.clientX, y: e.clientY });
      setDraggable(
        !curMenu && !curApp && !headerRef.current?.contains(e.target)
      );
    };

    window.addEventListener("mousemove", mouseMoving);

    return () => {
      window.removeEventListener("mousemove", mouseMoving);
    };
  }, [curMenu, curApp]);

  return (
    <>
      <section ref={headerRef}>
        <Header />
      </section>

      <section ref={dockRef} />

      <DraggableBox draggable={draggable} />
    </>
  );
}
