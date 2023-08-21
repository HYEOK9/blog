import { MutableRefObject } from "react";

export const dockIconFocus = (
  target: HTMLElement,
  index: number,
  ref: MutableRefObject<HTMLElement[]>
) => {
  const previous2 = index - 2;
  const previous = index - 1;
  const next = index + 1;
  const next2 = index + 2;

  if (previous == -1) {
    target.style.transform = "scale(1.4) translateY(-16px)";
  } else if (next == ref.current?.length) {
    target.style.transform = "scale(1.4) translateY(-16px)";
  } else {
    target.style.transform = "scale(1.4) translateY(-16px)";

    if (ref.current?.[previous2])
      ref.current[previous2].style.transform = "scale(1.1) translateY(-6px)";
    if (ref.current?.[previous])
      ref.current[previous].style.transform = "scale(1.2) translateY(-11px)";
    if (ref.current?.[next])
      ref.current[next].style.transform = "scale(1.2) translateY(-11px)";
    if (ref.current?.[next2])
      ref.current[next2].style.transform = "scale(1.1) translateY(-6px)";
  }
};
