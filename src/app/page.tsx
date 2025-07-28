import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Tech from "@/components/tech";

const page = () => {
  return (
    <main className="container mt-4 ">
      <Hero />
      <hr className="text-brd-one my-10" />
      <Tech />
      <hr className="text-brd-one my-10" />
      <Projects />
      <Navbar />
    </main>
  );
};

export default page;
