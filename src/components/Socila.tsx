import { ComponentProps } from "react";
import { Card } from "./ui/card";
import { buttonVariants } from "./ui/button";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { SiPeerlist } from "react-icons/si";

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
    link: "https://peerlist.io/roshananand",
    icon: SiPeerlist,
  },
  {
    link: "https://www.linkedin.com/in/roshan-anand-a92b1a23a/",
    icon: FaLinkedinIn,
  },
];

const Social = ({ className }: ComponentProps<"div">) => {
  return (
    <Card
      className={cn(
        "border-0 shadow-none flex justify-around md:justify-center items-center flex-row flex-wrap p-0 gap-0",
        className,
      )}
    >
      <h1 className="hidden md:flex flex-col flex- w-1/3 h-1/2 justify-center items-center">
        <span>LIN</span>
        <span>KS.</span>
      </h1>
      {socials.map(({ link, icon: Icon }, i) => {
        return (
          <span key={i} className="flex w-14 md:w-1/3 md:h-1/2 justify-center items-center">
          <Link
            key={i}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "w-[90%]",
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
