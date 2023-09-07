import { StaticImageData } from "next/image";
import StackIcon from "@component/UI/StackIcon";

interface StackWithIconProps {
  data: ReadonlyArray<{
    name: string;
    src: StaticImageData;
    link?: string;
    props?: { [key: string]: any };
  }>;
}

export default function StackWithIcon({ data }: StackWithIconProps) {
  return (
    <div className="flex items-center mb-5">
      {data.map(({ name, src, link, props }) => (
        <StackIcon key={name} src={src} alt={name} link={link} {...props} />
      ))}
    </div>
  );
}
