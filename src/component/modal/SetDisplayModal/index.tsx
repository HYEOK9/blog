import React, { useState, useEffect, useCallback } from "react";
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
import DisplayModalOptions from "./DisplayModalOptions";
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
  const { openApp } = appStore();

  const [opacity, setOpacity] = useState(100);
  const [displayState, setDisplayState] = useState({
    darkMode: true,
    nightShift: false,
    trueTone: false,
  });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    document.body.style.opacity = `${opacity * 0.01 || 0.01}`;
  }, [opacity]);

  useEffect(() => {
    setDisplayState((prev) => ({
      ...prev,
      darkMode: document.getElementsByTagName("html")[0].className === "dark",
    }));
    const darkModeToggle = document.getElementById("darkModeToggle");

    const darkModeListener = () => {
      document.documentElement.classList.toggle("dark");
      setDisplayState((prev) => ({ ...prev, darkMode: !prev.darkMode }));
    };

    darkModeToggle?.addEventListener("click", darkModeListener);

    return () => darkModeToggle?.removeEventListener("click", darkModeListener);
  }, []);

  const toggleNightShift = useCallback(() => {
    setDisplayState((prev) => {
      !prev.nightShift ? addNightShift() : removeNightShift();
      return { ...prev, nightShift: !prev.nightShift };
    });
  }, []);

  const toggleTrueTone = useCallback(
    () =>
      setDisplayState((prev) => {
        !prev.trueTone ? addTrueTone() : removeTrueTone();
        return { ...prev, trueTone: !prev.trueTone };
      }),
    []
  );

  return (
    <div className={`absolute top-7 right-0.5 w-80 ${show ? "" : "hidden"}`}>
      <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="relative flex flex-col py-3 pb-0">
          <DisplayModalOptions show={show} />

          <div className="flex flex-col px-4">
            <div className="relative">
              <SunIcon className="absolute w-3 h-3 top-1.5 left-2 z-40 dark:fill-gray-500" />
              <input
                type="range"
                value={opacity}
                className="range w-full border border-gray-300 dark:border-0"
                onChange={({ target: { value } }) => setOpacity(Number(value))}
              />
            </div>

            <div className="flex justify-around self-center w-11/12 py-3">
              <IconInCircle
                Icon={DarkModeToggleIcon}
                className={displayState.darkMode ? "!bg-white" : ""}
                id="darkModeToggle"
                text="다크 모드"
                isOn={displayState.darkMode}
              />

              <IconInCircle
                Icon={NightShiftIcon}
                className={displayState.nightShift ? "!bg-night-shift" : ""}
                onClick={toggleNightShift}
                text="Night Shift"
                isOn={displayState.nightShift}
              />

              <IconInCircle
                Icon={TrueToneIcon}
                className={displayState.trueTone ? "!bg-blue-main" : ""}
                onClick={toggleTrueTone}
                text="True Tone"
                isOn={displayState.trueTone}
              />
            </div>

            <Divider className="mb-1" />

            <MenuItem
              style={{ padding: "3px 5px" }}
              active={hover}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              backgroundColor={
                displayState.darkMode
                  ? "var(--color-white-transparent)"
                  : "var(--color-blue)"
              }
              onClick={() => {
                setShow(false);
                openApp("Display Setting");
              }}
            >
              디스플레이 설정...
            </MenuItem>
          </div>
        </div>
      </Container>
    </div>
  );
}
