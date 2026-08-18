import { profile } from "@/lib/profile";

export function ProjectList() {
  return (
    <div className="work-list">
      {profile.projects.map((project) => (
        <article className="work-item" id={project.title.toLowerCase()} key={project.title}>
          <div className="work-item__meta">
            <h3 className="work-item__title">{project.title}</h3>
            <p className="work-item__stack">{project.stack}</p>
          </div>
          <div>
            <p className="work-item__body">{project.description}</p>
            <div className="work-item__links">
              {project.live ? (
                <a className="work-item__link" href={project.live}>
                  live
                </a>
              ) : (
                <span className="work-item__muted">{project.status ?? "not deployed"}</span>
              )}
              {project.repo ? (
                <a className="work-item__link" href={project.repo}>
                  repo
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
