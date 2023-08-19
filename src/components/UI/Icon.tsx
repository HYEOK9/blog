import Image, { StaticImageData } from "next/image";
// store
import { cursorStore } from "@store/cursorStore";
import { CSSProperties } from "react";

interface IconProps {
  src: StaticImageData;
  title?: string;
  width: number;
  height: number;
  style?: CSSProperties;
  onClick?: () => void;
}

export default function Icon({
  src,
  title,
  width = 50,
  height = 50,
  style,
  onClick,
}: IconProps) {
  const { isDragging } = cursorStore();

  return (
    <div className="relative group">
      {title && !isDragging && (
        <span
          className="absolute -top-12 left-1/2 -translate-x-1/2 py-1 px-2 text-sm text-white rounded border border-gray-700 invisible group-hover:visible"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          {title}
        </span>
      )}
      <Image
        src={src}
        alt={src.src}
        width={width}
        height={height}
        onClick={onClick}
        style={style}
      />
    </div>
  );
}
