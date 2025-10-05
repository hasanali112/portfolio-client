"use client";

import {
  ShoppingCart,
  Users,
  Award,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const ShopHeader = () => {
  return (
    <section className="py-20 px-4">
      <div className="w-full max-w-[1400px] px-[10px] md:px-[25px] mx-auto">
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span>Digital Marketplace</span>
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready-to-Launch
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">
                Digital Solutions
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Skip months of development time. Get professional websites, mobile
            apps, and digital solutions that are ready to deploy and start
            generating revenue immediately.
          </p>

          <button className="px-6 py-3 rounded-full border border-gray-500/30 text-gray-400 text-sm flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Explore Premium Products</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-12">
              <p className="text-gray-300 text-lg mb-6">
                Professional{" "}
                <span className="text-white font-semibold">
                  digital products
                </span>{" "}
                designed to help your business succeed online.
              </p>
              <p className="text-gray-300 mb-8">
                Here&apos;s what makes our solutions different:
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Complete source code with full ownership rights</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Professional designs optimized for conversions</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>Mobile-responsive and SEO-optimized solutions</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>30-day money-back guarantee on all products</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>24/7 technical support and documentation</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-lg border border-gray-700/30">
              <Users className="w-8 h-8 text-gray-400 mb-4" />
              <div className="text-2xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-lg border border-gray-700/30">
              <Award className="w-8 h-8 text-gray-400 mb-4" />
              <div className="text-2xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-gray-400">Products Available</div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-lg border border-gray-700/30 col-span-2">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  99% Success Rate
                </div>
                <div className="text-sm text-gray-400">
                  Customer satisfaction guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
