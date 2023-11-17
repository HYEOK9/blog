interface IconInCircleProps {
  Icon: any;
  onClick?: () => void;
  id?: string;
  text?: string;
  isOn?: boolean;
  className?: string;
}

function IconInCircle({
  Icon,
  onClick,
  id,
  text,
  isOn,
  className,
}: IconInCircleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        id={id}
        className={`flex items-center justify-center w-9 h-9 rounded-full duration-500 bg-slate-400 dark:bg-white-transparent ${className}`}
        onClick={onClick}
        role="presentation"
      >
        <Icon className="w-5 h-5 fill-white" />
      </div>
      <span className="text-[11px] my-1 leading-none">{text}</span>
      <span className="text-[11px] leading-none">
        {isOn ? `${text === "Night Shift" ? "내일까지 " : ""}켬` : "끔"}
      </span>
    </div>
  );
}

export default IconInCircle;
