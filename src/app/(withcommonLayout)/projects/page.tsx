import { Metadata } from "next";
import { Suspense } from "react";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Portfolio Projects | React, Next.js & MERN Stack Work",
  description:
    "Explore Hasan Ali's web development projects — custom websites and full-stack applications built with React, Next.js, TypeScript, Node.js, and MongoDB for service businesses and startups.",
  keywords: [
    // Portfolio / showcase
    "web development portfolio",
    "freelance web developer portfolio",
    "Next.js projects",
    "React projects",
    "full-stack developer portfolio",
    "MERN stack portfolio",

    // Tech keywords
    "TypeScript web developer",
    "Node.js developer",
    "MongoDB projects",
    "React developer portfolio",

    // Niche
    "freelancer web developer",
    "hotlancer",
    "service business websites",
    "custom web application",
    "full-stack web applications",
  ],
  openGraph: {
    title: "Portfolio Projects | Hasan Ali - Freelance Web Developer",
    description:
      "Explore custom websites and full-stack apps built with React, Next.js, TypeScript, and Node.js.",
    url: "https://mdhasanalikhan.vercel.app/projects",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 628,
        alt: "Hasan Ali - Web Development Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Projects | Hasan Ali - Freelance Web Developer",
    description:
      "Custom websites and full-stack apps built with React, Next.js, TypeScript, and Node.js.",
    images: ["/og-cover.jpg"],
    creator: "@hasan_ali_dev",
  },
  alternates: {
    canonical: "https://mdhasanalikhan.vercel.app/projects",
  },
};

const Projects = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
};

export default Projects;
