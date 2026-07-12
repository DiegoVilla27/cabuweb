import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cabuweb.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard crawlers: allow everything except thank-you page
        userAgent: "*",
        allow: "/",
        disallow: ["/gracias", "/gracias/"],
      },
      {
        // Block AI training scrapers — protect content licensing
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
