import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

export default function Header() {
  return (
    <div
      className="flex fixed justify-between w-screen h-8 items-center px-3 text-sm whitespace-nowrap"
      style={{ backgroundColor: "rgba(27,27,29,0.3)" }}
    >
      <MenuLeft />
      <MenuRight />
    </div>
  );
}
