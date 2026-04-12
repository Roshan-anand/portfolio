import { Project } from "@/lib/types";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ComponentProps } from "react";

export const ProjectBox = ({
  title,
  description,
  designation,
  livelink,
  repolink,
  className,
}: Project & ComponentProps<"div">) => {
  return (
    <Card className={cn("p-4 md:p-2 gap-2", className)}>
      <header className="flex gap-2 items-center">
        <h3 className="magic rounded-md p-1 w-fit -rotate-1">{title}</h3>
        {repolink ? (
          <Link
            className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}
            href={repolink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon-md text-muted-foreground" />
          </Link>
        ) : (
          <span
            className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}
          >
            <FaEyeSlash className="ml-auto" />
          </span>
        )}
        {livelink && (
          <Link
            href={livelink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            <LiaExternalLinkAltSolid className="icon-md " />
          </Link>
        )}
      </header>

      <p className="flex gap-3 bg-accent text-accent-foreground px-2">
        {designation.join(" - ")}
      </p>

      <p className="px-2">{description}</p>
    </Card>
  );
};
