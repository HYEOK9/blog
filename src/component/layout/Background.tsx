import { useState, useEffect, useRef, memo, useLayoutEffect } from "react";
// store
import { backgroundStore } from "@store/backgroundStore";
// constants
import { backgroundList } from "@constant/background";
// components
import DraggableBox from "@component/UI/DragBox";
import ContextMenu from "@component/menu/ContextMenu";
import HomeLoading from "./HomeLoading";

function Background() {
  const [loading, setLoading] = useState(true);
  const bgRef = useRef<HTMLDivElement>(null);

  const { src, setImage } = backgroundStore();

  useLayoutEffect(() => {
    const storedValue = window.localStorage.getItem("background");
    if (storedValue) {
      setImage(JSON.parse(storedValue));
    }
  }, [setImage]);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      bgRef.current.style.backgroundImage = `url(${img.src})`;
      setTimeout(() => setLoading(false), 2500);
    };
    img.onerror = () => {
      setLoading(false);
      setImage(backgroundList[0]);
    };
  }, [src, setImage]);

  return (
    <>
      {loading && <HomeLoading />}
      <div
        ref={bgRef}
        className="fixed w-full h-screen bg-full transition-all duration-500 animate-homeFade"
      >
        <DraggableBox />
        <ContextMenu />
      </div>
    </>
  );
}

export default memo(Background);
