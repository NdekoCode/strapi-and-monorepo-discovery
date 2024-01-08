"use client";
import React, { FC, PropsWithChildren } from "react";

import useAuth from "@/utils/hooks/useAuth";

const WithAuth: FC<PropsWithChildren<{}>> = ({ children }) => {
  useAuth();
  return <>{children}</>;
};

export default WithAuth;
