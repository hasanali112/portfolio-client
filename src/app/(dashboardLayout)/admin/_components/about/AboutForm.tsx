import React, { useState, useEffect } from "react";
import { X, Plus, Minus } from "lucide-react";

interface AboutFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  about?: any;
  isLoading: boolean;
  mode: 'create' | 'update';
}

const AboutForm: React.FC<AboutFormProps> = ({ isOpen, onClose, onSubmit, about, isLoading, mode }) => {
  const [socialLinks, setSocialLinks] = useState([{ platform: "", url: "" }]);
  const [languages, setLanguages] = useState([{ name: "", proficiency: "Intermediate" }]);
  const [specializations, setSpecializations] = useState("");
  const [topSkills, setTopSkills] = useState("");
  const [hobbies, setHobbies] = useState("");

  useEffect(() => {
    if (about && mode === 'update') {
      setSocialLinks(about.socialLinks?.length ? about.socialLinks : [{ platform: "", url: "" }]);
      setLanguages(about.languages?.length ? about.languages : [{ name: "", proficiency: "Intermediate" }]);
      setSpecializations(about.specializations?.join(", ") || "");
      setTopSkills(about.topSkills?.join(", ") || "");
      setHobbies(about.hobbies?.join(", ") || "");
    }
  }, [about, mode]);

  const addSocialLink = () => setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  const removeSocialLink = (index: number) => setSocialLinks(socialLinks.filter((_, i) => i !== index));
  const updateSocialLink = (index: number, field: string, value: string) => {
    const updated = [...socialLinks];
    updated[index][field as keyof typeof updated[0]] = value;
    setSocialLinks(updated);
  };

  const addLanguage = () => setLanguages([...languages, { name: "", proficiency: "Intermediate" }]);
  const removeLanguage = (index: number) => setLanguages(languages.filter((_, i) => i !== index));
  const updateLanguage = (index: number, field: string, value: string) => {
    const updated = [...languages];
    updated[index][field as keyof typeof updated[0]] = value;
    setLanguages(updated);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const aboutData = {
      fullName: formData.get("fullName"),
      title: formData.get("title"),
      bio: formData.get("bio"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      website: formData.get("website"),
      yearsOfExperience: Number(formData.get("yearsOfExperience")),
      currentStatus: formData.get("currentStatus"),
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      socialLinks: socialLinks.filter(link => link.platform && link.url),
      languages: languages.filter(lang => lang.name),
      specializations: specializations.split(",").map(s => s.trim()).filter(s => s),
      topSkills: topSkills.split(",").map(s => s.trim()).filter(s => s),
      hobbies: hobbies.split(",").map(h => h.trim()).filter(h => h)
    };

    if (mode === 'create') {
      const finalFormData = new FormData();
      finalFormData.append("data", JSON.stringify(aboutData));
      
      const profileImage = formData.get("profileImage") as File;
      if (profileImage) {
        finalFormData.append("profileImage", profileImage);
      }
      
      const resume = formData.get("resume") as File;
      if (resume) {
        finalFormData.append("resume", resume);
      }
      
      onSubmit(finalFormData);
    } else {
      onSubmit(aboutData);
    }
    
    // Reset form for create mode
    if (mode === 'create') {
      setSocialLinks([{ platform: "", url: "" }]);
      setLanguages([{ name: "", proficiency: "Intermediate" }]);
      setSpecializations("");
      setTopSkills("");
      setHobbies("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">
            {mode === 'create' ? 'Create About Information' : 'Update About Information'}
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="fullName"
              defaultValue={mode === 'update' ? about?.fullName : ""}
              placeholder="Full Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="title"
              defaultValue={mode === 'update' ? about?.title : ""}
              placeholder="Professional Title"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>
          
          <textarea
            name="bio"
            defaultValue={mode === 'update' ? about?.bio : ""}
            placeholder="Bio/Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
            required
          />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              defaultValue={mode === 'update' ? about?.email : ""}
              placeholder="Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="phone"
              defaultValue={mode === 'update' ? about?.phone : ""}
              placeholder="Phone (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="location"
              defaultValue={mode === 'update' ? about?.location : ""}
              placeholder="Location"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="website"
              defaultValue={mode === 'update' ? about?.website : ""}
              placeholder="Website (Optional)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          {/* Professional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="yearsOfExperience"
              type="number"
              defaultValue={mode === 'update' ? about?.yearsOfExperience : ""}
              placeholder="Years of Experience"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
            <input
              name="currentStatus"
              defaultValue={mode === 'update' ? about?.currentStatus : ""}
              placeholder="Current Status (e.g., Available for hire)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
              required
            />
          </div>

          {/* Skills & Arrays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              value={specializations}
              onChange={(e) => setSpecializations(e.target.value)}
              placeholder="Specializations (comma separated)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              value={topSkills}
              onChange={(e) => setTopSkills(e.target.value)}
              placeholder="Top Skills (comma separated)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>

          <input
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            placeholder="Hobbies (comma separated)"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />

          {/* Social Links */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Social Links</label>
              <button type="button" onClick={addSocialLink} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {socialLinks.map((link, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={link.platform}
                  onChange={(e) => updateSocialLink(index, "platform", e.target.value)}
                  placeholder="Platform (e.g., LinkedIn)"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <input
                  value={link.url}
                  onChange={(e) => updateSocialLink(index, "url", e.target.value)}
                  placeholder="URL"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <button type="button" onClick={() => removeSocialLink(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-white">Languages</label>
              <button type="button" onClick={addLanguage} className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {languages.map((lang, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  value={lang.name}
                  onChange={(e) => updateLanguage(index, "name", e.target.value)}
                  placeholder="Language"
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                />
                <select
                  value={lang.proficiency}
                  onChange={(e) => updateLanguage(index, "proficiency", e.target.value)}
                  className="flex-1 p-2 bg-gray-800 text-white rounded"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Native">Native</option>
                </select>
                <button type="button" onClick={() => removeLanguage(index)} className="text-red-400">
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* File Uploads - Only for create mode */}
          {mode === 'create' && (
            <>
              <div>
                <label className="block text-white mb-2">Profile Image</label>
                <input
                  name="profileImage"
                  type="file"
                  accept="image/*"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Resume (Optional)</label>
                <input
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full p-3 bg-gray-800 text-white rounded-lg"
                />
              </div>
            </>
          )}

          {/* SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="metaTitle"
              defaultValue={mode === 'update' ? about?.metaTitle : ""}
              placeholder="Meta Title (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
            <input
              name="metaDescription"
              defaultValue={mode === 'update' ? about?.metaDescription : ""}
              placeholder="Meta Description (SEO)"
              className="w-full p-3 bg-gray-800 text-white rounded-lg"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? (mode === 'create' ? "Creating..." : "Updating...") : (mode === 'create' ? "Create About" : "Update About")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutForm;
