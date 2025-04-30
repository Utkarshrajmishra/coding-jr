"use client";

import { useContext } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Theme Context not found");
  }

  const { theme, setTheme } = themeContext;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-[#f5f5f5] dark-theme:hover:bg-[#1a1a1a]"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Sun className="h-[18px] w-[18px] text-[#171717]" />
      ) : theme === "dark" ? (
        <Moon className="h-[18px] w-[18px] text-[#ededed]" />
      ) : (
        <Monitor className="h-[18px] w-[18px]" />
      )}
    </button>
  );
};

export default ThemeToggle;
