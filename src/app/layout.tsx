import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import type React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfred Gauthier - Full Stack Developer",
  description:
    "Portfolio of Alfred Gauthier, Full Stack Developer specialized in AWS, Next.js, and Backend Architecture",
  keywords: [
    "Full Stack Developer",
    "AWS",
    "Next.js",
    "Backend Architecture",
    "Web Development",
  ],
  openGraph: {
    title: "Alfred Gauthier - Full Stack Developer",
    description:
      "Portfolio of Alfred Gauthier, Full Stack Developer specialized in AWS, Next.js, and Backend Architecture",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
