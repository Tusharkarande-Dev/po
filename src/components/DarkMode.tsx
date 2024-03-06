"use client"
import { useEffect, useRef, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

type Theme = "dark" | "light" | "system";

const DarkMode: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? (savedTheme as Theme) : "dark";
    } else {
      return "dark"; // Default to dark theme on server-side rendering
    }
  });
  const [showTheme, setShowTheme] = useState<boolean>(false);
  const themeRef = useRef<HTMLDivElement>(null);
  const themeShowRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "system") {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDarkMode ? "dark" : "light");
    } else {
      element.classList.remove("light", "dark");
      element.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        themeRef.current &&
        !themeRef.current.contains(event.target as Node) &&
        themeShowRef.current &&
        !themeShowRef.current.contains(event.target as Node)
      ) {
        setShowTheme(false);
      }
    }

    if (showTheme) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTheme]);

  return (
    <div className="flex items-center md:pb-1 pb-0">
      <button ref={themeShowRef} onClick={() => setShowTheme((prev) => !prev)}>
        {theme === "light" && (
          <BiSolidSun className="text-amber-500" size={23} />
        )}
        {theme === "dark" && <BiSolidMoon size={23} />}
      </button>

      {showTheme && (
        <div
          ref={themeRef}
          className="w-[100px] fixed sm:right-12 lg:right-24 top-14 right-16 font-semibold p-4 dark:bg-zinc-700 bg-gray-100 text-zinc-800 dark:text-gray-200 flex flex-col items-center gap-2 rounded-md shadow-xl"
        >
          <div
            onClick={() => setTheme("light")}
            className="flex items-center justify-center gap-2 cursor-pointer "
          >
            <span onClick={() => setShowTheme(false)}>Light</span>
          </div>
          <div
            onClick={() => setTheme("dark")}
            className="flex items-center justify-center gap-2 cursor-pointer "
          >
            <span onClick={() => setShowTheme(false)}>Dark</span>
          </div>
          <div
            onClick={() => setTheme("system")}
            className="flex items-center justify-center gap-2 cursor-pointer"
          >
            <span onClick={() => setShowTheme(false)}>System</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DarkMode;
