import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Cpu, Sparkles, Award, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Sidenav from "@/shared/Sidenav";
import Whatsapp from "@/shared/Whatsapp";
import ServiceModal from "@/components/widgets/ServiceModal";
import { projectsList } from "@/helpers/projectsArrays";
import { projectDetailsMap } from "@/helpers/projectDetailsData";
import IframeViewer from "../../../components/IframeViewer";
import FloatingCta from "@/components/widgets/FloatingCta";

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
  const detail = projectDetailsMap[slug];

  if (!project || !detail) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-32 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cabuwebMedium/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-modal h-[600px] bg-cabuwebLight/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/#proyects"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 font-lemonLight text-xs tracking-wider uppercase"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-cabuwebMedium" />
            Volver a Proyectos
          </Link>

          {/* Intro Section */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-lemonLight text-cabuwebMedium text-xs md:text-sm uppercase tracking-widest block mb-4">
                Caso de Éxito / {project.category === "web" ? "Desarrollo Web" : "Aplicación Móvil"}
              </span>
              <h1 className="font-lemonLight text-4xl md:text-6xl text-white uppercase tracking-tight mb-6 leading-none">
                {project.name}
              </h1>
              <p className="font-helveticaMedium text-xl md:text-2xl text-zinc-300 font-light mb-8 leading-relaxed italic border-l-2 border-cabuwebMedium pl-6">
                &ldquo;{detail.tagline}&rdquo;
              </p>
              <p className="font-helveticaRoman text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                {detail.marketingPitch}
              </p>
            </div>

            {/* Quick Specs / ROI Sidebar & Calculator */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
                <h3 className="font-lemonBold text-sm text-zinc-300 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cabuwebMedium" />
                  Métricas del Proyecto
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="border-b border-white/5 pb-4">
                    <span className="text-2xl md:text-3xl font-lemonBold text-white block">
                      {detail.specs.performance}
                    </span>
                    <span className="text-zinc-500 text-xs uppercase font-helveticaBold">Rendimiento</span>
                  </div>
                  <div className="border-b border-white/5 pb-4">
                    <span className="text-2xl md:text-3xl font-lemonBold text-emerald-400 block">
                      {detail.specs.seo}
                    </span>
                    <span className="text-zinc-500 text-xs uppercase font-helveticaBold">SEO Score</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-lemonBold text-white block">
                      {detail.specs.loadingTime}
                    </span>
                    <span className="text-zinc-500 text-xs uppercase font-helveticaBold">Velocidad</span>
                  </div>
                  <div>
                    <span className="text-2xl md:text-3xl font-lemonBold text-sky-400 block">
                      {detail.specs.mobileScore}
                    </span>
                    <span className="text-zinc-500 text-xs uppercase font-helveticaBold">Móvil</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-4 bg-cabuwebMedium hover:bg-cabuwebMedium/90 text-white font-lemonLight text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,116,255,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Ver Sitio en Vivo
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Pre-fill footer form trigger link */}
                  <Link
                    href="/#footer"
                    className="w-full text-center py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-lemonLight text-xs tracking-widest uppercase rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    Quiero una Web Así
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Live Demo Frame (Iframe) */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="font-lemonLight text-xl md:text-2xl text-white uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-cabuwebMedium" />
                  Demostración Interactiva
                </h2>
                <p className="text-zinc-500 text-sm font-helveticaRoman mt-1">
                  Interactúa directamente con la web real o cambia entre dispositivos simulados.
                </p>
              </div>
            </div>

            {/* Client side component for device size toggling & iframe loading */}
            <IframeViewer url={project.url} title={project.name} />
          </div>

          {/* Value Prop & Features Section */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 border-t border-white/10 pt-16">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-lemonLight text-2xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cabuwebMedium" />
                Por qué elegir esta solución
              </h2>
              <p className="font-helveticaRoman text-zinc-400 text-base leading-relaxed mb-6">
                Este diseño ha sido optimizado con los más altos estándares de desarrollo y arquitectura moderna. Al adquirir un desarrollo de este nivel con nosotros, garantizas una conversión optimizada para tu negocio, libre de código innecesario y totalmente adaptada a tu identidad corporativa.
              </p>

              <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl mb-6">
                <h4 className="font-helveticaBold text-zinc-300 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                  <Zap className="w-4 h-4 text-amber-400" /> Objetivo Comercial Principal
                </h4>
                <p className="font-helveticaRoman text-zinc-400 text-sm leading-relaxed">
                  {detail.businessGoal}
                </p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-lemonLight text-2xl text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-cabuwebMedium" />
                Características Clave
              </h2>

              <ul className="space-y-4">
                {detail.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-cabuwebMedium shrink-0 mt-0.5" />
                    <div>
                      <p className="font-helveticaMedium text-zinc-200 text-base">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Technologies List */}
              <div className="mt-8">
                <h4 className="font-lemonBold text-xs text-zinc-500 uppercase tracking-widest mb-3">
                  Tecnologías y Estándares
                </h4>
                <div className="flex flex-wrap gap-2">
                  {detail.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 bg-white/5 border border-white/5 hover:border-cabuwebMedium/30 hover:text-white hover:bg-cabuwebMedium/5 rounded-full text-zinc-400 text-xs font-helveticaBold transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(0,116,255,0.08)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Elite Guarantees Section */}
          <div className="border-t border-white/10 pt-16 mt-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-lemonLight text-cabuwebMedium text-xs md:text-sm uppercase tracking-widest block mb-3">
                Garantías Cabuweb
              </span>
              <h2 className="font-lemonLight text-3xl md:text-4xl text-white uppercase tracking-tight leading-none mb-4">
                Estándares de Ingeniería de Élite
              </h2>
              <p className="font-helveticaRoman text-zinc-400 text-sm md:text-base leading-relaxed">
                Cada línea de código y decisión de diseño está pensada para ofrecer el máximo retorno, velocidad y escalabilidad a tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Guarantee 1 */}
              <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-cabuwebMedium/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-cabuwebMedium/10 border border-cabuwebMedium/20 flex items-center justify-center text-cabuwebMedium group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-lemonBold text-sm text-zinc-200 uppercase tracking-wider mb-2">Velocidad de Carga Crítica</h4>
                  <p className="font-helveticaRoman text-zinc-400 text-xs leading-relaxed">
                    Nuestras webs cargan en menos de 1.5 segundos. La velocidad de carga óptima reduce el rebote del usuario y duplica las tasas de conversión.
                  </p>
                </div>
              </div>

              {/* Guarantee 2 */}
              <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-cabuwebMedium/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-lemonBold text-sm text-zinc-200 uppercase tracking-wider mb-2">Arquitectura SEO Nativa</h4>
                  <p className="font-helveticaRoman text-zinc-400 text-xs leading-relaxed">
                    Estructuramos tu sitio con HTML5 semántico y esquemas JSON-LD optimizados para que indexe y posicione en los primeros lugares de Google desde el día uno.
                  </p>
                </div>
              </div>

              {/* Guarantee 3 */}
              <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-cabuwebMedium/20 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-lemonBold text-sm text-zinc-200 uppercase tracking-wider mb-2">Código Limpio a la Medida</h4>
                  <p className="font-helveticaRoman text-zinc-400 text-xs leading-relaxed">
                    Cero constructores visuales lentos (como WordPress o Elementor). Código optimizado en Next.js para un mantenimiento libre de fallos y máxima seguridad.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <Sidenav />
      <Whatsapp />
      <ServiceModal />
      <FloatingCta projectName={project.name} />
    </>
  );
}
