import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cabuweb.com"),
  title: "Cabuweb - Desarrollo de software",
  description:
    "Empresa de software. Diseño, desarrollo e implementación de Páginas Web, Aplicaciones Móviles y Software a la medida.",
  keywords: [
    "páginas web",
    "aplicaciones móviles",
    "software a la medida",
    "diseño web",
    "desarrollo web",
    "apps iOS",
    "apps android",
    "paginas web colombia",
    "paginas web españa",
    "sitios web",
  ],
  authors: [{ name: "Cabuweb" }],
  creator: "Cabuweb",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.cabuweb.com",
    type: "website",
    title:
      "Empresa de software. Realizamos páginas web, aplicaciones móviles y software a la medida para tu negocio.",
    description:
      "Diseñamos, desarrollamos e implementamos Páginas Web, Aplicaciones Móviles y Software a la medida. Llevando a tu negocio mas allá de la competencia. COTIZA AHORA!",
    images: [
      {
        url: "/img/seo/cabuweb_op.jpg",
        width: 600,
        height: 600,
        alt: "Cabuweb Publicity Normal",
      },
    ],
    locale: "es_ES",
    siteName: "Cabuweb",
  },
  twitter: {
    card: "summary",
    site: "@cabuweb",
    creator: "@cabuweb",
    title:
      "Empresa de software. Realizamos páginas web, aplicaciones móviles y software a la medida para tu negocio.",
    description:
      "Diseñamos, desarrollamos e implementamos Páginas Web, Aplicaciones Móviles y Software a la medida. Llevando a tu negocio mas allá de la competencia. COTIZA AHORA!",
    images: ["/img/seo/cabuweb_op_twitter.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96" },
      { url: "/favicons/android/android-icon-192x192.png", sizes: "192x192" },
    ],
    apple: [
      { url: "/favicons/apple/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicons/apple/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicons/apple/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicons/apple/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicons/apple/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicons/apple/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicons/apple/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicons/apple/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicons/apple/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Cabuweb",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plaza dels peixets",
      addressLocality: "Port Saplaya",
      addressRegion: "Valencia",
      postalCode: "46120",
    },
    image: "https://cabuweb.com/img/seo/cabuweb_op.jpg",
    email: "cabuweb.info@gmail.com",
    telephone: "(+34) 658074821",
    url: "https://cabuweb.com",
    sameAs: [
      "https://www.facebook.com/cabuweb",
      "https://www.instagram.com/cabuweb",
      "https://www.twitter.com/cabuweb",
      "https://www.linkedin.com/in/cabuweb-software-07b3b8209",
    ],
    paymentAccepted: ["Credit Card"],
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 08:30-18:30",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "18:30",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.509311",
      longitude: "-0.321756",
    },
    priceRange: "$",
  };

  return (
    <html lang="es" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      <GoogleAnalytics gaId="G-8V04X7W300" />
    </html>
  );
}
