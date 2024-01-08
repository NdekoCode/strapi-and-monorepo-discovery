import { FC, PropsWithChildren } from "react";

import { clmx } from "@/utils/libs/helpers";

export const PageContent: FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <main
      className={clmx(
        "container my-1 h-max bg-white flex-center dark:bg-slate-900 text-gray-700 dark:text-white rounded-lg",
        className
      )}
    >
      {children}
    </main>
  );
};
