"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "./ui/button";
import { MoonStarIcon, SunIcon } from "lucide-react";

const ToggleTheme = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [setTheme, resolvedTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className={className}
    >
      <MoonStarIcon className="hidden [html.dark_&]:block size-4" />
      <SunIcon className="hidden [html.light_&]:block size-4" />
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};

export default ToggleTheme;
