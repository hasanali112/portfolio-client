import React from "react";
import Image from "next/image";
import { Edit, Trash2, Eye, Building, Calendar } from "lucide-react";

interface ExperienceListProps {
  experiences: any[];
  onEdit: (experience: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (experience: any) => void;
  isLoading: boolean;
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences, onEdit, onDelete, onViewDetail, isLoading }) => {
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

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Position</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {experiences.map((experience: any) => (
              <tr key={experience._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {experience.companyLogo && (
                      <Image 
                        src={experience.companyLogo} 
                        alt={experience.companyName}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{experience.jobTitle}</div>
                      <div className="text-xs text-gray-400 flex items-center mt-1">
                        <Building className="w-3 h-3 mr-1" />
                        {experience.companyName} • {experience.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                    {formatDate(experience.startDate)} - {
                      experience.isCurrentJob ? 'Present' : 
                      experience.endDate ? formatDate(experience.endDate) : 'Present'
                    }
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                    {experience.employmentType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    {experience.isCurrentJob && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Current</span>
                    )}
                    {experience.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Featured</span>
                    )}
                    {experience.showOnResume && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Resume</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(experience)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(experience)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Experience"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(experience._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Experience"
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

export default ExperienceList;
