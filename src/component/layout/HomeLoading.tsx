import React from "react";
// components
import AppleLogo from "/public/logo/logo-apple.svg";
import LineProgress from "@component/UI/progress/LineProgress";

export default function HomeLoading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black z-loading">
      <AppleLogo className="fill-white" />
      <LineProgress />
    </div>
  );
}
