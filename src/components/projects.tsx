"use client";
import { FaGithub } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";

type Project = {
  title: string;
  designation: string;
  description: string;
  livelink: string | null;
  repolink: string;
};

const projects: Project[] = [
  {
    title: "CODE JOIN",
    designation: "Fullstack",
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time",
    livelink: "https://codejoin.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/code-join",
  },
];

const DropDownBox = ({
  title,
  description,
  designation,
  livelink,
  repolink,
}: Project) => {
  return (
    <div className="border rounded-md p-2">
      <header className="flex items-center gap-2">
        <h2>{title}</h2>
        <p>{designation}</p>
        <div className="ml-auto flex gap-2">
          <a href={repolink} target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon-sm" />
          </a>
          {livelink && (
            <a href={livelink} target="_blank" rel="noopener noreferrer">
              <RxArrowTopRight className="icon-sm" />
            </a>
          )}
        </div>
      </header>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3> PROJECTS :</h3>
      <figure className="flex flex-col flex-wrap gap-4">
        {projects.map((info, i) => (
          <DropDownBox {...info} key={i} />
        ))}
      </figure>
    </section>
  );
};

export default Projects;
