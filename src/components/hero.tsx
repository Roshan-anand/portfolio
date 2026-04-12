import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card
      id="about"
      className={cn("h-full flex flex-col justify-between p-3", className)}
    >
      <div className="flex gap-2 items-end">
        <div className="magic rounded-md overflow-hidden">
          <Image
            src="/profile-big.png"
            alt="profile"
            width="100"
            height="100"
            className="size-full"
          />
        </div>
        <h1 className="flex flex-col">
          <span>ROSHAN</span>
          <span className="ml-3">ANAND</span>
        </h1>
        <div className="h-full flex-1 flex justify-end items-start">
          <ThemeToggle />
        </div>
      </div>
      <h3 className="magic text-center p-2 bg-muted ">
        20yrs | BACKEND | CLOUD | FULLSTACK
      </h3>
    </Card>
  );
};
export default Hero;
