import { Dispatch, SetStateAction } from "react";
import Draggable from "react-draggable";
// store
import type { IApp } from "@store/appStore";
// component
import Navigators from "../navigator/Navigators";

interface AppHeaderProps {
  app: IApp;
  headerColor?: string;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  width?: string | number;
}

export default function AppHeader({
  app,
  headerColor,
  position,
  setPosition,
  width,
}: AppHeaderProps) {
  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition({ x, y })}
      bounds={{ top: 32, right: 900, bottom: 560, left: -800 }}
      defaultPosition={position}
    >
      <div
        className="flex absolute h-10 p-2 items-center rounded-t-xl border border-slate-600 border-b-0"
        style={{ width, backgroundColor: headerColor, zIndex: app.zIndex }}
      >
        <Navigators app={app} />
      </div>
    </Draggable>
  );
}
