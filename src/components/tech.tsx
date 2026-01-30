import { Card } from "./ui/card";
import { IconType } from "react-icons";
import { FaTools } from "react-icons/fa";
import { PiStackFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { cn } from "@/lib/utils";

type Skills = {
  category: string;
  skills: string[];
  icon: IconType;
  bg: string;
};

const skills: Skills[] = [
  {
    category: "CORE",
    skills: ["GOlang", "TypeScript", "SQL"],
    icon: FaCode,
    bg: "bg-primary",
  },
  {
    category: "META",
    skills: ["BunJS", "NodeJS", "Express", "React", "NextJS", "SQLite", "PSQL"],
    icon: PiStackFill,
    bg: "bg-secondary",
  },
  {
    category: "DEV",
    skills: ["Linux", "Git", "Docker"],
    icon: FaTools,
    bg: "bg-muted",
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
        {skills.map(({ category, skills, icon: Icon, bg }) => (
          <Card className="rounded-sm p-4 gap-4" key={category}>
            <h3 className="flex items-center gap-2">
              <Icon />
              <span>{category}</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <p key={skill} className={cn("p-1 px-2 rounded-sm magic font-bold", bg)}>
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
