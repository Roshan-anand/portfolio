"use client";

import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: React.ComponentProps<"button">) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant={"primary"}>
        <div style={{ width: "1em", height: "1em" }} />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      variant={"primary"}
      className={cn("", className)}
    >
      {theme === "light" ? <FaRegMoon className=""/> : <FiSun className="w-full" />}
    </Button>
  );
}
