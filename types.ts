

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  profilePicUrl: string;
  aboutMe: string;
  hero?: {
    backgroundImageUrl: string;
    contentBoxColor?: string;
  };
}

export interface SocialLink {
  name: 'LinkedIn' | 'GitHub' | 'Mail' | 'WhatsApp';
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Training' | 'Engineering Project' | 'Internship' | 'Casual';
  subCategory?: 'Digital' | 'Analog';
  description:string;
  images: { src: string; label: string; }[];
  keyLearnings: string[];
  technologies: string[];
  date: string; // YYYY-MM-DD for sorting
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: SkillCategory[];
  resumeUrl: string;
  curiosityProjectIds: string[];
}