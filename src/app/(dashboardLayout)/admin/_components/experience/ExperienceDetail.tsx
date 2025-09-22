import React from "react";
import Image from "next/image";
import { X, Building, Calendar, MapPin, Globe, DollarSign } from "lucide-react";

interface ExperienceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  experience: any;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ isOpen, onClose, experience }) => {
  if (!isOpen || !experience) return null;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{experience.jobTitle}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 p-4 rounded-lg space-y-4">
              {experience.companyLogo && (
                <Image
                  src={experience.companyLogo}
                  alt={experience.companyName}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover mx-auto"
                />
              )}
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                  <Building className="w-4 h-4" />
                  {experience.companyName}
                </h3>
                <p className="text-gray-400 flex items-center justify-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" />
                  {experience.location}
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-white">
                    {formatDate(experience.startDate)} - {
                      experience.isCurrentJob ? 'Present' : 
                      experience.endDate ? formatDate(experience.endDate) : 'Present'
                    }
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                    {experience.employmentType}
                  </span>
                </div>

                {experience.companyWebsite && (
                  <a
                    href={experience.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    <Globe className="w-4 h-4" />
                    Company Website
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300">{experience.description}</p>
            </div>

            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.achievements && experience.achievements.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status & Settings */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.isCurrentJob && (
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Current Position</span>
            )}
            {experience.featured && (
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Featured</span>
            )}
            {experience.showOnResume && (
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Show on Resume</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Display Order:</span>
              <span className="text-white ml-2">{experience.displayOrder}</span>
            </div>
            <div>
              <span className="text-gray-400">Created:</span>
              <span className="text-white ml-2">
                {new Date(experience.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
