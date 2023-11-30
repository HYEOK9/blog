/* eslint-disable @next/next/no-img-element */
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundItemProps {
  image: { name: string; src: string };
}

export default function BackgroundItem({ image }: BackgroundItemProps) {
  const { setImage } = backgroundStore();

  return (
    <div key={image.name} className="text-center mb-5">
      <img
        className="w-52 h-52 rounded-lg mb-1 hover:border-4 hover:border-blue-main dark:hover:border-gray-300"
        src={image.src}
        alt={image.name}
        onClick={() => setImage(image)}
        role="presentation"
      />
      <span>{image.name}</span>
    </div>
  );
}
