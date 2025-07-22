import Image from "next/image";
import React from "react";

type Project = {
  title: string;
  designation: string;
  date: string;
  description: string;
  livelink: string;
  repolink: string;
  tech: string[];
};
const projects: Project[] = [
  {
    title: "GO POD",
    designation: "Fullstack",
    date: "Jun 2025 - present",
    description:
      "A podcast recording platform, were you can record and stream your podcast seamlesly",
    livelink: "",
    repolink: "",
    tech: ["TypeScript", "Golang", "AWS_S3"],
  },
  {
    title: "CODE JOIN",
    designation: "Fullstack",
    date: "Jun 2025 - present",
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time",
    livelink: "",
    repolink: "",
    tech: ["TypeScript", "NodeJS", "Docker", "Traefik"],
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="mb-5"> PROJECTS :</h1>
      <section className="flex flex-wrap gap-4">
        {projects.map(({ title, description, designation, date, tech }) => (
          <article
            key={title}
            className="w-full border border-brd-one px-2 py-1 rounded-md hover:border-txt-soft"
          >
            <div className="flex gap-3 items-center ">
              <h3>{title}</h3>
              <h6>{designation}</h6>
              <p className="ml-auto">{date}</p>
            </div>
            <figure className="flex gap-2 mb-3">
              {tech.map((name, i) => (
                <Image
                  key={i}
                  width={100}
                  height={100}
                  src={`/lang-icons/${name.toLowerCase()}.svg`}
                  className={`icon-sm ${
                    (name === "Traefik" || name === "NextJS") &&
                    "bg-white rounded-md p-[1px]"
                  }`}
                  alt={`${name} Logo`}
                />
              ))}
            </figure>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;
