import { useState, Dispatch, SetStateAction } from "react";
import Draggable, { ControlPosition } from "react-draggable";
// store
import type { IApp } from "@store/appStore";
// component
import Navigators from "./navigator/Navigators";

interface AppHeaderProps {
  app: IApp;
  headerColor?: string;
  position: ControlPosition;
  setPosition: Dispatch<SetStateAction<ControlPosition | null>>;
  width: number | string;
  fullScreen: boolean;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  dragging: boolean;
  setDragging: Dispatch<SetStateAction<boolean>>;
}

export default function AppHeader({
  app,
  headerColor,
  position,
  setPosition,
  width,
  fullScreen,
  setFullScreen,
  dragging,
  setDragging,
}: AppHeaderProps) {
  const [prevPosition, setPrevPosition] = useState(position);

  const toggleWindowSize = () => {
    if (fullScreen) {
      if (position.x === -window.innerWidth / 2 && position.y === 32) {
        setPosition(prevPosition);
        setFullScreen(false);
      } else {
        setPosition({ x: -window.innerWidth / 2, y: 32 });
      }
    } else {
      setFullScreen(true);
      setPrevPosition(position);
      setPosition({ x: -window.innerWidth / 2, y: 32 });
    }
  };

  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition({ x, y })}
      onStart={() => setDragging(true)}
      onStop={() => setDragging(false)}
      bounds={{
        top: 32,
        right: window.innerWidth / 2 - 200,
        bottom: window.innerHeight - 200,
        left: -window.innerWidth + 250,
      }}
      position={position}
    >
      <div
        className={`flex absolute h-10 p-2 items-center bg-gray-300 dark:bg-navy-600 rounded-t-xl border border-slate-600 border-b-0 ${
          !dragging ? "transition-all duration-200" : "transition-none"
        }`}
        style={{
          ...(!fullScreen ? { width } : { width: "100vw" }),
          backgroundColor: headerColor,
          zIndex: app.zIndex,
        }}
        onDoubleClick={toggleWindowSize}
      >
        <Navigators app={app} toggleWindowSize={toggleWindowSize} />
      </div>
    </Draggable>
  );
}
