"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import ServicesList from "../_components/services/ServicesList";
import ServiceForm from "../_components/services/ServiceForm";
import ServiceDetailModal from "../_components/services/ServiceDetailModal";
import { useGetServices, useCreateService, useUpdateService, useDeleteService } from "@/hooks/useServices";
import { IService } from "@/types/service";

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingService, setEditingService] = useState<IService | undefined>();
  const [viewingService, setViewingService] = useState<IService | undefined>();

  const { data: servicesData, isLoading } = useGetServices();
  const createMutation = useCreateService();
  const updateMutation = useUpdateService();
  const deleteMutation = useDeleteService();

  const services = servicesData?.data || [];

  const handleCreate = (data: FormData) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        setShowForm(false);
      }
    });
  };

  const handleUpdate = (data: FormData) => {
    if (editingService?._id) {
      updateMutation.mutate({ id: editingService._id, data }, {
        onSuccess: () => {
          setShowForm(false);
          setEditingService(undefined);
        }
      });
    }
  };

  const handleEdit = (service: IService) => {
    setEditingService(service);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleViewDetail = (service: IService) => {
    setViewingService(service);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingService(undefined);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Services Management</h1>
          <p className="text-gray-400">Manage your services and offerings.</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </button>
      </div>

      <ServicesList
        services={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetail={handleViewDetail}
        isLoading={isLoading}
      />

      {showForm && (
        <ServiceForm
          service={editingService}
          onSubmit={editingService ? handleUpdate : handleCreate}
          onClose={handleCloseForm}
          isLoading={createMutation.isPending || updateMutation.isPending}
        />
      )}

      {viewingService && (
        <ServiceDetailModal
          service={viewingService}
          onClose={() => setViewingService(undefined)}
        />
      )}
    </div>
  );
};

export default ServicesPage;
