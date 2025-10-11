"use client";

import { useState, useEffect } from "react";
import {
  getVisitorStats,
  getRecentVisitors,
  deleteVisitor,
  deleteAllVisitors,
} from "@/hooks/useVisitorTracking";
import { Trash2, TrashIcon } from "lucide-react";

interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  uniqueVisitors: number;
}

interface Visitor {
  _id: string;
  ipAddress: string;
  country?: string;
  city?: string;
  visitedAt: string;
  page?: string;
  userAgent?: string;
  browser?: string;
  os?: string;
  device?: string;
}

export default function VisitorDashboard() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [recentVisitors, setRecentVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [statsData, visitorsData] = await Promise.all([
        getVisitorStats(),
        getRecentVisitors(20),
      ]);

      setStats(statsData);
      setRecentVisitors(visitorsData);
    } catch (error) {
      console.error("Failed to fetch visitor data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this visitor?")) {
      const success = await deleteVisitor(id);
      if (success) {
        fetchData(); // Refresh data
      }
    }
  };

  const handleDeleteAll = async () => {
    if (
      confirm(
        "Are you sure you want to delete ALL visitors? This cannot be undone!"
      )
    ) {
      const success = await deleteAllVisitors();
      if (success) {
        fetchData(); // Refresh data
      }
    }
  };

  useEffect(() => {
    fetchData();

    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-900 border border-gray-800 rounded-xl">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-400 mb-2">
            Total Visitors
          </h3>
          <p className="text-3xl font-bold text-blue-400">
            {stats?.totalVisitors || 0}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-400 mb-2">
            Today&apos;s Visitors
          </h3>
          <p className="text-3xl font-bold text-green-400">
            {stats?.todayVisitors || 0}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-400 mb-2">
            Unique Visitors
          </h3>
          <p className="text-3xl font-bold text-purple-400">
            {stats?.uniqueVisitors || 0}
          </p>
        </div>
      </div>

      {/* Recent Visitors Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Recent Visitors</h3>
          <button
            onClick={handleDeleteAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
          >
            <TrashIcon className="w-4 h-4" />
            Delete All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4">IP Address</th>
                <th className="text-left py-3 px-4">OS</th>
                <th className="text-left py-3 px-4">Browser</th>
                <th className="text-left py-3 px-4">Device</th>
                <th className="text-left py-3 px-4">Page</th>
                <th className="text-left py-3 px-4">Time</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentVisitors.map((visitor) => (
                <tr
                  key={visitor._id}
                  className="border-b border-gray-800 hover:bg-gray-800"
                >
                  <td className="py-3 px-4 font-mono text-sm text-blue-400">
                    {visitor.ipAddress}
                  </td>
                  <td className="py-3 px-4">{visitor.os || "Unknown"}</td>
                  <td className="py-3 px-4">{visitor.browser || "Unknown"}</td>
                  <td className="py-3 px-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                      {visitor.device || "Desktop"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">
                    {visitor.page || "/"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-400">
                    {new Date(visitor.visitedAt).toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => handleDelete(visitor._id)}
                      className="text-red-400 hover:text-red-300 p-1"
                      title="Delete visitor"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
