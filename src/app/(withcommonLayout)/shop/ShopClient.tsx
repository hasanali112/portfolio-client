"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ShopHeader from "./components/ShopHeader";
import ShopSidebar from "./components/ShopSidebar";
import ProductCard from "./components/ProductCard";

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  totalReviews?: number;
  features?: string[];
  productImages?: string[];
  featured?: boolean;
  popular?: boolean;
}

interface ShopClientProps {
  products: Product[];
}

const ShopClient: React.FC<ShopClientProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showSidebar, setShowSidebar] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(products);
  const categories = [
    { name: "All", count: products.length },
    {
      name: "Websites",
      count: products.filter((p) => p.category === "Website").length,
    },
    {
      name: "Mobile Apps",
      count: products.filter((p) => p.category === "Mobile App").length,
    },
    {
      name: "Landing Pages",
      count: products.filter((p) => p.category === "Landing Page").length,
    },
    {
      name: "Bots",
      count: products.filter((p) => p.category === "Bot").length,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || 
      (selectedCategory === "Websites" && product.category === "Website") ||
      (selectedCategory === "Mobile Apps" && product.category === "Mobile App") ||
      (selectedCategory === "Landing Pages" && product.category === "Landing Page") ||
      (selectedCategory === "Bots" && product.category === "Bot");
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = !searchTerm || product.productName?.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  console.log(filteredProducts);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] pb-20">
      <div className="w-full max-w-[1400px] px-[10px] md:px-[25px] mx-auto">
        <ShopHeader />

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
            />
          </div>
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white rounded-lg hover:from-[#0690d4] hover:to-[#04376b] transition-all"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex gap-8 relative">
          <ShopSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-400 text-xl">
                    No products match your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-10 py-16 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/30 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Can&apos;t find exactly what you&apos;re looking for? I create
            custom digital solutions tailored to your specific needs and
            requirements.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white font-bold rounded-lg hover:from-[#0690d4] hover:to-[#04376b] transition-all duration-200 transform hover:scale-105">
            Request Custom Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopClient;
