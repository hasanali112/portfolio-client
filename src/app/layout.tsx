import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/providers";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import { Sora } from "next/font/google";

const inter = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasan Ali - Portfolio Website",
  description: "Modern MERN Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
