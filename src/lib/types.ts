export type LinkItem = {
  label: string;
  href: string;
  icon?: string;
};

export type Skill = {
  name: string;
  /** Brand hex color. Falls back to a tonal cycle when omitted. */
  color?: string;
  /** Keeps the chip vivid instead of the dimmed default. */
  light?: boolean;
};

export type NowSpan = {
  text: string;
  href?: string;
  hl?: boolean;
};

export type NowItem = {
  spans: NowSpan[];
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

export type PiExt = {
  title: string;
  description: string;
  repo: string | null;
};

export type Profile = {
  name: string;
  handle: string;
  role: string;
  /** true = "open to work" in green. false = struck through in orange. */
  status: boolean;
  calUrl: string;
  resume: string;
  socials: LinkItem[];
  now: NowItem[];
  skills: Skill[];
  work: Role[];
  projects: Project[];
  piExtensions: PiExt[];
};
