import { useState } from "react";
// store
import { Iapp, appStore } from "@store/appStore";
// components
import NavIcon from "./NavIcon";

interface NavigatorsProps {
  app: Iapp;
}

export default function Navigators({ app }: NavigatorsProps) {
  const [showIcon, setShowIcon] = useState(false);

  const { closeApp } = appStore();
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
        style={{
          backgroundColor: "#ff5f56",
          borderColor: "#e0443e",
        }}
        showIcon={showIcon}
      />
      <NavIcon
        type="yellow"
        onClick={onClick}
        style={{
          backgroundColor: "#ffbd2e",
          borderColor: "#dea123",
        }}
        showIcon={showIcon}
      />
      <NavIcon
        type="green"
        onClick={onClick}
        style={{
          backgroundColor: "#27c93f",
          borderColor: "#1aab29",
        }}
        showIcon={showIcon}
      />
    </div>
  );
}
