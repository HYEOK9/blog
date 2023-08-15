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
      className={`mb-6 h-1 w-48 bg-neutral-600 mt-10 ${
        absolute ? "absolute" : ""
      }`}
      style={{ backgroundColor: `${backgroundColor} !important` }}
    >
      <div
        className="h-1 bg-white animate-homeProgress"
        style={{ backgroundColor: `${color} !important` }}
      />
    </div>
  );
}
