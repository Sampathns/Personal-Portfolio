import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "A passionate full stack developer crafting beautiful, functional, and user-friendly digital experiences with modern web technologies.",
  keywords: [
    "portfolio",
    "developer",
    "full stack",
    "web developer",
    "react",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description:
      "A passionate full stack developer crafting beautiful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
