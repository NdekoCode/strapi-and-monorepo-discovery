"use client";

import * as Cookies from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { Spinner } from "@/components/common";
import { getStrapiUrl } from "@/utils/libs/api";
import { setToken } from "@/utils/libs/auth";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target?.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(getStrapiUrl("/auth/local"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setIsLoading(false);
        setToken(data);
        router.push("/");
        if (Cookies.getCookie("username")) {
          router.push("/");
        }
        localStorage.setItem("user_token", JSON.stringify(data));
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error((error as Error).message);
      setIsLoading(false);
    }
  };
  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account yet?
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="/auth/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="identifier"
                      value={formData.identifier}
                      className="border py-3 px-4 block outline-none text-gray-700  w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus-within:peer dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      onChange={handleChange}
                      aria-describedby="email-error"
                    />
                  </div>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white text-gray-700"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="border py-3 px-4 block outline-none text-gray-700  w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 focus-within:peer dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      aria-describedby="password-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 peer-invalid:flex items-center pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  {isLoading ? <Spinner viewText={true} /> : "Sign in"}
                </button>
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;
