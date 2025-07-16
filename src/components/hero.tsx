import React from "react";
import { FaHandPeace, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaSuitcase } from "react-icons/fa";
import ToggleDark from "./toggleDark";

const Hero = () => {
  return (
    <section>
      <nav className="my-[90px]">
        <div className="flex justify-between items-start">
          <span>
            <h1 className="mr-auto">ROSHAN ANAND</h1>
            <ul className="flex md:hidden justify-between mt-3 [&>a]:hover:text-accent [&>a]:hover:scale-110">
              <a href="https://github.com/Roshan-anand">
                <FaGithub className="icon-sm" />
              </a>
              <a href="">
                <FaXTwitter className="icon-sm" />
              </a>
              <a href="https://discord.com/users/rosanand">
                <SiDiscord className="icon-sm" />
              </a>
              <a href="https://www.linkedin.com/in/roshan-anand-a92b1a23a/">
                <FaLinkedinIn className="icon-sm" />
              </a>
              <a href="mailto:roshan4nand@gmail.com">
                <MdEmail className="icon-sm" />
              </a>
            </ul>
          </span>
          <ToggleDark />
        </div>
        <div></div>
      </nav>
      <article className="mt-10 text-txt-soft">
        <span className="flex gap-1">
          <FaHandPeace className="icon-sm text-accent -rotate-[8deg]" />
          <h3>i'm 19-yrs-old developer based in india.</h3>
        </span>
        <h6>
          <a
            className="mt-5 mb-2 hover-anime-up w-fit py-1 px-2 flex items-center gap-2"
            href="mailto:roshan4nand@gmail.com?subject=Interested in hiring you"
          >
            <FaSuitcase />
            HIRE ME
          </a>
        </h6>
        <p>
          Currently available for internships, full-time opportunities, and
          freelance projects. If you’re looking for Backend, Fullstack
          developer, I'm your go-to person!
        </p>
      </article>
    </section>
  );
};

export default Hero;
