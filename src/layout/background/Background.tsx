import { StaticImageData } from "next/image";

interface BackgroundProps {
  image: StaticImageData;
}

export default function Background({ image }: BackgroundProps) {
  return (
    <div
      className="fixed w-screen h-screen animate-fade bg-cover -z-50"
      style={{
        backgroundImage: `url(${image.src})`,
        willChange: "background-image",
        transition: "background-image 0.15s ease-in 0s",
      }}
    />
  );
}
