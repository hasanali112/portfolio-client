import { Metadata } from "next";
import ShopClient from "./ShopClient";
import { getAllProducts } from "@/services/shopService";

export const metadata: Metadata = {
  title: "Shop | Premium Web Templates & UI Kits for Service Businesses",
  description:
    "Browse Hasan Ali's premium web templates, UI kits, and starter packs. Built with Next.js, React & TypeScript — SEO-optimized and ready to launch for service businesses, startups, and agencies.",
  keywords: [
    // Template discovery
    "web templates",
    "Next.js templates",
    "React templates",
    "TypeScript website themes",
    "buy Next.js theme",
    "premium web templates",
    "UI kit for web developers",
    "website starter pack",

    // Niche
    "freelancer web developer",
    "hotlancer",
    "website templates for service business",
    "web templates for small business",
    "website theme for local business",

    // Value
    "affordable web templates",
    "professional website templates",
    "SEO-optimized website templates",
  ],
  openGraph: {
    title: "Shop | Hasan Ali - Premium Web Templates & UI Kits",
    description:
      "Premium Next.js & React templates built for service businesses. SEO-optimized and ready to launch.",
    url: "https://mdhasanalikhan.vercel.app/shop",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hasan Ali - Premium Web Templates Shop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Hasan Ali - Premium Web Templates",
    description:
      "Premium Next.js & React templates for service businesses. SEO-optimized and ready to deploy.",
    images: ["/og-cover.jpg"],
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app/shop",
  },
};

const Shop = async () => {
  let shopData;
  try {
    shopData = await getAllProducts();
  } catch (error) {
    console.error("Error fetching shop data:", error);
  }

  const products = shopData?.data || [];

  return <ShopClient products={products} />;
};

export default Shop;
