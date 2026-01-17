import { Project } from "@/lib/types";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { GoDotFill } from "react-icons/go";

const projects: Project[] = [
  {
    title: "CODE JOIN",
    designation: ["Fullstack"],
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time.",
    livelink: "https://codejoin.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/code-join",
  },
  {
    title: "SKETCHY IO",
    designation: ["Fullstack"],
    description:
      "An online multiplayer drawing and guessing pictionary game",
    livelink: "https://sketchy-io.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/sketchy_io",
  },
];

export const Projects = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3> PROJECTS :</h3>
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
    <div className="bg-card rounded-md p-4 relative">
      <div className="ml-auto flex gap-4 p-2 px-4 rounded-b-sm absolute top-0 right-5 bg-background">
        {repolink ? (
          <a
            href={repolink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaGithub className="icon-md text-muted-foreground" />
          </a>
        ) : (
          <FaEyeSlash />
        )}
        {livelink && (
          <a
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md hover:scale-110 bg-muted-foreground text-primary-foreground"
          >
            <LiaExternalLinkAltSolid className="icon-md " />
          </a>
        )}
      </div>
      <div className="absolute top-[10%] left-0 bg-background w-2 h-1/4  rounded-[2px]"></div>
      <header className="flex items-center gap-2">
        <h2>{title}</h2>
        {designation.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            <GoDotFill className="icon-sm text-background" />
            <p className="text-secondary">
              {item}
            </p>
          </span>
        ))}
      </header>
      <p className="text-muted-foreground mt-3">{description}</p>
    </div>
  );
};