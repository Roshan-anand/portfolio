import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import Image from "next/image";

const Hero = ({ className }: React.ComponentProps<"div">) => {
  return (
    <Card
      id="about"
      className={cn(
        "h-full flex justify-around md:justify-center p-3 bg-transparent border-none shadow-none",
        className,
      )}
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
      </div>
      <h3 className="magic text-center p-2 bg-muted rounded-md">
        20yrs | BACKEND | CLOUD | FULLSTACK
      </h3>
    </Card>
  );
};
export default Hero;
