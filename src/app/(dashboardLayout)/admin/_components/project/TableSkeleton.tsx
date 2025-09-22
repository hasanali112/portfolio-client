import React from "react";

const TableSkeleton = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Technology</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Links</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-700 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-gray-800 rounded w-48"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1">
                    <div className="h-6 bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-700 rounded w-20"></div>
                    <div className="h-6 bg-gray-700 rounded w-14"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 bg-gray-700 rounded w-20"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <div className="h-4 w-4 bg-gray-700 rounded"></div>
                    <div className="h-4 w-4 bg-gray-700 rounded"></div>
                    <div className="h-4 w-4 bg-gray-700 rounded"></div>
                    <div className="h-4 w-4 bg-gray-700 rounded"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSkeleton;
