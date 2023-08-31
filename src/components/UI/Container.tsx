import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}

export default function Container({ children, color, style }: ContainerProps) {
  return (
    <div
      className="flex flex-col p-1 bg-navy-500 border border-slate-600 rounded-md text-sm font-normal backdrop-blur-xl"
      style={{ backgroundColor: color, ...style }}
    >
      {children}
    </div>
  );
}
