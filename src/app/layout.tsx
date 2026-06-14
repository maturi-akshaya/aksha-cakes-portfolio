import type { Metadata } from "next";
import "./globals.css";

import { BUSINESS_INFO } from "@/constants/business";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description.join(", "),
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}