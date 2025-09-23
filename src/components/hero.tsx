import React from "react";
import { FaHandPeace, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaSuitcase } from "react-icons/fa";
import ToggleDark from "./toggleDark";
import { Button, buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section>
      <nav className="my-[50px]">
        <div className="flex justify-between items-start">
          <span>
            <h1 className="mr-auto">ROSHAN ANAND</h1>
            <ul className="flex justify-between mt-3 [&>a]:hover:text-primary [&>a]:hover:scale-110">
              <a href="https://github.com/Roshan-anand" target="_blank">
                <FaGithub className="icon-md" />
              </a>
              <a href="https://twitter.com/roshan4nand" target="_blank">
                <FaXTwitter className="icon-md" />
              </a>
              <a href="https://discord.com/users/rosanand" target="_blank">
                <SiDiscord className="icon-md" />
              </a>
              <a
                href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/"
                target="_blank"
              >
                <FaLinkedinIn className="icon-md" />
              </a>
              <a href="mailto:roshan4nand@gmail.com" target="_blank">
                <MdEmail className="icon-md" />
              </a>
            </ul>
          </span>
          <ToggleDark />
        </div>
        <div></div>
      </nav>
      <article >
        <span className="flex items-center gap-1 my-4">
          <FaHandPeace className="icon-md text-primary -rotate-[8deg] " />
          <h3 className="text-muted-foreground">19-yrs - FullStack - GenAI - Based in INDIA</h3>
        </span>
      </article>
    </section>
  );
};

export default Hero;
