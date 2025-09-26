export interface IAbout {
  _id: string;
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  website?: string;
  profileImage: string;
  yearsOfExperience: number;
  currentStatus: string;
  specializations?: string[];
  createdAt: string;
  updatedAt: string;
}
