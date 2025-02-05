import React from "react";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Mediboard",
  description: "A Next.js 15 Medi board Application",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center min-h-screen">
          {children}
          </div>
        </body>
      </html>
  );
}
