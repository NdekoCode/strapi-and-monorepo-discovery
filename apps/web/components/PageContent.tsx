import { FC, PropsWithChildren } from "react";

export const PageContent: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <main className="container my-1 h-max bg-white flex-center dark:bg-slate-900 text-gray-700 dark:text-white rounded-lg">
      {children}
    </main>
  );
};
