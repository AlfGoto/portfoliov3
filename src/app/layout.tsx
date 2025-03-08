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
    "Cloud Architecture",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Alfred Gauthier", url: "https://alfredgauthier.com" }],
  creator: "Alfred Gauthier",
  publisher: "Alfred Gauthier",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://alfredgauthier.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    title: "Alfred Gauthier - Full Stack Developer",
    description:
      "Portfolio of Alfred Gauthier, Full Stack Developer specialized in AWS, Next.js, and Backend Architecture",
    url: "https://alfredgauthier.com",
    siteName: "Alfred Gauthier Portfolio",
    images: [
      {
        url: "/hero-bg1.jpg",
        width: 1200,
        height: 630,
        alt: "Alfred Gauthier - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alfred Gauthier - Full Stack Developer",
    description:
      "Portfolio of Alfred Gauthier, Full Stack Developer specialized in AWS, Next.js, and Backend Architecture",
    creator: "@alfgoto",
    images: ["/hero-bg1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/pp.jpg",
    shortcut: "/pp.jpg",
    apple: "/pp.jpg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/pp.jpg",
    },
  },
  category: "technology",
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
