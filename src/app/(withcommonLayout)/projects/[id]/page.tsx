import { Metadata } from "next";
import ProjectDetailClientWrapper from "./components/ProjectDetailClientWrapper";
import { IProject } from "@/types/project";


interface TDynamic {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: TDynamic): Promise<Metadata> {
  const { id } = await params;

  try {
    const projectsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project`,
      { next: { revalidate: 3600 } }
    );
    const projectsData = await projectsResponse.json();
    const project = projectsData?.data?.find((p: IProject) => p._id === id);

    if (project) {
      const techs: string[] = project.technology
        ?.map((t: { technologyName: string }) => t.technologyName)
        .slice(0, 5) ?? [];

      const description =
        project.description?.substring(0, 155) ||
        "A custom web development project built by Hasan Ali, a freelance web developer for service businesses.";

      return {
        title: `${project.projectTitle} | Project by Hasan Ali`,
        description,
        keywords: [
          "freelancer web developer",
          "hotlancer",
          "web development project",
          "React project",
          "Next.js project",
          ...techs,
        ],
        openGraph: {
          title: `${project.projectTitle} | Hasan Ali - Freelance Web Developer`,
          description,
          url: `https://mdhasanalikhan.vercel.app/projects/${id}`,
          images: [
            {
              url: project.projectImage?.[0] || "/og-cover.jpg",
              width: 1200,
              height: 628,
              alt: project.projectTitle,
            },
          ],
          type: "article",
        },
        twitter: {
          card: "summary_large_image",
          title: `${project.projectTitle} | Hasan Ali`,
          description,
          images: [project.projectImage?.[0] || "/og-cover.jpg"],
          creator: "@hasan_ali_dev",
        },
        alternates: {
          canonical: `https://mdhasanalikhan.vercel.app/projects/${id}`,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata for project:", error);
  }

  return {
    title: "Project Detail | Hasan Ali - Freelance Web Developer",
    description:
      "Explore a custom web development project built by Hasan Ali, specializing in high-converting websites for service businesses.",
    keywords: [
      "freelancer web developer",
      "hotlancer",
      "web development project",
      "React project",
      "Next.js project",
    ],
    openGraph: {
      title: "Project | Hasan Ali - Freelance Web Developer",
      description:
        "A custom web development project built with React and Next.js.",
      images: [{ url: "/og-cover.jpg", width: 1200, height: 628, alt: "Hasan Ali Project" }],
    },
  };
}

const ProjectDetailPage = async ({ params }: TDynamic) => {
  const { id } = await params;
  return <ProjectDetailClientWrapper id={id} />;
};

export default ProjectDetailPage;
