import { getAllPublishedCaseStudies } from "@/services/publicCaseStudyService";
import { ICaseStudy } from "@/services/publicCaseStudyService";
import CaseStudiesClient from "./CaseStudiesClient";

const CaseStudies = async () => {
  let caseStudies: ICaseStudy[] = [];

  try {
    const studies = await getAllPublishedCaseStudies();
    caseStudies = studies.slice(0, 4); // Get first 4 case studies
    console.log('Case studies fetched:', caseStudies.length);
  } catch (error: any) {
    console.error('Error fetching case studies:', error.message);
  }

  return <CaseStudiesClient caseStudies={caseStudies} />;
};

export default CaseStudies;
