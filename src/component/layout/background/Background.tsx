import { memo, Dispatch, SetStateAction } from "react";
import Image, { StaticImageData } from "next/image";
// components
import DraggableBox from "@component/util/dragBox/DragBox";
import ContextMenu from "@component/util/ContextMenu";

interface BackgroundProps {
  image: StaticImageData;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

function Background({ image, setLoading }: BackgroundProps) {
  return (
    <>
      <Image
        className="fixed w-full h-screen bg-cover animate-homeFade z-background"
        src={image}
        alt={image.src}
        style={{
          willChange: "background-image",
          transition: "background-image 0.15s ease-in 0s",
        }}
        onLoad={() => setTimeout(() => setLoading(false), 2500)}
        onError={() => setLoading(false)}
        draggable={false}
      />
      <DraggableBox />
      <ContextMenu />
    </>
  );
}

export default memo(Background);
