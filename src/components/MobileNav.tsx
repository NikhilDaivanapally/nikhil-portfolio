"use client";

import React, { useCallback, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MobileNav = ({
  className,
  items,
  activeId,
}: {
  className?: string;
  items: NavItem[];
  activeId: string;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
      // About -> scroll to top
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        router.push(`/`);
        setOpen(false);
        return;
      }
      // Section anchors -> smooth scroll
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        router.push(`/${href}`);
        setOpen(false);
      }
      // else, Next.js will handle normal route navigation
    },
    [router, setOpen]
  );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild className="sm:hidden">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu"
          className={cn("text-muted-foreground rounded-full", className)}
        >
          <div className="cursor-pointer p-2 rounded-md">
            <motion.span
              className="block w-5 h-0.5 bg-muted-foreground rounded-sm mb-1"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-muted-foreground rounded-sm mb-1"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-5 h-0.5 bg-muted-foreground rounded-sm"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-40 mt-3 sm:hidden shadow-lg font-mono"
      >
        {items.map((link) => (
          <DropdownMenuItem key={link.id} asChild>
            <Link
              href={link.href}
              className={cn(
                "font-mono w-full justify-start cursor-pointer text-sm font-medium text-muted-foreground transition-all duration-300",
                link.id === activeId && "text-foreground"
              )}
              onClick={(e) => handleClick(e, link.href)}
            >
              {link.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default React.memo(MobileNav);
