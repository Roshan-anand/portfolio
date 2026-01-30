import React from "react";
import { Card } from "./ui/card";

type Skills = {
  category: "CORE" | "OTHER";
  skills: string[];
};

const skills: Skills[] = [
  {
    category: "CORE",
    skills: ["GOlang", "TypeScript", "SQL", "Docker"],
  },
  {
    category: "OTHER",
    skills: [
      "BunJS",
      "NodeJS",
      "Express",
      "React",
      "NextJS",
      "ORMs",
      "Linux",
      "Git",
    ],
  },
];

const Tech = () => {
  return (
    <section
      id="skills"
      className="h-full flex flex-col gap-6 justify-center items-center px-4"
    >
      <h1>SKILLS</h1>
      <figure className="flex flex-col gap-6">
        {skills.map(({ category, skills }) => (
          <Card className="rounded-sm p-4 gap-4" key={category}>
            <h3>{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <p key={skill} className="p-1 px-2 rounded-sm magic">
                  {skill}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </figure>
    </section>
  );
};

export default Tech;
