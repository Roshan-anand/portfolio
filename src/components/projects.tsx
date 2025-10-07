import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

type Project = {
  title: string;
  designation: string;
  description: string;
  livelink: string | null;
  repolink: string;
};

const projects: Project[] = [
  {
    title: "CODE JOIN",
    designation: "Fullstack",
    description:
      "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time.",
    livelink: "https://codejoin.roshananand.cloud",
    repolink: "https://github.com/Roshan-anand/code-join",
  },
];

const DropDownBox = ({
  title,
  description,
  designation,
  livelink,
  repolink,
}: Project) => {
  return (
    <div className="bg-card rounded-md p-4 relative">
      <header className="flex items-center gap-2">
        <h2>{title}</h2>
        <p className="text-secondary">{designation}</p>
        <div className="ml-auto flex gap-4 p-2 px-4 rounded-b-sm absolute top-0 right-5 bg-background">
          <a
            href={repolink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110"
          >
            <FaGithub className="icon-md text-muted-foreground" />
          </a>
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md hover:scale-110 bg-muted-foreground text-primary-foreground"
            >
              <LiaExternalLinkAltSolid className="icon-md "/>
            </a>
          )}
        </div>
      </header>
      <p className="text-muted-foreground mt-3">{description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3> PROJECTS :</h3>
      <figure className="flex flex-col flex-wrap gap-4">
        {projects.map((info, i) => (
          <DropDownBox {...info} key={i} />
        ))}
      </figure>
    </section>
  );
};

export default Projects;
