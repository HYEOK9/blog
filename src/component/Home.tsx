import { useState, useEffect, useRef, useMemo } from "react";
import debounce from "lodash/debounce";
// store
import { appStore } from "@store/appStore";
import { menuStore } from "@store/menuStore";
import { cursorStore } from "@store/cursorStore";
// components
import HomeLoading from "@component/layout/HomeLoading";
import Header from "@component/layout/header/Header";
import Dock from "@component/dock/Dock";
import Background from "@component/layout/Background";
import AppRenderer from "@component/application/appLayout/AppRenderer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const headerRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<HTMLDivElement[]>([]);

  const { allApps } = appStore();
  const { isMenuOpened } = menuStore();
  const { setCursorPosition, setDraggable } = cursorStore();

  const mouseMoving = useMemo(
    () =>
      debounce((e: MouseEvent) => {
        e.preventDefault();
        setCursorPosition({ x: e.clientX, y: e.clientY });

        const target = e.target as Element;
        const cursorOnNotDraggable =
          headerRef.current?.contains(target) ||
          dockRef.current?.contains(target) ||
          appRef.current.some((el) => el?.contains(target));

        setDraggable(!isMenuOpened && !cursorOnNotDraggable);
      }, 10),
    [isMenuOpened, setCursorPosition, setDraggable]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoving);

    return () => window.removeEventListener("mousemove", mouseMoving);
  }, [mouseMoving]);

  return (
    <div
      id="content"
      className="flex relative w-screen h-screen justify-center overflow-hidden"
    >
      {loading && <HomeLoading />}

      <Background setLoading={setLoading} />

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
