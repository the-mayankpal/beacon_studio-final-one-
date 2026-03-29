import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Beacon Studio",
  description: "AI-powered solutions that unlock new possibilities.",
  icons: {
    icon: "/assets/svg/beacon-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black font-sans text-white min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
