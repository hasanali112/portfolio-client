import React from "react";
import Image from "next/image";
import { Edit, Trash2, Eye, DollarSign } from "lucide-react";

interface ProductListProps {
  products: any[];
  onEdit: (product: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (product: any) => void;
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, onEdit, onDelete, onViewDetail, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {products.map((product: any) => (
              <tr key={product._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src={product.productImages?.[0]} 
                      alt={product.productName}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{product.productName}</div>
                      <div className="text-xs text-gray-400 mt-1">{product.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">
                    ${product.price}
                    {product.discountPrice && (
                      <span className="text-xs text-green-400 ml-2">
                        (${product.discountPrice})
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">
                    {product.stockQuantity}
                    <span className={`ml-2 px-2 py-1 rounded text-xs ${
                      product.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {product.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Featured</span>
                    )}
                    {product.popular && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Popular</span>
                    )}
                    {!product.isActive && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Inactive</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(product)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(product)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Product"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(product._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
