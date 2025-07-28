"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import "@/styles/hover.css";

type Project = {
  title: string;
  designation: string;
  description: string;
  livelink: string;
  repolink: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "CODE JOIN",
    designation: "Fullstack",
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time",
    livelink: "https://codejoin.roshananand.cloud",
    repolink: "",
    tech: ["TypeScript", "NodeJS", "Docker", "Traefik"],
  },
  {
    title: "GO POD",
    designation: "Fullstack",
    description:
      "A podcast recording platform, were you can record and stream your podcast seamlesly",
    livelink: "https://gopod.roshananand.cloud",
    repolink: "",
    tech: ["TypeScript", "Golang", "AWS_S3"],
  },
];

const DropDownBox = ({
  title,
  description,
  designation,
  tech,
  livelink,
  repolink,
}: Project) => {
  return (
    <div>
      <motion.article
        initial={{ height: 50 }}
        whileHover={{
          height: "auto",
        }}
        transition={{
          duration: 0.37,
        }}
        className="overflow-y-hidden border border-brd-one cursor-pointer rounded-md px-2 group"
      >
        <section className="grid grid-cols-3 grid-rows-[50_20]">
          <div className="flex gap-3 items-center col-span-2 row-span-1">
            <h3>{title}</h3>
            <h6>{designation}</h6>
          </div>

          <div className="col-span-1 row-span-2 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-end items-center gap-4 mr-3">
            <a
              href={repolink}
              className="hover:scale-110 border rounded-full p-1"
            >
              <FaGithub className="icon-md" />
            </a>
            <a
              href={livelink}
              className="hover:scale-110 border rounded-full p-1"
            >
              <BiExport className="icon-md" />
            </a>
          </div>

          <figure className="gap-2 mb-3 flex col-span-2 row-span-1">
            {tech.map((name, i) => (
              <Image
                key={i}
                width={100}
                height={100}
                src={`/lang-icons/${name.toLowerCase()}.svg`}
                className={`icon-sm ${
                  (name === "Traefik" || name === "NextJS") &&
                  "bg-white rounded-md p-[1px]"
                }`}
                alt={`${name} Logo`}
              />
            ))}
          </figure>
        </section>
        <section className="flex-col mb-5">
          <p>{description}</p>
        </section>
      </motion.article>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <h1 className="mb-5"> PROJECTS :</h1>
      <section className="flex flex-col flex-wrap gap-4">
        {projects.map((info, i) => (
          <DropDownBox {...info} key={i} />
        ))}
      </section>
    </>
  );
};

export default Projects;
