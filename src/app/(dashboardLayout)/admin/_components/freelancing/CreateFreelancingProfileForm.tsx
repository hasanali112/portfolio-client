"use client";

import React, { useState } from "react";
import { X, Plus, Minus, Upload, Image as ImageIcon } from "lucide-react";
import { useCreateFreelancingProfile } from "@/hooks/useFreelancingProfiles";
import Image from "next/image";

interface CreateFreelancingProfileFormProps {
  onClose: () => void;
}

const CreateFreelancingProfileForm: React.FC<
  CreateFreelancingProfileFormProps
> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    serviceName: "",
    description: "",
    category: "",
    subcategory: "",
    fiverr_link: "",
    upwork_link: "",
    serviceType: "fixed" as "hourly" | "fixed" | "both",
    deliveryTime: 1,
    revisions: 1,
    packages: {
      basic: {
        name: "Basic",
        description: "",
        price: 0,
        deliveryTime: 1,
        revisions: 1,
        features: [""],
      },
    },
    faqs: [{ question: "", answer: "" }],
    requirements: [""],
    isActive: true,
    featured: false,
  });

  const [gigImageFile, setGigImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [platformLogoFile, setPlatformLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");

  const createMutation = useCreateFreelancingProfile();

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

    // Clean up empty arrays
    const cleanedData = {
      ...formData,
      gigImageFile,
      platformLogoFile,
      requirements: formData.requirements.filter((req) => req.trim()),
      faqs: formData.faqs.filter(
        (faq) => faq.question.trim() && faq.answer.trim()
      ),
      packages: {
        basic: {
          ...formData.packages.basic,
          features: formData.packages.basic.features.filter((feature) =>
            feature.trim()
          ),
        },
      },
    };

    createMutation.mutate(cleanedData, {
      onSuccess: () => onClose(),
    });
  };

  const addArrayItem = (field: string, subField?: string) => {
    if (subField) {
      setFormData((prev) => ({
        ...prev,
        packages: {
          ...prev.packages,
          basic: {
            ...prev.packages.basic,
            [subField]: [...prev.packages.basic.features, ""],
          },
        },
      }));
    } else if (field === "faqs") {
      setFormData((prev) => ({
        ...prev,
        faqs: [...prev.faqs, { question: "", answer: "" }],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: [...(prev as any)[field], ""],
      }));
    }
  };

  const removeArrayItem = (field: string, index: number, subField?: string) => {
    if (subField) {
      setFormData((prev) => ({
        ...prev,
        packages: {
          ...prev.packages,
          basic: {
            ...prev.packages.basic,
            features: prev.packages.basic.features.filter(
              (_, i) => i !== index
            ),
          },
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: (prev as any)[field].filter(
          (_: any, i: number) => i !== index
        ),
      }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl border border-gray-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">
            Create Freelancing Profile
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Info */}
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
                  id="gigImage"
                  required
                />
                <label
                  htmlFor="gigImage"
                  className="flex items-center justify-center w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {gigImageFile ? gigImageFile.name : "Choose Image"}
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
                id="platformLogo"
              />
              <label
                htmlFor="platformLogo"
                className="flex items-center justify-center w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <Upload className="w-4 h-4 mr-2" />
                {platformLogoFile
                  ? platformLogoFile.name
                  : "Choose Platform Logo"}
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

          {/* Package Info */}
          <div className="border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-medium text-white mb-4">
              Basic Package
            </h3>
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
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4"
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
          </div>

          {/* Skills - Remove this entire section */}

          {/* Submit */}
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
              disabled={createMutation.isPending}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
            >
              {createMutation.isPending ? "Creating..." : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFreelancingProfileForm;
