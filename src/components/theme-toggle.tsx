"use client";

import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
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
    >
      <div>{theme === "light" ? <FaRegMoon /> : <FiSun />}</div>
    </Button>
  );
}
