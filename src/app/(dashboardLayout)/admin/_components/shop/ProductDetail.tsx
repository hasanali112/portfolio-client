import React from "react";
import Image from "next/image";
import { X, DollarSign, Package, Star } from "lucide-react";

interface ProductDetailProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{product.productName}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Images */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Product Images</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.productImages?.map((image: string, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.productName} ${index + 1}`}
                  width={128}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg border border-gray-700"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Pricing</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-green-400">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xl font-bold">{product.price}</span>
                </div>
                {product.discountPrice && (
                  <div className="flex items-center gap-1 text-blue-400">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-lg">Discount: {product.discountPrice}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Stock Info</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span className="text-white">{product.stockQuantity} units</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${
                  product.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">Specifications</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec: any, index: number) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{spec.key}:</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Status & Tags */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Status & Tags</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
              {product.category}
            </span>
            {product.featured && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Featured</span>
            )}
            {product.popular && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Popular</span>
            )}
            {!product.isActive && (
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">Inactive</span>
            )}
          </div>
          
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* SEO Info */}
        {(product.metaTitle || product.metaDescription) && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-3">SEO Information</h3>
            <div className="bg-gray-800 p-4 rounded-lg space-y-2">
              {product.metaTitle && (
                <div>
                  <span className="text-gray-400 text-sm">Meta Title:</span>
                  <p className="text-white">{product.metaTitle}</p>
                </div>
              )}
              {product.metaDescription && (
                <div>
                  <span className="text-gray-400 text-sm">Meta Description:</span>
                  <p className="text-white">{product.metaDescription}</p>
                </div>
              )}
              <div>
                <span className="text-gray-400 text-sm">Slug:</span>
                <p className="text-white">/{product.slug}</p>
              </div>
            </div>
          </div>
        )}

        {/* Timestamps */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Created:</span>
              <span className="text-white ml-2">
                {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Last Updated:</span>
              <span className="text-white ml-2">
                {new Date(product.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
