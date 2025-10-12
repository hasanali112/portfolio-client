"use client";
import React from "react";
import Sidebar from "./_components/Sidebar";
import MobileBottomNav from "./_components/MobileBottomNav";
import DashboardHeader from "./_components/DashboardHeader";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="flex w-full">
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-64 pb-16 lg:pb-0 min-w-0">
          <DashboardHeader title="Dashboard" />
          <div className="p-4 sm:p-6 w-full">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default AdminLayout;
