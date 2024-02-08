import { ReactNode, CSSProperties } from "react";

interface MenuItemProps {
  children: ReactNode;
  active?: boolean;
  valid?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
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
  backgroundColor = "var(--color-white-transparent)",
  style,
}: MenuItemProps) {
  return (
    <div
      className={`relative py-1.5 px-3 rounded ${
        valid
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 dark:text-gray-400"
      } text-start whitespace-nowrap`}
      style={{
        ...(active && { backgroundColor, color: "#fff" }),
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
      role="presentation"
    >
      {children}
    </div>
  );
}
