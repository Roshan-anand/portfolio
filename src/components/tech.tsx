import { cn } from "@/lib/utils";
import type React from "react";

const skills: string[] = [
  "GOlang",
  "TypeScript",
  "SQLite",
  "PSQL",
  "Svelte",
  "NodeJS",
  "Docker",
  "Traefik",
  "Linux",
  "Git",
  "AWS-EC2",
  "React",
];

const Tech = ({ className }: React.ComponentProps<"div">) => {
  return (
    <section
      className={cn(
        "flex flex-row justify-center gap-2 flex-wrap mx-auto max-w-170",
        className,
      )}
    >
      {skills.map((name) => (
        <h3
          key={name}
          className="border border-subtle-foreground/80 rounded-sm px-2.5 py-0.5 text-subtle-foreground transition-colors duration-200 hover:text-accent-orange hover:border-accent-orange/50"
        >
          {name}
        </h3>
      ))}
    </section>
  );
};
export default Tech;
