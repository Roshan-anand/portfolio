import React from "react";
import { FaDocker, FaGolang } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiBun } from "react-icons/si";

type TechIconType = {
  name: string;
  icon: IconType;
};
const IconPaths: TechIconType[] = [
  {
    name: "TypeScript",
    icon: BiLogoTypescript,
  },
  { name: "Golang", icon: FaGolang },
  { name: "PSQL", icon: BiLogoPostgresql },
  {
    name: "Bun",
    icon: SiBun,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
];

const Tech = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Brain is filled with:</h3>
      <figure className="flex flex-wrap gap-4 items-center">
        {IconPaths.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-input/30 border border-input/60 shadow-2xl rounded-sm p-[0.25rem] px-2 flex items-center gap-2"
          >
            <Icon className="icon-md " />
            <p>{name}</p>
          </div>
        ))}
      </figure>
    </section>
  );
};

export default Tech;
