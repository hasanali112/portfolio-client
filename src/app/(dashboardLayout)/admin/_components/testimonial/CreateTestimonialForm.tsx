import React from "react";
import { X, Star } from "lucide-react";

interface CreateTestimonialFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const CreateTestimonialForm: React.FC<CreateTestimonialFormProps> = ({ isOpen, onClose, onSubmit, isLoading }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const testimonialData = {
      clientName: formData.get("clientName"),
      clientTitle: formData.get("clientTitle"),
      clientCompany: formData.get("clientCompany"),
      testimonialText: formData.get("testimonialText"),
      rating: Number(formData.get("rating")),
      projectName: formData.get("projectName"),
      serviceType: formData.get("serviceType"),
      projectDuration: formData.get("projectDuration"),
      clientEmail: formData.get("clientEmail"),
      clientLinkedIn: formData.get("clientLinkedIn"),
      clientWebsite: formData.get("clientWebsite"),
      dateReceived: formData.get("dateReceived"),
      featured: formData.get("featured") === "on",
      showOnHomepage: formData.get("showOnHomepage") === "on",
      isApproved: formData.get("isApproved") === "on",
      isPublic: formData.get("isPublic") === "on",
      displayOrder: Number(formData.get("displayOrder")) || 0
    };

    const finalFormData = new FormData();
    finalFormData.append("data", JSON.stringify(testimonialData));
    
    const clientImage = formData.get("clientImage") as File;
    if (clientImage) {
      finalFormData.append("clientImage", clientImage);
    }

    onSubmit({ ...e, currentTarget: { ...e.currentTarget, formData: finalFormData } } as any);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Add New Testimonial</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="clientName"
              placeholder="Client Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="clientTitle"
              placeholder="Client Title/Position"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <input
            name="clientCompany"
            placeholder="Client Company"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          
          {/* Testimonial Content */}
          <textarea
            name="testimonialText"
            placeholder="Testimonial Text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-32"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Rating</label>
              <select
                name="rating"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              >
                <option value="">Select Rating</option>
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>
            <input
              name="serviceType"
              placeholder="Service Type"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          {/* Project Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="projectName"
              placeholder="Project Name (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="projectDuration"
              placeholder="Project Duration (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="clientEmail"
              type="email"
              placeholder="Client Email (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="clientLinkedIn"
              placeholder="LinkedIn Profile (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="clientWebsite"
              placeholder="Client Website (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Files and Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Client Image (Optional)</label>
              <input
                name="clientImage"
                type="file"
                accept="image/*"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Date Received</label>
              <input
                name="dateReceived"
                type="date"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              />
            </div>
          </div>

          {/* Display Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="displayOrder"
              type="number"
              placeholder="Display Order (0 = first)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center text-white">
                <input name="featured" type="checkbox" className="mr-2" />
                Featured
              </label>
              <label className="flex items-center text-white">
                <input name="showOnHomepage" type="checkbox" className="mr-2" />
                Show on Homepage
              </label>
            </div>
          </div>

          {/* Status Options */}
          <div className="flex gap-4">
            <label className="flex items-center text-white">
              <input name="isApproved" type="checkbox" defaultChecked className="mr-2" />
              Approved
            </label>
            <label className="flex items-center text-white">
              <input name="isPublic" type="checkbox" defaultChecked className="mr-2" />
              Public
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Add Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTestimonialForm;
