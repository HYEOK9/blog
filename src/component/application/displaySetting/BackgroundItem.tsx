import { useCallback } from "react";
import Image, { type ImageLoaderProps } from "next/image";
import qs from "query-string";
import { backgroundStore } from "@store/backgroundStore";

interface BackgroundItemProps {
  image: { name: string; src: string };
}

export default function BackgroundItem({ image }: BackgroundItemProps) {
  const { setImage } = backgroundStore();

  const loader = useCallback(({ src }: ImageLoaderProps) => {
    const queryData = qs.stringify({ w: 208, q: 50 });

    return `${src}?${queryData}`;
  }, []);

  return (
    <div key={image.name} className="text-center mb-5">
      <Image
        loader={loader}
        width={208}
        height={208}
        className="h-52 rounded-lg mb-1 border-4 border-transparent hover:border-blue-main dark:hover:border-gray-300"
        src={image.src}
        alt={image.name}
        onClick={() => setImage(image)}
        priority
        loading="eager"
      />
      <span>{image.name}</span>
    </div>
  );
}
