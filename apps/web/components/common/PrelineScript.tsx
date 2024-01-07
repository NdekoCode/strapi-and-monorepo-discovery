"use client";
import { usePathname } from "next/navigation";
import { HSStaticMethods } from "preline/preline";
import { useEffect } from "react";

declare global {
  interface HSStaticMethods {
    autoInit(): void;
  }
  interface Window {
    HSStaticMethods: HSStaticMethods;
  }
}
const PrelineScript = () => {
  const path = usePathname();

  useEffect(() => {
    import("preline/preline");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      HSStaticMethods.autoInit();
    }, 100);
  }, [path]);

  return null;
};

export default PrelineScript;
