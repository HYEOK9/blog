import { useEffect, useRef, memo, Fragment } from "react";
// lib
import { dockIconFocus } from "@lib/dockIconFocus";
// components
import { DockIcons } from "@component/dock/DockIconMap";
import Divider from "@component/UI/Divider";

function Dock() {
  const iconRef = useRef<HTMLImageElement[]>([]);

  const mouseOver = (e: MouseEvent, idx: number) =>
    dockIconFocus(e.target as HTMLElement, idx, iconRef);

  const mouseLeave = () => {
    iconRef.current.forEach((item) => {
      // eslint-disable-next-line no-param-reassign
      item.style.transform = "scale(1) translateY(0px)";
    });
  };

  useEffect(() => {
    const currentRef = iconRef.current;

    currentRef.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => mouseOver(e, index));
      item.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      currentRef.forEach((item, index) => {
        item.removeEventListener("mouseover", (e) => mouseOver(e, index));
        item.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <div className="flex h-full relative items-center justify-between px-1 pt-1 pb-2 rounded-2xl bg-light-bg dark:bg-navy-400 border border-slate-600 z-dock backdrop-blur-sm transition-all duration-500">
      {DockIcons.map((Icon, idx) => (
        <Fragment key={Icon.key}>
          <Icon.Component
            ref={(el: HTMLImageElement) => (iconRef.current[idx] = el)}
          />
          {idx === 0 && (
            <Divider vertical className="!h-4/5 mx-1.5" width={1} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default memo(Dock);
