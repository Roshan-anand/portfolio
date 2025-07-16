"use client";
import React, { useState } from "react";
import "@/styles/toggle.css";

const darkVars = {
  "--prime-one": "#ffffff",
  "--prime-two": "#121212",
  "--txt-prime": "#9ca3af",
  "--txt-sec": "#4b5563",
  "--border-one": "#52525b",
  "--accent": "#fbb626",
};

const lightVars = {
  "--prime-one": "#121212",
  "--prime-two": "#ffffff",
  "--txt-prime": "#1f2937",
  "--txt-sec": "#4b5563",
  "--border-one": "#d1d5db",
  "--accent": "#fbb626",
};

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const handleClick = () => {
    const vars = isDarkMode ? lightVars : darkVars;
    Object.entries(vars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDarkMode} onChange={handleClick} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleDark;
