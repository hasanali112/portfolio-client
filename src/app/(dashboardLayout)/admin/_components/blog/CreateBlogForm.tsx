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
  isPage?: boolean;
}

const CreateBlogForm: React.FC<CreateBlogFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  isLoading, 
  isPage = false 
}) => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("Web Dev");
  const [recent, setRecent] = useState(false);
  const [popular, setPopular] = useState(false);
  const [featured, setFeatured] = useState(false);

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
      category: category,
      slug: formData.get("slug"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      author: {
        name: formData.get("authorName"),
        bio: formData.get("authorBio")
      },
      recent: recent,
      popular: popular,
      featured: featured,
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
    setRecent(false);
    setPopular(false);
    setFeatured(false);
  };

  if (!isOpen && !isPage) return null;

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="topic"
          placeholder="Topic (e.g., Technology)"
          className="w-full p-3 bg-gray-800 text-white rounded-lg"
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 bg-gray-800 text-white rounded-lg"
          required
        >
          <option value="Web Dev">Web Dev</option>
          <option value="Mobile Dev">Mobile Dev</option>
          <option value="AI/ML">AI/ML</option>
          <option value="DevOps">DevOps</option>
          <option value="UI/UX">UI/UX</option>
        </select>
      </div>
      
      <input
        name="title"
        placeholder="Blog Title"
        className="w-full p-3 bg-gray-800 text-white rounded-lg"
        required
      />
      
      <textarea
        name="description"
        placeholder="Short Description"
        className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
        required
      />
      
      <div>
        <label className="block text-white mb-2 font-medium">Content</label>
        <div className="bg-white rounded-lg overflow-y-auto">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={quillModules}
            placeholder="Write your blog content here..."
            style={{ 
              height: isPage ? "1000px" : "400px", 
              marginBottom: "50px" 
            }}
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
        <label className="block text-white mb-2 font-medium">Tags (comma separated)</label>
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
        <label className="block text-white mb-2 font-medium">Blog Image</label>
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
      
      <div className="flex gap-6">
        <label className="flex items-center text-white">
          <input 
            name="recent" 
            type="checkbox" 
            className="mr-2" 
            checked={recent}
            onChange={(e) => setRecent(e.target.checked)}
          />
          Recent
        </label>
        <label className="flex items-center text-white">
          <input 
            name="popular" 
            type="checkbox" 
            className="mr-2" 
            checked={popular}
            onChange={(e) => setPopular(e.target.checked)}
          />
          Popular
        </label>
        <label className="flex items-center text-white">
          <input 
            name="featured" 
            type="checkbox" 
            className="mr-2" 
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          Featured
        </label>
      </div>
      
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
        >
          {isLoading ? "Creating..." : "Create Blog"}
        </button>
        {isPage && (
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );

  if (isPage) {
    return formContent;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Create New Blog</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>
        {formContent}
      </div>
    </div>
  );
};

export default CreateBlogForm;
