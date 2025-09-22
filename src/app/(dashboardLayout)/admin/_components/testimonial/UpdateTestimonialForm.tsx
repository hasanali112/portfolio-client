import React from "react";
import { X } from "lucide-react";

interface UpdateTestimonialFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (testimonialData: any) => void;
  testimonial: any;
  isLoading: boolean;
}

const UpdateTestimonialForm: React.FC<UpdateTestimonialFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  testimonial, 
  isLoading 
}) => {
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

    onSubmit(testimonialData);
  };

  const formatDateForInput = (date: string) => {
    return new Date(date).toISOString().split('T')[0];
  };

  if (!isOpen || !testimonial) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Update Testimonial</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Client Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="clientName"
              defaultValue={testimonial.clientName}
              placeholder="Client Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="clientTitle"
              defaultValue={testimonial.clientTitle}
              placeholder="Client Title/Position"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          <input
            name="clientCompany"
            defaultValue={testimonial.clientCompany}
            placeholder="Client Company"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          
          {/* Testimonial Content */}
          <textarea
            name="testimonialText"
            defaultValue={testimonial.testimonialText}
            placeholder="Testimonial Text"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-32"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Rating</label>
              <select
                name="rating"
                defaultValue={testimonial.rating}
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
              defaultValue={testimonial.serviceType}
              placeholder="Service Type"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          {/* Project Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="projectName"
              defaultValue={testimonial.projectName || ""}
              placeholder="Project Name (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="projectDuration"
              defaultValue={testimonial.projectDuration || ""}
              placeholder="Project Duration (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="clientEmail"
              type="email"
              defaultValue={testimonial.clientEmail || ""}
              placeholder="Client Email (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="clientLinkedIn"
              defaultValue={testimonial.clientLinkedIn || ""}
              placeholder="LinkedIn Profile (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="clientWebsite"
              defaultValue={testimonial.clientWebsite || ""}
              placeholder="Client Website (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Date and Display Order */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Date Received</label>
              <input
                name="dateReceived"
                type="date"
                defaultValue={formatDateForInput(testimonial.dateReceived)}
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
                required
              />
            </div>
            <input
              name="displayOrder"
              type="number"
              defaultValue={testimonial.displayOrder}
              placeholder="Display Order (0 = first)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Display Options */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center text-white">
              <input name="featured" type="checkbox" defaultChecked={testimonial.featured} className="mr-2" />
              Featured
            </label>
            <label className="flex items-center text-white">
              <input name="showOnHomepage" type="checkbox" defaultChecked={testimonial.showOnHomepage} className="mr-2" />
              Show on Homepage
            </label>
          </div>

          {/* Status Options */}
          <div className="flex gap-4">
            <label className="flex items-center text-white">
              <input name="isApproved" type="checkbox" defaultChecked={testimonial.isApproved} className="mr-2" />
              Approved
            </label>
            <label className="flex items-center text-white">
              <input name="isPublic" type="checkbox" defaultChecked={testimonial.isPublic} className="mr-2" />
              Public
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Testimonial"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTestimonialForm;
