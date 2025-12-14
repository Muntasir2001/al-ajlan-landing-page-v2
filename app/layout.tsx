import type { Metadata } from "next";
import { Geist, Geist_Mono, Arimo } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlAjlan & AlHusaiyin",
  description: "AlAjlan & AlHusaiyin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
