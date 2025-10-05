"use client";

import Link from "next/link";
import { Home, User, Code, Mail, Briefcase } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#projects", icon: Code, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
    { href: "/hire-me", icon: Briefcase, label: "Hire Me" },
  ];

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-gradient-to-r from-[#0f0715] via-[#1c222a] to-[#0f0715] backdrop-blur-lg border-t border-white/10 px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#72c4f2]/20 hover:to-[#027bc2]/20 transition-all duration-300">
                <item.icon className="w-5 h-5 text-white mb-1" />
                <span className="text-xs text-white">{item.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
