export interface IContact {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  priority: 'low' | 'medium' | 'high';
  source: 'website' | 'email' | 'phone' | 'social';
  isArchived: boolean;
  tags: string[];
  notes: string;
  repliedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IContactInfo {
  _id?: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  website: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  businessHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
