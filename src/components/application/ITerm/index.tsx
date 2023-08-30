import {
  useState,
  useEffect,
  useRef,
  memo,
  useMemo,
  KeyboardEventHandler,
} from "react";
import dayjs from "dayjs";
// store
import { appStore } from "@store/appStore";
// lib
import { getRandomNumber } from "@lib/getRandomNumber";
// components
import CommandLine from "./CommandLine";
import Divider from "@components/UI/Divider";
import CPUIcon from "/public/icon/cpu.svg";
import MemoryIcon from "/public/icon/memory.svg";

function ITerm() {
  const [commandList, setCommandList] = useState<
    { command: string; time: string }[]
  >([]);
  const [cpuUsage, setCpuUsage] = useState(12);
  const ref = useRef<HTMLSpanElement>(null);

  const { openApp, closeApp } = appStore();

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

  useEffect(() => {
    setInterval(() => {
      setCpuUsage(12 + Math.round(getRandomNumber(0, 1)));
    }, 1500);
  }, []);

  return (
    <div
      className="flex w-full h-full flex-col p-3 pt-0 bg-black overflow-scroll"
      onClick={focus}
    >
      <div className="flex sticky top-0 pt-2 pb-3 bg-black">
        <div className="flex items-center w-1/2">
          <CPUIcon />
          <span className="text-sm text-emerald-200 mx-1">{cpuUsage}%</span>
          <div className="bg-emerald-200 w-9/12 h-0.25 mx-auto" />
        </div>
        <div className="flex items-center w-1/2">
          <MemoryIcon />
          <span className="text-sm text-rose-200 mx-2">8GB</span>
          <div className="bg-rose-200 w-9/12 h-0.25" />
        </div>
      </div>

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

export default memo(ITerm);
