import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <nav className="my-[50px] w-fit">
        <h1 className="mr-auto">ROSHAN ANAND</h1>
        <ul className="flex justify-between mt-3 [&>a]:hover:text-primary [&>a]:hover:scale-110">
          <a href="https://github.com/Roshan-anand" target="_blank">
            <FaGithub className="icon-md" />
          </a>
          <a href="https://twitter.com/roshan4nand" target="_blank">
            <FaXTwitter className="icon-md" />
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
      </nav>
      <article>
        <span className="flex items-center my-4">
          <h1 className="-rotate-[30deg]">✌🏽</h1>
          <h3 className="text-muted-foreground">
            20 | Backend | Cloud | Based in INDIA
          </h3>
        </span>
      </article>
    </section>
  );
};

export default Hero;
