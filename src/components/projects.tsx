import { cn } from "@/lib/utils";
import { GoDotFill } from "react-icons/go";
import LineHoverLink from "./ui/line-hover-link";
import { FiGithub } from "react-icons/fi";

export type Project = {
  title: string;
  stack: string[];
  description: string;
  livelink: string | null;
  repolink: string | null;
  accent: string;
};

const godployProject: Project = {
  title: "GOdploy",
  stack: ["GO", "Svelte", "TypeScript", "SQLite", "Docker SDK", "Traefik"],
  description:
    "Self-hosted PAAS — a Railway / Netlify alternative for your own infrastructure.",
  livelink: null,
  repolink: "https://github.com/Roshan-anand/godploy",
  accent: "text-accent-purple",
};

const sketchyProject: Project = {
  title: "Sketchy IO",
  stack: ["Bun", "Socket.IO", "React"],
  description:
    "Online multiplayer pictionary game — draw, guess, and compete in real-time.",
  livelink: "https://sketchy-io.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/sketchy_io",
  accent: "text-accent-green",
};

const codeJoinProject: Project = {
  title: "Code Join",
  stack: ["Node.js", "React", "Traefik", "Docker SDK"],
  description:
    "Collaborative cloud IDE — code with friends in real-time from your browser.",
  livelink: "https://codejoin.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/code-join",
  accent: "text-accent-orange",
};

const projects: Project[] = [godployProject, sketchyProject, codeJoinProject];

export const Projects = () => {
  return (
    <section className="flex flex-col gap-3 w-fit mx-auto">
      {projects.map(({ title, description, livelink, repolink, accent }, i) => {
        return (
          <article
            key={title}
            className="flex flex-col gap-2 border border-dim-foreground/50 p-1 px-3 rounded-sm"
          >
            <div className={cn("flex items-center gap-2", accent)}>
              <GoDotFill />
              <LineHoverLink
                href={livelink || repolink || "#"}
                variant="scribble"
                className={accent}
              >
                <h3>{title}</h3>
              </LineHoverLink>
              <a href={repolink || "#"} className="text-subtle-foreground ml-auto">
                <FiGithub />
              </a>
            </div>
            <p className="text-dim-foreground">{description}</p>
          </article>
        );
      })}
    </section>
  );
};
