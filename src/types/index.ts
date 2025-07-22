export interface Project {
  id?: number;
  title: string;
  subtitle?: string;
  description: string;
  liveUrl: string | null;
  githubUrl: string | null;
  techStack: string[];
  securityFeatures?: string[];
  metrics: Record<string, string>;
  featured: boolean;
  category: string;
  highlight?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
  created_at: string;
  updated_at: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[] | string[];
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  impact: string;
}

export interface SecurityMetric {
  label: string;
  value: string;
  icon?: string;
}