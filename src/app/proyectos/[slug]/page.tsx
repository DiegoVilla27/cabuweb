import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsList } from "@/helpers/projectsArrays";
import { projectDetailsMap } from "@/helpers/projectDetailsData";
import ProjectDetailContent from "@/components/ProjectDetailContent";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cabuweb.com";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate static routes for all projects
export async function generateStaticParams() {
  return projectsList.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);
  const detail = projectDetailsMap[slug];

  if (!project || !detail) return {};

  const pageTitle = `${project.name} — ${detail.tagline}`;

  // Truncate to 155 chars — prevents Google from overriding with its own snippet
  const rawDesc = `${detail.marketingPitch} Desarrollado por Cabuweb.`;
  const pageDesc =
    rawDesc.length > 155 ? rawDesc.slice(0, 152) + "..." : rawDesc;

  const absoluteImg = `${BASE_URL}${project.img}`;
  const canonicalUrl = `${BASE_URL}/proyectos/${slug}`;

  const keywords = [
    project.name,
    detail.tagline,
    ...detail.technologies,
    "cabuweb",
    "caso de éxito",
    "desarrollo web premium",
    "agencia de software",
  ];

  return {
    title: pageTitle,
    description: pageDesc,
    keywords,
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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: "Cabuweb",
      locale: "es_ES",
      alternateLocale: ["en_US"],
      images: [
        {
          url: absoluteImg,
          width: 1200,
          height: 630,
          alt: `${project.name} — Proyecto desarrollado por Cabuweb`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@cabuweb",
      creator: "@cabuweb",
      title: pageTitle,
      description: pageDesc,
      images: [
        {
          url: absoluteImg,
          alt: `${project.name} — Proyecto desarrollado por Cabuweb`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // BreadcrumbList JSON-LD — server-rendered, no JS needed by Googlebot
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Proyectos",
        item: `${BASE_URL}/#proyects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project!.name,
        item: `${BASE_URL}/proyectos/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ProjectDetailContent project={project!} slug={slug} />
    </>
  );
}
