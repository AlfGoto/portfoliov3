import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import type React from "react"; // Added import for React
import Script from "next/script";
import projects from "@/data/projects";
import { Analytics } from "@vercel/analytics/react";

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
    "Alfred",
    "Alfred Gauthier",
    "Gauthier Alfred",
    "portfolio",
    "Portfolio",
    ...projects.map((p) => p.name),
  ],
  authors: [{ name: "Alfred Gauthier", url: "https://alfredgauthier.com" }],
  creator: "Alfred Gauthier",
  publisher: "Alfred Gauthier",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL("https://alfredgauthier.com"),
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
        url: "/pp.jpg",
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
    images: ["/pp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/pp.ico",
    shortcut: "/pp.ico",
    apple: "/pp.ico",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/pp.ico",
      },
      {
        rel: "icon",
        url: "/pp.ico",
      },
    ],
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
      <Analytics />
      <Script
        id="json-ld-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Alfred Gauthier Portfolio",
            url: "https://alfredgauthier.com",
            author: {
              "@type": "Person",
              name: "Alfred Gauthier",
            },
          }),
        }}
      />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
