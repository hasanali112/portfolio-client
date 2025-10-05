"use client";
import { Suspense } from "react";
import ProjectsContent from "./ProjectsContent";

const Projects = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
};

export default Projects;
