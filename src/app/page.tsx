import { SiteNav } from "@/components/site-nav";
import { HeroSplit } from "@/components/hero-split";
import { WorkList } from "@/components/work-list";
import { ProjectList } from "@/components/project-list";
import { PiExtList } from "@/components/pi-ext-list";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <>
      <SiteNav />
      <main className="shell">
        <HeroSplit />

        <section className="block stack-block reveal" id="work" style={{ "--i": 1 } as React.CSSProperties}>
          <h2 className="cat">
            <span className="cat__mark">$</span> cat work
          </h2>
          <WorkList />
        </section>

        <section className="block stack-block reveal" id="projects" style={{ "--i": 2 } as React.CSSProperties}>
          <h2 className="cat">
            <span className="cat__mark">$</span> cat projects
          </h2>
          <ProjectList />
        </section>

        <section className="block stack-block reveal" id="pi-extensions" style={{ "--i": 3 } as React.CSSProperties}>
          <h2 className="cat">
            <span className="cat__mark">$</span> cat pi-extensions
          </h2>
          <PiExtList />
        </section>
      </main>
      <div className="shell">
        <SiteFooter />
      </div>
    </>
  );
}
