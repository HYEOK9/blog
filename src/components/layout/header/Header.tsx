import { memo } from "react";
// style
import { zIndex } from "@constants/zIndex";
// components
import MenuLeft from "@components/menu/MenuLeft";
import MenuRight from "@components/menu/MenuRight";

function Header() {
  return (
    <div
      className="flex fixed w-full justify-between items-center h-8 pl-1.5 pr-3 text-sm"
      style={{ backgroundColor: "rgba(27,27,29,0.3)", zIndex: zIndex.header }}
    >
      <MenuLeft />
      <MenuRight />
    </div>
  );
}

export default memo(Header);
