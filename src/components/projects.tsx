import { Project } from "@/lib/types";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { GoDotFill } from "react-icons/go";
import LineHoverLink from "./ui/line-hover-link";
import { PiGithubLogoBold } from "react-icons/pi";

const godployProject: Project = {
  title: "GODPLOY",
  designation: ["FULLSTACK", "GO", "SVELTE"],
  description: "Currenty working on a selfhost PAAS Alternative to Railway, Render and netlify.",
  livelink: null,
  repolink: "https://github.com/Roshan-anand/godploy",
  accent: "text-accent-orange/80",
};

const sketchyProject: Project = {
  title: "SKETCHY_IO",
  designation: ["FULLSTACK", "TS"],
  description: "An online multiplayer drawing and guessing pictionary game.",
  livelink: "https://sketchy-io.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/sketchy_io",
  accent: "text-accent-blue/80",
};

const codeJoinProject: Project = {
  title: "CODE_JOIN",
  designation: ["FULLSTACK", "TS"],
  description:
    "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time.",
  livelink: "https://codejoin.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/code-join",
  accent: "text-accent-green/80",
};

const projectList = [godployProject, sketchyProject, codeJoinProject];

export const Projects = ({ className }: ComponentProps<"div">) => {
  return (
    <Card className={cn("p-2 flex flex-col", className)}>
      <p className="text-muted-foreground flex items-center gap-1">
        <span className="text-accent-magenta">$</span>cat projects.log
      </p>
      <div className="flex flex-col gap-4">
        {projectList.map((project) => (
          <ProjectBox key={project.title} {...project} />
        ))}
      </div>
    </Card>
  );
};

export const ProjectBox = ({
  title,
  description,
  // designation,
  livelink,
  repolink,
  accent,
  className,
}: Project & ComponentProps<"div">) => {
  return (
    <Card className={cn("p-0 m-0 gap-0 border-0", className)}>
      <header className="flex items-center p-0">
        <GoDotFill className={cn("size-3 items-center", accent)} />
        <p className={cn("rounded-md p-1 w-fit", accent)}>
          <LineHoverLink
            variant="scribble"
            href={livelink || repolink || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </LineHoverLink>
        </p>
        {repolink && (
          <Link className="ml-aut ml-3" href={repolink} target="_blank" rel="noopener noreferrer">
            <PiGithubLogoBold className="size-4 hover:text-accent hover:scale-105 text-dim-foreground" />
          </Link>
        )}
      </header>

      {/*<p className="flex gap-3 text-dim-foreground px-2">
        {designation.join(" - ")}
      </p>*/}

      <p className="px-2 text-dim-foreground">{description}</p>
    </Card>
  );
};
