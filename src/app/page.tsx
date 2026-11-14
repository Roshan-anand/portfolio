import { SiteNav } from "@/components/site-nav";
import { HeroSplit } from "@/components/hero-split";
import { WorkList } from "@/components/work-list";
import { ProjectList } from "@/components/project-list";
import { SiteFooter } from "@/components/site-footer";
import { Ascii } from "ascii.rest/react";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="shell">
        <div className="hidden overflow-hidden mx-auto xl:flex items-center justify-center my-4 border-4 rounded-md border-rule">
          <Ascii piece="night-coast" className="size-60 rounded-md" />
        </div>
        <HeroSplit />

        <section
          className="block stack-block reveal"
          id="work"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <h2 className="cat">
            <span className="cat__mark">$</span> cat work
          </h2>
          <WorkList />
        </section>

        <section
          className="block stack-block reveal"
          id="projects"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <h2 className="cat">
            <span className="cat__mark">$</span> cat projects
          </h2>
          <ProjectList />
        </section>

      </main>
      <div className="shell">
        <SiteFooter />
      </div>
    </>
  );
}
