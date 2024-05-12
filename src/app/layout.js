import { Inter } from "next/font/google";
import "./globals.css";
import { NavLinks } from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CloudAuText",
  description: "ソフトウェアが発する音やマイク音から、リアルタイム文字起こし・翻訳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><NavLinks/>{children}</body>
    </html>
  );
}
