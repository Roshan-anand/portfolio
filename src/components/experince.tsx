import { Project } from "@/lib/types";
import ProjectBox from "./ui/projectBox";

const projects: Project[] = [
  {
    title: "GPT MML",
    designation: ["Fullstack","AI"],
    description:
      "Freelance Project : AI Chat Bot for Government competitive exam preparation. Provides MCQs, Mindmaps and Current Affairs.",
    repolink: null,
    livelink: null,
  },
];

const Experince = () => {
  return (
    <section className="flex flex-col gap-2">
      <h3> EXPERIENCE :</h3>
      <figure className="flex flex-col flex-wrap gap-4">
        {projects.map((info, i) => (
          <ProjectBox {...info} key={i} />
        ))}
      </figure>
    </section>
  );
};

export default Experince;
