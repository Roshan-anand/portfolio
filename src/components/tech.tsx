import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const IconPaths = [
  "TypeScript",
  "Golang",
  "NextJS",
  "NodeJS",
  "Docker",
  "Git",
  "PostgreSQL",
  "Traefik",
];

const IconBtn = ({ title }: { title: string }) => {
  return (
    <Button variant={"accent"} className="gap-2">
      <Image
        width={100}
        height={100}
        src={`/lang-icons/${title.toLowerCase()}.svg`}
        className={`icon-md ${
          (title === "Traefik" || title === "NextJS") &&
          "bg-white rounded-md p-[1px]"
        }`}
        alt={`${title} Logo`}
      />
      <h3>{title}</h3>
    </Button>
  );
};

const Tech = () => {
  return (
    <>
      <h1 className="mt-10 mb-5">TECH STACK :</h1>
      <section className="flex flex-wrap gap-4">
        {IconPaths.map((title) => (
          <IconBtn key={title} title={title} />
        ))}
      </section>
    </>
  );
};

export default Tech;
