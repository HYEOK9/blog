import React, { useEffect } from "react";
// store
import { dateStore } from "@store/dateStore";

export default function Date() {
  const { now, setNow } = dateStore();

  useEffect(() => {
    setInterval(() => setNow(), 1000);
  }, []);

  return <div className="text-white">{now}</div>;
}
