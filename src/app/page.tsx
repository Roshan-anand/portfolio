import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Social from "@/components/Socila";
import Tech from "@/components/tech";
import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <main className="rounded-t-2xl w-[95vw] max-w-290 h-[95vh] min-h-270 mx-auto my-5 md:my-10 md:p-2 flex flex-col md:grid grid-cols-12 grid-rows-12 *:m-2">
      <Card className="col-span-3 row-span-1 row-start-7 flex items-end p-0 border-none">
        <h3 className="flex gap-5 py-1 px-3 justify-around items-center border-2 border-dashed border-dim-foreground rounded-xl text-accent-yellow/80">
          <span>&#3205;</span>
          <span>A</span>
          <span>&#2309;</span>
          <span>&#3333;</span>
        </h3>
      </Card>

      <div className="col-span-2 row-span-1 col-start-2 row-start-2 flex items-end justify-end">
        <h3 className="border-dim-foreground border-2 border-dashed  text-center px-1 rounded-xl text-accent-green/80 ">
          OPEN TO WORK
        </h3>
      </div>

      <Hero className="col-span-6 row-span-2 row-start-2" />

      <Social className="col-span-5 row-start-4" />

      <Projects className="col-span-5 row-span-4" />

      <Tech className="col-span-3 row-span-4 row-start-3 col-start-1" />
    </main>
  );
};

export default page;
