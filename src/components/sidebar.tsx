import { Button, buttonVariants } from "./ui/button";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";
import Link from "next/link";

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
    link: "mailto:roshan4nand@gmail.com",
    icon: MdEmail,
  },
];

const sideBarLinks = ["projects", "experince", "skills", "about"];
const SideBar = () => {
  return (
    <aside className="w-1/4 flex flex-col justify-between">
      <section className="flex flex-wrap border-r-4 p-4">
        {socials.map(({ link, icon: Icon }, i) => {
          return (
            <span key={i} className="w-1/2 flex justify-center my-2">
              <a
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  " w-fit ",
                )}
                href={link}
                target="_blank"
              >
                <Icon className="icon-lg" />
              </a>
            </span>
          );
        })}
      </section>

      <section className="flex flex-col gap-2 p-4 border-r-4">
        {sideBarLinks.map((link, i) => (
          <Link
            className={cn(buttonVariants({ variant: "primary" }))}
            href={`#${link}`}
            key={i}
          >
            {link.toUpperCase()}
          </Link>
        ))}
        {/*

        <Button variant={"primary"}>Experience</Button>*/}
      </section>
    </aside>
  );
};
export default SideBar;
