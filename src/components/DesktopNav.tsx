"use client";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";
import Link from "next/link";
import React from "react";

const DesktopNav = ({
  items,
  activeId,
}: {
  items: NavItem[];
  activeId: string;
}) => {
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
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default React.memo(DesktopNav);
