import React, { useEffect, useRef } from "react";
import ModalPortal from "./portal";

interface SingleBtnModalProps {
  open: boolean;
  onClose: () => void;
  btnText: string;
  btnHandler: () => void;
  closeOnClickOutside?: boolean;
  className?: string;
  children: React.ReactNode;
}

function SingleBtnModal({
  open,
  onClose,
  btnText,
  btnHandler,
  closeOnClickOutside = false,
  className = "",
  children,
}: SingleBtnModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnClickOutside) return;

    const clickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!contentRef.current?.contains(target)) {
        onClose();
      }
    };

    window.addEventListener("mousedown", clickOutside);

    return () => window.removeEventListener("mousedown", clickOutside);
  }, [closeOnClickOutside, onClose]);

  if (!open) return null;

  return (
    <ModalPortal>
      <div
        className={`w-screen h-screen absolute top-0 left-0 flex justify-center items-center bg-black bg-opacity-30 z-modal ${className}`}
      >
        <div
          className="flex flex-col justify-between items-center w-72 h-32 border border-slate-600 bg-white dark:bg-navy-600 rounded-lg"
          ref={contentRef}
        >
          <div className="w-full h-full flex justify-center items-center py-2 px-5">
            {children}
          </div>
          <button
            className="p-2 text-blue-main dark:text-white cursor-pointer"
            onClick={btnHandler}
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
    </ModalPortal>
  );
}

export default SingleBtnModal;
