"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/helpers/projectsArrays";
import { useStore } from "@/store/useStore";

interface ProjectItemProps {
  item: Project;
}

export default function ProjectItem({ item }: ProjectItemProps) {
  const lang = useStore((state) => state.lang);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Find the textarea in the footer
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (textarea) {
      // Professional pre-filled message
      textarea.value = lang === "es"
        ? `Hola, equipo de Cabuweb. Estoy interesado/a en cotizar un proyecto con un nivel de calidad y diseño similar a ${item.name}. Me gustaría recibir más información.`
        : `Hello, Cabuweb team. I am interested in quoting a project with a quality and design standard similar to ${item.name}. I would like to receive more info.`;
      // Dispatch input event for react-hook-form to register the change
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      // Smooth scroll to the form
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const txtView = lang === "es" ? "Ver Proyecto" : "View Project";
  const txtQuote = lang === "es" ? "Cotizar" : "Quote";

  return (
    <div className="group transition-all duration-500 cursor-pointer z-10 text-center w-full max-w-[400px] mx-auto perspective-1000">
      <Link href={`/proyectos/${item.slug}`} className="block relative">
        <h4 className="text-center font-helveticaBold text-xl md:text-2xl text-zinc-200 group-hover:text-white transition-colors tracking-wide drop-shadow-md">
          {item.name}
        </h4>
        <hr className="border-t border-zinc-800 w-1/12 mt-3 mb-10 mx-auto transition-all duration-500 group-hover:w-1/5 group-hover:border-cabuwebMedium group-hover:shadow-[0_0_10px_rgba(0,116,255,0.5)]" />

        <div className="relative overflow-visible transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-x-12 transform-style-3d">
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-cabuwebMedium/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-75" />

          {item.category === "apps" ? (
            /* iPhone Frame */
            <div className="relative z-10 mx-auto w-[220px] sm:w-[240px] rounded-[2.5rem] overflow-hidden border-[6px] border-zinc-800 bg-zinc-900 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_50px_rgba(0,116,255,0.3)] group-hover:scale-[1.05] transition-all duration-700 aspect-9/19">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>
              {/* Screen Content */}
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={800}
                className="object-cover object-top w-full h-full transition-all duration-700"
              />
            </div>
          ) : (
            /* macOS-style Window Frame */
            <div className="relative z-10 w-full rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-900 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_50px_rgba(0,116,255,0.3)] group-hover:scale-[1.05] transition-all duration-700">
              {/* Top Bar */}
              <div className="bg-zinc-800/80 px-3 py-2 flex items-center gap-1.5 border-b border-zinc-700/50 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
              </div>
              {/* Window Content */}
              <Image
                src={item.img}
                alt={item.name}
                width={600}
                height={400}
                className="object-cover object-top w-full h-[230px] transition-all duration-700"
              />
            </div>
          )}

          <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30">
            <span className="bg-cabuwebMedium text-white font-lemonLight text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,116,255,0.4)] translate-y-4 group-hover:translate-y-0 transition-transform duration-700 pointer-events-auto">
              {txtView}
            </span>
            <button
              onClick={handleQuoteClick}
              className="bg-white text-zinc-900 font-lemonLight text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-50 pointer-events-auto hover:scale-105"
            >
              {txtQuote}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
