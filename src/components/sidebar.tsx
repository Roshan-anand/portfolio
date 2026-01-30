import { buttonVariants } from "./ui/button";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

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
    link: "https://twitter.com/roshan4nand",
    icon: FaXTwitter,
  },
  {
    link: "https://www.linkedin.com/in/roshan-anand-a92b1a23a/",
    icon: FaLinkedinIn,
  },
  {
    link: "https://mail.google.com/mail/u/0/?fs=1&to=roshan4nand@gmail.com&tf=cm",
    icon: MdEmail,
  },
];

const sideBarLinks = ["projects", "skills", "about"];

const SideBar = () => {
  return (
    <aside className="md:w-1/4 flex md:flex-col justify-between items-center md:items-stretch p-4 md:p-0">
      <section className="flex flex-wrap md:border-r-4 md:p-4 ">
        {socials.map(({ link, icon: Icon }, i) => {
          return (
            <span
              key={i}
              className="md:w-1/2 flex gap-4 md:gap-0 justify-center md:my-2"
            >
              <Link
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "size-fit mx-2 md:mx-0",
                )}
                href={link}
                target="_blank"
              >
                <Icon className="icon-lg" />
              </Link>
            </span>
          );
        })}
      </section>

      <section className="flex md:flex-col gap-4 md:p-4 md:border-r-4">
        <ThemeToggle />
        {sideBarLinks.map((link, i) => (
          <Link
            className={cn(buttonVariants({ variant: "primary" }),
              "font-bold")}
            href={`#${link}`}
            key={i}
          >
            {link.toUpperCase()}
          </Link>
        ))}
      </section>
    </aside>
  );
};
export default SideBar;
