import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { TbBrandReddit } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import type { IconType } from "react-icons";
import { callHref, profile } from "@/lib/profile";
import { CtaChip } from "@/components/cta-chip";
import { NowList } from "@/components/now-list";
import { SkillChips } from "@/components/skill-chips";
import { PixelatedProfile } from "./pixel-profile";

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
      <figure className="hero__figure">
        {/*<Image
          className="hero__portrait"
          src="/no-bg-profile.png"
          alt="Roshan Anand"
          width={720}
          height={720}
          priority
          fetchPriority="high"
        />*/}
        <PixelatedProfile />
      </figure>
      <div className="hero__identity">
        <div className="hero__heading">
          <div className="hero__title">
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__role">{profile.role}</p>
          </div>
          <div className="hero__status-block">
            <p className="hero__status">{profile.status}</p>
            {/*<p className="hero__status-sub">full-time · contract · intern</p>*/}
          </div>
        </div>
        <NowList items={profile.now} />
        <SkillChips skills={profile.skills} />
        <div className="hero__divider" aria-hidden="true" />
        <div className="hero__contact">
          <ul className="hero__socials">
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
          </ul>
          <div className="hero__actions">
            <CtaChip href={callHref}>book a call</CtaChip>
            <CtaChip href={profile.resume} variant="ghost">
              resume
            </CtaChip>
          </div>
        </div>
      </div>
    </section>
  );
}
