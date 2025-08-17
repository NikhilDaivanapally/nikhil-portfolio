"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "../ui/sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      enableColorScheme
      storageKey="theme"
      defaultTheme="system"
      attribute={"class"}
    >
      {children}
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  );
};

export default Providers;
