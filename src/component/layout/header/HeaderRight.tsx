import { useState, useEffect, useRef } from "react";
// components
import DisplayIcon from "/public/icon/mac-display.svg";
import Date from "@component/UI/Date";
import SetDisplayModal from "@component/modal/SetDisplayModal";

export default function MenuRight() {
  const [show, setShow] = useState(false);
  const rightMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!rightMenuRef.current?.contains(e.target as Element)) {
        setShow(false);
      }
    };

    window.addEventListener("mousedown", clickOutside);

    return () => window.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <div className="relative pr-3" ref={rightMenuRef}>
      <div
        className="flex items-center"
        onClick={() => setShow((prev) => !prev)}
        role="presentation"
      >
        <DisplayIcon className="w-5 h-5 dark:fill-white mr-3" />
        <Date />
      </div>
      <SetDisplayModal show={show} setShow={setShow} />
    </div>
  );
}
