// src/types/portfolio.types.ts
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  tech: string[];
  iconName: string; // Changed from React.ReactNode to string
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  duration: string;
  gpa?: string;
  coursework?: string;
}

export interface Certification {
  title: string;
  description: string;
  issuer?: string;
}

export interface RoleData {
  title: string;
  subtitle: string;
  description: string;
  experience: Experience;
  projects: Project[];
  skills: Record<string, string[]>;
}

export type RoleType = 'software' | 'data';

export interface PortfolioData {
  personal: {
    name: string;
    contact: ContactInfo;
  };
  roles: Record<RoleType, RoleData>;
  education: Education[];
  certifications: Certification[];
}