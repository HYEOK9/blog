import React, { useCallback, useEffect, useState } from "react";
// lib
import {
  addNightShift,
  addTrueTone,
  removeNightShift,
  removeTrueTone,
} from "@lib/styleLib";
// store
import { appStore } from "@store/appStore";
// components
import SunIcon from "/public/icon/sun.svg";
import DarkModeToggleIcon from "/public/icon/dark-mode-toggle.svg";
import NightShiftIcon from "/public/icon/night-shift-icon.svg";
import TrueToneIcon from "/public/icon/true-tone-icon.svg";
import Container from "@component/UI/Container";
import IconInCircle from "@component/UI/IconInCircle";
import Divider from "@component/UI/Divider";
import MenuItem from "@component/menu/MenuItem";

interface SetDisplayModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SetDisplayModal({
  show,
  setShow,
}: SetDisplayModalProps) {
  const [isDark, setIsDark] = useState(true);
  const [opacity, setOpacity] = useState(100);
  const [nightShift, setNightShift] = useState(false);
  const [trueTone, setTrueTone] = useState(false);

  const [hover, setHover] = useState(false);

  const { openApp } = appStore();

  useEffect(() => {
    setIsDark(document.getElementsByTagName("html")[0].className === "dark");
  }, []);

  useEffect(() => {
    document.body.style.opacity = `${opacity * 0.01 || 0.01}`;
  }, [opacity]);

  useEffect(() => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    const darkModeListener = () => {
      document.documentElement.classList.toggle("dark");
      setIsDark((prev) => !prev);
    };

    darkModeToggle?.addEventListener("click", darkModeListener);

    return () => darkModeToggle?.removeEventListener("click", darkModeListener);
  }, []);

  const toggleNightShift = useCallback(() => {
    setNightShift((prev) => {
      !prev ? addNightShift() : removeNightShift();
      return !prev;
    });
  }, []);

  const toggleTrueTone = useCallback(
    () =>
      setTrueTone((prev) => {
        !prev ? addTrueTone() : removeTrueTone();
        return !prev;
      }),
    []
  );

  return (
    <div className={`absolute top-7 right-0.5 w-80 ${show ? "" : "hidden"}`}>
      <Container>
        <div className="flex flex-col p-3 pb-0">
          <span className="font-semibold">디스플레이</span>
          <span className="text-xs text-gray-700 dark:text-gray-400 pb-3">
            Apple XDR Display (P3-1600 nits)
          </span>

          <div className="relative">
            <SunIcon className="absolute w-3 h-3 top-1.5 left-2 z-40 dark:fill-gray-500" />
            <input
              type="range"
              value={opacity}
              className="w-full range border border-gray-300 dark:border-0"
              onChange={({ target: { value } }) => setOpacity(Number(value))}
            />
          </div>

          <div className="flex justify-around self-center w-11/12 py-3">
            <IconInCircle
              Icon={DarkModeToggleIcon}
              className={isDark ? "!bg-white" : ""}
              id="darkModeToggle"
              text="다크 모드"
              isOn={isDark}
            />

            <IconInCircle
              Icon={NightShiftIcon}
              className={nightShift ? "!bg-night-shift" : ""}
              onClick={toggleNightShift}
              text="Night Shift"
              isOn={nightShift}
            />

            <IconInCircle
              Icon={TrueToneIcon}
              className={trueTone ? "!bg-blue-main" : ""}
              onClick={toggleTrueTone}
              text="True Tone"
              isOn={trueTone}
            />
          </div>

          <Divider className="mb-1" />

          <MenuItem
            style={{ padding: "3px 5px" }}
            active={hover}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            backgroundColor={
              isDark ? "var(--color-white-transparent)" : "var(--color-blue)"
            }
            onClick={() => {
              setShow(false);
              openApp("DisplaySetting");
            }}
          >
            디스플레이 설정...
          </MenuItem>
        </div>
      </Container>
    </div>
  );
}
