// components
import Menus from "./Menus";

export default function Header() {
  return (
    <div
      className="flex items-center px-3 text-sm"
      style={{ backgroundColor: "rgba(27,27,29,0.3)" }}
    >
      <Menus />
    </div>
  );
}
