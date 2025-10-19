"use client";

import React from "react";
import { Star, Clock, RefreshCw, ExternalLink } from "lucide-react";
import { useGetFeaturedProfiles } from "@/hooks/useFreelancingProfiles";
import Image from "next/image";

const FreelancingCards = () => {
  const { data: profiles = [], isLoading, error } = useGetFeaturedProfiles();

  console.log("Freelancing profiles data:", profiles);
  console.log("Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map((i) => (
          <div key={i} className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 animate-pulse">
            <div className="h-32 bg-gray-700 rounded mb-4"></div>
            <div className="h-6 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  // Show first 2 featured profiles
  const displayProfiles = profiles.slice(0, 2);

  if (displayProfiles.length === 0) {
    return (
      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Featured Services</h2>
          <p className="text-gray-400">No featured services available at the moment</p>
        </div>
      </div>
    );
  }

  const handleViewDetails = (profile: any) => {
    if (profile.fiverr_link) {
      window.open(profile.fiverr_link, '_blank');
    } else if (profile.upwork_link) {
      window.open(profile.upwork_link, '_blank');
    }
  };

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Featured Services</h2>
        <p className="text-gray-400">Professional freelancing services available</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {displayProfiles.map((profile: any) => (
          <div
            key={profile._id}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
            onClick={() => handleViewDetails(profile)}
          >
            {/* Gig Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={profile.gigImage}
                alt={profile.serviceName}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {profile.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center bg-black/50 px-2 py-1 rounded-full">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-white text-sm">{profile.rating}</span>
                <span className="text-gray-300 text-xs ml-1">({profile.reviews})</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Service Name */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {profile.serviceName}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {profile.description}
              </p>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-800/50 rounded-lg">
                <div className="text-center">
                  <Clock className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Delivery</div>
                  <div className="text-sm font-semibold text-white">
                    {profile.deliveryTime} days
                  </div>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-4 h-4 text-green-400 mx-auto mb-1" />
                  <div className="text-xs text-gray-400">Revisions</div>
                  <div className="text-sm font-semibold text-white">
                    {profile.revisions}
                  </div>
                </div>
              </div>

              {/* View Details Button */}
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 flex items-center justify-center gap-2">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancingCards;
