import type { CSSProperties } from "react";

import type { Skill } from "@/lib/types";

const TONES = [
  "red",
  "orange",
  "yellow",
  "aqua",
  "blue",
  "purple",
  "accent",
  "ink",
] as const;

type SkillChipsProps = {
  skills: Skill[];
};

export function SkillChips({ skills }: SkillChipsProps) {
  return (
    <ul className="chips">
      {skills.map((skill, i) => {
        const tone = skill.color ? "" : `chip--${TONES[i % TONES.length]}`;
        const light = skill.light ? "chip--light" : "";
        return (
          <li
            key={skill.name}
            className={`chip ${tone} ${light}`.trim()}
            style={
              skill.color ? ({ "--chip": skill.color } as CSSProperties) : undefined
            }
          >
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
}
