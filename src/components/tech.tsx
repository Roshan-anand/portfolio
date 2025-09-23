import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const IconPaths = [
  "TypeScript",
  // "Golang",
  "PostgreSQL",
  // "NextJS",
  "NodeJS",
  "Langchain",
  "Docker",
  "Git",
  // "Traefik",
];

const IconBtn = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-2 border-muted-foreground border-[0.1rem] rounded-[5px] p-[0.25rem] shadow bg-background transform hover:shadow-primary hover:shadow-[0px_3px_2px_0px] hover:-translate-y-[3px] transition-all duration-300 ease-in-out" >
      <Image
        width={100}
        height={100}
        src={`/lang-icons/${title.toLowerCase()}.${title == "NextJS" ? "png" : "svg"}`}
        className="icon-md"
        alt={`${title} Logo`}
      />
      <p >{title}</p>
    </div>
  );
};

const Tech = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3>Brain is filled with:</h3>
      <figure className="flex flex-wrap gap-4 items-center">
        {IconPaths.map((title) => (
          <IconBtn key={title} title={title} />
        ))}
      </figure>
    </section>
  );
};

export default Tech;
