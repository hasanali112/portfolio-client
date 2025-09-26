"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface UpdateBlogFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  blog: any;
  isLoading: boolean;
}

const UpdateBlogForm: React.FC<UpdateBlogFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  blog, 
  isLoading 
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

  useEffect(() => {
    if (blog) {
      setContent(blog.content || "");
      setTags(blog.tags?.join(", ") || "");
      setCategory(blog.category || "Web Dev");
      setRecent(blog.recent || false);
      setPopular(blog.popular || false);
      setFeatured(blog.featured || false);
    }
  }, [blog]);

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

    onSubmit({ ...e, currentTarget: { ...e.currentTarget, blogData } } as any);
  };

  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Update Blog</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="topic"
              defaultValue={blog.topic}
              placeholder="Topic"
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
            defaultValue={blog.title}
            placeholder="Blog Title"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          
          <textarea
            name="description"
            defaultValue={blog.description}
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
              defaultValue={blog.slug}
              placeholder="URL Slug"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="readTime"
              defaultValue={blog.readTime}
              placeholder="Read Time"
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
              defaultValue={blog.author?.name}
              placeholder="Author Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="authorBio"
              defaultValue={blog.author?.bio}
              placeholder="Author Bio"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="metaTitle"
              defaultValue={blog.metaTitle}
              placeholder="Meta Title (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="metaDescription"
              defaultValue={blog.metaDescription}
              placeholder="Meta Description (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <div className="flex gap-4">
            <label className="flex items-center text-white">
              <input 
                name="recent" 
                type="checkbox" 
                checked={recent}
                onChange={(e) => setRecent(e.target.checked)}
                className="mr-2" 
              />
              Recent
            </label>
            <label className="flex items-center text-white">
              <input 
                name="popular" 
                type="checkbox" 
                checked={popular}
                onChange={(e) => setPopular(e.target.checked)}
                className="mr-2" 
              />
              Popular
            </label>
            <label className="flex items-center text-white">
              <input 
                name="featured" 
                type="checkbox" 
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="mr-2" 
              />
              Featured
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogForm;
