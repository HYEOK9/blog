import { useState, ReactNode } from "react";
// store
import { IApp } from "@store/appStore";
// lib
import { getRandomNumber } from "@lib/getRandomNumber";
// components
import AppHeader from "./AppHeader";

interface AppContainerProps {
  children: ReactNode;
  app: IApp;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
}

export default function AppContainer({
  children,
  app,
  backgroundColor = "var(--color-navy-deep)",
  width = 800,
  height = 560,
}: AppContainerProps) {
  const [position, setPosition] = useState({
    x: getRandomNumber(-600, -300),
    y: getRandomNumber(32, 80),
  });
  const [dragging, setDragging] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      <AppHeader
        app={app}
        headerColor={backgroundColor}
        position={position}
        setPosition={setPosition}
        width={width}
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        dragging={dragging}
        setDragging={setDragging}
      />
      <div
        className={`absolute top-8 overflow-hidden rounded-b-xl border border-slate-600 border-t-0 ${
          !dragging ? "transition-all duration-200" : "transition-none"
        }`}
        style={{
          ...(!fullScreen
            ? {
                width,
                height,
                top: `calc(${position.y}px + 2.5rem)`,
              }
            : {
                width: "100vw",
                height: "calc(100vh - 2.5rem - 2rem - 4.5rem - 5px)",
                top: `calc(${position.y}px + 2.5rem)`,
              }),
          left: position.x,
          zIndex: app.zIndex,
          backgroundColor,
        }}
      >
        {children}
      </div>
    </>
  );
}
