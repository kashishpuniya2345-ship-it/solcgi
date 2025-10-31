export interface Service {
  name: string;
  description: string;
  imageUrl: string;
}

export enum PortfolioCategory {
  ALL = 'All',
  VIRTUAL_PRODUCTION = 'Virtual Production',
  AUTOMOTIVE = 'Automotive',
  ARCHVIZ = 'Archviz',
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: PortfolioCategory;
  thumbnailUrl: string;
  heroImage: string;
  description: string;
  technologies: string[];
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface JobOpening {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}