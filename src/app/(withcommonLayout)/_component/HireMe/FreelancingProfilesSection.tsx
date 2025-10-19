"use client";

import React from "react";
import {
  Star,
  Clock,
  RefreshCw,
  ExternalLink,
  BriefcaseBusiness,
} from "lucide-react";
import { useGetFeaturedProfiles } from "@/hooks/useFreelancingProfiles";
import Image from "next/image";
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";

const FreelancingProfilesSection = () => {
  const { data: profiles = [], isLoading, error } = useGetFeaturedProfiles();

  if (isLoading) {
    return (
      <div className="bg-gradient-to-b from-[#0d1b2a] to-[#0a1628] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready-to-Order Services
            </h2>
            <p className="text-gray-400 text-lg">Loading services...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleViewDetails = (profile: any) => {
    if (profile.fiverr_link) {
      window.open(profile.fiverr_link, "_blank");
    } else if (profile.upwork_link) {
      window.open(profile.upwork_link, "_blank");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0d1b2a] to-[#0a1628] py-20 px-6 md:px-12">
      <Container>
        <div className="text-center flex flex-col items-center justify-center px-6 md:px-12">
          <ReButton
            title="Let's Work Together"
            variant="outline"
            icon={<BriefcaseBusiness className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready-to-Order{" "}
            <span className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Skip the consultation and get started immediately with these
            pre-packaged services
          </p>
        </div>

        {profiles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {profiles.map((profile: any) => (
              <div
                key={profile._id}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative hover:border-white/30 transition-all duration-300 cursor-pointer"
                onClick={() => handleViewDetails(profile)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={profile.gigImage}
                    alt={profile.serviceName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                    {profile.serviceName}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {profile.description}
                  </p>

                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={profile.platformLogo}
                        alt={profile.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No services available at the moment
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default FreelancingProfilesSection;
