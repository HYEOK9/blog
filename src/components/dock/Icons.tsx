// image
import FinderIcon from "/public/application/finder.png";
import ITermIcon from "/public/application/iTerm.png";
import VscodeIcon from "/public/application/vscode.png";
import MemoIcon from "/public/application/memo.png";
import GithubIcon from "/public/application/github.png";
import VelogIcon from "/public/application/velog.png";
import FolderIcon from "/public/application/folder.png";
// constants
import { GITHUB_URL, VELOG_URL } from "@constants/Link";
// components
import Icon from "@components/UI/Icon";

const Finder = () => {
  return <Icon src={FinderIcon} title="Finder" width={56} height={56} />;
};
const ITerm = () => {
  return <Icon src={ITermIcon} title="ITerm" width={64} height={64} />;
};
const Vscode = () => {
  return <Icon src={VscodeIcon} title="VSCode" width={64} height={64} />;
};
const Memo = () => {
  return <Icon src={MemoIcon} title="Memo" width={64} height={64} />;
};
const Github = () => {
  return (
    <Icon
      src={GithubIcon}
      title="Github"
      width={64}
      height={64}
      onClick={() => window.open(GITHUB_URL)}
    />
  );
};
const Velog = () => {
  return (
    <Icon
      src={VelogIcon}
      title="Velog"
      width={50}
      height={50}
      onClick={() => window.open(VELOG_URL)}
      style={{ margin: "0 5px", borderRadius: 10 }}
    />
  );
};
const Folder = () => {
  return <Icon src={FolderIcon} title="Folder" width={56} height={56} />;
};

export const ICONS = { Finder, ITerm, Vscode, Memo, Github, Velog, Folder };
