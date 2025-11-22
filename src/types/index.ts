export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  type?: string;
}

export interface Project {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  duration: string;
  highlights: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string[];
  link?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details?: string;
  link?: string;
}
