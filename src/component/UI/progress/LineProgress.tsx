interface LineProgressProps {
  color?: string;
  backgroundColor?: string;
  absolute?: boolean;
  fullScreen?: boolean;
}

export default function LineProgress({
  color,
  backgroundColor,
  absolute = false,
  fullScreen = false,
}: LineProgressProps) {
  return (
    <div
      className={
        fullScreen ? "flex w-full h-full justify-center items-center" : ""
      }
    >
      <div
        className={`h-1 w-48 mt-10 rounded bg-neutral-600 ${
          absolute ? "absolute" : ""
        }`}
        style={{ backgroundColor: `${backgroundColor} !important` }}
      >
        <div
          className="h-1 rounded bg-white animate-homeProgress"
          style={{ backgroundColor: `${color} !important` }}
        />
      </div>
    </div>
  );
}
