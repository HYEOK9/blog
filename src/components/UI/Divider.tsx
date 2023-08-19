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
      className={`flex justify-center items-center    
        ${vertical ? "h" : "w"}-full`}
    >
      <div
        className={`bg-slate-500 ${className}`}
        style={{
          width: !vertical ? "100%" : width,
          height: !vertical ? width : "100%",
          ...(color && { color }),
          ...style,
        }}
      />
    </div>
  );
}
