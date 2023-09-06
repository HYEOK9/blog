import { memo } from "react";
// constants
import STACKS from "@constant/Stacks";
// components
import StackWithIcon from "./StackWithIcon";

function Stack() {
  const { lang, frameWork, stateManagement, style, devOps, etc } = STACKS;

  return (
    <div className="flex flex-col items-center">
      <StackWithIcon data={lang} />
      <StackWithIcon data={frameWork} />
      <StackWithIcon data={stateManagement} />
      <StackWithIcon data={style} />
      <StackWithIcon data={devOps} />
      <StackWithIcon data={etc} />
    </div>
  );
}

export default memo(Stack);
