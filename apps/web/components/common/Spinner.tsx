import { ClassValue } from "clsx";
import React, { FC } from "react";

import { clmx } from "@/utils/libs/helpers";

export const Spinner: FC<{
  viewText?: boolean;
  className?: ClassValue | string;
  loadingText?: string;
}> = ({ viewText = false, className, loadingText = "Loading..." }) => {
  return (
    <>
      <span
        className={clmx(
          "animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full",
          className
        )}
        role="status"
        aria-label="loading"
      />
      {viewText && loadingText}
    </>
  );
};
