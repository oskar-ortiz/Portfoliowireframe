import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfoliowireframe-beta.vercel.app"),
  title: "Oskar Ortiz | Backend · AWS · DevOps",
  description:
    "Java, Spring Boot, FastAPI, AWS, Docker, Terraform, Prometheus y Grafana. Proyectos de backend, cloud y IA aplicada.",
  openGraph: {
    type: "website",
    siteName: "Oskar Ortiz",
    title: "Oskar Ortiz | Backend · AWS · DevOps",
    description:
      "Java, Spring Boot, FastAPI, AWS, Docker, Terraform, Prometheus y Grafana. Proyectos de backend, cloud y IA aplicada.",
    url: "https://portfoliowireframe-beta.vercel.app",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 627,
        alt: "Oskar Ortiz — Backend, Cloud AWS y DevOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oskar Ortiz | Backend · AWS · DevOps",
    description:
      "Java, Spring Boot, FastAPI, AWS, Docker, Terraform, Prometheus y Grafana. Proyectos de backend, cloud y IA aplicada.",
    images: ["/og-banner.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
