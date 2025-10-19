"use client";

import React, { useState, useEffect } from "react";
import { X, Upload } from "lucide-react";
import { useUpdateFreelancingProfile } from "@/hooks/useFreelancingProfiles";
import Image from "next/image";

interface UpdateFreelancingProfileFormProps {
  profile: any;
  onClose: () => void;
}

const UpdateFreelancingProfileForm: React.FC<
  UpdateFreelancingProfileFormProps
> = ({ profile, onClose }) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    category: "",
    subcategory: "",
    fiverr_link: "",
    upwork_link: "",
    isActive: true,
    featured: false,
    packages: {
      basic: {
        name: "Basic",
        description: "",
        price: 0,
        deliveryTime: 1,
        revisions: 1,
      },
    },
  });

  const [gigImageFile, setGigImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [platformLogoFile, setPlatformLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  const updateMutation = useUpdateFreelancingProfile();

  useEffect(() => {
    if (profile) {
      setFormData({
        serviceName: profile.serviceName || "",
        description: profile.description || "",
        category: profile.category || "",
        subcategory: profile.subcategory || "",
        fiverr_link: profile.fiverr_link || "",
        upwork_link: profile.upwork_link || "",
        isActive: profile.isActive ?? true,
        featured: profile.featured ?? false,
        packages: {
          basic: {
            name: profile.packages?.basic?.name || "Basic",
            description: profile.packages?.basic?.description || "",
            price: profile.packages?.basic?.price || 0,
            deliveryTime: profile.packages?.basic?.deliveryTime || 1,
            revisions: profile.packages?.basic?.revisions || 1,
          },
        },
      });

      // Set existing image previews
      if (profile.gigImage) {
        setImagePreview(profile.gigImage);
      }
      if (profile.platformLogo) {
        setLogoPreview(profile.platformLogo);
      }
    }
  }, [profile]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setGigImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPlatformLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updateData = {
      ...formData,
      ...(gigImageFile && { gigImageFile }),
      ...(platformLogoFile && { platformLogoFile }),
    };

    updateMutation.mutate(
      {
        id: profile._id,
        data: updateData,
      },
      {
        onSuccess: () => onClose(),
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">
            Update Freelancing Profile
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Service Name
              </label>
              <input
                type="text"
                value={formData.serviceName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceName: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, category: e.target.value }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Subcategory
              </label>
              <input
                type="text"
                value={formData.subcategory}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    subcategory: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gig Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="gigImageUpdate"
                />
                <label
                  htmlFor="gigImageUpdate"
                  className="flex items-center justify-center w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {gigImageFile ? gigImageFile.name : "Change Image"}
                </label>
              </div>
              {imagePreview && (
                <div className="mt-2">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fiverr Link
              </label>
              <input
                type="url"
                value={formData.fiverr_link}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    fiverr_link: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="https://fiverr.com/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Upwork Link
              </label>
              <input
                type="url"
                value={formData.upwork_link}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    upwork_link: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                placeholder="https://upwork.com/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Platform Logo
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
                id="platformLogoUpdate"
              />
              <label
                htmlFor="platformLogoUpdate"
                className="flex items-center justify-center w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <Upload className="w-4 h-4 mr-2" />
                {platformLogoFile
                  ? platformLogoFile.name
                  : "Change Platform Logo"}
              </label>
            </div>
            {logoPreview && (
              <div className="mt-2">
                <Image
                  src={logoPreview}
                  alt="Logo Preview"
                  width={100}
                  height={100}
                  className="w-16 h-16 object-contain rounded-lg bg-white p-2"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows={4}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Package Description
            </label>
            <textarea
              value={formData.packages.basic.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  packages: {
                    ...prev.packages,
                    basic: {
                      ...prev.packages.basic,
                      description: e.target.value,
                    },
                  },
                }))
              }
              rows={3}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price ($)
              </label>
              <input
                type="number"
                value={formData.packages.basic.price}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    packages: {
                      ...prev.packages,
                      basic: {
                        ...prev.packages.basic,
                        price: Number(e.target.value),
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Delivery Time (days)
              </label>
              <input
                type="number"
                value={formData.packages.basic.deliveryTime}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    packages: {
                      ...prev.packages,
                      basic: {
                        ...prev.packages.basic,
                        deliveryTime: Number(e.target.value),
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Revisions
              </label>
              <input
                type="number"
                value={formData.packages.basic.revisions}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    packages: {
                      ...prev.packages,
                      basic: {
                        ...prev.packages.basic,
                        revisions: Number(e.target.value),
                      },
                    },
                  }))
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isActive: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              <span className="text-gray-300">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
                className="mr-2"
              />
              <span className="text-gray-300">Featured</span>
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white border border-gray-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={updateMutation.isPending}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
            >
              {updateMutation.isPending ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFreelancingProfileForm;
