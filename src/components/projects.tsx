import { Project } from "@/lib/types";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const projects: Project[] = [
  {
    title: "SKETCHY IO",
    designation: ["FULLSTACK", "TS"],
    description: "An online multiplayer drawing and guessing pictionary game.",
    livelink: "https://sketchy-io.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/sketchy_io",
  },
  {
    title: "CODE JOIN",
    designation: ["FULLSTACK", "TS"],
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time.",
    livelink: "https://codejoin.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/code-join",
  },
  {
    title: "comming soon",
    designation: ["FULLSTACK", "GO", "VUE"],
    description:
      "🔨Currenty working on a selfhost PAAS Alternative to Netlify and Heroku....",
    livelink: null,
    repolink: "https://github.com/Roshan-anand/godploy",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="h-full flex flex-col gap-2 justify-center items-center px-4"
    >
      <h1>PROJECTS</h1>
      <figure className="flex flex-col flex-wrap gap-4">
        {projects.map((info, i) => (
          <ProjectBox {...info} key={i} />
        ))}
      </figure>
    </section>
  );
};

const ProjectBox = ({
  title,
  description,
  designation,
  livelink,
  repolink,
}: Project) => {
  return (
    <Card className="rounded-sm p-2 gap-2">
      <header className="flex gap-2 items-center">
        <h3 className="magic p-1 w-fit -rotate-1">{title}</h3>
        {repolink ? (
          <Link
            className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}
            href={repolink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon-md text-muted-foreground" />
          </Link>
        ) : (
          <span
            className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}
          >
            <FaEyeSlash className="ml-auto" />
          </span>
        )}
        {livelink && (
          <Link
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <LiaExternalLinkAltSolid className="icon-md " />
          </Link>
        )}
      </header>

      <p className="flex gap-3 bg-accent text-accent-foreground px-2">
        {designation.join(" - ")}
      </p>

      <p className="px-2">{description}</p>
    </Card>
  );
};
