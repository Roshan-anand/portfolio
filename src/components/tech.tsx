import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { FaDocker, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";

const Tech = () => {
  return (
    <section className="col-span-2 row-span-2 flex gap-4 flex-wrap items-center justify-evenly p-4 [&>*]:h-fit [&>*]:grow [&>*]:p-2 [&>*]:border-2 [&>*]:border-border-one [&>*]:rounded-md [&>*]:flex [&>*]:items-center [&>*]:justify-evenly [&>*]:gap-1 font-bold">
      <figure>
        <FaGolang className="icon-lg text-accent-g" />
        <h3>Golang</h3>
      </figure>
      <figure>
        <BiLogoTypescript className="icon-lg text-accent-g" />
        <h3>TypeScript</h3>
      </figure>
      <figure>
        <BiLogoPostgresql className="icon-lg text-accent-g" />
        <h3>PSQL</h3>
      </figure>
      <figure>
        <IoLogoNodejs className="icon-lg text-accent-g" />
        <h3>NodeJS</h3>
      </figure>
      <figure>
        <FaDocker className="icon-lg text-accent-g" />
        <h3>Docker</h3>
      </figure>
      <figure>
        <FaGitAlt className="icon-lg text-accent-g" />
        <h3>Git</h3>
      </figure>
      <figure>
        <SiMongodb className="icon-lg text-accent-g" />
        <h3>MongoDB</h3>
      </figure>
      <figure>
        <FaReact className="icon-lg text-accent-g" />
        <h3>React</h3>
      </figure>
    </section>
  );
};

export default Tech;
