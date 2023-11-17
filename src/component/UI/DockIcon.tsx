import { forwardRef, ForwardedRef } from "react";
import Image, { StaticImageData } from "next/image";
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
    <div className="relative w-16 h-16 group hover:!mx-3 transition-all origin-bottom">
      {title && !isDragging && (
        <span className="absolute -top-20 left-1/2 -translate-x-1/2 py-1 px-2 bg-gray-300 dark:bg-navy-500 text-sm text-center dark:text-white rounded border border-gray-700 whitespace-nowrap invisible group-hover:visible">
          {title}
        </span>
      )}
      <Image
        className="transition-all"
        ref={ref}
        src={src}
        alt={src.src}
        fill
        sizes="100%"
        onClick={() => {
          if (onClick) onClick();
          else {
            openApp(title);
            setCurApp(title);
          }
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
