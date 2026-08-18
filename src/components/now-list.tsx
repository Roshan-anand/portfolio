import { IconChevronRight } from "@tabler/icons-react";
import type { NowItem } from "@/lib/types";

type NowListProps = {
  items: NowItem[];
};

export function NowList({ items }: NowListProps) {
  return (
    <ul className="now">
      {items.map((item, i) => {
        const key = item.spans.map((span) => span.text).join("");
        return (
          <li className="now__item" key={key || i}>
            <IconChevronRight className="now__mark" size={14} stroke={2} aria-hidden />
            <span className="now__body">
              {item.spans.map((span, j) => {
                if (span.href) {
                  return (
                    <a className="now__link" href={span.href} key={`${span.text}-${j}`}>
                      {span.text}
                    </a>
                  );
                }
                if (span.hl) {
                  return (
                    <span className="now__hl" key={`${span.text}-${j}`}>
                      {span.text}
                    </span>
                  );
                }
                return <span key={`${span.text}-${j}`}>{span.text}</span>;
              })}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
