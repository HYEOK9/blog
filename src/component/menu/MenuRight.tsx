import { useState, useEffect, useRef } from "react";
// components
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
      <div onClick={() => setShow((prev) => !prev)} role="presentation">
        <Date />
      </div>
      {show && <SetDisplay />}
    </div>
  );
}
