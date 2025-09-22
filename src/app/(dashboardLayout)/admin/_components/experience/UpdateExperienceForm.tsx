import React, { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";

interface UpdateExperienceFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (experienceData: any) => void;
  experience: any;
  isLoading: boolean;
}

const UpdateExperienceForm: React.FC<UpdateExperienceFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  experience, 
  isLoading 
}) => {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [achievements, setAchievements] = useState([""]);
  const [technologies, setTechnologies] = useState("");

  useEffect(() => {
    if (experience) {
      setResponsibilities(experience.responsibilities?.length ? experience.responsibilities : [""]);
      setAchievements(experience.achievements?.length ? experience.achievements : [""]);
      setTechnologies(experience.technologies?.join(", ") || "");
    }
  }, [experience]);

  const addResponsibility = () => setResponsibilities([...responsibilities, ""]);
  const removeResponsibility = (index: number) => setResponsibilities(responsibilities.filter((_, i) => i !== index));
  const updateResponsibility = (index: number, value: string) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const addAchievement = () => setAchievements([...achievements, ""]);
  const removeAchievement = (index: number) => setAchievements(achievements.filter((_, i) => i !== index));
  const updateAchievement = (index: number, value: string) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const experienceData = {
      jobTitle: formData.get("jobTitle"),
      companyName: formData.get("companyName"),
      location: formData.get("location"),
      employmentType: formData.get("employmentType"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      isCurrentJob: formData.get("isCurrentJob") === "on",
      description: formData.get("description"),
      responsibilities: responsibilities.filter(r => r.trim()),
      achievements: achievements.filter(a => a.trim()),
      technologies: technologies.split(",").map(tech => tech.trim()).filter(tech => tech),
      companyWebsite: formData.get("companyWebsite"),
      featured: formData.get("featured") === "on",
      showOnResume: formData.get("showOnResume") === "on",
      displayOrder: Number(formData.get("displayOrder")) || 0
    };

    onSubmit(experienceData);
  };

  if (!isOpen || !experience) return null;

  const formatDateForInput = (date: string) => {
    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Update Experience</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="jobTitle"
              defaultValue={experience.jobTitle}
              placeholder="Job Title"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="companyName"
              defaultValue={experience.companyName}
              placeholder="Company Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="location"
              defaultValue={experience.location}
              placeholder="Location"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <select
              name="employmentType"
              defaultValue={experience.employmentType}
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            >
              <option value="">Select Employment Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="startDate"
              type="date"
              defaultValue={formatDateForInput(experience.startDate)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="endDate"
              type="date"
              defaultValue={experience.endDate ? formatDateForInput(experience.endDate) : ""}
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <div className="flex items-center">
              <label className="flex items-center text-white">
                <input name="isCurrentJob" type="checkbox" defaultChecked={experience.isCurrentJob} className="mr-2" />
                Current Job
              </label>
            </div>
          </div>
          
          <textarea
            name="description"
            defaultValue={experience.description}
            placeholder="Job Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
            required
          />

          {/* Responsibilities */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Responsibilities</label>
              <button type="button" onClick={addResponsibility} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={responsibility}
                  onChange={(e) => updateResponsibility(index, e.target.value)}
                  placeholder="Responsibility"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <button type="button" onClick={() => removeResponsibility(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Achievements</label>
              <button type="button" onClick={addAchievement} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={achievement}
                  onChange={(e) => updateAchievement(index, e.target.value)}
                  placeholder="Achievement"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <button type="button" onClick={() => removeAchievement(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="Technologies (comma separated)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="companyWebsite"
              defaultValue={experience.companyWebsite || ""}
              placeholder="Company Website (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="displayOrder"
              type="number"
              defaultValue={experience.displayOrder}
              placeholder="Display Order"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <label className="flex items-center text-white">
              <input name="featured" type="checkbox" defaultChecked={experience.featured} className="mr-2" />
              Featured
            </label>
            <label className="flex items-center text-white">
              <input name="showOnResume" type="checkbox" defaultChecked={experience.showOnResume} className="mr-2" />
              Show on Resume
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Experience"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateExperienceForm;
