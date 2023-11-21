import { useState } from "react";
// store
import { IApp, appStore } from "@store/appStore";
// components
import { Red, Yellow, Green } from "./TrafficButton";

interface NavigatorsProps {
  app: IApp;
  toggleWindowSize: () => void;
}

export default function Navigators({ app, toggleWindowSize }: NavigatorsProps) {
  const { closeApp, hideApp } = appStore();

  const [showIcon, setShowIcon] = useState(false);

  const showHideButton = app.name !== "DisplaySetting";

  return (
    <div
      className="flex"
      onMouseDown={(e) => e.stopPropagation()}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      role="presentation"
    >
      <Red showIcon={showIcon} onClick={() => closeApp(app.name)} />
      {showHideButton && (
        <Yellow showIcon={showIcon} onClick={() => hideApp(app.name)} />
      )}
      <Green showIcon={showIcon} onClick={toggleWindowSize} />
    </div>
  );
}
