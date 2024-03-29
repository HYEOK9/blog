import { useState, useRef, useLayoutEffect, memo } from "react";
// store
import { backgroundState, backgroundStore } from "@store/backgroundStore";
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
    const img = new Image();
    const localImage = JSON.parse(localStorage.getItem("background"))
      .state as backgroundState;

    if (localImage.src !== src) {
      setImage(localImage);
      img.src = localImage.src;
    } else {
      img.src = src;
    }

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
