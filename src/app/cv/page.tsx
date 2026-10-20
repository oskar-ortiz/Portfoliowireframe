import type { Metadata } from "next";
import { CVViewer } from "../components/CVViewer";
import { siteUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "CV | Oskar Ortiz",
  description: "Professional CV of Oskar Ortiz, focused on backend, AWS cloud, and DevOps.",
  alternates: {
    canonical: `${siteUrl}/cv`,
  },
};

export default function CVPage() {
  return <CVViewer />;
}
