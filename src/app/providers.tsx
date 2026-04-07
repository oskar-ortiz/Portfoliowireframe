"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "./components/ui/sonner";

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
      <Toaster closeButton position="top-right" richColors />
    </ThemeProvider>
  );
}
