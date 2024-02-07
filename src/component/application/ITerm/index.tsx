import {
  useState,
  useEffect,
  useRef,
  memo,
  type KeyboardEventHandler,
} from "react";
import dayjs from "dayjs";
// store
import { appStore } from "@store/appStore";
// constants
import { TERMINAL_TIME_FORMAT } from "@constant/ITerm";
// components
import CommandLine from "./CommandLine";
import StatusBar from "./StatusBar";

interface ICommand {
  command: string;
  time: string;
}

function ITerm() {
  const { openApp, closeApp } = appStore();

  const [now, setNow] = useState("");
  const [commandList, setCommandList] = useState<ICommand[]>([]);

  const ref = useRef<HTMLSpanElement>(null);

  const focus = () => {
    ref.current?.focus();
  };

  useEffect(() => {
    setNow(dayjs().format(TERMINAL_TIME_FORMAT));
  }, [commandList]);

  useEffect(() => {
    focus();
  }, []);

  const onKeyDown: KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (e.key !== "Enter" || e.nativeEvent.isComposing || !ref.current) return;

    e.preventDefault();
    const command = ref.current.innerText;

    switch (command) {
      case "exit":
        closeApp("ITerm");
        break;

      case "clear":
        setCommandList([]);
        break;

      case "code":
      case "code .":
        openApp("Code");

      default:
        setCommandList((prev) => [...prev, { command, time: now }]);
        break;
    }
    ref.current.innerText = "";
    focus();
  };

  return (
    <div
      className="flex w-full h-full flex-col p-3 pt-0 bg-black overflow-scroll terminal"
      onClick={focus}
      role="presentation"
    >
      <StatusBar />

      {commandList.map(({ command, time }, i) => (
        <CommandLine key={`${time + i}`} time={time}>
          <span className="break-words">{command}</span>
        </CommandLine>
      ))}

      <CommandLine time={now}>
        <span
          className="outline-none caret-transparent"
          onKeyDown={onKeyDown}
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          role="presentation"
        />
        <span className="bg-[#c6c6c6]">&nbsp;&nbsp;</span>
      </CommandLine>
    </div>
  );
}

export default memo(ITerm);
