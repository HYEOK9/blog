import Image, { StaticImageData } from "next/image";
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundItemProps {
  image: { name: string; src: StaticImageData };
}

export default function BackgroundItem({ image }: BackgroundItemProps) {
  const { setImage } = backgroundStore();

  return (
    <div key={image.name} className="text-center mb-5">
      <Image
        className="w-52 h-52 rounded-lg mb-1 hover:border-4 hover:border-blue-main dark:hover:border-gray-300"
        src={image.src}
        alt={image.name}
        onClick={() => setImage(image)}
        priority
      />
      <span>{image.name}</span>
    </div>
  );
}
