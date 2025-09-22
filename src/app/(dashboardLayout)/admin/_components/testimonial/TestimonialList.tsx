import React from "react";
import Image from "next/image";
import { Edit, Trash2, Eye, Star, Building } from "lucide-react";

interface TestimonialListProps {
  testimonials: any[];
  onEdit: (testimonial: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (testimonial: any) => void;
  isLoading: boolean;
}

const TestimonialList: React.FC<TestimonialListProps> = ({ testimonials, onEdit, onDelete, onViewDetail, isLoading }) => {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Client</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {testimonials.map((testimonial: any) => (
              <tr key={testimonial._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {testimonial.clientImage && (
                      <Image 
                        src={testimonial.clientImage} 
                        alt={testimonial.clientName}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{testimonial.clientName}</div>
                      <div className="text-xs text-gray-400 flex items-center mt-1">
                        <Building className="w-3 h-3 mr-1" />
                        {testimonial.clientTitle} at {testimonial.clientCompany}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-gray-400 ml-2">({testimonial.rating})</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">{testimonial.serviceType}</div>
                  {testimonial.projectName && (
                    <div className="text-xs text-gray-400 mt-1">{testimonial.projectName}</div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 flex-wrap">
                    {testimonial.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Featured</span>
                    )}
                    {testimonial.showOnHomepage && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Homepage</span>
                    )}
                    {testimonial.isApproved && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Approved</span>
                    )}
                    {testimonial.isPublic && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Public</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(testimonial)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(testimonial)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Testimonial"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(testimonial._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Testimonial"
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

export default TestimonialList;
