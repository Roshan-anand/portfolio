import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <main className="w-[95%] max-w-200 h-screen mx-auto p-2 flex items-en">
      <aside className="w-1/4 h-fit border-r flex flex-col p-2 gap-2">
        <Button variant={"primary"}>a</Button>
        <Button variant={"active"}>c</Button>
        <Button variant={"secondary"}>b</Button>
      </aside>
      <section className="flex-1 h-full">
        <ThemeToggle />
      </section>
    </main>
  );
};

export default page;
