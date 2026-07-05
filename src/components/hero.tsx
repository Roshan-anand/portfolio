import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import LineHoverLink from "./ui/line-hover-link";
import { FaCaretRight } from "react-icons/fa6";

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("flex flex-col gap-0 border-0", className)}>
      <h1 className="flex text-accent-magenta-light/80">RO$HAN ANAND</h1>

      <div className="flex flex-col gap-1 text-dim-foreground">
        <p className="flex items-center">
          <FaCaretRight className="mr-1 text-accent-magenta-light/80" />
          20yrs | Backend | Cloud | Fullstack
        </p>
        <p className="flex items-center">
          <FaCaretRight className="mr-1 text-accent-magenta-light/80" />
          Building
          <LineHoverLink
            href="https://github.com/Roshan-anand/godploy"
            variant="scribble"
            className="text-accent-orange/80 px-1"
          >
            GOdploy
          </LineHoverLink>
          , a deployment platform
        </p>
        <p className="flex items-center">
          <FaCaretRight className="mr-1 text-accent-magenta-light/80" />
          Agent : PI + GPT + DeepSeek
        </p>
        <p className="flex items-center">
          <FaCaretRight className="mr-1 text-accent-magenta-light/80" />
          Exploring : Agent Sandboxing
        </p>
      </div>
    </Card>
  );
};
export default Hero;
