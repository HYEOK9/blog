import { memo } from "react";
// components
import MenuLeft from "@component/menu/MenuLeft";
import MenuRight from "@component/menu/MenuRight";

function Header() {
  return (
    <div className="flex fixed w-full justify-between items-center h-8 text-sm bg-light-bg dark:bg-header-dark duration-500">
      <MenuLeft />
      <MenuRight />
    </div>
  );
}

export default memo(Header);
