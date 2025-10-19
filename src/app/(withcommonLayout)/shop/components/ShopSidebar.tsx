"use client";

import { X } from "lucide-react";

interface Category {
  name: string;
  count: number;
}

interface ShopSidebarProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = ({
  showSidebar,
  setShowSidebar,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) => {
  return (
    <>
      <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} fixed md:relative md:translate-x-0 top-0 left-0 w-80 h-screen md:h-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-r border-slate-700/50 p-6 transition-transform duration-300 z-30 overflow-y-auto`}>
        <button
          onClick={() => setShowSidebar(false)}
          className="md:hidden absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-6">Filters</h3>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white"
                    : "text-gray-400 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  <span className="text-sm">({category.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Price Range</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="Min"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Sort By</h4>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {showSidebar && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
};

export default ShopSidebar;
