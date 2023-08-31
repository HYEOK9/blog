import Red from "/public/application/navigator/red.svg";
import Yellow from "/public/application/navigator/yellow.svg";
import Green from "/public/application/navigator/green.svg";

interface NavIconProps {
  type: "red" | "yellow" | "green";
  onClick: () => void;
  className?: string;
  showIcon?: boolean;
}

export default function NavIcon({
  type,
  onClick,
  className,
  showIcon = true,
}: NavIconProps) {
  return (
    <button
      className={`flex w-4 h-4 mx-1 justify-center items-center rounded-full ${className}`}
      onClick={onClick}
    >
      {showIcon &&
        (type === "red" ? <Red /> : type === "yellow" ? <Yellow /> : <Green />)}
    </button>
  );
}
