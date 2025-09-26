export interface IBlog {
  author: IAuthor;
  _id: string;
  blogImage: string;
  topic: string;
  title: string;
  description: string;
  content: string;
  category: 'All' | 'Web Dev' | 'Mobile Dev' | 'AI/ML' | 'DevOps' | 'UI/UX';
  slug: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  views: number;
  likes: number;
  comments: number;
  recent: boolean;
  popular: boolean;
  featured: boolean;
  readTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAuthor {
  name: string;
  bio: string;
}
