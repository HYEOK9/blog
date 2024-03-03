import { forwardRef, type ForwardedRef } from "react";
import Image, { type StaticImageData } from "next/image";
// store
import { appStore } from "@store/appStore";
import { cursorStore } from "@store/cursorStore";

interface IconProps {
  src: StaticImageData;
  title: string;
  onClick?: () => void;
}

function DockIcon(
  { src, title, onClick }: IconProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  const { openApp, setCurApp, allApps } = appStore();
  const { isDragging } = cursorStore();

  return (
    <div
      ref={ref}
      className="relative w-auto h-16 origin-bottom aspect-square group"
    >
      {title && !isDragging && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 py-1 px-2 bg-light-bg dark:bg-navy-500 text-sm text-center text-black dark:text-white rounded border border-gray-700 whitespace-nowrap invisible group-hover:visible">
          {title}
        </span>
      )}
      <Image
        src={src}
        alt={src.src}
        fill
        sizes="100%"
        onClick={() => {
          if (title === "Finder") {
            openApp("Display Setting");
            setCurApp("Display Setting");
            return;
          }
          onClick?.();
          openApp(title);
          setCurApp(title);
        }}
        priority
      />
      {allApps.some((app) => app.open && app.name === title) && (
        <div className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full -mb-0.5 bg-black dark:bg-gray-400" />
      )}
    </div>
  );
}

export default forwardRef(DockIcon);
