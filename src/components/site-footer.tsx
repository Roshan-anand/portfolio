import { profile } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="foot">
      <ul className="foot__spread">
        {profile.socials.map((item) => (
          <li key={item.label}>
            <a className="foot__link" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
