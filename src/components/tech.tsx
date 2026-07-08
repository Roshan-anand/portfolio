import { Card, CardContent } from "./ui/card";
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
    bg: "text-accent-blue/80",
  },
  {
    category: "META",
    skills: ["PERN", "Svelte", "SQLite", "PSQL"],
    icon: PiStackFill,
    bg: "text-accent-green/80",
  },
  {
    category: "DEV",
    skills: ["Linux", "Git", "Docker", "Traefik", "AWS-EC2"],
    icon: FaTools,
    bg: "text-accent-yellow/80",
  },
];

const Tech = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("p-2 flex flex-col justify-around", className)}>
      <p className="text-muted-foreground flex items-center gap-1">
        <span className="text-accent-magenta">$</span>cat skills.log
      </p>

      <CardContent className="flex md:flex-col p-0 gap-4">
        {skills.map(({ category, skills, icon: Icon, bg }) => (
          <figure className="flex flex-col gap-1.5" key={category}>
            <p className="flex items-center gap-2 text-dim-foreground">
              <Icon />
              <span>{category} :</span>
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <p
                  key={skill}
                  className={cn("px-1 rounded-sm border-dotted border-2 border-dim-foreground", bg)}
                >
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
