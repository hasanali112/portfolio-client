"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCreateBlog } from "@/hooks/useBlogs";
import CreateBlogForm from "../../_components/blog/CreateBlogForm";

const CreateBlogPage = () => {
  const router = useRouter();
  const createMutation = useCreateBlog();

  const handleCreate = (e: any) => {
    const formData = e.currentTarget.formData;
    createMutation.mutate(formData, {
      onSuccess: () => {
        router.push("/admin/blogs");
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => router.back()}
          className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Create New Blog</h1>
          <p className="text-gray-400">Write and publish a new blog post.</p>
        </div>
      </div>

      {/* Create Form */}
      <div className="bg-gray-800/50 rounded-lg p-6">
        <CreateBlogForm
          isOpen={true}
          onClose={() => router.push("/admin/blogs")}
          onSubmit={handleCreate}
          isLoading={createMutation.isPending}
          isPage={true}
        />
      </div>
    </div>
  );
};

export default CreateBlogPage;
