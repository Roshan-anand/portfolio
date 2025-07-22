import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const links = [
  {
    title: "Github",
    icon: <FaGithub className="icon-lg" />,
    href: "https://github.com/Roshan-anand",
  },
  {
    title: "Twitter",
    icon: <FaXTwitter className="icon-lg" />,
    href: "https://twitter.com/roshan4nand",
  },
  {
    title: "Discord",
    icon: <SiDiscord className="icon-lg" />,
    href: "https://discord.com/users/rosanand",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn className="icon-lg" />,
    href: "https://www.linkedin.com/in/roshan-anand-a92b1a23a/",
  },
  {
    title: "Email",
    icon: <MdEmail className="icon-lg" />,
    href: "mailto:roshan4nand@gmail.com",
  },
];
const Navbar = () => {
  return (
    <div className="flex items-center justify-center h-fit fixed left-1/2 -translate-1/2 bottom-[8vh] w-full">
      <FloatingDock mobileClassName="ml-auto mr-3 " items={links} />
    </div>
  );
};

export default Navbar;
