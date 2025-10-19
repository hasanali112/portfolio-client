"use client";

import Link from "next/link";
import ReButton from "@/component/Button/ReButton";
import {
  ShoppingCart,
  Users,
  Award,
  CheckCircle,
  Sparkles,
  ClipboardList,
  Code,
} from "lucide-react";

const ShopHeader = () => {
  return (
    <section className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700/50 bg-gray-900/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-100 text-sm font-medium">
              Developer Resources & Tools
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            Shop Premium
            <br />
            Digital Products
          </h1>

          {/* Description */}
          <p className="text-gray-200/80 text-lg leading-relaxed max-w-xl">
            Browse our collection of premium templates, UI components, and
            digital assets. High-quality products designed to save you time and
            elevate your projects.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/hire-me">
              <ReButton
                title="Request Custom Request"
                icon={<ClipboardList className="w-5 h-5" />}
                className="h-[45px] rounded-full"
              />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-gray-300/70 text-sm">Verified Quality</div>
              <div className="text-gray-400/60 text-xs">
                All products thoroughly tested
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-gray-300/70 text-sm">Instant Delivery</div>
              <div className="text-gray-400/60 text-xs">
                Download immediately after purchase
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-1">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-gray-300/70 text-sm">Support</div>
              <div className="text-gray-400/60 text-xs">
                Always here to help you succeed
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block ml-auto">
          {/* Product Showcase */}
          <div className="relative w-80 h-96">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-gray-500/10 to-blue-500/10 rounded-3xl blur-2xl animate-pulse"></div>

            {/* Main Product Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-gray-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="h-32 bg-gradient-to-r from-blue-600/20 via-gray-600/20 to-blue-600/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>
                  <Code
                    className="w-16 h-16 text-blue-400 group-hover:text-gray-400 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-blue-500/30 to-gray-500/30 rounded w-3/4 animate-pulse"></div>
                  <div className="h-2 bg-gradient-to-r from-gray-500/20 to-blue-500/20 rounded w-1/2 animate-pulse delay-100"></div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="h-2 bg-gradient-to-r from-blue-500/20 to-gray-500/20 rounded w-1/4 animate-pulse delay-200"></div>
                    <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-gray-500/20 text-blue-400 text-xs rounded-full animate-bounce delay-300 border border-blue-400/30">
                      Premium
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Product Card */}
            <div className="absolute top-8 -right-4 w-48 h-64 bg-gradient-to-br from-slate-700/90 to-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-gray-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="h-20 bg-gradient-to-r from-blue-600/20 to-gray-600/20 rounded mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse delay-500"></div>
                  <Award
                    className="w-8 h-8 text-blue-400 group-hover:text-gray-400 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-blue-500/30 to-gray-500/30 rounded w-full animate-pulse delay-300"></div>
                  <div className="h-2 bg-gradient-to-r from-gray-500/20 to-blue-500/20 rounded w-2/3 animate-pulse delay-500"></div>
                </div>
              </div>
            </div>

            {/* Floating Price Tags with Glow */}
            <div className="absolute -top-2 left-8 px-3 py-1 bg-gradient-to-r from-blue-500 to-gray-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-blue-500/50 animate-bounce">
              $29
            </div>
            <div className="absolute bottom-4 -left-4 px-3 py-1 bg-gradient-to-r from-gray-500 to-blue-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-blue-500/50 animate-bounce delay-1000">
              $49
            </div>

            {/* Enhanced Floating Particles */}
            <div className="absolute top-4 right-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
            <div className="absolute bottom-8 left-12 w-4 h-4 bg-gradient-to-r from-gray-400 to-blue-400 rounded-full animate-pulse delay-700 shadow-lg shadow-blue-400/50"></div>
            <div className="absolute top-16 left-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full animate-bounce delay-1000 shadow-lg shadow-blue-400/50"></div>
            <div className="absolute top-32 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-1500 shadow-lg shadow-yellow-400/50"></div>

            {/* Orbiting Elements */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div
                className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-spin origin-bottom shadow-lg shadow-blue-400/50"
                style={{ animationDuration: "8s" }}
              ></div>
              <div
                className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-spin origin-bottom shadow-lg shadow-blue-400/50"
                style={{
                  animationDuration: "12s",
                  animationDirection: "reverse",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
