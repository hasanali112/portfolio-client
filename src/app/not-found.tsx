import React from "react";
import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import ReButton from "@/component/Button/ReButton";
import Container from "@/component/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0715] flex items-center justify-center p-4">
      <Container>
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] font-black text-white/5 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
                <Search className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto mb-12">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/">
              <ReButton
                title="Back to Home"
                icon={<Home className="w-5 h-5" />}
                className="h-14 rounded-full px-10 text-lg"
              />
            </Link>
            <Link href="/case-study">
              <ReButton
                title="View Case Studies"
                variant="outline"
                icon={<ArrowLeft className="w-5 h-5" />}
                className="h-14 rounded-full px-10 text-lg"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
