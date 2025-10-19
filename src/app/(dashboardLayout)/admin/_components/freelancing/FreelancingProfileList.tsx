"use client";

import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useGetFreelancingProfiles, useDeleteFreelancingProfile } from "@/hooks/useFreelancingProfiles";
import CreateFreelancingProfileForm from "./CreateFreelancingProfileForm";
import UpdateFreelancingProfileForm from "./UpdateFreelancingProfileForm";
import FreelancingProfileDetail from "./FreelancingProfileDetail";
import ConfirmationModal from "../ConfirmationModal";

const FreelancingProfileList = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const { data: profiles = [], isLoading } = useGetFreelancingProfiles({});
  const deleteProfileMutation = useDeleteFreelancingProfile();

  const handleEdit = (profile: any) => {
    setSelectedProfile(profile);
    setShowUpdateForm(true);
  };

  const handleDelete = (profile: any) => {
    setSelectedProfile(profile);
    setShowDeleteModal(true);
  };

  const handleViewDetail = (profile: any) => {
    setSelectedProfile(profile);
    setShowDetailModal(true);
  };

  const confirmDelete = () => {
    if (selectedProfile) {
      deleteProfileMutation.mutate(selectedProfile._id);
      setShowDeleteModal(false);
      setSelectedProfile(null);
    }
  };

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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">Freelancing Profiles</h2>
          <p className="text-gray-400">Manage your service offerings</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Profile
        </button>
      </div>

      {/* Profiles Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Links</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {profiles.map((profile: any) => (
                <tr key={profile._id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Image 
                        src={profile.gigImage} 
                        alt={profile.serviceName}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-white flex items-center gap-2">
                          {profile.serviceName}
                          {profile.platformLogo && (
                            <Image
                              src={profile.platformLogo}
                              alt="Platform"
                              width={16}
                              height={16}
                              className="w-4 h-4 object-contain bg-white rounded-sm p-0.5"
                            />
                          )}
                        </div>
                        <div className="text-sm text-gray-400">{profile.subcategory}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-300">{profile.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {profile.fiverr_link && (
                        <a href={profile.fiverr_link} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {profile.upwork_link && (
                        <a href={profile.upwork_link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {!profile.fiverr_link && !profile.upwork_link && (
                        <span className="text-gray-500 text-sm">No links</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-300">{profile.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({profile.reviews})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      profile.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {profile.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleViewDetail(profile)}
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(profile)}
                        className="p-2 text-yellow-400 hover:text-yellow-300 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(profile)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-lg transition-colors"
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

      {/* Modals */}
      {showCreateForm && (
        <CreateFreelancingProfileForm onClose={() => setShowCreateForm(false)} />
      )}

      {showUpdateForm && selectedProfile && (
        <UpdateFreelancingProfileForm
          profile={selectedProfile}
          onClose={() => {
            setShowUpdateForm(false);
            setSelectedProfile(null);
          }}
        />
      )}

      {showDetailModal && selectedProfile && (
        <FreelancingProfileDetail
          profile={selectedProfile}
          onClose={() => {
            setShowDetailModal(false);
            setSelectedProfile(null);
          }}
        />
      )}

      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
          title="Delete Freelancing Profile"
          message={`Are you sure you want to delete "${selectedProfile?.title}"? This action cannot be undone.`}
        />
      )}
    </div>
  );
};

export default FreelancingProfileList;
