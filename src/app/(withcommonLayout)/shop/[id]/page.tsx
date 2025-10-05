import ProductDetailClient from "./ProductDetailClient";
import { getProductById } from "@/services/shopService";

interface ProductDetailPageProps {
  params: { id: string };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  let productData;
  try {
    productData = await getProductById(params.id);
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
