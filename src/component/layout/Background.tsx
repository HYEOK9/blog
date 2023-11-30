/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, memo } from "react";
// store
import { backgroundStore } from "@store/backgroundStore";
// components
import DraggableBox from "@component/UI/DragBox";
import ContextMenu from "@component/menu/ContextMenu";
import HomeLoading from "./HomeLoading";

function Background() {
  const [loading, setLoading] = useState(true);

  const { name, src, setImage } = backgroundStore();

  useEffect(() => {
    const storedValue = window.localStorage.getItem("background");

    if (storedValue) {
      setImage(JSON.parse(storedValue));
    }
  }, [setImage]);

  return (
    <>
      {loading && <HomeLoading />}

      <div className="w-full h-screen fixed">
        <img
          className="bg-cover animate-homeFade z-background object-fill"
          src={src}
          alt={name}
          onLoad={() => setTimeout(() => setLoading(false), 2500)}
          onError={() => setLoading(false)}
          draggable={false}
          role="presentation"
        />
        <DraggableBox />
        <ContextMenu />
      </div>
    </>
  );
}

export default memo(Background);
