import Hero from "@/components/hero";
import ModeToggle from "@/components/mode";
import { ProjectBox } from "@/components/projects";
import Social from "@/components/Socila";
import Tech from "@/components/tech";
import { Project } from "@/lib/types";

const godployProject: Project = {
  title: "comming soon",
  designation: ["FULLSTACK", "GO", "VUE"],
  description:
    "🔨Currenty working on a selfhost PAAS Alternative to Netlify and Heroku....",
  livelink: null,
  repolink: "https://github.com/Roshan-anand/godploy",
};

const sketchyProject: Project = {
  title: "SKETCHY IO",
  designation: ["FULLSTACK", "TS"],
  description: "An online multiplayer drawing and guessing pictionary game.",
  livelink: "https://sketchy-io.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/sketchy_io",
};

const codeJoinProject: Project = {
  title: "CODE JOIN",
  designation: ["FULLSTACK", "TS"],
  description:
    "A collaborative cloud IDE, where you can code with your friends and colleagues in real-time.",
  livelink: "https://codejoin.roshananand.cloud",
  repolink: "https://github.com/Roshan-anand/code-join",
};

const page = () => {
  return (
    <main className="wave-bg rounded-t-2xl w-[95%] max-w-250 h-[95vh] my-auto mx-auto p-2 flex flex-col md:grid grid-cols-12 grid-rows-12  gap-6">
      <Hero className="col-span-5 row-span-3 row-start-2" />
      <Social className="col-span-4 row-span-3 col-start-9 row-start-3" />
      <ModeToggle className="col-span-3 row-span-1 row-start-8 col-start-1" />
      <ProjectBox
        {...godployProject}
        className="col-span-4 row-span-3 col-start-9 justify-around"
      />
      <ProjectBox
        {...sketchyProject}
        className="col-span-5 row-span-2 row-start-5 justify-around"
      />
      <ProjectBox
        {...codeJoinProject}
        className="col-span-5 row-span-2 col-start-4 justify-around"
      />
      <Tech className="col-span-3 row-span-7 row-start-1 col-start-1" />
    </main>
  );
};

export default page;
