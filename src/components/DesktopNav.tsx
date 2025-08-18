"use client";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const DesktopNav = ({
  items,
  activeId,
}: {
  items: NavItem[];
  activeId: string;
}) => {
  const router = useRouter();
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    // About → scroll to top
    if (href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Section anchors → smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      router.push(`/${href}`);
    }
    // else, Next.js will handle normal route navigation
  };

  return (
    <nav className="max-sm:hidden flex items-center gap-4">
      {items.map((link) => (
        <Link
          className={cn(
            "font-mono text-sm font-medium text-muted-foreground transition-all duration-300",
            link.id === activeId && "text-foreground"
          )}
          key={link.href}
          href={link.href}
          onClick={(e) => handleClick(e, link.href)}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(DesktopNav);
