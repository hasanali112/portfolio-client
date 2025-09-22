import React from "react";
import Image from "next/image";
import { X, Star, Building, Mail, Globe, Calendar, User } from "lucide-react";

interface TestimonialDetailProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: any;
}

const TestimonialDetail: React.FC<TestimonialDetailProps> = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen || !testimonial) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Testimonial Details</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Client Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg space-y-4">
              {testimonial.clientImage && (
                <Image
                  src={testimonial.clientImage}
                  alt={testimonial.clientName}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
              )}
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white">{testimonial.clientName}</h3>
                <p className="text-gray-400">{testimonial.clientTitle}</p>
                <p className="text-blue-400 flex items-center justify-center gap-1 mt-1">
                  <Building className="w-4 h-4" />
                  {testimonial.clientCompany}
                </p>
              </div>

              <div className="space-y-2 text-sm">
                {testimonial.clientEmail && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${testimonial.clientEmail}`} className="text-blue-400 hover:text-blue-300">
                      {testimonial.clientEmail}
                    </a>
                  </div>
                )}
                
                {testimonial.clientWebsite && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <a href={testimonial.clientWebsite} target="_blank" className="text-blue-400 hover:text-blue-300">
                      Website
                    </a>
                  </div>
                )}

                {testimonial.clientLinkedIn && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <a href={testimonial.clientLinkedIn} target="_blank" className="text-blue-400 hover:text-blue-300">
                      LinkedIn
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-white">
                    {new Date(testimonial.dateReceived).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Rating</h3>
              <div className="flex items-center space-x-2">
                {renderStars(testimonial.rating)}
                <span className="text-white font-medium">({testimonial.rating}/5)</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Testimonial</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.testimonialText}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Service Type</h3>
                <p className="text-gray-300">{testimonial.serviceType}</p>
              </div>
              
              {testimonial.projectName && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Project Name</h3>
                  <p className="text-gray-300">{testimonial.projectName}</p>
                </div>
              )}
            </div>

            {testimonial.projectDuration && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Project Duration</h3>
                <p className="text-gray-300">{testimonial.projectDuration}</p>
              </div>
            )}
          </div>
        </div>

        {/* Status & Settings */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {testimonial.featured && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Featured</span>
            )}
            {testimonial.showOnHomepage && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Show on Homepage</span>
            )}
            {testimonial.isApproved && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Approved</span>
            )}
            {testimonial.isPublic && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Public</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Display Order:</span>
              <span className="text-white ml-2">{testimonial.displayOrder}</span>
            </div>
            <div>
              <span className="text-gray-400">Created:</span>
              <span className="text-white ml-2">
                {new Date(testimonial.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetail;
