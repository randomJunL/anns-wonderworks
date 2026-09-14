import { Inter } from "next/font/google";
import { Footer } from "./footer"
const inter = Inter({ subsets: ["latin"] });
import { ModalProvider } from "@/providers/modal-provider";
import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "./(root)/navbar";


export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard for managing content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ModalProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
