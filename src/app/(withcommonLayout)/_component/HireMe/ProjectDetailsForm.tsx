interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  timeline: string;
  description: string;
}

interface ProjectDetailsFormProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export default function ProjectDetailsForm({
  formData,
  handleInputChange,
  handleSubmit,
  isLoading = false,
}: ProjectDetailsFormProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">💬</span>
        <h2 className="text-2xl font-bold">Project Details</h2>
      </div>

      <p className="text-gray-400 mb-8">
        Tell us more about your project requirements
      </p>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Project Timeline
          </label>
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            placeholder="e.g., 2-3 months, ASAP, Flexible"
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Project Description <span className="text-red-400">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your project, goals, and any specific requirements..."
            rows={6}
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#057cc5]/50 focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <span>Send Request</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
