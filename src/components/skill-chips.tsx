import type { CSSProperties } from "react";

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

// Official brand colors (hex), keyed by lowercased skill name. Any skill
// without a brand mapping falls back to the tonal cycle below.
const BRAND_COLORS: Record<string, string> = {
  golang: "#00ADD8",
  typescript: "#3178C6",
  pern: "#D63384",
  svelte: "#FF3E00",
  sqlite: "#4CAF50",
  postgresql: "#336791",
  linux: "#FCC624",
  git: "#F05032",
  docker: "#2496ED",
  traefik: "#24D1C7",
  "aws ec2": "#FF9900",
};

type SkillChipsProps = {
  skills: string[];
};

export function SkillChips({ skills }: SkillChipsProps) {
  return (
    <ul className="chips">
      {skills.map((skill, i) => {
        const brand = BRAND_COLORS[skill.toLowerCase()];
        const tone = brand ? "" : `chip--${TONES[i % TONES.length]}`;
        const light =
          brand && skill.toLowerCase() === "golang" ? "chip--light" : "";
        return (
          <li
            key={skill}
            className={`chip ${tone} ${light}`.trim()}
            style={brand ? ({ "--chip": brand } as CSSProperties) : undefined}
          >
            {skill}
          </li>
        );
      })}
    </ul>
  );
}
