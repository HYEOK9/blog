import React from "react";
// style
import { zIndex } from "@constants/zIndex";
// components
import AppleLogo from "public/logo/logo-apple.svg";
import LineProgress from "@components/util/progress/LineProgress";

export default function HomeLoading() {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center bg-black"
      style={{ zIndex: zIndex.loading }}
    >
      <AppleLogo />

      <LineProgress />
    </div>
  );
}
