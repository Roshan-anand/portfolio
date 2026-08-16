import { profile } from "@/lib/profile";

export function WorkList() {
  return (
    <div className="work-list">
      {profile.work.map((job) => (
        <article className="work-item" key={job.org}>
          <div className="work-item__meta">
            <h3 className="work-item__title">
              <a className="work-item__org" href={job.href}>
                {job.org}
              </a>
            </h3>
            <p className="work-item__stack">
              {job.role} · {job.type}
            </p>
            <p className="work-item__stack">{job.period}</p>
          </div>
          <div>
            <p className="work-item__body">{job.summary}</p>
            <p className="work-item__tech">{job.tech.join(" · ")}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
