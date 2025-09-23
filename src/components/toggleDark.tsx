"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa6";

const ToggleDark = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={handleClick} size="sm" variant="none">
      {theme === "dark" ? (
        <FaSun className="size-full" />
      ) : (
        <FaMoon className="size-full" />
      )}
    </Button>
  );
};

export default ToggleDark;
