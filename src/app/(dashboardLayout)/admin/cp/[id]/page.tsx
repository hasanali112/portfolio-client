"use client";
import {
  ArrowLeft,
  ExternalLink,
  Edit,
  Calendar,
  Code,
  Cpu,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useGetSingleCP } from "@/hooks/useCP";
import { useState } from "react";

const CPDetail = ({ params }: { params: { id: string } }) => {
  const { data: cpData, isLoading } = useGetSingleCP(params.id);
  const solution = cpData?.data;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      // Extract text content from HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = solution.code;
      const textContent = tempDiv.textContent || tempDiv.innerText || "";

      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/cp">
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Loading...</h1>
            <p className="text-gray-400">Please wait...</p>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-32 bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!solution) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/admin/cp">
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              CP Solution Not Found
            </h1>
            <p className="text-gray-400">
              The requested solution could not be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/cp">
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              CP Solution Details
            </h1>
            <p className="text-gray-400">
              View competitive programming solution information.
            </p>
          </div>
        </div>
        <Link href={`/admin/cp/edit/${solution._id}`}>
          <button className="bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200">
            <Edit className="w-4 h-4" />
            <span>Edit Solution</span>
          </button>
        </Link>
      </div>

      {/* Solution Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Solution Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="text-white font-medium">
                    {new Date(solution.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Cpu className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Platform</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                    {solution.platform}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-sm text-gray-400">Problem Link</p>
                  <a
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    View Problem
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Method Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Method/Algorithm
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div
                className="text-white prose prose-invert max-w-none [&>*]:text-white [&>p]:text-white [&>h1]:text-white [&>h2]:text-white [&>h3]:text-white [&>li]:text-white [&>code]:text-gray-300 [&>pre]:text-gray-300"
                dangerouslySetInnerHTML={{ __html: solution.method }}
              />
            </div>
          </div>

          {/* Code Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">
                Solution Code
              </h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto">
              <div
                className="text-white prose prose-invert max-w-none font-mono text-sm [&>*]:text-white [&>p]:text-white [&>pre]:text-white [&>code]:text-gray-300"
                dangerouslySetInnerHTML={{ __html: solution.code }}
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Timestamps */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Timestamps
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Created</p>
                <p className="text-white text-sm">
                  {new Date(solution.createdAt).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Last Updated</p>
                <p className="text-white text-sm">
                  {new Date(solution.updatedAt).toLocaleString()}
                </p>
              </div>
              {solution.revisionDate && (
                <div>
                  <p className="text-sm text-gray-400">Revision Date</p>
                  <p className="text-white text-sm">
                    {new Date(solution.revisionDate).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <a
                href={solution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] hover:shadow-lg text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                View Problem
              </a>
              <Link href={`/admin/cp/edit/${solution._id}`}>
                <button className="w-full mt-4 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] hover:shadow-lg text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200">
                  <Edit className="w-4 h-4" />
                  Edit Solution
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPDetail;
