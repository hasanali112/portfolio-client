"use client";
import { useMemo } from "react";
import { useGetBlogs } from "@/hooks/useBlogs";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

interface AllBlogProps {
  category?: string;
  page?: number;
}

const AllBlog = ({ category = "All", page = 1 }: AllBlogProps) => {
  const { data: blogData, isLoading } = useGetBlogs();

  const filteredBlogs = useMemo(() => {
    if (!blogData?.data) return [];

    let filtered = blogData.data;

    // Filter by category if not "All"
    if (category !== "All") {
      filtered = blogData.data.filter(
        (blog: IBlog) => blog.category === category
      );
    }

    // Pagination
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    return filtered.slice(startIndex, endIndex);
  }, [blogData, category, page]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (!filteredBlogs.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-400 text-lg">
          No blogs found for this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {filteredBlogs.map((blog: IBlog) => (
        <Link key={blog._id} href={`/blogs/${blog._id}`}>
          <article className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg overflow-hidden border relative border-slate-700/50 hover:border-gray-500/50 transition-all duration-300 hover:transform">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>

            <div className="relative h-48 overflow-hidden bg-gray-800">
              {blog.blogImage ? (
                <Image
                  src={blog.blogImage}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">No Image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                {blog.title.length > 50
                  ? blog.title.slice(0, 15) + "..."
                  : blog.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {blog.description}
              </p>

              <a
                href={`/blogs/${blog.slug}`}
                className="inline-block w-full px-4 py-2 rounded-lg bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center"
              >
                Read More →
              </a>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default AllBlog;
