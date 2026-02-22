import ProductDetailClient from "./ProductDetailClient";
import { getProductById } from "@/services/shopService";

import { Metadata } from "next";


interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  try {
    const productData = await getProductById(id);
    const product = productData?.data;

    const description = product?.description
      ? product.description.substring(0, 155)
      : "Explore professional web templates by Hasan Ali, a freelance web developer.";

    return {
      title: product?.name
        ? `${product.name} | Hasan Ali Templates`
        : "Shop | Hasan Ali - Freelance Web Developer",
      description,
      keywords: [
        "freelancer web developer",
        "hotlancer",
        "Next.js templates",
        "React templates",
        "web development templates",
        product?.category || "web template",
      ],
      openGraph: {
        title: product?.name || "Premium Web Templates | Hasan Ali",
        description,
        url: `https://mdhasanalikhan.vercel.app/shop/${id}`,
        images: [
          {
            url: "/og-cover.jpg",
            width: 1200,
            height: 628,
            alt: product?.name || "Premium Web Template",
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: product?.name || "Premium Web Templates | Hasan Ali",
        description,
        images: ["/og-cover.jpg"],
        creator: "@hasan_ali_dev",
      },
      alternates: {
        canonical: `https://mdhasanalikhan.vercel.app/shop/${id}`,
      },
    };
  } catch (error) {
    return {
      title: "Shop Templates | Hasan Ali - Freelance Web Developer",
      description:
        "Browse premium Next.js and React web templates by Hasan Ali, a freelance web developer.",
      keywords: [
        "freelancer web developer",
        "hotlancer",
        "Next.js templates",
        "React templates",
      ],
      openGraph: {
        title: "Shop | Hasan Ali - Premium Web Templates",
        description: "Premium web templates built with Next.js and React.",
        images: [{ url: "/og-cover.jpg", width: 1200, height: 628, alt: "Hasan Ali Templates" }],
      },
    };
  }
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { id } = await params;
  let productData;
  try {
    productData = await getProductById(id);
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  const product = productData?.data;

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400">The product you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
