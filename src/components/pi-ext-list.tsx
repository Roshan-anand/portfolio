import { profile } from "@/lib/profile";

export function PiExtList() {
  return (
    <div className="ext-list">
      {profile.piExtensions.map((ext) => (
        <article className="ext" id={ext.title} key={ext.title}>
          <h3 className="ext__title">{ext.title}</h3>
          {ext.repo ? (
            <a className="ext__repo" href={ext.repo}>
              repo
            </a>
          ) : null}
          <p className="ext__body">{ext.description}</p>
        </article>
      ))}
    </div>
  );
}
