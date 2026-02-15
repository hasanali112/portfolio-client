import { User, Mail, Building2, Phone, Calendar, MessageSquare, Send } from "lucide-react";

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
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-5 md:p-8 shadow-2xl border border-slate-700">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#057cc5] to-[#04376b] flex items-center justify-center shadow-lg shadow-[#057cc5]/20">
          <MessageSquare className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">Project Details</h2>
          <p className="text-gray-400 text-sm">Tell us more about your vision</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
              <User className="w-4 h-4 text-[#057cc5]" />
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
              <Mail className="w-4 h-4 text-[#057cc5]" />
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
              <Building2 className="w-4 h-4 text-[#057cc5]" />
              Company (Optional)
            </label>
            <input
              type="text"
              name="company"
              placeholder="Your Company Name"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
              <Phone className="w-4 h-4 text-[#057cc5]" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
            <Calendar className="w-4 h-4 text-[#057cc5]" />
            Project Timeline
          </label>
          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            placeholder="e.g., 2-3 months, ASAP, Flexible"
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-300 ml-1">
            <MessageSquare className="w-4 h-4 text-[#057cc5]" />
            Project Description <span className="text-red-400">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your project, goals, and any specific requirements..."
            rows={6}
            className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#057cc5] focus:border-transparent transition-all resize-none"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] shadow-md text-white h-[60px] w-full rounded-lg font-bold group disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-[0.98]"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <span className="text-lg">Send Project Request</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
