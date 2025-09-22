import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mdhasanalikhan.vercel.app'),
  title: "Hasan Ali | Real Estate Website Developer & MERN Stack Expert",
  description:
    "Professional portfolio showcasing expertise in modern web/app development, responsive UI/UX design, and scalable full-stack solutions built with React, Node.js, and MongoDB.",
  keywords: [
    "web developer portfolio",
    "MERN stack developer",
    "full-stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "javascript developer",
    "html developer",
    "css developer",
    "frontend developer",
    "backend developer",
    "full-stack developer",
    "mern stack developer",
    "react.js developer",
    "ecommerce dev",
    "react-native developer",
    "mobile developer",
    "node.js developer",
    "mongodb developer",
    "responsive web design",
    "mobile app development",
    "portfolio website",
    "freelance developer",
  ],

  // Core SEO Tags
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

  // OpenGraph (AEO + Social Sharing)
  openGraph: {
    title: "Hasan Ali | Full-Stack Developer & MERN Stack Expert",
    description:
      "Expertise in building modern web applications, responsive interfaces, and scalable backend systems using cutting-edge technologies.",
    url: "https://mdhasanalikhan.vercel.app",
    siteName: "Hasan Ali Portfolio",
    images: [
      {
        url: "/og-cover.jpg", // 1200x628px recommended
        width: 1200,
        height: 628,
        alt: "Hasan Ali - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Cards (AEO + Engagement)
  twitter: {
    card: "summary_large_image",
    title: "Hasan Ali | Full-Stack Developer & MERN Stack Expert",
    description:
      "Building modern web applications with React, Node.js, and MongoDB. Explore my portfolio for project showcases and technical expertise.",
    images: ["/twitter-cover.jpg"], // 1200x675px recommended
    site: "@hasan_ali_dev",
    creator: "@hasan_ali_dev",
  },

  // Technical SEO
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
