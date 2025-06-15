import { AiFillHome } from "react-icons/ai";
import { FaFolder, FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { Button } from "./ui/button";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Nav = () => {
  return (
    <nav className="w-full md:max-w-[350px] rounded-md bg-sec flex justify-evenly gap-1 py-2">
      <AnimatedTooltip name="Home">
        <Button>
          <AiFillHome className="icon-md" />
        </Button>
      </AnimatedTooltip>
      <AnimatedTooltip name="About">
        <Button>
          <FaFolder className="icon-md" />
        </Button>
      </AnimatedTooltip>
      <AnimatedTooltip name="Work">
        <Button>
          <MdWork className="icon-md" />
        </Button>
      </AnimatedTooltip>
      <AnimatedTooltip name="Tools">
        <Button>
          <FaTools className="icon-md" />
        </Button>
      </AnimatedTooltip>
      <AnimatedTooltip name="Contact">
        <Button>
          <IoIosMail className="icon-md" />
        </Button>
      </AnimatedTooltip>
    </nav>
  );
};

export default Nav;
