"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Code, FolderOpen, BookOpen, User, Eye } from "lucide-react";

const MobileBottomNav = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Skills", href: "/admin/skills", icon: Code },
    { name: "Projects", href: "/admin/projects", icon: FolderOpen },
    { name: "About", href: "/admin/about", icon: User },
    { name: "Visitors", href: "/admin/visitors", icon: Eye },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800 lg:hidden">
      <div className="grid grid-cols-5 h-16 p-2 gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 rounded-lg ${
                isActive
                  ? "bg-gradient-to-t from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <Icon className={`w-4 h-4 ${
                isActive ? "text-white" : "text-gray-400"
              }`} />
              <span className={`text-xs font-medium ${
                isActive ? "text-white font-semibold" : ""
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
