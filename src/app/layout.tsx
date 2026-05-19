import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arenabpro.mx"),
  title: "Arena B-PRO | Academia de Basquetbol en Puebla",
  description:
    "La academia de basquetbol de alto rendimiento en Puebla. Entrena con coaches certificados, compite en torneos reales y forma tu carácter. Inscripciones abiertas.",
  keywords: [
    "academia de basquetbol en Puebla",
    "entrenamiento basquetbol Puebla",
    "arena basquetbol Cholula",
    "basketball academy Mexico",
    "Arena B-PRO",
  ],
  authors: [{ name: "Arena B-PRO" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://arenabpro.mx",
    title: "Arena B-PRO | Academia de Basquetbol en Puebla",
    description:
      "La academia de basquetbol de alto rendimiento en Puebla. Entrena con coaches certificados, compite en torneos reales y forma tu carácter. Inscripciones abiertas.",
    siteName: "Arena B-PRO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arena B-PRO | Academia de Basquetbol en Puebla",
    description:
      "La academia de basquetbol de alto rendimiento en Puebla. Inscripciones abiertas.",
  },
  alternates: {
    canonical: "https://arenabpro.mx",
  },
  icons: {
    icon: "/imgs/favicon.png",
    shortcut: "/imgs/favicon.png",
    apple: "/imgs/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": "https://arenabpro.mx/#organization",
      name: "Arena B-PRO",
      url: "https://arenabpro.mx",
      description:
        "Academia de basquetbol de alto rendimiento en San Andrés Cholula, Puebla, México.",
      sport: "Basketball",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Andrés Cholula",
        addressRegion: "Puebla",
        addressCountry: "MX",
      },
      sameAs: [
        "https://instagram.com/arenabpro",
        "https://youtube.com/@basketpromexico",
        "https://tiktok.com/@arenabpro",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://arenabpro.mx/#org",
      name: "Arena B-PRO",
      url: "https://arenabpro.mx",
      foundingDate: "2022",
      founder: {
        "@type": "Person",
        name: "Ricardo Briones",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
