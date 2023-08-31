import { useState, useEffect, useCallback, useRef } from "react";
import debounce from "lodash/debounce";
// style
import WallPaper from "/public/wall-paper.jpg";
// store
import { appStore } from "@store/appStore";
import { menuStore } from "@store/menuStore";
import { cursorStore } from "@store/cursorStore";
// components
import HomeLoading from "@components/layout/HomeLoading";
import Header from "@components/layout/header/Header";
import Dock from "@components/dock/Dock";
import Background from "@components/layout/background/Background";
import AppRenderer from "@components/application/appLayout/AppRenderer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement[]>([]);

  const { allApps } = appStore();
  const { isMenuOpened } = menuStore();
  const { setCursorPosition, setDraggable } = cursorStore();

  const mouseMoving = useCallback(
    debounce((e: MouseEvent) => {
      e.preventDefault();

      setCursorPosition({ x: e.clientX, y: e.clientY });

      const cursorOnNotDraggable =
        headerRef.current?.contains(e.target as Element) ||
        dockRef.current?.contains(e.target as Element) ||
        appRef.current.some((el) => el?.contains(e.target as Element));

      setDraggable(!isMenuOpened && !cursorOnNotDraggable);
    }, 10),
    [isMenuOpened, setCursorPosition, setDraggable]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoving);

    return () => window.removeEventListener("mousemove", mouseMoving);
  }, [mouseMoving]);

  return (
    <div className="flex relative w-screen h-screen justify-center">
      {loading && <HomeLoading />}

      <Background setLoading={setLoading} image={WallPaper} />

      <section className="fixed w-full z-header" ref={headerRef}>
        <Header />
      </section>

      <section>
        {allApps.map(
          (app, i) =>
            app.open && (
              <AppRenderer
                key={app.name}
                app={app}
                ref={(el: HTMLDivElement) => (appRef.current[i] = el)}
              />
            )
        )}
      </section>

      <section className="absolute h-18 bottom-1" ref={dockRef}>
        <Dock />
      </section>
    </div>
  );
}
