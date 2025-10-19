"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Heart,
  Share2,
  Check,
  Shield,
  Truck,
  RotateCcw,
  X,
  Play,
  MessageCircle,
} from "lucide-react";

interface Product {
  _id: string;
  productName: string;
  description: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  totalReviews?: number;
  features?: string[];
  productImages?: string[];
  featured?: boolean;
  popular?: boolean;
  specifications?: { key: string; value: string }[];
  tags?: string[];
  demoVideoUrl?: string;
}

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const getVideoEmbedUrl = (url: string) => {
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    if (youtubeMatch) {
      return { type: 'iframe', url: `https://www.youtube.com/embed/${youtubeMatch[1]}` };
    }
    
    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return { type: 'iframe', url: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
    }
    
    // Direct video URL (mp4, webm, etc.)
    if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return { type: 'video', url };
    }
    
    // Default to iframe for other platforms
    return { type: 'iframe', url };
  };

  const finalPrice =
    product.discountPrice && product.discountPrice > 0
      ? product.price - (product.price * product.discountPrice) / 100
      : product.price;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628]">
      <div className="w-full max-w-[1400px] px-[10px] md:px-[25px] mx-auto py-20">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <span>Shop</span> / <span>{product.category}</span> /{" "}
          <span className="text-white">{product.productName}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50">
              {product.productImages?.[selectedImage] ? (
                <Image
                  src={product.productImages[selectedImage]}
                  alt={product.productName}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.productImages && product.productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-slate-700/50"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.productName} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <div className="flex gap-2 mb-2">
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

              <h1 className="text-3xl font-bold text-white mb-4">
                {product.productName}
              </h1>

              {(product.totalReviews ?? 0) > 0 ? (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">
                    ({product.totalReviews} reviews)
                  </span>
                </div>
              ) : (
                <p className="text-gray-400 mb-4">No reviews yet</p>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              {product.discountPrice && product.discountPrice > 0 ? (
                <>
                  <span className="text-4xl font-bold text-white">
                    ${finalPrice}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price}
                  </span>
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                    {product.discountPrice}% OFF
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-white">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white py-3 px-6 rounded-lg font-medium hover:from-[#0690d4] hover:to-[#04376b] transition-all flex items-center justify-center gap-2">
                  Contact Me
                </button>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="flex-1 border border-slate-700/50 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="p-3 border border-slate-700/50 text-gray-400 rounded-lg hover:bg-slate-700/50 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-slate-700/50 text-gray-400 rounded-lg hover:bg-slate-700/50 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-700/50">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <RotateCcw className="w-5 h-5 text-purple-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-lg p-8 border border-slate-700/30 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between py-2 border-b border-slate-700/30"
                >
                  <span className="text-gray-400">{spec.key}:</span>
                  <span className="text-white font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Product Demo</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black">
              {product.demoVideoUrl ? (
                (() => {
                  const videoData = getVideoEmbedUrl(product.demoVideoUrl);
                  return videoData.type === 'iframe' ? (
                    <iframe
                      src={videoData.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Product Demo Video"
                    />
                  ) : (
                    <video
                      controls
                      className="w-full h-full"
                      src={videoData.url}
                    >
                      Your browser does not support the video tag.
                    </video>
                  );
                })()
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>No demo video available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-8 z-[99999]">
        <a
          href="https://wa.me/01307034372?text=Hi! I'm interested in this product"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
          </svg>
          {/* Blinking notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default ProductDetailClient;
