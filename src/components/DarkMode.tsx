"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { MoonIcon, Sun } from "lucide-react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      className="outline-0 bg-transparent hover:bg-transparent  border-0"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 text-amber-500 dark:scale-0" />
      <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default DarkMode;
