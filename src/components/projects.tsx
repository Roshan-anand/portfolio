import React from "react";

type Project = {
  title: string;
  designation: string;
  date: string;
  description: string;
  livelink: string;
  repolink: string;
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
  },
  {
    title: "CODE JOIN",
    designation: "Fullstack",
    date: "Jun 2025 - present",
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time",
    livelink: "",
    repolink: "",
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="mb-5"> PROJECTS :</h1>
      <section className="flex flex-wrap gap-4">
        {projects.map(({ title, description, designation, date }) => (
          <article className="w-full border border-brd-one px-2 py-1 rounded-md hover:border-txt-soft" key={title}>
            <div className="flex gap-3 items-center mb-3">
              <h3>{title}</h3>
              <h6>{designation}</h6>
              <p className="ml-auto">{date}</p>
            </div>
            <p>{description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;
