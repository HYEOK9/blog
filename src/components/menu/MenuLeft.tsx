import { useEffect, useRef, useCallback } from "react";
// constants
import { MENU } from "@constants/Menu";
// store
import { homeStore } from "@store/homeStore";
// components
import AppleLogo from "/public/logo/logo-apple.svg";
import MenuItem from "@components/menu/MenuItem";
import SubMenuModal from "@components/modal/SubMenuModal";

export default function MenuLeft() {
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
        onClick={() => setCurMenu(MENU[0].title)}
        onMouseEnter={() => setCurMenu(MENU[0].title)}
        active={curMenu === MENU[0].title}
      >
        <AppleLogo width="17px" height="17px" />
        {curMenu === MENU[0].title && (
          <SubMenuModal subMenu={MENU[0].subMenu} />
        )}
      </MenuItem>

      {MENU.map(
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
