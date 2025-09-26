"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetBlogs, useUpdateBlog, useDeleteBlog } from "@/hooks/useBlogs";
import BlogList from "../_components/blog/BlogList";
import UpdateBlogForm from "../_components/blog/UpdateBlogForm";
import BlogDetail from "../_components/blog/BlogDetail";

const BlogsPage = () => {
  const router = useRouter();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const { data: blogsData, isLoading } = useGetBlogs();
  const updateMutation = useUpdateBlog();
  const deleteMutation = useDeleteBlog();

  const blogs = blogsData?.data || [];

  const handleUpdate = (e: any) => {
    const blogData = e.currentTarget.blogData;

    updateMutation.mutate({ id: selectedBlog._id, data: blogData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedBlog(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      deleteMutation.mutate(id);
    }
  };

  const openUpdateForm = (blog: any) => {
    setSelectedBlog(blog);
    setShowUpdateForm(true);
  };

  const openDetailView = (blog: any) => {
    setSelectedBlog(blog);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedBlog(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blog Management</h1>
          <p className="text-gray-400">Create and manage your blog posts.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => router.push('/admin/blogs/create')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Add Blog</span>
          </button>
          <button 
            onClick={() => router.push('/admin/blogs/create')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Visit Create Page
          </button>
        </div>
      </div>

      {/* Blog List */}
      <BlogList 
        blogs={blogs}
        onEdit={openUpdateForm}
        onDelete={handleDelete}
        onViewDetail={openDetailView}
        isLoading={isLoading}
      />

      {/* Update Form */}
      <UpdateBlogForm
        isOpen={showUpdateForm}
        onClose={() => {
          setShowUpdateForm(false);
          setSelectedBlog(null);
        }}
        onSubmit={handleUpdate}
        blog={selectedBlog}
        isLoading={updateMutation.isPending}
      />

      {/* Detail View */}
      <BlogDetail
        isOpen={showDetailView}
        onClose={closeDetailView}
        blog={selectedBlog}
      />
    </div>
  );
};

export default BlogsPage;
