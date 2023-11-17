import { memo } from "react";
// components
import HeaderLeft from "@component/layout/header/HeaderLeft";
import HeaderRight from "@component/layout/header/HeaderRight";

function Header() {
  return (
    <div className="flex fixed w-full justify-between items-center h-8 text-sm bg-light-bg dark:bg-header-dark duration-500">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
}

export default memo(Header);
