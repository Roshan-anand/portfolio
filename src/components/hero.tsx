import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="about"
      className="h-full flex flex-col gap-2 justify-center items-center px-4"
    >
      <div className="magic rounded-full overflow-hidden">
        <Image
          src="/profile-big.png"
          alt="profile"
          width="100"
          height="100"
          className="size-full"
        />
      </div>
      <h1>ROSHAN A</h1>

      <Card className="items-center px-2">
        <h3 className="magic flex p-2 bg-muted rotate-1">
          20 | BACKEND | CLOUD | FULLSTACK
        </h3>
        <p className="text-center text-balance font-medium">
          Available for Freelace, Contract or Full Time opportunities. Need a
          dev who is instantly productive at any codebase that you throw, feel
          free to connect.
        </p>
        <Link
          href={
            "https://mail.google.com/mail/u/0/?fs=1&to=roshan4nand@gmail.com&tf=cm"
          }
          className="underline underline-offset-1 font-semibold"
        >
          roshan4nand@gmail
        </Link>
      </Card>
    </section>
  );
};

export default Hero;
