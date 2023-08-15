import { useEffect, useRef, useCallback } from "react";
// constants
import { Menu } from "@src/constants/Menu";
// store
import { homeStore } from "@src/store/homeStore";
// components
import AppleLogo from "/public/logo/logo-apple.svg";
import MenuItem from "@src/components/menu/MenuItem";
import SubMenuModal from "@src/components/modal/SubMenuModal";

export default function Menus() {
  const ref = useRef<HTMLDivElement>(null);
  const { curMenu, setCurMenu } = homeStore();

  const clickOutside = useCallback(({ target }: MouseEvent) => {
    if (!ref.current?.contains(target as Element)) {
      setCurMenu(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", clickOutside);

    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div className="flex" ref={ref}>
      <MenuItem
        onClick={() => setCurMenu(Menu[0].title)}
        onMouseEnter={() => setCurMenu(Menu[0].title)}
        active={curMenu === Menu[0].title}
        style={{ marginRight: "0.75rem" }}
      >
        <AppleLogo width="17px" height="17px" />
        {curMenu === Menu[0].title && (
          <SubMenuModal subMenu={Menu[0].subMenu} />
        )}
      </MenuItem>

      {Menu.map(
        ({ title, subMenu }, idx) =>
          idx !== 0 && (
            <MenuItem
              key={title}
              onClick={() => setCurMenu(title)}
              onMouseEnter={() => setCurMenu(title)}
              active={curMenu === title}
              style={{ ...(idx === 1 && { fontWeight: "bold" }) }}
            >
              {title}
              {curMenu === title && <SubMenuModal subMenu={subMenu} />}
            </MenuItem>
          )
      )}
    </div>
  );
}
