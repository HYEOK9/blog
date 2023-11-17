import Image, { StaticImageData } from "next/image";
// constants
import { OPEN_WINDOW_CONFIG } from "@constant/link";

interface StackIconProps {
  src: StaticImageData | string;
  alt: string;
  link?: string;
  className?: string;
}

export default function StackIcon({
  src,
  alt,
  link,
  className = "",
}: StackIconProps) {
  const route = () => {
    if (!link) return;
    window.open(link, "_blank", OPEN_WINDOW_CONFIG);
  };

  return (
    <div className="relative">
      <Image
        className={`w-16 mx-2 transition-all hover:scale-105 active:translate-y-1 rounded-lg peer
      ${link ? "cursor-pointer" : ""} 
      ${className}
      `}
        src={src}
        alt={alt}
        onClick={route}
        priority
      />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 py-1 px-2 bg-black text-sm text-center text-white rounded border border-gray-700 whitespace-nowrap invisible peer-hover:visible">
        {alt}
      </span>
    </div>
  );
}
