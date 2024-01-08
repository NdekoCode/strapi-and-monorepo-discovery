import type { Metadata } from "next";
import "./globals.scss";

import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

import AppInit from "@/components/app/AppInit";
import PrelineScript from "@/components/common/PrelineScript";
import { Header } from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<PropsWithChildren<{}>>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-r from-pink-300 via-purle-300 to-indigo-300`}
      >
        <AppInit>
          <Header />
          {children}
          <PrelineScript />
        </AppInit>
      </body>
    </html>
  );
}
