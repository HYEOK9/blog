import { useState, CSSProperties } from "react";
// store
import { homeStore } from "@src/store/homeStore";
// components
import MenuItem from "../menu/MenuItem";
import Container from "../common/Container";
import Divider from "../common/Divider";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "absolute",
    top: "calc(2rem + 1px)",
    left: 0,
    minWidth: "14rem",
  },
  menuItem: { padding: "0.2rem 0.6rem" },
  divider: { margin: "4px 0" },
};

interface SubMenuModalProps {
  subMenu: ReadonlyArray<{ title: string; valid?: boolean }>;
}

export default function SubMenuModal({ subMenu }: SubMenuModalProps) {
  const [hover, setHover] = useState<string | null>(null);
  const { setCurMenu } = homeStore();

  return (
    <Container style={styles.container}>
      <ul>
        {subMenu.map(({ title, valid }, idx) => (
          <li key={`${title}${idx}`}>
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
