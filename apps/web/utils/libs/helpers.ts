import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function clmx(...classes: (string | ClassValue)[]) {
  return twMerge(clsx(classes));
}
