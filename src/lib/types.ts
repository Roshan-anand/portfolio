export type LinkItem = {
  label: string;
  href: string;
  icon?: string;
};

export type SkillGroup = {
  key: string;
  value: string;
  href?: string;
};

export type Role = {
  org: string;
  role: string;
  type: string;
  period: string;
  href: string;
  summary: string;
  tech: string[];
};

export type Project = {
  title: string;
  stack: string;
  description: string;
  live: string | null;
  repo: string | null;
  status?: string;
};

export type Profile = {
  name: string;
  handle: string;
  role: string;
  status: string;
  lede: string;
  about: string;
  calUrl: string;
  email: string;
  resume: string;
  socials: LinkItem[];
  skills: string[];
  work: Role[];
  projects: Project[];
};
