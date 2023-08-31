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
  width = "100%",
  height = 560,
}: AppContainerProps) {
  const [position, setPosition] = useState({
    x: getRandomNumber(-130, 130),
    y: getRandomNumber(32, 80),
  });

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
        className="absolute top-8 w-full h-window overflow-hidden rounded-b-xl border border-slate-600 border-t-0"
        style={{
          top: `calc(${position.y}px + 2.5rem)`,
          left: position.x,
          zIndex: app.zIndex,
          width,
          height,
          backgroundColor,
        }}
      >
        {children}
      </div>
    </>
  );
}
