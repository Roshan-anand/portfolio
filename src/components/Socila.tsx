import { ComponentProps } from "react";
import { Card } from "./ui/card";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { SiPeerlist } from "react-icons/si";
import { FaReddit } from "react-icons/fa";

type Social = {
  link: string;
  icon: IconType;
};

const socials: Social[] = [
  {
    link: "https://github.com/Roshan-anand",
    icon: FaGithub,
  },
  {
    link: "https://x.com/R0SHAN_ANAND",
    icon: FaXTwitter,
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=roshan4nand@gmail.com&tf=cm",
    icon: MdEmail,
  },
  {
    link: "https://discordapp.com/users/1114575128190271530",
    icon: FaDiscord,
  },
  {
    link: "https://www.reddit.com/user/Roshan_anand",
    icon: FaReddit,
  },
  {
    link: "https://peerlist.io/roshananand",
    icon: SiPeerlist,
  },
];

const Social = ({ className }: ComponentProps<"div">) => {
  return (
    <Card className={cn("flex-row items-center justify-around", className)}>
      {socials.map(({ link, icon: Icon }, i) => {
        return (
          <Link
            key={i}
            className="p-2 hover:text-accent-purple/80 text-dim-foreground hover:scale-105"
            href={link}
            target="_blank"
          >
            <Icon className="size-6" />
          </Link>
        );
      })}
    </Card>
  );
};

export default Social;
