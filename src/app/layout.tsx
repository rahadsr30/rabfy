import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rabfy",
  description: "Online Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interSans.className}>{children}</body>
    </html>
  );
}
