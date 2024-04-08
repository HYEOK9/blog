import { useState, useEffect, memo } from "react";
import Draggable, { DraggableBounds } from "react-draggable";
// store
import { appStore, type IApp } from "@store/appStore";
import { cursorStore } from "@store/cursorStore";
// component
import Navigators from "./navigator/Navigators";

interface AppHeaderProps {
  app: IApp;
  headerColor?: string;
  width: number | string;
}

function AppHeader({ app, headerColor, width }: AppHeaderProps) {
  const { setPosition, setFullScreen } = appStore();
  const { isDragging, setIsDragging } = cursorStore();

  const [prevPosition, setPrevPosition] = useState(app.position);
  const [bounds, setBounds] = useState<DraggableBounds>();

  const toggleWindowSize = () => {
    const fullPosition = { x: -window.innerWidth / 2, y: 32 };

    if (app.fullScreen) {
      if (app.position?.x === -window.innerWidth / 2 && app.position.y === 32) {
        setPosition(app.name, prevPosition);
        setFullScreen(app.name, false);
      } else {
        setPosition(app.name, fullPosition);
      }
    } else {
      setFullScreen(app.name, true);
      setPrevPosition(app.position);
      setPosition(app.name, fullPosition);
    }
  };

  useEffect(() => {
    setBounds({
      top: 32,
      right: window.innerWidth / 2 - 200,
      bottom: window.innerHeight - 200,
      left: -window.innerWidth + 250,
    });
  }, []);

  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition(app.name, { x, y })}
      onStart={() => setIsDragging(true)}
      onStop={() => setIsDragging(false)}
      bounds={bounds}
      position={app.position}
    >
      <div
        className={`flex absolute h-10 p-2 items-center bg-gray-300 dark:bg-navy-600 rounded-t-xl border border-slate-600 border-b-0 ${
          !isDragging ? "transition-all duration-300" : "transition-none"
        }`}
        style={{
          width: !app.fullScreen ? width : "100vw",
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
