import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOTI Farmer",
  description:
    "Find out what mounts you are missing from the Reins of the Quantum Courser",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://wow.zamimg.com/js/tooltips.js" />
      </head>
      <body className={`${inter.className} bg-black text-white py-2`}>
        {children}
      </body>
    </html>
  );
}
