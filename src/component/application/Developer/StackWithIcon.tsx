import { StaticImageData } from "next/image";
import StackIcon from "@component/UI/StackIcon";

interface StackWithIconProps {
  data: ReadonlyArray<{
    name: string;
    icon: StaticImageData;
    link?: string;
    props?: { [key: string]: any };
  }>;
}

export default function StackWithIcon({ data }: StackWithIconProps) {
  return (
    <div className="flex items-center mb-5">
      {data.map(({ name, icon, link, props }) => (
        <StackIcon key={name} src={icon} alt={name} link={link} {...props} />
      ))}
    </div>
  );
}
