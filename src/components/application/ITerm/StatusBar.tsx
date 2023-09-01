import { useState, useEffect } from "react";
// lib
import { getRandomNumber } from "@lib/getRandomNumber";
// components
import CPUIcon from "/public/icon/cpu.svg";
import MemoryIcon from "/public/icon/memory.svg";

export default function StatusBar() {
  const [cpuUsage, setCpuUsage] = useState(12);

  useEffect(() => {
    setInterval(() => {
      setCpuUsage(12 + Math.round(getRandomNumber(0, 1)));
    }, 700);
  }, []);

  return (
    <div className="flex sticky top-0 pt-1 bg-black usage">
      <div className="flex items-center w-1/2">
        <CPUIcon />
        <span className="text-sm text-emerald-200 mx-2.5">{cpuUsage}%</span>
        <div className="bg-emerald-200 w-9/12 h-0.25" />
      </div>
      <div className="flex items-center w-1/2">
        <MemoryIcon />
        <span className="text-sm text-rose-200 mx-2.5">8GB</span>
        <div className="bg-rose-200 w-9/12 h-0.25" />
      </div>
    </div>
  );
}
