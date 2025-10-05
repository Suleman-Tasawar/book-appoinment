import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
// @ts-ignore
import "@radix-ui/themes/styles.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/general/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Easer",
  description: "Book Appointments Seamlesly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme
          accentColor="blue"
          grayColor="slate"
          panelBackground="solid"
          radius="large"
          scaling="110%"
        >
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
    </ClerkProvider>
  );
}
