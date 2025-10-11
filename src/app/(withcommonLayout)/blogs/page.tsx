"use client";
import { Suspense } from "react";
import BlogsContent from "./BlogsContent";
import BlogLoadingSkeleton from "./BlogLoadingSkeleton";

const Blog = () => {
  return (
    <Suspense fallback={<BlogLoadingSkeleton />}>
      <BlogsContent />
    </Suspense>
  );
};

export default Blog;
