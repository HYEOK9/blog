"use client";

import { useEffect } from "react";
import { backgroundList } from "@constant/background";

export default function ImagePrefetch() {
  useEffect(() => {
    backgroundList.forEach((background) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = background.src;
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
