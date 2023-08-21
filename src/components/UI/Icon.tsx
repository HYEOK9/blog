import { forwardRef, CSSProperties, ForwardedRef } from "react";
import Image, { StaticImageData } from "next/image";
// store
import { cursorStore } from "@store/cursorStore";

interface IconProps {
  src: StaticImageData;
  title?: string;
  width: number;
  height: number;
  style?: CSSProperties;
  onClick?: () => void;
}

function Icon(
  { src, title, width = 50, height = 50, style, onClick }: IconProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  const { isDragging } = cursorStore();

  return (
    <div
      className="relative group hover:mx-3 transition-all"
      style={{
        transition: "0.2s",
        transformOrigin: "50% 100%",
      }}
    >
      {title && !isDragging && (
        <span
          className="absolute -top-20 left-1/2 -translate-x-1/2 py-1 px-2 text-sm text-white rounded border border-gray-700 invisible group-hover:visible"
          style={{ backgroundColor: "var(--color-navy)" }}
        >
          {title}
        </span>
      )}
      <Image
        className="transition-all"
        ref={ref}
        src={src}
        alt={src.src}
        width={width}
        height={height}
        onClick={onClick}
        style={style}
        priority
      />
    </div>
  );
}

export default forwardRef(Icon);
