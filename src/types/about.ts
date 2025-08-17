import { ReactElement } from "react";

export type ABOUT_ITEM = {
  id: number;
  title: string;
  icon: ReactElement;
  href?: string;
};

export type SOCIAL_ITEM = {
  id: number;
  title: string;
  icon: ReactElement;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  size: "default" | "sm" | "lg" | "icon" | null | undefined;
  href: string;
};
