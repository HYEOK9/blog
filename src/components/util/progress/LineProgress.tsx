interface LineProgressProps {
  color?: string;
  backgroundColor?: string;
  absolute?: boolean;
}

export default function LineProgress({
  color,
  backgroundColor,
  absolute = false,
}: LineProgressProps) {
  return (
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
  );
}
