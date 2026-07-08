import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import LineHoverLink from "./ui/line-hover-link";
import { FaCaretRight } from "react-icons/fa6";
import Image from "next/image";

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card className={cn("flex flex-row gap-2 border-0 p-0", className)}>
      <Card className="p-0 flex-2">
        <div className="overflow-hidden bg-secondary-background p-1">
          <Image
            src="/no-bg-profile.png"
            alt="profile"
            width="300"
            height="300"
            className="size-full object-contain object-center"
          />
        </div>
      </Card>
      <div className="flex-4 flex flex-col justify-end gap-0">
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
      </div>
    </Card>
  );
};
export default Hero;
