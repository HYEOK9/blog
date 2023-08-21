import { ReactNode, CSSProperties } from "react";

interface MenuItemProps {
  children: ReactNode;
  active?: boolean;
  valid?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  color?: string;
  backgroundColor?: string;
  style?: CSSProperties;
}

export default function MenuItem({
  children,
  active,
  valid = true,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color = "#fff",
  backgroundColor = "rgba(255,255,255,0.1)",
  style,
}: MenuItemProps) {
  return (
    <div
      className="relative py-1.5 px-3 rounded text-white"
      style={{
        color: valid ? color : "#ffffff80",
        ...(active && { backgroundColor }),
        ...style,
      }}
      onMouseEnter={() => {
        if (!valid) return;
        onMouseEnter?.();
      }}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        if (!valid) return;
        e.stopPropagation();
        onClick?.();
      }}
    >
      {children}
    </div>
  );
}
