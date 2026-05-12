import { ComponentProps } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

const ModeToggle = ({ className }: ComponentProps<"section">) => {
  return (
    <div className={cn("flex flex-row justify-around items-center gap-2 py-2", className)}>
      <ThemeToggle />
      <Card className="p-0 flex-1 rounded-md h-full flex justify-center">
        <h3 className="flex justify-around items-center py-1">
          <span>&#3205;</span>
          <span>A</span>
          <span>&#2309;</span>
          <span>&#3333;</span>
        </h3>
      </Card>
    </div>
  );
};
export default ModeToggle;
