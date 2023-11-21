import { useState, Dispatch, SetStateAction, memo } from "react";
import Draggable, { ControlPosition } from "react-draggable";
// store
import { appStore, type IApp } from "@store/appStore";
import { cursorStore } from "@store/cursorStore";
// component
import Navigators from "./navigator/Navigators";

interface AppHeaderProps {
  app: IApp;
  headerColor?: string;
  position: ControlPosition;
  setPosition: Dispatch<SetStateAction<ControlPosition | null>>;
  width: number | string;
}

function AppHeader({
  app,
  headerColor,
  position,
  setPosition,
  width,
}: AppHeaderProps) {
  const { setFullScreen } = appStore();
  const { isDragging, setIsDragging } = cursorStore();

  const [prevPosition, setPrevPosition] = useState(position);

  const toggleWindowSize = () => {
    if (app.fullScreen) {
      if (position.x === -window.innerWidth / 2 && position.y === 32) {
        setPosition(prevPosition);
        setFullScreen(app.name, false);
      } else {
        setPosition({ x: -window.innerWidth / 2, y: 32 });
      }
    } else {
      setFullScreen(app.name, true);
      setPrevPosition(position);
      setPosition({ x: -window.innerWidth / 2, y: 32 });
    }
  };

  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition({ x, y })}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
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
          !isDragging ? "transition-all duration-200" : "transition-none"
        }`}
        style={{
          ...(!app.fullScreen ? { width } : { width: "100vw" }),
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

export default memo(AppHeader);
