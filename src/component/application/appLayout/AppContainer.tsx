import { useState, useEffect, ReactNode } from "react";
import { ControlPosition } from "react-draggable";
// store
import { cursorStore } from "@store/cursorStore";
// types
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
  initialPosition?: { x: number; y: number };
}

export default function AppContainer({
  children,
  app,
  backgroundColor,
  width = 800,
  height = 560,
  initialPosition,
}: AppContainerProps) {
  const [position, setPosition] = useState<ControlPosition | null>(
    initialPosition ?? null
  );
  const { isDragging } = cursorStore();

  useEffect(() => {
    if (initialPosition) return;

    setPosition({
      x: getRandomNumber(-600, -300),
      y: getRandomNumber(32, 80),
    });
  }, [initialPosition]);

  if (!position) return null;

  return (
    <>
      <AppHeader
        app={app}
        headerColor={backgroundColor}
        position={position}
        setPosition={setPosition}
        width={width}
      />
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
                top: `calc(${position.y}px + 2.5rem)`,
              }
            : {
                width: "100vw",
                // (100vh - Header - TrafficButton - Dock)
                height: "calc(100vh - 2.5rem - 2rem - 4.75rem)",
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
