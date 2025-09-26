"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AllBlog from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/AllBlog";
import BlogSideBar from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/BlogSideBar";
import BlogsClient from "@/app/(withcommonLayout)/_component/Home/Blog/allBlog/BlogsClient";
import Container from "@/component/ui/Container";

const Blog = () => {
  const searchParams = useSearchParams();
  const [totalPages, setTotalPages] = useState(5);
  const category = searchParams.get("category") || "All";
  const page = parseInt(searchParams.get("page") || "1");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="md:col-span-8 col-span-12">
            <BlogsClient totalPages={totalPages}>
              <AllBlog key={`${category}-${page}`} category={category} page={page} />
            </BlogsClient>
          </div>
          <div className="md:col-span-4 col-span-12 overflow-hidden">
            <BlogSideBar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
