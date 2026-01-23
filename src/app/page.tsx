import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import SideBar from "@/components/sidebar";
import Tech from "@/components/tech";

const page = () => {
  return (
    <main className="w-[95%] max-w-200 h-screen mx-auto p-2 flex flex-col md:flex-row ">
      <SideBar />
      <section className="flex-1 h-full overflow-y-auto p-4">
        <Projects />
        <Tech />
        <Hero />
      </section>
    </main>
  );
};

export default page;
