import {
  useState,
  useEffect,
  useRef,
  useMemo,
  KeyboardEventHandler,
} from "react";
import dayjs from "dayjs";
// store
import { appStore } from "@store/appStore";
// constants
import { TERMINAL_TIME_FORMAT } from "@constant/ITerm";
// components
import Divider from "@component/UI/Divider";
import CommandLine from "./CommandLine";
import StatusBar from "./StatusBar";

export default function ITerm() {
  const [commandList, setCommandList] = useState<
    { command: string; time: string }[]
  >([]);

  const ref = useRef<HTMLSpanElement>(null);

  const { openApp, closeApp } = appStore();

  const focus = () => {
    ref.current?.focus();
  };

  const now = useMemo(
    () => dayjs().format(TERMINAL_TIME_FORMAT),
    [commandList]
  );

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
        openApp("Vscode");

      default:
        setCommandList((prev) => [...prev, { command, time: now }]);
        break;
    }
    ref.current.innerText = "";
    focus();
  };

  useEffect(() => {
    focus();
  }, []);

  return (
    <div
      role="presentation"
      className="flex w-full h-full flex-col p-3 pt-0 bg-black overflow-scroll terminal"
      onClick={focus}
    >
      <StatusBar />

      {commandList.map(({ command, time }, i) => (
        <CommandLine key={`${time + i}`} time={time}>
          {command}
        </CommandLine>
      ))}

      <CommandLine time={now}>
        <span
          className="outline-none caret-transparent inline"
          onKeyDown={onKeyDown}
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          role="presentation"
        />
        <Divider vertical className="!h-4/5" width={8} color="#c6c6c6" />
      </CommandLine>
    </div>
  );
}
