import { useEffect, ReactNode } from "react";
// store
import { cursorStore } from "@store/cursorStore";
// types
import { IApp, appStore } from "@store/appStore";
// lib
import { getRandomNumber } from "@lib/getRandomNumber";
// components
import AppHeader from "./AppHeader";

interface AppContainerProps {
  children: ReactNode;
  app: IApp;
  backgroundColor?: string;
  width?: number;
  height?: number;
  center?: boolean;
}

export default function AppContainer({
  children,
  app,
  backgroundColor,
  width = 800,
  height = 560,
  center = false,
}: AppContainerProps) {
  const { setPosition } = appStore();
  const { isDragging } = cursorStore();

  useEffect(() => {
    if (!center) {
      setPosition(app.name, {
        x: getRandomNumber(-600, -300),
        y: getRandomNumber(32, 80),
      });
    } else {
      setPosition(app.name, {
        x: -width / 2,
        y: window.innerHeight / 2 - 40 - height / 2,
      });
    }
  }, [app.name, setPosition, center, width, height]);

  if (!app.position) return null;

  return (
    <>
      <AppHeader app={app} headerColor={backgroundColor} width={width} />
      <div
        className={`absolute top-8 overflow-hidden rounded-b-xl bg-gray-300 dark:bg-navy-600 border border-slate-600 border-t-0 ${
          !isDragging ? "transition-all duration-200" : "transition-none"
        }`}
        style={{
          ...(!app.fullScreen
            ? {
                width,
                height,
                // cursorY + TrafficButton
                top: `calc(${app.position.y}px + 2.5rem)`,
              }
            : {
                width: "100vw",
                // (100vh - Header - TrafficButton - Dock)
                height: "calc(100vh - 2.5rem - 2rem - 4.75rem)",
                top: `calc(${app.position.y}px + 2.5rem)`,
              }),
          left: app.position.x,
          zIndex: app.zIndex,
          backgroundColor,
        }}
      >
        {children}
      </div>
    </>
  );
}
