// components
import Menus from "./Menus";

export default function Header() {
  return (
    <div
      className="flex fixed w-screen h-8 items-center px-3 text-sm whitespace-nowrap"
      style={{ backgroundColor: "rgba(27,27,29,0.3)" }}
    >
      <Menus />
    </div>
  );
}
