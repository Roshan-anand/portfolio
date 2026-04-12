import { Card, CardContent, CardTitle } from "./ui/card";
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
    skills: ["MERN", "SQLite", "PSQL"],
    icon: PiStackFill,
    bg: "bg-secondary",
  },
  {
    category: "DEV",
    skills: ["Linux", "Git", "Docker", "Traefik"],
    icon: FaTools,
    bg: "bg-muted",
  },
];

const Tech = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card
      className={cn(
        "px-1 flex flex-col items-center justify-between",
        className,
      )}
    >
      <CardTitle className="flex gap-2">
        <FaCode className="icon-lg" />
        <h1>SKILLS</h1>
      </CardTitle>
      <CardContent className="p-1 flex flex-wrap justify-center md:block">
        {skills.map(({ category, skills, icon: Icon, bg }) => (
          <figure className="flex flex-col gap-2 my-5 w-[45%] md:w-full" key={category}>
            <h3 className="flex items-center gap-2 ">
              <Icon />
              <span>{category} :</span>
            </h3>
            <div className="flex flex-wrap gap-3 p-1">
              {skills.map((skill) => (
                <p key={skill} className={cn("px-1 rounded-sm magic", bg)}>
                  {skill}
                </p>
              ))}
            </div>
          </figure>
        ))}
      </CardContent>
    </Card>
  );
};
export default Tech;
