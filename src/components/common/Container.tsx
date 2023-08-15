import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style?: CSSProperties;
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div
      className="flex flex-col p-2 border border-slate-600 rounded-md text-sm font-normal"
      style={{ backgroundColor: "rgba(52, 52, 66, 0.8)", ...style }}
    >
      {children}
    </div>
  );
}
