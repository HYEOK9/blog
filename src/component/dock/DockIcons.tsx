import { forwardRef, ForwardedRef } from "react";
// image
import FinderIcon from "/public/application/finder.png";
import ITermIcon from "/public/application/iTerm.png";
import VscodeIcon from "/public/application/vscode.png";
import MemoIcon from "/public/application/memo.png";
import GithubIcon from "/public/application/github.png";
import VelogIcon from "/public/application/velog.png";
import Cat from "/public/application/cute.png";
// constants
import { DOCK_GITHUB_URL, VELOG_URL, OPEN_WINDOW_CONFIG } from "@constant/Link";
// components
import DockIcon from "@component/UI/DockIcon";

function Finder({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return <DockIcon src={FinderIcon} title="Finder" {...props} ref={ref} />;
}
function ITerm({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return <DockIcon src={ITermIcon} title="ITerm" {...props} ref={ref} />;
}
function Vscode({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return <DockIcon src={VscodeIcon} title="Vscode" {...props} ref={ref} />;
}
function Memo({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return <DockIcon src={MemoIcon} title="Memo" {...props} ref={ref} />;
}
function AboutDeveloper({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return <DockIcon src={Cat} title="About Developer" {...props} ref={ref} />;
}
function Github({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return (
    <DockIcon
      src={GithubIcon}
      title="Github"
      onClick={() =>
        window.open(DOCK_GITHUB_URL, "_blank", `${OPEN_WINDOW_CONFIG}`)
      }
      {...props}
      ref={ref}
    />
  );
}
function Velog({ ...props }, ref: ForwardedRef<HTMLImageElement>) {
  return (
    <DockIcon
      src={VelogIcon}
      title="Velog"
      onClick={() => window.open(VELOG_URL, "_blank", `${OPEN_WINDOW_CONFIG}`)}
      {...props}
      ref={ref}
    />
  );
}

export const DockIcons = [
  { Component: Finder, key: "Finder" },
  { Component: ITerm, key: "ITerm" },
  { Component: Vscode, key: "Vscode" },
  { Component: Memo, key: "Memo" },
  { Component: AboutDeveloper, key: "About Developer" },
  { Component: Github, key: "Github" },
  { Component: Velog, key: "Velog" },
].map(({ Component, key }) => ({ Component: forwardRef(Component), key }));
