"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AllBlog from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/AllBlog";
import BlogSideBar from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/BlogSideBar";
import BlogsClient from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/BlogsClient";
import Container from "@/component/ui/Container";

const BlogsContent = () => {
  const searchParams = useSearchParams();
  const [totalPages, setTotalPages] = useState(5);
  const category = searchParams.get("category") || "All";
  const page = parseInt(searchParams.get("page") || "1");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20">
      <Container>
        <div className="w-full">
          <div className="text-center mb-16">
            <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
              <span className="text-xs">&lt;/&gt;</span>
              <span>My Blog Space</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blogs That Inspire
              <span className="relative inline-block py-2 ml-2">
                <span className="relative z-10 tracking-wider">Developers</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Welcome to my digital showcase — where I share blogs,
              experiments, and discoveries from my journey as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <BlogsClient totalPages={totalPages}>
                <AllBlog
                  key={`${category}-${page}`}
                  category={category}
                  page={page}
                />
              </BlogsClient>
            </div>
            <div className="lg:col-span-1">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogsContent;
