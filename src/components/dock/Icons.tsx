import { forwardRef, ForwardedRef } from "react";
// store
import { appStore } from "@store/appStore";
// image
import FinderIcon from "/public/application/finder.png";
import ITermIcon from "/public/application/iTerm.png";
import VscodeIcon from "/public/application/vscode.png";
import PostManIcon from "/public/application/postman.png";
import MemoIcon from "/public/application/memo.png";
import GithubIcon from "/public/application/github.png";
import VelogIcon from "/public/application/velog.png";
import FolderIcon from "/public/application/folder.png";
// constants
import { GITHUB_URL, VELOG_URL, OPEN_WINDOW_CONFIG } from "@constants/Link";
// components
import Icon from "@components/UI/Icon";

const Finder = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={FinderIcon} title="Finder" {...props} ref={ref} />;
};
const ITerm = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={ITermIcon} title="ITerm" {...props} ref={ref} />;
};
const Vscode = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={VscodeIcon} title="Vscode" {...props} ref={ref} />;
};
const PostMan = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={PostManIcon} title="Postman" {...props} ref={ref} />;
};
const Memo = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={MemoIcon} title="Memo" {...props} ref={ref} />;
};
const Github = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={GithubIcon}
      title="Github"
      onClick={() => window.open(GITHUB_URL, "_blank", `${OPEN_WINDOW_CONFIG}`)}
      {...props}
      ref={ref}
    />
  );
};
const Velog = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={VelogIcon}
      title="Velog"
      onClick={() => window.open(VELOG_URL, "_blank", `${OPEN_WINDOW_CONFIG}`)}
      style={{ margin: "0 5px", width: 48, height: 48 }}
      {...props}
      ref={ref}
    />
  );
};
const Folder = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return <Icon src={FolderIcon} title="Folder" {...props} ref={ref} />;
};

export const Icons = [
  { Component: Finder, key: "Finder" },
  { Component: ITerm, key: "ITerm" },
  { Component: Vscode, key: "Vscode" },
  // { Component: PostMan, key: "PostMan" },
  { Component: Memo, key: "Memo" },
  { Component: Github, key: "Github" },
  { Component: Velog, key: "Velog" },
  // { Component: Folder, key: "Folder" },
].map(({ Component, key }) => ({ Component: forwardRef(Component), key }));
