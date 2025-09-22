"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGetTestimonials, useCreateTestimonial, useUpdateTestimonial, useDeleteTestimonial } from "@/hooks/useTestimonials";
import TestimonialList from "../_components/testimonial/TestimonialList";
import CreateTestimonialForm from "../_components/testimonial/CreateTestimonialForm";
import UpdateTestimonialForm from "../_components/testimonial/UpdateTestimonialForm";
import TestimonialDetail from "../_components/testimonial/TestimonialDetail";

const TestimonialPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

  const { data: testimonialsData, isLoading } = useGetTestimonials();
  const createMutation = useCreateTestimonial();
  const updateMutation = useUpdateTestimonial();
  const deleteMutation = useDeleteTestimonial();

  const testimonials = testimonialsData?.data || [];

  const handleCreate = (e: any) => {
    const formData = e.currentTarget.formData;
    createMutation.mutate(formData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (testimonialData: any) => {
    updateMutation.mutate({ id: selectedTestimonial._id, data: testimonialData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedTestimonial(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteMutation.mutate(id);
    }
  };

  const openUpdateForm = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setShowUpdateForm(true);
  };

  const openDetailView = (testimonial: any) => {
    setSelectedTestimonial(testimonial);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedTestimonial(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Testimonial Management</h1>
          <p className="text-gray-400">Manage client testimonials and reviews.</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      {/* Testimonial List */}
      <TestimonialList 
        testimonials={testimonials}
        onEdit={openUpdateForm}
        onDelete={handleDelete}
        onViewDetail={openDetailView}
        isLoading={isLoading}
      />

      {/* Create Form */}
      <CreateTestimonialForm
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreate}
        isLoading={createMutation.isPending}
      />

      {/* Update Form */}
      <UpdateTestimonialForm
        isOpen={showUpdateForm}
        onClose={() => {
          setShowUpdateForm(false);
          setSelectedTestimonial(null);
        }}
        onSubmit={handleUpdate}
        testimonial={selectedTestimonial}
        isLoading={updateMutation.isPending}
      />

      {/* Detail View */}
      <TestimonialDetail
        isOpen={showDetailView}
        onClose={closeDetailView}
        testimonial={selectedTestimonial}
      />
    </div>
  );
};

export default TestimonialPage;
