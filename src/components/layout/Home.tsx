import { useState, useEffect, useRef } from "react";
// style
import WallPaper from "public/wall-paper.jpg";
// store
import { homeStore } from "@src/store/homeStore";
import { cursorStore } from "@src/store/cursorStore";
import { dateStore } from "@src/store/dateStore";
// components
import HomeLoading from "@src/components/layout/HomeLoading";
import Background from "@src/components/layout/background/Background";
import Header from "@src/components/layout/header/Header";
import DraggableBox from "@src/components/util/DragBox";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [draggable, setDraggable] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);

  const { curApp, curMenu } = homeStore();
  const { setCursorPosition } = cursorStore();
  const { getNow } = dateStore();

  useEffect(() => {
    setInterval(() => getNow(), 1000);
  }, []);

  useEffect(() => {
    const mouseMoving = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setDraggable(
        !curMenu && !curApp && !headerRef.current?.contains(e.target)
      );
    };

    window.addEventListener("mousemove", mouseMoving);

    return () => {
      window.removeEventListener("mousemove", mouseMoving);
    };
  }, [curMenu, curApp]);

  return loading ? (
    <HomeLoading setLoading={setLoading} />
  ) : (
    <>
      <section ref={headerRef}>
        <Header />
      </section>

      <section ref={dockRef} />

      <DraggableBox draggable={draggable} />
      <Background image={WallPaper} />
    </>
  );
}
