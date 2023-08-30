import { memo } from "react";

interface CommandLineProps {
  children: React.ReactNode;
  time?: string;
}

function CommandLine({ children, time }: CommandLineProps) {
  const HOST = "hyeok9";
  const MAC_NAME = "hyeok9-Mac";
  const PATH = " ~/Repository/blog";

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div>
          <span className="text-sm font-bold text-white">{HOST}</span>
          <span className="text-sm text-gray-300">@{MAC_NAME}</span>
          <span className="text-sm font-bold text-white">{PATH}</span>
        </div>
        {time && <span className="text-sm text-gray-300">[ {time} ]</span>}
      </div>

      <div className="flex text-white">
        {`>`}&nbsp;&nbsp;
        <span className="text-green-500">$&nbsp;&nbsp;</span>
        {children}
      </div>
      <br />
    </div>
  );
}

export default memo(CommandLine);
