"use client";
import * as Cookies from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.getCookie("username")) {
      router.push("/auth/login");
    }
  }, []);
}
