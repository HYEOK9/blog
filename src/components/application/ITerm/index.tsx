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
// components
import Divider from "@components/UI/Divider";
import CommandLine from "./CommandLine";

export default function ITerm() {
  const [commandList, setCommandList] = useState<
    { command: string; time: string }[]
  >([]);
  const ref = useRef<HTMLSpanElement>(null);

  const { openApp, closeApp, setCurApp } = appStore();

  const focus = () => {
    ref.current?.focus();
  };

  const time = useMemo(() => dayjs().format("HH:mm:ss"), [commandList]);

  const onKeyDown: KeyboardEventHandler<HTMLSpanElement> = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();

      const command = ref.current!.innerText;

      switch (command) {
        case "clear":
          setCommandList([]);
          break;
        case "exit":
          closeApp("ITerm");
          break;
        case "code":
        case "code .":
          openApp("Vscode");
          break;
        default:
          setCommandList((prev) => [...prev, { command, time }]);
          break;
      }
      ref.current!.innerText = "";
      focus();
    }
  };

  useEffect(() => {
    focus();
  }, []);

  return (
    <div
      className="flex w-full h-full flex-col p-3 bg-black overflow-scroll"
      onClick={focus}
    >
      {commandList.map(({ command, time }, i) => (
        <CommandLine key={`${time}${i}`} time={time}>
          {command}
        </CommandLine>
      ))}
      <CommandLine time={time}>
        <span
          className="outline-none caret-transparent inline"
          onKeyDown={onKeyDown}
          ref={ref}
          contentEditable
          suppressContentEditableWarning
        />
        <Divider vertical className="!h-4/5" width={8} color="#c6c6c6" />
      </CommandLine>
    </div>
  );
}
