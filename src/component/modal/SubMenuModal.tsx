import { useState } from "react";
// types
import { IStyleObject } from "@@types/style";
// store
import { menuStore } from "@store/menuStore";
// components
import MenuItem from "@component/menu/MenuItem";
import Container from "@component/UI/Container";
import Divider from "@component/UI/Divider";

const styles: IStyleObject = {
  menuItem: { padding: "0.2rem 0.8rem" },
  divider: { margin: "4px 0" },
};

interface SubMenuModalProps {
  subMenu: ReadonlyArray<{ title: string; valid?: boolean }>;
}

export default function SubMenuModal({ subMenu }: SubMenuModalProps) {
  const [hover, setHover] = useState<string | null>(null);
  const { setCurMenu } = menuStore();

  return (
    <Container>
      <ul>
        {subMenu.map(({ title, valid }, idx) => (
          <li key={`${title + idx}`}>
            {title !== "br" ? (
              <MenuItem
                onClick={() => setCurMenu(null)}
                active={hover === title}
                valid={valid}
                onMouseEnter={() => setHover(title)}
                onMouseLeave={() => setHover(null)}
                backgroundColor={valid ? "var(--color-blue)" : ""}
                style={styles.menuItem}
              >
                {title}
              </MenuItem>
            ) : (
              <Divider style={styles.divider} />
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
}
