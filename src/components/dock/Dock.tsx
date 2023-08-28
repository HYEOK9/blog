import { useEffect, useRef, memo, Fragment } from "react";
// style
import { zIndex } from "@constants/zIndex";
// lib
import { dockIconFocus } from "@lib/dockIconFocus";
// components
import { Icons } from "@components/dock/Icons";
import Divider from "@components/UI/Divider";

function Dock() {
  const iconRef = useRef<HTMLImageElement[]>([]);

  const mouseOver = (e: MouseEvent, idx: number) =>
    dockIconFocus(e.target as HTMLElement, idx, iconRef);

  const mouseLeave = () => {
    iconRef.current.forEach((item) => {
      item.style.transform = "scale(1) translateY(0px)";
    });
  };

  useEffect(() => {
    iconRef.current.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => mouseOver(e, index));
      item.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      iconRef.current.forEach((item, index) => {
        item.removeEventListener("mouseover", (e) => mouseOver(e, index));
        item.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="flex h-full relative items-center justify-between px-1 pt-1 pb-2 rounded-2xl border border-slate-600 backdrop-blur-sm transition-all"
      style={{
        backgroundColor: "var(--color-navy-light)",
        zIndex: zIndex.dock,
      }}
    >
      {Icons.map((Icon, idx) => (
        <Fragment key={Icon.key}>
          <Icon.Component
            ref={(el: HTMLImageElement) => (iconRef.current[idx] = el)}
          />
          {idx === 0 && (
            <Divider vertical className="!h-4/5 ml-2 mr-1" width={1} />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default memo(Dock);
