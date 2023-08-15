// store
import { homeStore } from "@src/app.store/homeStore";
// components
import MenuItem from "../menu/MenuItem";
import Divider from "../util/Divider";

interface SubMenuModalProps {
  subMenu: ReadonlyArray<{ title: string; valid?: boolean }>;
}

export default function SubMenuModal({ subMenu }: SubMenuModalProps) {
  const { setCurMenu } = homeStore();

  return (
    <ul
      className="flex flex-col p-2 -ml-2 mt-1.5 border border-slate-600 rounded-md absolute text-sm font-normal"
      style={{ minWidth: "14rem", backgroundColor: "rgba(27,27,29,0.3)" }}
    >
      {subMenu.map(({ title, valid }) =>
        title !== "br" ? (
          <li key={title}>
            <MenuItem
              onClick={() => {
                setCurMenu(null);
              }}
              valid={valid}
              backgroundColor={valid ? "#0A85FF" : ""}
              style={{ padding: "0.2rem 0.4rem" }}
            >
              {title}
            </MenuItem>
          </li>
        ) : (
          <Divider />
        )
      )}
    </ul>
  );
}
