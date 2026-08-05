import { ComponentProps } from "react";
import { Card } from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { SiPeerlist } from "react-icons/si";
import { FaRegFileLines } from "react-icons/fa6";

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
  // {
  //   link: "https://peerlist.io/roshananand",
  //   icon: SiPeerlist,
  // },
  {
    link: "https://discordapp.com/users/1114575128190271530",
    icon: FaDiscord,
  },
];

const Social = ({ className }: ComponentProps<"div">) => {
  return (
    <Card
      className={cn(
        "border-0 bg-transparent shadow-none flex justify-around md:justify-center items-center flex-row flex-wrap py-0 px-0 gap-0",
        className,
      )}
    >
      {/*<h1 className="hidden md:flex flex-col flex- w-1/3 h-1/2 justify-center items-center">
        <span>LIN</span>
        <span>KS.</span>
      </h1>*/}
      <Link
        href="https://dub.sh/rshn"
        target="_blank"
        className="flex justify-center items-center h-1/2 md:w-2/3"
      >
        <h1
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "items-center gap-2",
          )}
        >
          <FaRegFileLines className="size-1/5" />
          <h1>Resume</h1>
        </h1>
      </Link>
      {socials.map(({ link, icon: Icon }, i) => {
        return (
          <span
            key={i}
            className="flex w-14 md:w-1/3 md:h-1/2 justify-center items-center"
          >
            <Link
              key={i}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "w-[80%]",
              )}
              href={link}
              target="_blank"
            >
              <Icon className="size-full" />
            </Link>
          </span>
        );
      })}
    </Card>
  );
};

export default Social;
