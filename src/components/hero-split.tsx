import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { TbBrandReddit } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import type { IconType } from "react-icons";
import { profile } from "@/lib/profile";
import { CtaChip } from "@/components/cta-chip";
import { NowList } from "@/components/now-list";
import { SkillChips } from "@/components/skill-chips";
import Image from "next/image";

const SOCIAL_ICONS: Record<string, IconType> = {
  github: FiGithub,
  x: FaXTwitter,
  mail: GoMail,
  discord: RiDiscordLine,
  reddit: TbBrandReddit,
};

export function HeroSplit() {
  return (
    <section
      className="hero reveal"
      id="top"
      style={{ "--i": 0 } as React.CSSProperties}
    >
      {/*<figure className="hero__figure">
        <PixelatedProfile />
      </figure>*/}
      <div className="hero__identity">
        <div className="hero__heading">
          <div className="hero__title">
            <Image
              src="/roshan-anand.dark.svg"
              width="200"
              height="200"
              alt=""
              className="w-100"
            />
            {/*<h1 className="hero__name">{profile.name}</h1>*/}
            <p className="hero__role">{profile.role}</p>
          </div>
          <div className="hero__status-block">
            <p
              className={`hero__status hero__status--${
                profile.status ? "accent" : "orange hero__status--struck"
              }`}
            >
              <span className="hero__status-text">open to work</span>
            </p>
          </div>
        </div>
        <NowList items={profile.now} />
        <SkillChips skills={profile.skills} />
        <div className="hero__divider" aria-hidden="true" />
        <ul className="hero__socials w-full">
          {profile.socials.map((item) => {
            const Icon = item.icon ? SOCIAL_ICONS[item.icon] : null;
            return (
              <li key={item.label}>
                <a
                  className="hero__social"
                  href={item.href}
                  aria-label={item.label}
                >
                  {Icon ? <Icon className="hero__social-icon" /> : item.label}
                </a>
              </li>
            );
          })}
          <CtaChip
            href={profile.resume}
            // variant="ghost"
            className="ml-auto"
          >
            resume
          </CtaChip>
        </ul>
      </div>
    </section>
  );
}
