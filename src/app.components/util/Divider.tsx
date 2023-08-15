import { CSSProperties } from "react";

interface DividerProps {
  color?: string;
  spacing?: number;
  style?: CSSProperties;
}

export default function Divider({ color, spacing = 1, style }: DividerProps) {
  return (
    <div
      className={`bg-slate-500 my-${spacing}`}
      style={{ height: "0.5px", ...(color && { color }), ...style }}
    />
  );
}
