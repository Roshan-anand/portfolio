import { cn } from "@/lib/utils";

type CtaChipProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function CtaChip({
  href,
  children,
  variant = "primary",
  className,
}: CtaChipProps) {
  const empty = href === "";

  return (
    <a
      className={cn("cta", variant === "ghost" && "cta--ghost", className)}
      href={empty ? "#" : href}
      aria-disabled={empty || undefined}
    >
      {children}
    </a>
  );
}
