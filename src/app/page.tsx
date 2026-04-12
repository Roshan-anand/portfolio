import Hero from "@/components/hero";
import Social from "@/components/Socila";
import Tech from "@/components/tech";

const page = () => {
  return (
    <main className="w-[95%] max-w-250 h-screen mx-auto p-2 grid grid-cols-12 grid-rows-12 gap-6">
      <Tech className="col-span-3 row-span-7"/>
      <Hero className="col-span-6 row-span-4"/>
      <Social className="col-span-3 row-span-3"/>
    </main>
  );
};

export default page;
