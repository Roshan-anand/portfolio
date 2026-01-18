import Hero from "@/components/hero";
import SideBar from "@/components/sidebar";
import Tech from "@/components/tech";
import { ThemeToggle } from "@/components/theme-toggle";

const page = () => {
  return (
    <main className="w-[95%] max-w-200 h-screen mx-auto p-2 flex ">
      <SideBar />
      <section className="flex-1 h-full overflow-y-auto p-4">
        <Hero />
        <Tech />
      </section>
    </main>
  );
};

export default page;
