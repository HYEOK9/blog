import { CSSProperties } from "react";

interface DividerProps {
  color?: string;
  style?: CSSProperties;
}

export default function Divider({ color, style }: DividerProps) {
  return (
    <div
      className="bg-slate-500"
      style={{ height: "0.5px", ...(color && { color }), ...style }}
    />
  );
}
