import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/providers";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

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
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <SpeedInsights />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
