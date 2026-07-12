import { MetadataRoute } from "next";
import { projectsList } from "@/helpers/projectsArrays";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cabuweb.com";

// Use a fixed date — not new Date() — so Googlebot can detect real changes
const SITE_LAST_MODIFIED = new Date("2026-07-12");
const LEGAL_LAST_MODIFIED = new Date("2026-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/desarrollo-apps`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/politica-de-privacidad`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terminos-y-condiciones`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projectsList.map((project) => ({
    url: `${BASE_URL}/proyectos/${project.slug}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
