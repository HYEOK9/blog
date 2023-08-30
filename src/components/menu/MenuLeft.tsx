import { useEffect, useRef, useCallback } from "react";
// style
import { zIndex } from "@constants/zIndex";
// store
import { menuStore } from "@store/menuStore";
// types
import { IStyleObject } from "@@types/style";
// constants
import { MENU } from "@constants/Menu";
// components
import AppleLogo from "/public/logo/logo-apple.svg";
import MenuItem from "@components/menu/MenuItem";
import SubMenuModal from "@components/modal/SubMenuModal";

const styles: IStyleObject = {
  subMenu: {
    position: "absolute",
    top: "calc(2rem + 2px)",
    left: 0,
    minWidth: "14rem",
    zIndex: zIndex.subMenu,
  },
};

export default function MenuLeft() {
  const ref = useRef<HTMLDivElement>(null);

  const { curMenu, setCurMenu, isMenuOpened } = menuStore();

  const onMouseEnter = (menuTitle: string) => {
    if (!isMenuOpened) return;
    setCurMenu(menuTitle);
  };

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
      {MENU.map(({ title, subMenu }, idx) => (
        <MenuItem
          key={title}
          onClick={() => setCurMenu(title)}
          onMouseEnter={() => onMouseEnter(title)}
          active={curMenu === title}
          style={{ ...(idx === 1 && { fontWeight: "bold" }) }}
        >
          {idx === 0 ? <AppleLogo width="17px" height="17px" /> : title}

          {curMenu === title && (
            <div style={styles.subMenu}>
              <SubMenuModal subMenu={subMenu} />
            </div>
          )}
        </MenuItem>
      ))}
    </div>
  );
}
