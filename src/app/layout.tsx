import localFont from "next/font/local";
import "./globals.css";
import { Belanosima } from "next/font/google";

const belanosima = Belanosima({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-belanosima",
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Ferploy",
  applicationName: "",
  description: "명함 정리를 빠르고 간단하게",
  image: "",
  icons: {
    icon: "./favicon.ico",
  },

  openGraph: {
    title: "Ferploy",
    description: "명함 정리를 빠르고 간단하게",
    url: "",
    siteName: "",
    images: [
      {
        url: "Ferploy",
        width: 800,
        height: 600,
        alt: "Ferploy",
      },
    ],
    locale: "Kr",
    type: "website",
  },
};

export const Pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-Pretendard",
  weight: "45 920",
});

type ClassNames = (string | undefined)[]; // 클래스 네임 배열 타입

export const cls = (...classnames: ClassNames): string => {
  return classnames.filter(Boolean).join(" ");
};

import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="kr">
      <body className={cls(Pretendard.className, belanosima.variable)}>
        {children}
      </body>
    </html>
  );
}
