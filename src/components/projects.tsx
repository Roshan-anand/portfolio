import React from "react";

type Project = {
  title: string;
  designation: string;
  date: string;
  description: string;
};
const projects: Project[] = [
  {
    title: "GO POD",
    designation: "Fullstack",
    date: "Jun 2025 - present",
    description:
      "A podcast recording platform, were you can record and stream your podcast seamlesly",
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="mb-5"> PROJECTS :</h1>
      <section className="flex flex-wrap gap-4">
        {projects.map(({ title, description, designation, date }) => (
          <article>
            <h3>{title}</h3>
            <h6>{designation}</h6>
          </article>
        ))}
      </section>
    </>
  );
};

export default Projects;
