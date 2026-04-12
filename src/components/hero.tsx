import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card id="about" className={cn("h-full flex flex-row justify-around md:justify-center p-3", className)}>
      <section className="flex flex-col justify-around">
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
        </div>
        <h3 className="magic text-center p-2 bg-muted ">
          20yrs | BACKEND | CLOUD | FULLSTACK
        </h3>
      </section>
      <section className="flex flex-col justify-around">
        <ThemeToggle />
        <h3 className="flex flex-col justify-around items-center gap-4">
          <span>&#3205;</span>
          <span>A</span>
          <span>&#2309;</span>
          <span>&#3333;</span>
        </h3>
      </section>
    </Card>
  );
};
export default Hero;
