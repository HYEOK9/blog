import { memo, ReactNode } from "react";
// constants
import { HOST, MAC_NAME, TERMINAL_PATH } from "@constants/ITerm";

interface CommandLineProps {
  children: ReactNode;
  time?: string;
}

function CommandLine({ children, time }: CommandLineProps) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <span className="text-sm font-semibold text-white">{HOST}</span>
          <span className="text-sm text-gray-300">@{MAC_NAME}</span>
          <span className="text-sm font-semibold text-white">
            {TERMINAL_PATH}
          </span>
        </div>
        {time && <span className="text-sm text-gray-300">[ {time} ]</span>}
      </div>

      <div className="flex text-gray-300">
        <span className="font-semibold">{`>`}&nbsp;&nbsp;</span>
        <span className="text-green-500">$&nbsp;&nbsp;</span>
        {children}
      </div>
      <br />
    </div>
  );
}

export default memo(CommandLine);
