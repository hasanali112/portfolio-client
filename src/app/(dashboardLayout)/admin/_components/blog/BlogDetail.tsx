import React from "react";
import Image from "next/image";
import { X, User, Clock, Eye, Heart, MessageCircle } from "lucide-react";

interface BlogDetailProps {
  isOpen: boolean;
  onClose: () => void;
  blog: any;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ isOpen, onClose, blog }) => {
  if (!isOpen || !blog) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Blog Image */}
          <Image
            src={blog.blogImage}
            alt={blog.title}
            width={800}
            height={256}
            className="w-full h-64 object-cover rounded-lg"
          />

          {/* Blog Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {blog.author?.name}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.readTime || "5 min read"}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {blog.views || 0} views
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {blog.likes || 0} likes
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              {blog.comments || 0} comments
            </div>
          </div>

          {/* Topic & Status */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
              {blog.topic}
            </span>
            {blog.featured && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Featured</span>
            )}
            {blog.popular && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Popular</span>
            )}
            {blog.recent && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Recent</span>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <p className="text-gray-300">{blog.description}</p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Content</h3>
            <div 
              className="text-gray-300 bg-gray-800 p-4 rounded-lg prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string, index: number) => (
                  <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SEO Info */}
          {(blog.metaTitle || blog.metaDescription) && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">SEO Information</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2">
                {blog.metaTitle && (
                  <div>
                    <span className="text-gray-400 text-sm">Meta Title:</span>
                    <p className="text-white">{blog.metaTitle}</p>
                  </div>
                )}
                {blog.metaDescription && (
                  <div>
                    <span className="text-gray-400 text-sm">Meta Description:</span>
                    <p className="text-white">{blog.metaDescription}</p>
                  </div>
                )}
                <div>
                  <span className="text-gray-400 text-sm">Slug:</span>
                  <p className="text-white">/{blog.slug}</p>
                </div>
              </div>
            </div>
          )}

          {/* Author Info */}
          {blog.author && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Author</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white font-medium">{blog.author.name}</p>
                {blog.author.bio && (
                  <p className="text-gray-300 text-sm mt-1">{blog.author.bio}</p>
                )}
              </div>
            </div>
          )}

          {/* Timestamps */}
          <div className="pt-4 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Created:</span>
                <span className="text-white ml-2">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Last Updated:</span>
                <span className="text-white ml-2">
                  {new Date(blog.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
