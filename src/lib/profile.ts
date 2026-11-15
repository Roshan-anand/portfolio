import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Roshan Anand",
  handle: "rshn",
  role: "Software Engineer · Human" ,
  status: true,
  resume: "https://dub.sh/rshn",
  email: "roshan4nand@gmail.com",
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
        { text: "Chose red pill, got " },
        { text: "Rust", hl: true },
        { text: " compiler errors 💀" },
      ],
    },
    {
      spans: [
        { text: "Building " },
        { text: "hasu", href: "https://hasu.rshn.cloud" },
        { text: " — self-host deployment platform" },
      ],
    },
    {
      spans: [
        { text: "Writing this line to simply fill up my portfolio." },
      ],
    },
  ],
  skills: [
    { name: "RUST", color: "#FF3E00" },
    { name: "Golang", color: "#00ADD8", light: true },
    { name: "Typescript", color: "#3178C6" },
    { name: "Flutter", color: "#02569B" },
    { name: "Postgresql", color: "#336791" },
    { name: "linux", color: "#FCC624" },
    {name: "👀 stack doesn't matter right ?", color: "#FFFFFF" },
  ],
  work: [
    {
      org: "Naviget",
      role: "Full stack engineer",
      type: "Intern",
      period: "Oct 2026 — Present",
      href: "https://naviget.in",
      summary: "Working on Mobile App, Backend and Admin panel for Naviget.",
      tech: ["RUST", "Postgresql", "Flutter"],
    },
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
      // live: "https://sketchy-io.rshn.cloud",
      live: null,
      repo: "https://github.com/Roshan-anand/sketchy_io",
    },
    {
      title: "Code Join",
      stack: "TypeScript",
      description:
        "A collaborative cloud IDE where you can code with friends and colleagues in real time.",
      // live: "https://codejoin.rshn.cloud",
      live: null,
      repo: "https://github.com/Roshan-anand/code-join",
    },
  ],
};