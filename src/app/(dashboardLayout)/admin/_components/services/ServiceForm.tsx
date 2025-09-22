"use client";
import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Upload } from "lucide-react";
import { IService } from "@/types/service";

interface ServiceFormProps {
  service?: IService;
  onSubmit: (data: FormData) => void;
  onClose: () => void;
  isLoading: boolean;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ service, onSubmit, onClose, isLoading }) => {
  const [formData, setFormData] = useState<Partial<IService>>({
    serviceName: "",
    slug: "",
    description: "",
    shortDescription: "",
    category: "",
    pricing: { type: "Fixed", currency: "USD" },
    duration: "",
    features: [""],
    technologies: [""],
    deliverables: [""],
    requirements: [""],
    featured: false,
    popular: false,
    isActive: true,
    displayOrder: 0,
    seo: { metaTitle: "", metaDescription: "", keywords: [""] }
  });

  const [files, setFiles] = useState<{ serviceIcon?: File; serviceImage?: File }>({});

  useEffect(() => {
    if (service) {
      setFormData(service);
    }
  }, [service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("data", JSON.stringify(formData));
    if (files.serviceIcon) data.append("serviceIcon", files.serviceIcon);
    if (files.serviceImage) data.append("serviceImage", files.serviceImage);
    onSubmit(data);
  };

  const addArrayItem = (field: keyof IService) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), ""]
    }));
  };

  const removeArrayItem = (field: keyof IService, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }));
  };

  const updateArrayItem = (field: keyof IService, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item, i) => i === index ? value : item)
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">
            {service ? "Edit Service" : "Add New Service"}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Name</label>
              <input
                type="text"
                value={formData.serviceName}
                onChange={(e) => {
                  const name = e.target.value;
                  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  setFormData(prev => ({ ...prev, serviceName: name, slug }));
                }}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white h-32"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Short Description</label>
            <textarea
              value={formData.shortDescription}
              onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white h-20"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Pricing Type</label>
              <select
                value={formData.pricing?.type}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  pricing: { ...prev.pricing!, type: e.target.value as any }
                }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              >
                <option value="Fixed">Fixed</option>
                <option value="Hourly">Hourly</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Amount</label>
              <input
                type="number"
                value={formData.pricing?.amount || ""}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  pricing: { ...prev.pricing!, amount: Number(e.target.value) }
                }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="e.g., 2-3 weeks"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Icon</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFiles(prev => ({ ...prev, serviceIcon: e.target.files?.[0] }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Service Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFiles(prev => ({ ...prev, serviceImage: e.target.files?.[0] }))}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
          </div>

          {["features", "technologies", "deliverables"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{field}</label>
              {(formData[field as keyof IService] as string[])?.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateArrayItem(field as keyof IService, index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem(field as keyof IService, index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem(field as keyof IService)}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add {field.slice(0, -1)}
              </button>
            </div>
          ))}

          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                className="rounded"
              />
              Featured
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={formData.popular}
                onChange={(e) => setFormData(prev => ({ ...prev, popular: e.target.checked }))}
                className="rounded"
              />
              Popular
            </label>
            <label className="flex items-center gap-2 text-white">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                className="rounded"
              />
              Active
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? "Saving..." : service ? "Update Service" : "Create Service"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
