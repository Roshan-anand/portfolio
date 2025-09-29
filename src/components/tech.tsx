import React from "react";
import { FaDocker, FaNodeJs } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { SiLangchain, SiPostgresql } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

type TechIconType = {
  name: string;
  icon: IconType;
};
const IconPaths: TechIconType[] = [
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
  },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  {
    name: "Docker",
    icon: FaDocker,
  },
  { name: "LangChain", icon: SiLangchain },
  {
    name: "NodeJS",
    icon: FaNodeJs,
  },

  { name: "Git", icon: FaGitAlt },
  // // "Golang",
  // // "NextJS",
  // "Git",
  // "Traefik",
];

const Tech = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Brain is filled with:</h3>
      <figure className="flex flex-wrap gap-4 items-center">
        {IconPaths.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="font-bold bg-accent rounded-[0.2rem] p-[0.25rem] px-2 flex items-center gap-2 hover:shadow-[0px_5px_2px_1.5px] shadow-primary transform duration-150 hover:-translate-y-0.5 "
          >
            <Icon className="icon-md"/>
            <p>{name}</p>
          </div>
        ))}
      </figure>
    </section>
  );
};

export default Tech;
