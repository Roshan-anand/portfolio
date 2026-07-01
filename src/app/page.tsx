import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Tech from "@/components/tech";
import { Footer } from "@/components/footer";

const page = () => {
  return (
    <main className="w-[95vw] max-w-270 mx-auto h-full border-l-30 border-secondary-background border-r-30 flex flex-col gap-20 pt-5 pb-0">
      <Hero />
      <Tech />
      <Projects />
      <Footer />
    </main>
  );
};

export default page;
