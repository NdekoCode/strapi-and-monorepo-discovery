"use client";

import * as Cookies from "cookies-next";
import { useRouter } from "next/navigation";
import Router from "next/router";

export const setToken = (data: {
  jwt: string;
  user: { id: string; username: string; [key: string]: string };
}) => {
  if (typeof window === "undefined") {
    return null;
  }
  Cookies.setCookie("id", data.user.id, { sameSite: "none" });
  Cookies.setCookie("username", data.user.username, { sameSite: "none" });
  Cookies.setCookie("jwt", data.jwt, { sameSite: "none" });
  console.log(Cookies.getCookie("username"));
  if (Cookies.getCookie("username")) {
    Router.push("/");
  }
};
export function logout() {
  unsetToken();
}
export const unsetToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  Cookies.deleteCookie("id", { sameSite: "none" });
  Cookies.deleteCookie("username", { sameSite: "none" });
  Cookies.deleteCookie("jwt", { sameSite: "none" });
};
