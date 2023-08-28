import { useState, memo, ForwardedRef, forwardRef } from "react";
// store
import { Iapp, appStore } from "@store/appStore";
// lib
import { getRandomNumber } from "@lib/getRandomNumber";
// components
import AppHeader from "./AppHeader";
import Finder from "../Finder";
import Postman from "../Postman";
import VScode from "../VScode";
import ITerm from "../ITerm";
import Memo from "../Memo";

interface AppHeaderProps {
  app: Iapp;
  headerColor?: string;
}

function AppContainer(
  { app, headerColor }: AppHeaderProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [position, setPosition] = useState({
    x: getRandomNumber(-130, 130),
    y: getRandomNumber(32, 80),
  });
  const { setCurApp } = appStore();

  const appName = app.name.toLowerCase();

  return (
    <div
      className="relative w-window"
      ref={ref}
      onMouseDown={() => setCurApp(app.name)}
    >
      <AppHeader
        app={app}
        headerColor={headerColor}
        position={position}
        setPosition={setPosition}
      />

      <div
        className="absolute top-8 w-full h-window overflow-hidden rounded-b-xl border border-slate-600 border-t-0"
        style={{
          top: `calc(${position.y}px + 2.5rem)`,
          left: position.x,
          zIndex: app.zIndex,
          backgroundColor: "var(--color-navy-deep)",
        }}
      >
        {(() => {
          switch (appName) {
            case "finder":
              return <Finder />;

            case "iterm":
              return <ITerm />;

            case "vscode":
              return <VScode />;

            case "postman":
              return <Postman />;

            case "memo":
              return <Memo />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default memo(forwardRef(AppContainer));
