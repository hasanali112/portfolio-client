import React, { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import TechnologySection from "./TechnologySection";

interface CreateProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ isOpen, onClose, onSubmit, isLoading }) => {
  const [technologies, setTechnologies] = useState([{ technologyName: "", technologyImage: null }]);
  const [features, setFeatures] = useState([""]);

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = (index: number) => setFeatures(features.filter((_, i) => i !== index));
  const updateFeature = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const projectData = {
      projectTitle: formData.get("projectTitle"),
      description: formData.get("description"),
      liveLink: formData.get("liveLink"),
      gitRepoLinkFrontend: formData.get("gitRepoLinkFrontend"),
      gitRepoLinkBackend: formData.get("gitRepoLinkBackend"),
      features: features.filter(f => f.trim()),
      technology: technologies.map(tech => ({ technologyName: tech.technologyName, technologyImage: "" }))
    };

    const finalFormData = new FormData();
    finalFormData.append("data", JSON.stringify(projectData));
    
    const projectImages = formData.getAll("projectImages") as File[];
    projectImages.forEach(file => finalFormData.append("projectImages", file));
    
    technologies.forEach(tech => {
      if (tech.technologyImage) {
        finalFormData.append("technologyImages", tech.technologyImage);
      }
    });

    const customEvent = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        formData: finalFormData
      }
    };
    
    onSubmit(customEvent as any);
    setTechnologies([{ technologyName: "", technologyImage: null }]);
    setFeatures([""]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Create New Project</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="projectTitle"
            placeholder="Project Title"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
            required
          />
          
          {/* Features Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Features</label>
              <button
                type="button"
                onClick={addFeature}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" /> Add Feature
              </button>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder={`Feature ${index + 1}`}
                  className="flex-1 p-3 bg-gray-800 text-white rounded-lg"
                />
                {features.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="text-red-400 hover:text-red-300 p-3"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <input
            name="liveLink"
            placeholder="Live Link"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          <input
            name="gitRepoLinkFrontend"
            placeholder="Frontend Repo Link (Optional)"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <input
            name="gitRepoLinkBackend"
            placeholder="Backend Repo Link (Optional)"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <div>
            <label className="block text-white mb-2">Project Images</label>
            <input
              name="projectImages"
              type="file"
              multiple
              accept="image/*"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          <TechnologySection technologies={technologies} setTechnologies={setTechnologies} />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectForm;
