import Hero from "@/components/hero";
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
    <main className="w-[95%] max-w-250 h-screen mx-auto p-2 flex flex-col md:grid grid-cols-12 grid-rows-12  gap-6">
      <Hero className="col-span-6 row-span-4 row-start-3" />
      <Social className="col-span-3 row-span-3 row-start-3" />
      <ProjectBox
        {...godployProject}
        className="col-span-3 row-span-3 justify-around"
      />
      <ProjectBox
        {...sketchyProject}
        className="col-span-5 row-span-2 col-start-5 justify-around"
      />
      <ProjectBox
        {...codeJoinProject}
        className="col-span-8 row-span-2 col-start-5 justify-around"
      />
      <Tech className="col-span-3 row-span-6 row-start-3 col-start-1" />
    </main>
  );
};

export default page;
