import { useState } from "react";
// types
import type { IStyleObject } from "@@types/style";
// components
import MenuItem from "@component/menu/MenuItem";
import Container from "@component/UI/Container";
import Divider from "@component/UI/Divider";

const styles: IStyleObject = {
  menuItem: { padding: "0.2rem 0.8rem" },
  divider: { margin: "4px 0" },
};

interface MemoSubMenuModalProps {
  subMenu: ReadonlyArray<{ title: string; valid?: boolean }>;
  onMenuClick: (title: string) => void;
}

export default function MemoSubMenuModal({
  subMenu,
  onMenuClick,
}: MemoSubMenuModalProps) {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <Container>
      <ul>
        {subMenu.map(({ title, valid }, idx) => (
          <li key={`${title + idx}`}>
            {title !== "br" ? (
              <MenuItem
                onClick={() => onMenuClick(title)}
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
