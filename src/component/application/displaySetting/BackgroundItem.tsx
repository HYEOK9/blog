import { useState } from "react";
import Image from "next/image";
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundItemProps {
  image: { name: string; src: string };
}

export default function BackgroundItem({ image }: BackgroundItemProps) {
  const [load, setLoad] = useState(false);
  const { setImage } = backgroundStore();

  const skeleton = load ? "" : "animate-pulse bg-gray-700";

  return (
    <div key={image.name} className="text-center mb-5">
      <Image
        width={208}
        height={208}
        className={`w-52 h-52 rounded-lg mb-1 border-4 border-transparent hover:border-blue-main dark:hover:border-gray-300 ${skeleton}`}
        src={image.src}
        alt={image.name}
        onClick={() => setImage(image)}
        onLoad={() => setLoad(true)}
        priority
      />
      <span>{image.name}</span>
    </div>
  );
}
