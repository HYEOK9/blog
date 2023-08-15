import React, { useEffect } from "react";
// components
import AppleLogo from "public/logo/logo-apple.svg";
import LineProgress from "@src/app.components/progress/LineProgress";

interface HeaderProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeLoading({ setLoading }: HeaderProps) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black">
      <AppleLogo />

      <LineProgress />
    </div>
  );
}
