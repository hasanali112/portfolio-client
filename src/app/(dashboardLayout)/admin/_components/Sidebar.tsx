"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/services/cookieService";
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
  Phone,
  LogOut,
  Eye,
  Clock,
  Linkedin,
  UserCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import logo from "@/assets/hasan.png";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Time Management", href: "/admin/time-management", icon: Clock },
    { name: "Skills", href: "/admin/skills", icon: Code },
    { name: "Projects", href: "/admin/projects", icon: FolderOpen },
    { name: "Blogs", href: "/admin/blogs", icon: BookOpen },
    { name: "Shop", href: "/admin/shop", icon: ShoppingBag },
    { name: "Freelancing", href: "/admin/freelancing", icon: UserCheck },
    { name: "CP", href: "/admin/cp", icon: Terminal },
    { name: "Experience", href: "/admin/experience", icon: Briefcase },
    { name: "About", href: "/admin/about", icon: User },
    { name: "Testimonial", href: "/admin/testimonial", icon: MessageSquare },
    { name: "Services", href: "/admin/services", icon: Settings },
    { name: "Contact", href: "/admin/contact", icon: Phone },
    { name: "LinkedIn", href: "/admin/linkedin", icon: Linkedin },
    { name: "Visitors", href: "/admin/visitors", icon: Eye },
  ];

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <aside className="fixed left-0 top-0 z-40 w-64 h-screen bg-gray-900 border-r border-gray-800 hidden lg:block overflow-hidden">
      <div className="h-full px-3 py-4 flex flex-col">
        {/* Logo */}
        <div className="mb-5 px-4 py-2 border-b border-gray-800">
          <Link href="/">
            <div className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="relative">
                <Image
                  src={logo}
                  alt="logo"
                  width={140}
                  height={140}
                  className="w-[40px] h-[40px] rounded-full  shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  HasanAli
                  <span className="text-[#017cc2] font-extrabold">.</span>
                </h1>
                <p className="text-xs text-gray-400 font-medium">
                  Admin Dashboard
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <ul className="space-y-2 flex-1 overflow-y-auto scrollbar-hide">
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
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  />
                  <span
                    className={`ml-3 font-medium truncate ${
                      isActive ? "text-white font-semibold" : ""
                    }`}
                  >
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

        {/* Logout Button */}
        <div className="mt-auto pt-2 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center p-3 mx-2 w-full rounded-lg transition-all duration-200 text-gray-300 hover:bg-red-500/20 hover:text-red-400 group"
          >
            <LogOut className="w-5 h-5 flex-shrink-0 text-gray-400 group-hover:text-red-400" />
            <span className="ml-3 font-medium truncate">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
