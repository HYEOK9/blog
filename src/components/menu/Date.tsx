import { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";

export default function Date() {
  const [now, setNow] = useState("");

  const getNow = useCallback(
    () => dayjs().locale("ko").format("M월 D일 (ddd) A h:mm"),
    []
  );

  useEffect(() => {
    setInterval(() => setNow(getNow), 1000);
  }, []);

  return <div className="text-white">{now}</div>;
}
