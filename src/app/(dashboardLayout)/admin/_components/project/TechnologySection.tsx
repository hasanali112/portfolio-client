import React from "react";
import { Plus, Minus } from "lucide-react";

interface TechnologySectionProps {
  technologies: { technologyName: string; technologyImage: File | null }[];
  setTechnologies: (technologies: any[]) => void;
}

const TechnologySection: React.FC<TechnologySectionProps> = ({ technologies, setTechnologies }) => {
  const addTechnology = () => {
    setTechnologies([...technologies, { technologyName: "", technologyImage: null }]);
  };

  const removeTechnology = (index: number) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  const updateTechnology = (index: number, field: string, value: any) => {
    const updated = [...technologies];
    updated[index][field] = value;
    setTechnologies(updated);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <label className="block text-white">Technologies</label>
        <button
          type="button"
          onClick={addTechnology}
          className="bg-green-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
        >
          <Plus className="w-3 h-3" /> Add Tech
        </button>
      </div>
      {technologies.map((tech, index) => (
        <div key={index} className="bg-gray-800 p-3 rounded-lg mb-3 border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white text-sm">Technology #{index + 1}</span>
            <button
              type="button"
              onClick={() => removeTechnology(index)}
              className="text-red-400 hover:text-red-300"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            <input
              placeholder="Technology Name (e.g., React)"
              value={tech.technologyName}
              onChange={(e) => updateTechnology(index, 'technologyName', e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded"
              required
            />
            <div>
              <label className="block text-gray-300 text-xs mb-1">Technology Icon</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => updateTechnology(index, 'technologyImage', e.target.files?.[0])}
                className="w-full p-2 bg-gray-700 text-white rounded text-sm"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologySection;
