"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface CreateBlogFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ isOpen, onClose, onSubmit, isLoading }) => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const blogData = {
      topic: formData.get("topic"),
      title: formData.get("title"),
      description: formData.get("description"),
      content: content,
      slug: formData.get("slug"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      author: {
        name: formData.get("authorName"),
        bio: formData.get("authorBio")
      },
      recent: formData.get("recent") === "on",
      popular: formData.get("popular") === "on",
      featured: formData.get("featured") === "on",
      readTime: formData.get("readTime")
    };

    const finalFormData = new FormData();
    finalFormData.append("data", JSON.stringify(blogData));
    
    const blogImage = formData.get("blogImage") as File;
    if (blogImage) {
      finalFormData.append("blogImage", blogImage);
    }

    onSubmit({ ...e, currentTarget: { ...e.currentTarget, formData: finalFormData } } as any);
    setContent("");
    setTags("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Create New Blog</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="topic"
              placeholder="Topic (e.g., Technology)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="title"
              placeholder="Blog Title"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          
          <textarea
            name="description"
            placeholder="Short Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-20"
            required
          />
          
          <div>
            <label className="block text-white mb-2">Content</label>
            <div className="bg-white rounded-lg">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={quillModules}
                placeholder="Write your blog content here..."
                style={{ height: "300px", marginBottom: "50px" }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="slug"
              placeholder="URL Slug (e.g., my-blog-post)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="readTime"
              placeholder="Read Time (e.g., 5 min)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Tags (comma separated)</label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, javascript, web development"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="authorName"
              placeholder="Author Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="authorBio"
              placeholder="Author Bio"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div>
            <label className="block text-white mb-2">Blog Image</label>
            <input
              name="blogImage"
              type="file"
              accept="image/*"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="metaTitle"
              placeholder="Meta Title (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="metaDescription"
              placeholder="Meta Description (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div className="flex gap-4">
            <label className="flex items-center text-white">
              <input name="recent" type="checkbox" className="mr-2" />
              Recent
            </label>
            <label className="flex items-center text-white">
              <input name="popular" type="checkbox" className="mr-2" />
              Popular
            </label>
            <label className="flex items-center text-white">
              <input name="featured" type="checkbox" className="mr-2" />
              Featured
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Create Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
