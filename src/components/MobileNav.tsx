"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types/nav";

const MobileNav = ({
  className,
  items,
  activeId,
}: {
  className?: string;
  items: NavItem[];
  activeId: string;
}) => {
  const [open, setOpen] = useState(false);
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
                "font-mono text-sm font-medium text-muted-foreground transition-all duration-300",
                link.id === activeId && "text-foreground"
              )}
            >
              {link.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;
