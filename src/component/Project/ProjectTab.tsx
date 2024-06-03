"use client";
import React, { useState, useEffect } from "react";
import Card from "@/component/Project/ProjectCard";

interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  gitRepoLink: string;
  useTechnology: string[];
}

const ProjectTabs = ({ projectGet }: { projectGet: Project[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabsContents, setTabsContents] = useState<Project[][]>([]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Function to group data
  const groupData = (
    projectGet: Project[],
    itemsPerGroup: number
  ): Project[][] => {
    const groups: Project[][] = [];
    for (let i = 0; i < projectGet.length; i += itemsPerGroup) {
      groups.push(projectGet.slice(i, i + itemsPerGroup));
    }
    return groups;
  };

  useEffect(() => {
    const groupedData = groupData(projectGet, 4);
    setTabsContents(groupedData);
  }, []);

  const handleTabClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
    }, 300); // Transition duration
  };

  if (tabsContents.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" py-8">
      <div className="flex justify-center space-x-4 mb-6">
        {tabsContents.map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg focus:outline-none ${
              index === activeTab
                ? "bg-purple-500 text-white text-3xl font-bold"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleTabClick(index)}
          >
            Project {index + 1}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {tabsContents[activeTab].map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTabs;
