import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Oskar Ortiz Portfolio",
  description: "Portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
