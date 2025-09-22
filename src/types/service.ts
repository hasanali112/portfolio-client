export interface IService {
  _id?: string;
  serviceName: string;
  slug: string;
  description: string;
  shortDescription: string;
  serviceIcon?: string;
  serviceImage?: string;
  category: string;
  pricing: {
    type: 'Fixed' | 'Hourly' | 'Custom';
    amount?: number;
    currency: string;
    period?: string;
  };
  duration: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  requirements: string[];
  featured: boolean;
  popular: boolean;
  isActive: boolean;
  displayOrder: number;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  createdAt?: string;
  updatedAt?: string;
}
