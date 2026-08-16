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
  skills: string[];
};

export function SkillChips({ skills }: SkillChipsProps) {
  return (
    <ul className="chips">
      {skills.map((skill, i) => (
        <li key={skill} className={`chip chip--${TONES[i % TONES.length]}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
