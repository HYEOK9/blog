import { useState } from "react";
// store
import { IApp, appStore } from "@store/appStore";
// components
import NavIcon from "./NavIcon";

interface NavigatorsProps {
  app: IApp;
}

export default function Navigators({ app }: NavigatorsProps) {
  const [showIcon, setShowIcon] = useState(false);

  const { closeApp, hideApp } = appStore();
  const onClick = () => {};

  return (
    <div
      className="flex mr-2 w-fit"
      onMouseDown={(e) => e.stopPropagation()}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
    >
      <NavIcon
        type="red"
        onClick={() => closeApp(app.name)}
        className="bg-button-red border-button-red"
        showIcon={showIcon}
      />
      <NavIcon
        type="yellow"
        onClick={() => hideApp(app.name)}
        className="bg-button-yellow border-button-yellow"
        showIcon={showIcon}
      />
      <NavIcon
        type="green"
        onClick={onClick}
        className="bg-button-green border-button-green"
        showIcon={showIcon}
      />
    </div>
  );
}
