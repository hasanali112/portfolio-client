"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search, SlidersHorizontal, MessageCircle } from "lucide-react";
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
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "Websites" && product.category === "Website") ||
      (selectedCategory === "Mobile Apps" &&
        product.category === "Mobile App") ||
      (selectedCategory === "Landing Pages" &&
        product.category === "Landing Page") ||
      (selectedCategory === "Bots" && product.category === "Bot");

    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch =
      !searchTerm ||
      product.productName?.toLowerCase().includes(searchTerm.toLowerCase());

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
          <Link href="/hire-me">
            <button className="px-8 py-4 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white font-bold rounded-lg hover:from-[#0690d4] hover:to-[#04376b] transition-all duration-200 transform hover:scale-105">
              Request Custom Quote
            </button>
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-20 right-16 z-[99999]">
        <a
          href="https://wa.me/+8801307034372?text=Hi! I'm interested in your digital products"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 relative"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
          </svg>
          {/* Blinking notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
        </a>
      </div>
    </div>
  );
};

export default ShopClient;
