import { forwardRef, ForwardedRef } from "react";
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
  return (
    <Icon
      src={FinderIcon}
      title="Finder"
      width={56}
      height={56}
      {...props}
      ref={ref}
    />
  );
};
const ITerm = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={ITermIcon}
      title="ITerm"
      width={64}
      height={64}
      {...props}
      ref={ref}
    />
  );
};
const Vscode = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={VscodeIcon}
      title="VSCode"
      width={64}
      height={64}
      {...props}
      ref={ref}
    />
  );
};
const PostMan = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={PostManIcon}
      title="Postman"
      width={64}
      height={64}
      {...props}
      ref={ref}
    />
  );
};
const Memo = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={MemoIcon}
      title="Memo"
      width={64}
      height={64}
      {...props}
      ref={ref}
    />
  );
};
const Github = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={GithubIcon}
      title="Github"
      width={64}
      height={64}
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
      width={50}
      height={50}
      onClick={() => window.open(VELOG_URL, "_blank", `${OPEN_WINDOW_CONFIG}`)}
      style={{ margin: "0 5px", borderRadius: 10 }}
      {...props}
      ref={ref}
    />
  );
};
const Folder = ({ ...props }, ref: ForwardedRef<HTMLImageElement>) => {
  return (
    <Icon
      src={FolderIcon}
      title="Folder"
      width={56}
      height={56}
      {...props}
      ref={ref}
    />
  );
};

export const Icons = [
  { Component: Finder, key: "Finder" },
  { Component: ITerm, key: "ITerm" },
  { Component: Vscode, key: "Vscode" },
  { Component: PostMan, key: "PostMan" },
  { Component: Memo, key: "Memo" },
  { Component: Github, key: "Github" },
  { Component: Velog, key: "Velog" },
  // { Component: Folder, key: "Folder" },
].map(({ Component, key }) => ({ Component: forwardRef(Component), key }));
