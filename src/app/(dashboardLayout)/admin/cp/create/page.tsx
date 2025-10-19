"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useCreateCP } from "@/hooks/useCP";
import { useRouter } from "next/navigation";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const CreateCP = () => {
  const [method, setMethod] = useState("");
  const [code, setCode] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    platform: "",
    link: "",
    revisionDate: ""
  });

  const { mutate: createCP, isPending } = useCreateCP();
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      method,
      code,
      revisionDate: formData.revisionDate || undefined
    };
    
    createCP(submitData, {
      onSuccess: () => {
        router.push('/admin/cp');
      },
      onError: (error) => {
        console.error('Error creating CP solution:', error);
      }
    });
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['code-block', 'code'],
      ['clean']
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/cp">
          <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Add CP Solution</h1>
          <p className="text-gray-400">Create a new competitive programming solution entry.</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Platform *
              </label>
              <input
                type="text"
                name="platform"
                value={formData.platform}
                onChange={handleInputChange}
                required
                placeholder="e.g., Codeforces, CodeChef, LeetCode"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Problem Link *
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              required
              placeholder="https://..."
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Method/Algorithm *
            </label>
            <div className="bg-white rounded-lg overflow-y-auto">
              <ReactQuill
                theme="snow"
                value={method}
                onChange={setMethod}
                modules={quillModules}
                placeholder="Describe the algorithm or method used..."
                style={{ height: '300px', marginBottom: '50px' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Solution Code *
            </label>
            <div className="bg-white rounded-lg overflow-y-auto">
              <ReactQuill
                theme="snow"
                value={code}
                onChange={setCode}
                modules={quillModules}
                placeholder="Paste your solution code here..."
                style={{ height: '500px', marginBottom: '50px' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Revision Date (Optional)
            </label>
            <input
              type="date"
              name="revisionDate"
              value={formData.revisionDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'Saving...' : 'Save Solution'}
            </button>
            <Link href="/admin/cp">
              <button
                type="button"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCP;
