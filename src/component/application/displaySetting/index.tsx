/* eslint-disable @next/next/no-img-element */
import React from "react";
// store
import { backgroundStore } from "@store/backgroundStore";
// constants
import { backgroundList } from "@constant/background";
// components
import BackgroundItem from "./BackgroundItem";

function DisplaySetting() {
  const { name, src } = backgroundStore();

  return (
    <div className="w-full h-full flex flex-col items-center text-gray-900 dark:text-white overflow-scroll">
      <img className="w-96 h-64 rounded-xl" src={src} alt={name} />
      <span className="text-gray-600 dark:text-gray-400">
        current wallpaper
      </span>
      <span className="dark:text-white text-2xl mb-10">{name}</span>

      <div className="flex flex-wrap justify-around px-2">
        {backgroundList.map((img) => (
          <BackgroundItem key={img.name} image={img} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(DisplaySetting);
