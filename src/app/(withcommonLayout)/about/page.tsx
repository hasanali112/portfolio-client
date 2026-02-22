import { Metadata } from "next";
import { getMyBio } from "@/services/aboutService";
import { IAbout } from "@/types/about";
import AboutPageClient from "./_component/AboutPageClient";
import { getAllSkills } from "@/services/skillService";
import { getAllExperiences } from "@/services/experienceService";
import { ISkill } from "@/types/skill";
import { IExperience } from "@/types/experience";

export const metadata: Metadata = {
  title: "About | Hasan Ali - Full Stack Developer",
  description:
    "Learn about Hasan Ali – a passionate MERN Stack Developer building powerful digital experiences. Explore his background, skills, and journey.",
  openGraph: {
    title: "About Hasan Ali - Full Stack Developer",
    description:
      "Passionate MERN Stack Developer who builds digital products that drive business growth.",
    url: "https://mdhasanali.vercel.app/about",
    type: "profile",
  },
};

const AboutPage = async () => {
  let about: IAbout | null = null;
  let skills: ISkill[] = [];
  let experiences: IExperience[] = [];

  try {
    about = await getMyBio();
    
    // Fetch skills
    const skillsData = await getAllSkills(1, 100);
    if (skillsData?.data) {
      skills = skillsData.data;
    }

    // Fetch experiences
    const expData = await getAllExperiences();
    if (expData?.data) {
      experiences = expData.data;
    }
  } catch (error) {
    console.error("Error fetching about page data:", error);
  }

  return (
    <AboutPageClient 
      about={about} 
      skills={skills} 
      experiences={experiences} 
    />
  );
};

export default AboutPage;
