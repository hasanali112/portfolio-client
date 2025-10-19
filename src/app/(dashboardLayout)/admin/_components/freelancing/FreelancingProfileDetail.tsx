"use client";

import React from "react";
import { X, Star, Clock, RefreshCw, ExternalLink, Tag } from "lucide-react";
import Image from "next/image";

interface FreelancingProfileDetailProps {
  profile: any;
  onClose: () => void;
}

const FreelancingProfileDetail: React.FC<FreelancingProfileDetailProps> = ({ profile, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Profile Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Gig Image */}
          {profile.gigImage && (
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={profile.gigImage}
                alt={profile.serviceName}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Header Info */}
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-2xl font-bold text-white mb-2">{profile.serviceName}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {profile.category}
              </span>
              <span>{profile.subcategory}</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span>{profile.rating}</span>
                <span className="ml-1">({profile.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-gray-300">{profile.description}</p>
          </div>

          {/* Platform Links */}
          {(profile.fiverr_link || profile.upwork_link || profile.platformLogo) && (
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-4">Platform Information</h4>
              
              {profile.platformLogo && (
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Platform Logo</div>
                  <Image
                    src={profile.platformLogo}
                    alt="Platform Logo"
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain bg-white rounded-lg p-2"
                  />
                </div>
              )}
              
              <div className="flex gap-4">
                {profile.fiverr_link && (
                  <a
                    href={profile.fiverr_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Fiverr
                  </a>
                )}
                {profile.upwork_link && (
                  <a
                    href={profile.upwork_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Upwork
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Package Info */}
          <div className="border border-gray-700 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-white mb-4">Service Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-sm text-gray-400">Delivery</div>
                  <div className="text-white font-semibold">{profile.deliveryTime} days</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-sm text-gray-400">Revisions</div>
                  <div className="text-white font-semibold">{profile.revisions}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="text-sm text-gray-400">Orders</div>
                  <div className="text-white font-semibold">{profile.totalOrders}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills - Remove this section */}

          {/* FAQs */}
          {profile.faqs && profile.faqs.length > 0 && (
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h4>
              <div className="space-y-4">
                {profile.faqs.map((faq: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium text-white mb-2">{faq.question}</div>
                    <div className="text-gray-300">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {profile.requirements && profile.requirements.length > 0 && (
            <div className="border border-gray-700 rounded-lg p-4">
              <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
              <ul className="space-y-2">
                {profile.requirements.map((req: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Status */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-800">
            <div className="flex gap-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                profile.isActive 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {profile.isActive ? 'Active' : 'Inactive'}
              </span>
              {profile.featured && (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <div className="text-sm text-gray-400">
              Created: {new Date(profile.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancingProfileDetail;
