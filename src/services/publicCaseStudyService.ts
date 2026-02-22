import { API_BASE_URL } from "@/config/env";

export interface ICaseStudy {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  images?: string[];
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export const getAllPublishedCaseStudies = async (): Promise<ICaseStudy[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/case-studies`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });
    if (!res.ok) return [];
    const data = await res.json();
    // Filter only published case studies
    return data.data?.filter((study: ICaseStudy) => study.isPublished) || [];
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
};

export const getCaseStudyById = async (id: string): Promise<ICaseStudy | null> => {
  try {
    const res = await fetch(`${API_BASE_URL}/case-studies/${id}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const study = data.data;
    // Only return if published
    if (study?.isPublished) return study;
    return null;
  } catch (error) {
    console.error("Error fetching case study:", error);
    return null;
  }
};
