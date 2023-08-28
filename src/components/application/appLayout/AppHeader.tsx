import { Dispatch, SetStateAction } from "react";
import Draggable from "react-draggable";
// store
import type { Iapp } from "@store/appStore";
// component
import Navigators from "../navigator/Navigators";

interface AppHeaderProps {
  app: Iapp;
  headerColor?: string;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
}

export default function AppHeader({
  app,
  headerColor = "var(--color-navy-deep)",
  position,
  setPosition,
}: AppHeaderProps) {
  return (
    <Draggable
      onDrag={(_, { x, y }) => setPosition({ x, y })}
      bounds={{ top: 32 }}
      defaultPosition={position}
    >
      <div
        className="flex absolute w-full h-10 p-2 items-center overflow-hidden rounded-t-xl border border-slate-600 border-b-0"
        style={{ backgroundColor: headerColor, zIndex: app.zIndex }}
      >
        <Navigators app={app} />
      </div>
    </Draggable>
  );
}
