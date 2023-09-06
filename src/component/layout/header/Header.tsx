import { memo } from "react";
// components
import MenuLeft from "@component/menu/MenuLeft";
import MenuRight from "@component/menu/MenuRight";

function Header() {
  return (
    <div className="flex fixed w-full justify-between items-center h-8 pl-1.5 pr-3 text-sm bg-header">
      <MenuLeft />
      <MenuRight />
    </div>
  );
}

export default memo(Header);
