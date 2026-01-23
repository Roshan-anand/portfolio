"use client";

import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      variant={"primary"}
    >
      {theme == "light" ? <FaRegMoon /> : <FiSun />}
    </Button>
  );
}
