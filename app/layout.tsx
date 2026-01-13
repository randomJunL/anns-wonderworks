import { Inter } from "next/font/google";
import { Footer } from "./footer"
const inter = Inter({ subsets: ["latin"] });
import { ModalProvider } from "@/providers/modal-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Nav } from "react-day-picker";
import { Navbar } from "./(root)/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <ModalProvider />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
