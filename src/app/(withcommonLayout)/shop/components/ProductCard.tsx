"use client";

import { Star, ExternalLink, Smartphone, Bot, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  productName: string;
  productImages?: string[];
  category: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  totalReviews?: number;
  features?: string[];
  featured?: boolean;
  popular?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "w-16 h-16 mx-auto mb-2" };

    switch (category) {
      case "Website":
        return (
          <Globe
            {...iconProps}
            className={`${iconProps.className} text-blue-400`}
          />
        );
      case "Mobile App":
        return (
          <Smartphone
            {...iconProps}
            className={`${iconProps.className} text-green-400`}
          />
        );
      case "Landing Page":
        return (
          <ExternalLink
            {...iconProps}
            className={`${iconProps.className} text-purple-400`}
          />
        );
      case "Bot":
        return (
          <Bot
            {...iconProps}
            className={`${iconProps.className} text-orange-400`}
          />
        );
      default:
        return (
          <Globe
            {...iconProps}
            className={`${iconProps.className} text-gray-400`}
          />
        );
    }
  };

  const calculateDiscountedPrice = () => {
    if (!product.discountPrice || product.discountPrice <= 0) {
      return product.price;
    }
    return product.price - (product.price * product.discountPrice) / 100;
  };

  const renderRating = () => {
    if (!product.totalReviews || product.totalReviews <= 0) return null;

    const rating = product.rating || 0;
    const filledStars = Math.floor(rating);

    return (
      <>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < filledStars
                  ? "text-yellow-400 fill-current"
                  : "text-gray-600"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400">
          {rating.toFixed(1)} ({product.totalReviews} reviews)
        </span>
      </>
    );
  };

  const discountedPrice = calculateDiscountedPrice();
  const hasDiscount = product.discountPrice && product.discountPrice > 0;

  return (
    <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer">
      <Link href={`/shop/${product._id}`}>
        <div className="relative h-48 overflow-hidden">
          {product.productImages?.[0] ? (
            <Image
              src={product.productImages[0]}
              alt={product.productName}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center">
                {getCategoryIcon(product.category)}
                <p className="text-gray-300 text-sm">{product.category}</p>
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {product.popular && (
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                POPULAR
              </span>
            )}
            {product.featured && (
              <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full">
                FEATURED
              </span>
            )}
          </div>

          {hasDiscount && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                {product.discountPrice}% OFF
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
            {product.productName}
          </h3>

          <div className="flex items-center gap-2 mb-3">{renderRating()}</div>

          <ul className="text-sm text-gray-400 mb-6 space-y-1">
            {product.features?.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 line-clamp-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">
                ${discountedPrice}
              </span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              )}
            </div>
            <span className="text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
