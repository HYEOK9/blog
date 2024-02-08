import { useState, useEffect, useRef } from "react";
// constants
import { DISPLAYS } from "@constant/menu";
// components
import ArrowDown from "/public/icon/down-arrow-icon.svg";
import ArrowRight from "/public/icon/right-arrow-icon.svg";
import CheckIcon from "/public/icon/check-icon.svg";

interface DisplayModalOptionsProps {
  show: boolean;
}

export default function DisplayModalOptions({
  show,
}: DisplayModalOptionsProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [displayName, setDisplayName] = useState<string>(DISPLAYS[0]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!show && inputRef.current?.checked) {
      inputRef.current?.click();
    }
  }, [show]);

  const ArrowIcon = collapsed ? ArrowDown : ArrowRight;

  return (
    <div className="collapse">
      <input
        type="checkbox"
        ref={inputRef}
        checked={collapsed}
        onChange={({ target: { checked } }) => setCollapsed(checked)}
      />

      <div className="collapse-title flex flex-col !px-4">
        <div className="flex justify-between items-center">
          <span className="font-semibold">디스플레이</span>
          <ArrowIcon className="w-[10px] h-[10px] fill-gray-500 dark:fill-gray-300" />
        </div>
        <span className="text-xs text-gray-700 dark:text-gray-400 mb-3">
          {displayName}
        </span>
      </div>

      <div className="collapse-content !rounded-none border-t border-b border-gray-400 dark:border-gray-500 bg-slate-300 dark:bg-white-transparent-deep backdrop-blur-md">
        {DISPLAYS.map((display) => (
          <button
            key={display}
            className="relative w-full py-[1px] px-10 text-sm hover:bg-white-transparent-deep"
            onClick={() => setDisplayName(display)}
            type="button"
          >
            {display === displayName && (
              <CheckIcon className="absolute w-4 h-4 fill-black dark:fill-gray-100 left-5" />
            )}
            {display}
            <br />
          </button>
        ))}
      </div>
    </div>
  );
}
