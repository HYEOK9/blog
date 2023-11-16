import { useState, useEffect, useRef } from "react";
// components
import DisplayIcon from "/public/icon/mac-display.svg";
import Date from "@component/UI/Date";
import SetDisplay from "./SetDisplay";

export default function MenuRight() {
  const [show, setShow] = useState(false);
  const rightMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseDown = (e: MouseEvent) => {
      const target = e.target as Element;

      if (target.contains(rightMenuRef.current)) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", mouseDown);

    return () => window.removeEventListener("mousedown", mouseDown);
  }, []);

  return (
    <div className="relative" ref={rightMenuRef}>
      <div
        className="flex items-center"
        onClick={() => setShow((prev) => !prev)}
        role="presentation"
      >
        <DisplayIcon className="w-5 h-5 dark:fill-white mr-3" />
        <Date />
      </div>
      <SetDisplay show={show} setShow={setShow} />
    </div>
  );
}
