import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Roshan Anand",
  handle: "rshn",
  role: "Backend · Cloud · Fullstack",
  status: "open to work",
  lede: "I ship backends, the boxes they run on, and the pages in front. On contract. Open to the next role.",
  about:
    "I write Go and TypeScript. PostgreSQL when it matters, SQLite when it doesn’t. Linux, Git, Docker, Traefik, EC2.",
  calUrl: "https://cal.com/roshan-anand/30min",
  email: "roshan4nand@gmail.com",
  resume: "https://dub.sh/rshn",
  socials: [
    {
      label: "github",
      href: "https://github.com/Roshan-anand",
      icon: "github",
    },
    { label: "x", href: "https://x.com/R0SHAN_ANAND", icon: "x" },
    { label: "mail", href: "mailto:roshan4nand@gmail.com", icon: "mail" },
    {
      label: "discord",
      href: "https://discordapp.com/users/1114575128190271530",
      icon: "discord",
    },
    {
      label: "reddit",
      href: "https://www.reddit.com/user/Roshan_anand",
      icon: "reddit",
    },
  ],
  now: [
    {
      spans: [
        { text: "Building " },
        { text: "hasu", href: "https://hasu.rshn.cloud" },
        { text: " — self-host deployment platform" },
      ],
    },
    {
      spans: [
        { text: "Experiment on different " },
        { text: "AI workflow", hl: true },
        { text: "." },
      ],
    },
    {
      spans: [
        { text: "Exploring cloud tech like " },
        { text: "AI sandboxing", hl: true },
        { text: "." },
      ],
    },
  ],
  skills: [
    "Golang",
    "Typescript",
    "PERN",
    "Svelte",
    "Postgresql",
    "SQLite",
    "linux",
    "git",
    "Docker",
    "Traefik",
    "aws EC2",
  ],
  work: [
    {
      org: "Pradxclusive",
      role: "Tech consultant & developer",
      type: "Contract",
      period: "Jun 2026 — Present",
      href: "https://pradxclusive.com",
      summary:
        "Advised on infrastructure, dev tooling, and AI workflows at a brand house.",
      tech: ["PI SDK", "AI workflows", "Typescript"],
    },
  ],
  projects: [
    {
      title: "HASU",
      stack: "Go, Svelte",
      description:
        "A self-hosted PaaS alternative to Railway, Netlify and vercel. In development.",
      live: "https://hasu.rshn.cloud",
      repo: "https://github.com/Roshan-anand/hasu",
      status: "in development",
    },
    {
      title: "Sketchy IO",
      stack: "TypeScript",
      description:
        "An online multiplayer drawing and guessing pictionary game.",
      live: "https://sketchy-io.rshn.cloud",
      repo: "https://github.com/Roshan-anand/sketchy_io",
    },
    {
      title: "Code Join",
      stack: "TypeScript",
      description:
        "A collaborative cloud IDE where you can code with friends and colleagues in real time.",
      live: "https://codejoin.rshn.cloud",
      repo: "https://github.com/Roshan-anand/code-join",
    },
  ],
  piExtensions: [
    {
      title: "pi-140k-context",
      description:
        "Footer monitor for pi. Shows context usage against a fixed 140k window to flag the degradation zone.",
      repo: "https://github.com/Roshan-anand/pi-140k-context",
    },
    {
      title: "pi-real-talk",
      description:
        "Injects talk rules into pi so it drops fluff and gets to the point. Caveman, unslop, and mix modes.",
      repo: "https://github.com/Roshan-anand/pi-real-talk",
    },
  ],
};

export const callHref = profile.calUrl || "#";
