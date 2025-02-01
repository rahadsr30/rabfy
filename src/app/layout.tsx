import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

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
      <body className={interSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
