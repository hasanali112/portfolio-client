"use client";
import { Plus, Eye, Edit, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useGetCP, useDeleteCP } from "@/hooks/useCP";

const CPManagement = () => {
  const { data: cpData, isLoading } = useGetCP();
  const { mutate: deleteCP } = useDeleteCP();

  const cpSolutions = cpData?.data || [];

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this CP solution?")) {
      deleteCP(id);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">CP Management</h1>
            <p className="text-gray-400">Loading...</p>
          </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">CP Management</h1>
          <p className="text-gray-400">Manage your competitive programming solutions.</p>
        </div>
        <Link href="/admin/cp/create">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200">
            <Plus className="w-4 h-4" />
            <span>Add CP Solution</span>
          </button>
        </Link>
      </div>

      {/* CP Solutions Table */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Platform
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Link
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {cpSolutions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <div className="text-gray-400">
                      <div className="text-lg font-medium mb-2">No CP solutions found</div>
                      <p className="text-sm">Add your first competitive programming solution to get started.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                cpSolutions.map((solution: any) => (
                  <tr key={solution._id} className="hover:bg-gray-700/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(solution.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
                        {solution.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={solution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Problem
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/cp/${solution._id}`}>
                          <button className="text-blue-400 hover:text-blue-300 p-1 rounded">
                            <Eye className="w-4 h-4" />
                          </button>
                        </Link>
                        <Link href={`/admin/cp/edit/${solution._id}`}>
                          <button className="text-yellow-400 hover:text-yellow-300 p-1 rounded">
                            <Edit className="w-4 h-4" />
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(solution._id)}
                          className="text-red-400 hover:text-red-300 p-1 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CPManagement;
