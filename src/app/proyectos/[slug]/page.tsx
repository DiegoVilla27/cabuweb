import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsList } from "@/helpers/projectsArrays";
import { projectDetailsMap } from "@/helpers/projectDetailsData";
import ProjectDetailContent from "@/components/ProjectDetailContent";

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

  const pageTitle = `${project.name} — ${detail.tagline} | Cabuweb`;
  const pageDesc = `${detail.marketingPitch} Desarrollado por Cabuweb: Software, Diseño y Tecnología de alta gama.`;

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      images: [{ url: project.img, width: 1200, height: 630 }],
      url: `https://www.cabuweb.com/proyectos/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: [project.img],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} slug={slug} />;
}
