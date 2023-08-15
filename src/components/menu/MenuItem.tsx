import { useState, ReactNode, CSSProperties } from "react";
// store
import { homeStore } from "@src/store/homeStore";

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
  const [hover, setHover] = useState(false);
  const { isMenuOpened } = homeStore();

  return (
    <div
      className="relative py-1.5 px-3 rounded text-white"
      style={{
        color: valid ? color : "#ffffff80",
        ...((active || hover) && { backgroundColor }),
        ...style,
      }}
      onMouseEnter={() => {
        if (!isMenuOpened || !valid) return;
        onMouseEnter?.();
        setHover(true);
      }}
      onMouseLeave={() => {
        onMouseLeave?.();
        setHover(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (!valid) return;
        onClick?.();
      }}
    >
      {children}
    </div>
  );
}
