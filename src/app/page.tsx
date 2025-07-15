import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Tech from "@/components/tech";

const page = () => {
  return (
    <main className="container mt-4 ">
      <Hero />
      <Tech />
      <hr className="text-brd-one my-10" />
      <Projects />
    </main>
  );
};

export default page;
