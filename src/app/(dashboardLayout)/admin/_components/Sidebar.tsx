"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Code, 
  FolderOpen, 
  BookOpen, 
  User, 
  ShoppingBag, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  Phone 
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Skills", href: "/admin/skills", icon: Code },
    { name: "Projects", href: "/admin/projects", icon: FolderOpen },
    { name: "Blogs", href: "/admin/blogs", icon: BookOpen },
    { name: "Shop", href: "/admin/shop", icon: ShoppingBag },
    { name: "Experience", href: "/admin/experience", icon: Briefcase },
    { name: "About", href: "/admin/about", icon: User },
    { name: "Testimonial", href: "/admin/testimonial", icon: MessageSquare },
    { name: "Services", href: "/admin/services", icon: Settings },
    { name: "Contact", href: "/admin/contact", icon: Phone },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 w-64 h-screen bg-gray-900 border-r border-gray-800 hidden lg:block overflow-hidden">
      <div className="h-full px-3 py-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center mb-8 px-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-white" />
          </div>
          <span className="ml-3 text-xl font-bold text-white truncate">Dashboard</span>
        </div>

        {/* Navigation */}
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.name} className="relative">
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r"></div>
                )}
                <Link
                  href={item.href}
                  className={`flex items-center p-3 mx-2 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-500/20 text-white border-l-4 border-blue-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${
                    isActive ? "text-blue-400" : "text-gray-400 group-hover:text-white"
                  }`} />
                  <span className={`ml-3 font-medium truncate ${
                    isActive ? "text-white font-semibold" : ""
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
