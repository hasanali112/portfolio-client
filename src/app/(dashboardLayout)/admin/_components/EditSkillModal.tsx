"use client";
import React, { useState, useEffect } from "react";
import { X, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface Skill {
  _id: string;
  image: string;
  title: string;
  skillProficiency: number;
  type: string;
}

interface EditSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: Skill | null;
}

const EditSkillModal = ({ isOpen, onClose, skill }: EditSkillModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    skillProficiency: 0,
    type: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    if (skill) {
      setFormData({
        title: skill.title,
        skillProficiency: skill.skillProficiency,
        type: skill.type,
        image: null,
      });
      setImagePreview(skill.image);
    }
  }, [skill]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement update API call
    console.log("Update skill:", skill?._id, formData);
    onClose();
  };

  if (!isOpen || !skill) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Edit Skill</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skill Image
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors relative">
              {imagePreview ? (
                <div className="relative">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    width={200}
                    height={200}
                    className="w-20 h-20 mx-auto rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(skill.image);
                      setFormData({ ...formData, image: null });
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div>
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Click to upload new image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skill Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              placeholder="e.g., React.js"
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Skill Type
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select type</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Language">Language</option>
              <option value="Tool">Tool</option>
            </select>
          </div>

          {/* Proficiency */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Proficiency Level ({formData.skillProficiency}%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.skillProficiency}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  skillProficiency: parseInt(e.target.value),
                })
              }
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Beginner</span>
              <span>Expert</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Update Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSkillModal;
