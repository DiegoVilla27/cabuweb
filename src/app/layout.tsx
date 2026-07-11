import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";
import CookieBanner from "@/components/widgets/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cabuweb.com"),
  title: {
    default: "Cabuweb — Agencia de Software Premium | Web, Apps y Software a Medida",
    template: "%s | Cabuweb",
  },
  description:
    "Cabuweb es una agencia de desarrollo de software de élite. Creamos páginas web de alto rendimiento, aplicaciones móviles (iOS y Android) y software a medida para empresas y startups en España y Latinoamérica.",
  keywords: [
    // España
    "desarrollo web españa",
    "agencia de software españa",
    "diseño web valencia",
    "desarrollo web valencia",
    "agencia digital españa",
    // LATAM
    "desarrollo web colombia",
    "desarrollo web méxico",
    "agencia de desarrollo software colombia",
    "desarrollo web bogotá",
    "agencia digital méxico",
    // Servicios
    "agencia de desarrollo de software",
    "desarrollo web premium",
    "páginas web profesionales",
    "landing page profesional",
    "e-commerce a medida",
    "aplicaciones móviles nativas",
    "aplicaciones híbridas react native",
    "desarrollo de apps iOS y Android",
    "software a la medida",
    "software empresarial",
    "automatización de procesos empresariales",
    "diseño UI UX premium",
    // Intención comercial
    "cotizar página web",
    "cotizar aplicación móvil",
    "empresa de software",
    "transformación digital empresas",
  ],
  authors: [{ name: "Cabuweb", url: "https://www.cabuweb.com" }],
  creator: "Cabuweb",
  publisher: "Cabuweb",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.cabuweb.com",
    languages: {
      "es": "https://www.cabuweb.com",
      "en": "https://www.cabuweb.com",
      "x-default": "https://www.cabuweb.com",
    },
  },
  openGraph: {
    url: "https://www.cabuweb.com",
    type: "website",
    title: "Cabuweb — Agencia de Software Premium | Web, Apps y Software a Medida",
    description:
      "Construimos ecosistemas tecnológicos de alto rendimiento. Páginas web, aplicaciones móviles y software a medida para escalar tu negocio. ¡Cotiza ahora!",
    images: [
      {
        url: "https://www.cabuweb.com/img/seo/cabuweb_op.jpg",
        width: 1200,
        height: 630,
        alt: "Cabuweb — Agencia de Software Premium",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    alternateLocale: ["en_US"],
    siteName: "Cabuweb",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cabuweb",
    creator: "@cabuweb",
    title: "Cabuweb — Agencia de Software Premium",
    description:
      "Construimos ecosistemas tecnológicos de alto rendimiento. Páginas web, aplicaciones móviles y software a medida para escalar tu negocio.",
    images: [{
      url: "https://www.cabuweb.com/img/seo/cabuweb_op.jpg",
      alt: "Cabuweb — Agencia de Software Premium",
    }],
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
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cabuweb",
    description:
      "Agencia de desarrollo de software premium especializada en páginas web de alto rendimiento, aplicaciones móviles nativas e híbridas y software a la medida para empresas y startups.",
    url: "https://www.cabuweb.com",
    logo: "https://www.cabuweb.com/img/seo/cabuweb_op.jpg",
    image: "https://www.cabuweb.com/img/seo/cabuweb_op.jpg",
    email: "cabuweb.info@gmail.com",
    telephone: "(+34) 658074821",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plaza dels peixets",
      addressLocality: "Port Saplaya",
      addressRegion: "Valencia",
      postalCode: "46120",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.509311",
      longitude: "-0.321756",
    },
    areaServed: [
      { "@type": "Country", name: "España" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "México" },
      { "@type": "Country", name: "Argentina" },
    ],
    serviceType: [
      "Desarrollo Web",
      "Desarrollo de Aplicaciones Móviles",
      "Software a la Medida",
      "Diseño UI/UX",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Software",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Page Premium",
            description: "Página web de aterrizaje personalizada con diseño UI/UX exclusivo, carga ultra rápida y SEO nativo.",
          },
          priceCurrency: "USD",
          price: "399",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tienda Virtual (E-commerce)",
            description: "Tienda online con catálogo autogestionable, pasarela de pagos integrada y panel de pedidos.",
          },
          priceCurrency: "USD",
          price: "899",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Custom",
            description: "Plataforma de comercio electrónico de alto volumen con automatizaciones, multi-idioma y soporte 24/7.",
          },
          priceCurrency: "USD",
          price: "1699",
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/cabuweb",
      "https://www.instagram.com/cabuweb",
      "https://www.twitter.com/cabuweb",
      "https://www.linkedin.com/in/cabuweb-software-07b3b8209",
    ],
    paymentAccepted: ["Credit Card", "Bank Transfer"],
    openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 08:30-18:30",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:30",
        closes: "18:30",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html lang="es" className="h-full antialiased scroll-smooth">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1047018098005087');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1047018098005087&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="bottom-right" richColors />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-8V04X7W300" />
    </html>
  );
}
