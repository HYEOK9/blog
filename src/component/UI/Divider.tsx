import { CSSProperties } from "react";

interface DividerProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
  vertical?: boolean;
  width?: number;
}

export default function Divider({
  color,
  className,
  style,
  vertical = false,
  width = 0.5,
}: DividerProps) {
  return (
    <div
      className={`flex ${vertical ? "w-fit h" : "h-fit w"}-full justify-center`}
    >
      <div
        className={`bg-slate-500 ${className} self-center`}
        style={{
          width: !vertical ? "100%" : width,
          height: !vertical ? width : "100%",
          ...(color && { backgroundColor: color }),
          ...style,
        }}
      />
    </div>
  );
}
