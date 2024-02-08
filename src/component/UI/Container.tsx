import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}

export default function Container({ children, color, style }: ContainerProps) {
  return (
    <div
      className="flex flex-col p-1 animate-fade duration-500 bg-light-bg dark:bg-navy-500 text-gray-900 dark:text-white border border-slate-600 rounded-md text-sm font-normal backdrop-blur-2xl"
      style={{ backgroundColor: color, ...style }}
    >
      {children}
    </div>
  );
}
