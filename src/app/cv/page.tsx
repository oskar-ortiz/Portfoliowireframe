import type { Metadata } from "next";
import { CVViewer } from "../components/CVViewer";

export const metadata: Metadata = {
  title: "CV | Oskar Ortiz",
  description: "Professional CV of Oskar Ortiz, optimized for recruiters and PDF export.",
};

export default function CVPage() {
  return <CVViewer />;
}
