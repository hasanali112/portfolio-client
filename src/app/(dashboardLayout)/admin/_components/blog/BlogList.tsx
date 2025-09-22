import React from "react";
import Image from "next/image";
import { Edit, Trash2, ExternalLink, Eye } from "lucide-react";

interface BlogListProps {
  blogs: any[];
  onEdit: (blog: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (blog: any) => void;
  isLoading: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onEdit, onDelete, onViewDetail, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Blog</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Topic</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {blogs.map((blog: any) => (
              <tr key={blog._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <Image 
                      src={blog.blogImage} 
                      alt={blog.title}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-sm font-medium text-white">{blog.title}</div>
                      <div className="text-xs text-gray-400 mt-1">{blog.description?.substring(0, 50)}...</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                    {blog.topic}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {blog.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Featured</span>
                    )}
                    {blog.popular && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Popular</span>
                    )}
                    {blog.recent && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Recent</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(blog)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(blog)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Blog"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(blog._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Blog"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
