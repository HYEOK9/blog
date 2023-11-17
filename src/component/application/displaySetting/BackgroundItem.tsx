import Image, { StaticImageData } from "next/image";
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundItemProps {
  image: { name: string; src: StaticImageData };
}

export default function BackgroundItem({ image }: BackgroundItemProps) {
  const { setImage } = backgroundStore();

  return (
    <button
      key={image.name}
      className="flex flex-col items-center mb-4"
      onClick={() => setImage(image)}
      type="button"
    >
      <Image
        className="w-52 h-52 rounded-lg cursor-pointer hover:border-4 hover:border-blue-main box-border"
        src={image.src}
        alt={image.name}
        priority
      />
      <span className="mt-1">{image.name}</span>
    </button>
  );
}
