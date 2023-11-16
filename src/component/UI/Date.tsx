import React, { useEffect } from "react";
// store
import { dateStore } from "@store/dateStore";

export default function Date() {
  const { now, setNow } = dateStore();

  useEffect(() => {
    setInterval(() => setNow(), 1000);
  }, [setNow]);

  return <div className="text-gray-900 dark:text-white">{now}</div>;
}
