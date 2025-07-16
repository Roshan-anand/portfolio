import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { FaHandPeace, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaSuitcase } from "react-icons/fa";

// <a href="https://github.com/Roshan-anand">
//             <FaGithub className="icon-sm" />
//           </a>
//           <a href="">
//             <FaXTwitter className="icon-sm" />
//           </a>
//           <a href="https://discord.com/users/rosanand">
//             <SiDiscord className="icon-sm" />
//           </a>
//           <a href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/">
//             <FaLinkedinIn className="icon-sm" />
//           </a>
//           <a href="mailto:roshan4nand@gmail.com">
//             <MdEmail className="icon-sm" />
//           </a>
const links = [
  {
    title: "Github",
    icon: <FaGithub className="icon-md" />,
    href: "https://github.com/Roshan-anand",
  },
  {
    title: "Twitter",
    icon: <FaXTwitter className="icon-md" />,
    href: "https://twitter.com/roshan4nand",
  },
  {
    title: "Discord",
    icon: <SiDiscord className="icon-md" />,
    href: "https://discord.com/users/rosanand",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn className="icon-md" />,
    href: "https://www.linkedin.com/in/roshan-anand-a92b1a23a/",
  },
  {
    title: "Email",
    icon: <MdEmail className="icon-md" />,
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
