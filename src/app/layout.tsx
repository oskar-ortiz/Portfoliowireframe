import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "./providers";
import { siteDescription, siteName, siteTitle, siteUrl } from "../lib/site";
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
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName,
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 627,
        alt: "Oskar Ortiz — Backend Engineer | Java, Spring Boot, AWS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    jobTitle: "Backend Engineer · Cloud AWS · Applied AI",
    url: siteUrl,
    sameAs: [
      "https://github.com/oskar-ortiz",
      "https://www.linkedin.com/in/oskar-ortiz-4862233b8/",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pasto",
      addressRegion: "Nariño",
      addressCountry: "CO",
    },
  };

  return (
    <html lang="es-CO" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
