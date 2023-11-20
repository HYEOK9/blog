import { useEffect, memo, Dispatch, SetStateAction } from "react";
import Image from "next/image";
// components
import DraggableBox from "@component/UI/DragBox";
import ContextMenu from "@component/menu/ContextMenu";
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

function Background({ setLoading }: BackgroundProps) {
  const { name, src, setImage } = backgroundStore();

  useEffect(() => {
    const storedValue = window.localStorage.getItem("background");

    if (storedValue) {
      setImage(JSON.parse(storedValue));
    }
  }, [setImage]);

  return (
    <>
      <Image
        className="fixed w-full h-screen bg-cover animate-homeFade z-background object-fill"
        src={src}
        alt={name}
        onLoad={() => setTimeout(() => setLoading(false), 2500)}
        onError={() => setLoading(false)}
        draggable={false}
        priority
      />
      <DraggableBox />
      <ContextMenu />
    </>
  );
}

export default memo(Background);