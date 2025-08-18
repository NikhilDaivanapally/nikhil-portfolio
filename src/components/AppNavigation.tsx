"use client";

import React, { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import { MAIN_NAV } from "@/data/nav";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import ToggleTheme from "./ToggleTheme";
import MobileNav from "./MobileNav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = MAIN_NAV?.map(({ id }) => id);
const AppNavigation = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 30%",
        end: "bottom 30%",
        onEnter: () => {
          setActive((prev) => (prev !== id ? id : prev));
        },
        onEnterBack: () => {
          setActive((prev) => (prev !== id ? id : prev));
        },
      });

      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div className="flex items-center gap-4">
      {/* DESKTOP MENU */}
      <DesktopNav items={MAIN_NAV} activeId={active} />

      {/* GITHUB */}
      <Button variant="outline" size="icon" className="rounded-full" asChild>
        <a
          href={"https://github.com/NikhilDaivanapally"}
          target="_blank"
          rel="noopener"
        >
          <Github />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>

      {/* TOGGLE THEME  */}
      <ToggleTheme className="rounded-full cursor-pointer" />

      {/* MOBILE MENU */}
      <MobileNav className="sm:hidden" items={MAIN_NAV} activeId={active} />
    </div>
  );
};

export default AppNavigation;
