// style
import { zIndex } from "@constants/zIndex";
// components
import MenuLeft from "@components/menu/MenuLeft";
import MenuRight from "@components/menu/MenuRight";

export default function Header() {
  return (
    <div
      className="flex w-full justify-between items-center h-8 pl-1.5 pr-3 text-sm whitespace-nowrap"
      style={{ backgroundColor: "rgba(27,27,29,0.3)", zIndex: zIndex.header }}
    >
      <MenuLeft />
      <MenuRight />
    </div>
  );
}
