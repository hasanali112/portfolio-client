"use client";
import React, { useState, useEffect } from "react";
import { IContactInfo } from "@/types/contact";

interface ContactInfoFormProps {
  contactInfo?: IContactInfo;
  onSubmit: (data: IContactInfo) => void;
  isLoading: boolean;
}

const ContactInfoForm: React.FC<ContactInfoFormProps> = ({ contactInfo, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<IContactInfo>({
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    website: "",
    socialLinks: {},
    businessHours: {
      monday: "9:00 AM - 5:00 PM",
      tuesday: "9:00 AM - 5:00 PM",
      wednesday: "9:00 AM - 5:00 PM",
      thursday: "9:00 AM - 5:00 PM",
      friday: "9:00 AM - 5:00 PM",
      saturday: "Closed",
      sunday: "Closed"
    },
    isActive: true
  });

  useEffect(() => {
    if (contactInfo) {
      setFormData(contactInfo);
    }
  }, [contactInfo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Contact Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-4">Social Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.socialLinks).map(([platform, url]) => (
              <div key={platform}>
                <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{platform}</label>
                <input
                  type="url"
                  value={url || ""}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    socialLinks: { ...prev.socialLinks, [platform]: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-white mb-4">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.businessHours).map(([day, hours]) => (
              <div key={day}>
                <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">{day}</label>
                <input
                  type="text"
                  value={hours}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    businessHours: { ...prev.businessHours, [day]: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isLoading ? "Saving..." : contactInfo ? "Update Contact Info" : "Create Contact Info"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInfoForm;
