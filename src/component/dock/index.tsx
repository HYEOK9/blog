import { useEffect, useRef, memo, Fragment, useCallback } from "react";
// constants
import { MAX_HEIGHT, MIN_HEIGHT, STEP } from "@constant/style";
// components
import { DockIcons } from "@component/dock/DockIconMap";
import Divider from "@component/UI/Divider";

function Dock() {
  const dockRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement[]>([]);
  const aniIdRef = useRef<number | null>(null);

  const updateHeight = useCallback((nextHeights: number[]) => {
    if (aniIdRef.current) window.cancelAnimationFrame(aniIdRef.current);

    aniIdRef.current = null;
    let isAllDone = true;
    let newHeight = 0;

    for (let i = 0; i < iconRef.current.length; i += 1) {
      const curHeight = iconRef.current[i].getBoundingClientRect().height;
      const goalHeight = nextHeights[i];
      iconRef.current[i].style.marginBottom = `${curHeight - MIN_HEIGHT}px`;

      if (goalHeight < curHeight) {
        newHeight = Math.max(curHeight - STEP, goalHeight);
        isAllDone = false;
      } else if (goalHeight > curHeight) {
        newHeight = Math.min(curHeight + STEP, goalHeight);
        isAllDone = false;
      } else {
        newHeight = goalHeight;
      }

      iconRef.current[i].style.height = `${newHeight}px`;
    }

    if (!isAllDone) {
      aniIdRef.current = window.requestAnimationFrame(() => {
        updateHeight(nextHeights);
      });
    }
  }, []);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (!dockRef.current) return;

      const dockLeft = dockRef.current.getBoundingClientRect().left;
      const x = e.clientX - dockLeft;
      const nextHeights: number[] = [];

      iconRef.current.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const center = rect.left - dockLeft + rect.height / 2;
        const dist = Math.abs(center - x);

        nextHeights.push(Math.max(MAX_HEIGHT - dist / 4, MIN_HEIGHT));
      });

      updateHeight(nextHeights);
    };

    const mouseLeave = () => {
      const nextHeights: number[] = [];
      iconRef.current.forEach(() => {
        nextHeights.push(MIN_HEIGHT);
      });
      updateHeight(nextHeights);
    };

    dockRef.current?.addEventListener("mousemove", mouseMove);
    dockRef.current?.addEventListener("mouseleave", mouseLeave);
    return () => {
      dockRef.current?.removeEventListener("mousemove", mouseMove);
      dockRef.current?.removeEventListener("mouseleave", mouseLeave);
    };
  }, [updateHeight]);

  return (
    <div
      ref={dockRef}
      className="flex h-full relative items-center justify-between px-1 pt-1 pb-2 rounded-2xl bg-light-bg dark:bg-navy-400 border border-slate-600 z-dock backdrop-blur-sm transition-all duration-300"
    >
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
