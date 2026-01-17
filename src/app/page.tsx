import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Tech from "@/components/tech";

const page = () => {
  return (
    <main className="w-[80%] max-w-[800px] mx-auto p-2 flex flex-col gap-[50px] bg-">
      <Hero />
      <Tech />
      <Projects />
    </main>
  );
};

export default page;
