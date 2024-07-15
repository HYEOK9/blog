import { useState, memo } from "react";
// store
import { appStore, type IApp } from "@store/appStore";
// component
import Navigators from "./navigator/Navigators";

interface AppHeaderProps {
  app: IApp;
}

function AppHeader({ app }: AppHeaderProps) {
  const { setPosition, setFullScreen } = appStore();

  const [prevPosition, setPrevPosition] = useState(app.position);

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

  return (
    <div
      className="header flex items-center w-full h-10 p-2 rounded-t-xl"
      onDoubleClick={toggleWindowSize}
    >
      <Navigators app={app} toggleWindowSize={toggleWindowSize} />
    </div>
  );
}

export default memo(AppHeader);
