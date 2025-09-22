import React from "react";

const SkillsTableSkeleton = () => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="h-6 bg-gray-800 rounded w-32 mb-6 animate-pulse"></div>
      
      {/* Desktop Table Skeleton */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">
                <div className="h-4 bg-gray-800 rounded w-12 animate-pulse"></div>
              </th>
              <th className="text-left py-3 px-4">
                <div className="h-4 bg-gray-800 rounded w-16 animate-pulse"></div>
              </th>
              <th className="text-left py-3 px-4">
                <div className="h-4 bg-gray-800 rounded w-12 animate-pulse"></div>
              </th>
              <th className="text-left py-3 px-4">
                <div className="h-4 bg-gray-800 rounded w-20 animate-pulse"></div>
              </th>
              <th className="text-left py-3 px-4">
                <div className="h-4 bg-gray-800 rounded w-16 animate-pulse"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className="border-b border-gray-800">
                <td className="py-3 px-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-4 bg-gray-800 rounded w-20 animate-pulse"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-6 bg-gray-800 rounded w-16 animate-pulse"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-800 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-800 rounded w-8 animate-pulse"></div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-800 rounded animate-pulse"></div>
                    <div className="w-6 h-6 bg-gray-800 rounded animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Skeleton */}
      <div className="md:hidden space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div>
                  <div className="h-3 bg-gray-700 rounded w-16 animate-pulse"></div>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-gray-700 rounded animate-pulse"></div>
                <div className="w-6 h-6 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="h-3 bg-gray-700 rounded w-16 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded w-8 animate-pulse"></div>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTableSkeleton;
