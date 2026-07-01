import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { PixelatedProfile } from "./profile-icon";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { SiPeerlist } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import LineHoverLink from "./ui/line-hover-link";

type Social = {
  link: string;
  icon: IconType;
};

const socials: Social[] = [
  {
    link: "https://github.com/Roshan-anand",
    icon: FiGithub,
  },
  {
    link: "https://x.com/R0SHAN_ANAND",
    icon: FaXTwitter,
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=roshan4nand@gmail.com&tf=cm",
    icon: CiMail,
  },
  {
    link: "https://peerlist.io/roshananand",
    icon: SiPeerlist,
  },
  {
    link: "https://discordapp.com/users/1114575128190271530",
    icon: RxDiscordLogo,
  },
];

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card
      id="about"
      className={cn(
        "flex-col md:flex-row justify-center items-center border-none text-center md:text-start",
        className,
      )}
    >
      <section className="shrink-0">
        <PixelatedProfile />
      </section>
      <section className="flex flex-col justify-around gap-3 items-center md:items-start">
        <div>
          <h3>ROSHAN ANAND</h3>
          <h3 className="rounded-md text-muted-foreground">
            20yrs | BACKEND | CLOUD | FULLSTACK
          </h3>
        </div>

        <p className="text-subtle-foreground">
          Building
          <LineHoverLink
            href="https://github.com/Roshan-anand/godploy"
            variant="scribble"
            className="text-accent-orange px-1"
          >
            GOdploy
          </LineHoverLink>
          A self host deployment platform
        </p>

        <div className="flex gap-5">
          {socials.map(({ link, icon: Icon }, i) => {
            return (
              <Link
                key={i}
                className="w-5 text-subtle-foreground hover:text-accent-magenta-light"
                href={link}
                target="_blank"
              >
                <Icon className="size-full" />
              </Link>
            );
          })}
        </div>

        <div className="flex gap-3 flex-wrap justify-center md:justify-start">
          <Link
            className="border w-fit flex gap-2 items-center p-1 text-subtle-foreground border-subtle-foreground hover:text-accent-orange hover:border-border-focus"
            href="/fullstack.pdf"
          >
            <FaRegFileAlt />
            <p>Resume</p>
          </Link>

          <Link
            className="border w-fit flex gap-2 items-center p-1 text-accent-purple/90 border-accent-purple/70 hover:bg-accent-purple/10"
            href="/fullstack.pdf"
          >
            <BiPhoneCall />
            <p>Book a call</p>
          </Link>
        </div>
      </section>
    </Card>
  );
};
export default Hero;
