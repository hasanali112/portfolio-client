export interface IExperience {
  _id: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  startDate: string;
  endDate?: string;
  isCurrentJob: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  companyWebsite?: string;
  featured: boolean;
  showOnResume: boolean;
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}
