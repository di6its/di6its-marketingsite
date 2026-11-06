import type { Metadata } from "next";
import { Urbanist, DM_Sans } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "di6its — Earn 6 Digits a Month Through Remote Work",
  description:
    "di6its helps Filipinos earn 6-digit monthly incomes through remote work. Courses on VA work, low code/no code, and marketing and sales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${urbanist.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
