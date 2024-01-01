"use client";
import { usePathname } from "next/navigation";
import { HSOverlay } from "preline";
import { useEffect } from "react";
export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      HSOverlay.autoInit();
    }, 100);
  }, [path]);
  return null;
}

