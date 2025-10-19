"use client";

import React from "react";
import FreelancingProfileList from "../_components/freelancing/FreelancingProfileList";

const FreelancingPage = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Freelancing Profiles
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your freelancing service profiles
        </p>
      </div>
      <FreelancingProfileList />
    </div>
  );
};

export default FreelancingPage;
