import "./globals.css";
// import { Belanosima } from "next/font/google";

// Importing fonts correctly
// const belanosima = Belanosima({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-belanosima",
//   weight: ["400", "600", "700"],
// });

// Importing Pretendard font and assigning it to a variable
// export const Pretendard = localFont({
//   src: "../public/fonts/PretendardVariable.woff2",
//   display: "swap",
//   variable: "--font-Pretendard",
//   weight: "45 920",
// });

// Metadata for the layout
// export const metadata = {
//   title: "Ferploy",
//   description: "명함 정리를 빠르고 간단하게",
//   icons: {
//     icon: "./favicon.ico",
//   },
//   openGraph: {
//     title: "Ferploy",
//     description: "명함 정리를 빠르고 간단하게",
//     url: "",
//     images: [
//       {
//         url: "Ferploy",
//         width: 800,
//         height: 600,
//         alt: "Ferploy",
//       },
//     ],
//     locale: "Kr",
//     type: "website",
//   },
// };

// Helper function to join class names
// type ClassNames = (string | undefined)[]; // 클래스 네임 배열 타입
// export const cls = (...classnames: ClassNames): string => {
//   return classnames.filter(Boolean).join(" ");
// };

// RootLayout Component
import React, { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="kr">
      <body >
        {children}
      </body>
    </html>
  );
}