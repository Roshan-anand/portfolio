import { profile } from "@/lib/profile";

export function SiteNav() {
  return (
    <header className="nav" role="banner">
      <div className="nav__inner">
        <div className="nav__dots" aria-hidden="true">
          <span className="nav__dot nav__dot--red" />
          <span className="nav__dot nav__dot--yellow" />
          <span className="nav__dot nav__dot--green" />
        </div>
        <a className="wordmark" href="#top">
          {profile.handle}
        </a>
      </div>
    </header>
  );
}
