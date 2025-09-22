"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGetExperiences, useCreateExperience, useUpdateExperience, useDeleteExperience } from "@/hooks/useExperience";
import ExperienceList from "../_components/experience/ExperienceList";
import CreateExperienceForm from "../_components/experience/CreateExperienceForm";
import UpdateExperienceForm from "../_components/experience/UpdateExperienceForm";
import ExperienceDetail from "../_components/experience/ExperienceDetail";

const ExperiencePage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);

  const { data: experiencesData, isLoading } = useGetExperiences();
  const createMutation = useCreateExperience();
  const updateMutation = useUpdateExperience();
  const deleteMutation = useDeleteExperience();

  const experiences = experiencesData?.data || [];

  const handleCreate = (e: any) => {
    const formData = e.currentTarget.formData;
    createMutation.mutate(formData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (experienceData: any) => {
    updateMutation.mutate({ id: selectedExperience._id, data: experienceData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedExperience(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      deleteMutation.mutate(id);
    }
  };

  const openUpdateForm = (experience: any) => {
    setSelectedExperience(experience);
    setShowUpdateForm(true);
  };

  const openDetailView = (experience: any) => {
    setSelectedExperience(experience);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedExperience(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Experience Management</h1>
          <p className="text-gray-400">Manage your work experience and career history.</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {/* Experience List */}
      <ExperienceList 
        experiences={experiences}
        onEdit={openUpdateForm}
        onDelete={handleDelete}
        onViewDetail={openDetailView}
        isLoading={isLoading}
      />

      {/* Create Form */}
      <CreateExperienceForm
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreate}
        isLoading={createMutation.isPending}
      />

      {/* Update Form */}
      <UpdateExperienceForm
        isOpen={showUpdateForm}
        onClose={() => {
          setShowUpdateForm(false);
          setSelectedExperience(null);
        }}
        onSubmit={handleUpdate}
        experience={selectedExperience}
        isLoading={updateMutation.isPending}
      />

      {/* Detail View */}
      <ExperienceDetail
        isOpen={showDetailView}
        onClose={closeDetailView}
        experience={selectedExperience}
      />
    </div>
  );
};

export default ExperiencePage;
