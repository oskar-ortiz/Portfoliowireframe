import type { Metadata } from "next";
import { CVViewer } from "../components/CVViewer";
import { siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Hoja de vida | Oskar Ortiz",
  description: "Hoja de vida profesional de Oskar Ortiz, orientada a backend, cloud AWS y DevOps.",
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
};

export default function CVPage() {
  return <CVViewer />;
}
