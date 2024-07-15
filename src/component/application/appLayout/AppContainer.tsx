import { useState, useEffect, ReactNode } from "react";
import Draggable, { type DraggableBounds } from "react-draggable";
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
  const { isDragging, setIsDragging } = cursorStore();

  const [bounds, setBounds] = useState<DraggableBounds>();

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

  useEffect(() => {
    setBounds({
      top: 32,
      right: window.innerWidth / 2 - 200,
      bottom: window.innerHeight - 200,
      left: -window.innerWidth + 250,
    });
  }, []);

  if (!app.position) return null;

  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition(app.name, { x, y })}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
      bounds={bounds}
      position={app.position}
      handle=".header"
    >
      <div
        className={`flex flex-col absolute bg-gray-300 dark:bg-navy-600 rounded-xl border border-slate-600 ${
          !isDragging ? "transition-all duration-300" : "transition-none"
        }`}
        style={{
          width: !app.fullScreen ? width : "100vw",
          // (100vh - Header - Dock)
          height: !app.fullScreen ? height : "calc(100vh - 2rem - 4.75rem)",
          zIndex: app.zIndex,
          backgroundColor,
        }}
      >
        <AppHeader app={app} />
        <div className="h-full overflow-hidden rounded-b-xl">{children}</div>
      </div>
    </Draggable>
  );
}
