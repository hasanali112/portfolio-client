"use client";
import React, { useState } from "react";
import { Plus, Edit, Trash2, User, Mail, MapPin, Globe } from "lucide-react";
import { useGetAbout, useCreateAbout, useUpdateAbout, useDeleteAbout } from "@/hooks/useAbout";
import AboutForm from "../_components/about/AboutForm";

const AboutPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const { data: aboutData, isLoading } = useGetAbout();
  const createMutation = useCreateAbout();
  const updateMutation = useUpdateAbout();
  const deleteMutation = useDeleteAbout();

  const about = aboutData?.data;

  const handleCreate = (formData: FormData) => {
    createMutation.mutate(formData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (aboutData: any) => {
    updateMutation.mutate({ id: about._id, data: aboutData }, {
      onSuccess: () => setShowUpdateForm(false)
    });
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete the about information?")) {
      deleteMutation.mutate(about._id);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-64 mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-96"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">About Management</h1>
          <p className="text-gray-400">Manage your personal information and bio.</p>
        </div>
        {!about && (
          <button 
            onClick={() => setShowCreateForm(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            <span>Create About</span>
          </button>
        )}
      </div>

      {/* About Information Display */}
      {about ? (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <img
                src={about.profileImage}
                alt={about.fullName}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">{about.fullName}</h2>
                <p className="text-blue-400 text-lg">{about.title}</p>
                <p className="text-gray-400">{about.yearsOfExperience} years of experience</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => setShowUpdateForm(true)}
                className="text-gray-400 hover:text-blue-400 transition-colors p-2"
                title="Edit About"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button 
                onClick={handleDelete}
                className="text-gray-400 hover:text-red-400 transition-colors p-2"
                title="Delete About"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Bio</h3>
                <p className="text-gray-300">{about.bio}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Mail className="w-4 h-4 text-gray-400" />
                    {about.email}
                  </div>
                  {about.phone && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <User className="w-4 h-4 text-gray-400" />
                      {about.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {about.location}
                  </div>
                  {about.website && (
                    <div className="flex items-center gap-2 text-gray-300">
                      <Globe className="w-4 h-4 text-gray-400" />
                      <a href={about.website} target="_blank" className="text-blue-400 hover:text-blue-300">
                        {about.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  {about.currentStatus}
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {about.specializations && about.specializations.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {about.specializations.map((spec: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {about.topSkills && about.topSkills.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Top Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {about.topSkills.map((skill: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {about.languages && about.languages.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
                  <div className="space-y-1">
                    {about.languages.map((lang: any, index: number) => (
                      <div key={index} className="flex justify-between text-gray-300">
                        <span>{lang.name}</span>
                        <span className="text-gray-400">{lang.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {about.socialLinks && about.socialLinks.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Social Links</h3>
                  <div className="space-y-1">
                    {about.socialLinks.map((link: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-400">{link.platform}:</span>
                        <a href={link.url} target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">
                          View Profile
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {about.hobbies && about.hobbies.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Hobbies</h3>
                  <div className="flex flex-wrap gap-2">
                    {about.hobbies.map((hobby: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {about.resume && (
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a
                href={about.resume}
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <User className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
          <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No About Information</h3>
          <p className="text-gray-400 mb-4">Create your about information to get started.</p>
          <button 
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create About Information
          </button>
        </div>
      )}

      {/* Create Form */}
      <AboutForm
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreate}
        isLoading={createMutation.isPending}
        mode="create"
      />

      {/* Update Form */}
      <AboutForm
        isOpen={showUpdateForm}
        onClose={() => setShowUpdateForm(false)}
        onSubmit={handleUpdate}
        about={about}
        isLoading={updateMutation.isPending}
        mode="update"
      />
    </div>
  );
};

export default AboutPage;
