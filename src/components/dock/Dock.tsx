// style
import { zIndex } from "@constants/zIndex";
// components
import { ICONS } from "@components/dock/Icons";
import Divider from "@components/UI/Divider";

export default function Dock() {
  return (
    <div
      className="flex h-full relative items-center justify-between px-2 py-1 rounded-2xl border border-slate-600 backdrop-blur-sm transition-all"
      style={{
        minWidth: "max-content",
        backgroundColor: "var(--color-navy-light)",
        zIndex: zIndex.dock,
      }}
    >
      <ICONS.Finder />
      <Divider vertical className="!h-4/5 ml-2 mr-1" width={1} />
      <ICONS.ITerm />
      <ICONS.Vscode />
      <ICONS.Memo />
      <ICONS.Github />
      <ICONS.Velog />
    </div>
  );
}
