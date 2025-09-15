import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const fonts = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikash-Mishra Portfolio",
  description: "Vikash Mishra MERN Stack Developer | Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} bg-[#0d0d1f] antialiased`}>
        {children}
      </body>
    </html>
  );
}
