import { useState } from "react";
// store
import { IApp, appStore } from "@store/appStore";
// components
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";

interface NavigatorsProps {
  app: IApp;
  toggleWindowSize: () => void;
}

export default function Navigators({ app, toggleWindowSize }: NavigatorsProps) {
  const [showIcon, setShowIcon] = useState(false);

  const { closeApp, hideApp } = appStore();

  return (
    <div
      className="flex"
      onMouseDown={(e) => e.stopPropagation()}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      role="presentation"
    >
      <Red showIcon={showIcon} onClick={() => closeApp(app.name)} />
      <Yellow showIcon={showIcon} onClick={() => hideApp(app.name)} />
      <Green showIcon={showIcon} onClick={toggleWindowSize} />
    </div>
  );
}
