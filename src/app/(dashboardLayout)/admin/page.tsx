"use client";
import React from "react";
import { Code, FolderOpen, BookOpen, TrendingUp } from "lucide-react";
import { useGetSkillCount } from "../../../hooks/useSkills";

const AdminHome = () => {
  const { data: skillCountData, isLoading } = useGetSkillCount();
  const skillCount = skillCountData?.data || 0;

  const stats = [
    {
      name: "Total Skills",
      value: isLoading ? "..." : skillCount.toString(),
      icon: Code,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Projects",
      value: "8",
      icon: FolderOpen,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Blog Posts",
      value: "15",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Views",
      value: "2.4k",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-400">
          Welcome back! Here&apos;s what&apos;s happening with your portfolio.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">
                    {stat.name}
                  </p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "Added new project",
              item: "E-commerce Platform",
              time: "2 hours ago",
            },
            { action: "Updated skill", item: "React.js", time: "1 day ago" },
            {
              action: "Published blog post",
              item: "Next.js 14 Features",
              time: "3 days ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0"
            >
              <div>
                <p className="text-white font-medium">{activity.action}</p>
                <p className="text-gray-400 text-sm">{activity.item}</p>
              </div>
              <span className="text-gray-500 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
