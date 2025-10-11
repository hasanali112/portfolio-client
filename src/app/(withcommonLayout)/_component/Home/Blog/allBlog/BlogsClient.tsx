"use client";
import { useTransition, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BlogNavigation from "./BlogNavigation";
import BlogPagination from "./BlogPagination";

interface BlogsClientProps {
  children: React.ReactNode;
  totalPages: number;
}

const BlogsClient = ({ children, totalPages }: BlogsClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const currentPage = parseInt(searchParams.get('page') || '1');
  const currentCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('category', category);
      params.set('page', '1'); // Reset to page 1 when category changes
      router.push(`/blogs?${params.toString()}`);
    });
  };

  const handlePageChange = (page: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('page', page.toString());
      router.push(`/blogs?${params.toString()}`);
    });
  };

  return (
    <>
      <BlogNavigation
        onCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
        isLoading={isPending}
      />
      
      {children}
      
      {totalPages > 1 && (
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isLoading={isPending}
        />
      )}
    </>
  );
};

export default BlogsClient;
