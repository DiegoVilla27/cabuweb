"use client";

import Image from "next/image";
import { Project } from "@/helpers/projectsArrays";

interface ProjectItemProps {
  item: Project;
}

export default function ProjectItem({ item }: ProjectItemProps) {
  return (
    <div className="group transition-all duration-500 cursor-pointer z-10 text-center w-full max-w-[400px] mx-auto perspective-1000">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block relative">
        <h4 className="text-center font-helveticaBold text-xl md:text-2xl text-zinc-200 group-hover:text-white transition-colors tracking-wide drop-shadow-md">
          {item.name}
        </h4>
        <hr className="border-t border-zinc-800 w-1/12 mt-3 mb-10 mx-auto transition-all duration-500 group-hover:w-1/5 group-hover:border-cabuwebMedium group-hover:shadow-[0_0_10px_rgba(0,116,255,0.5)]" />

        <div className="relative overflow-visible transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-x-12 transform-style-3d">
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 bg-cabuwebMedium/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-75" />

          <Image
            src={item.img}
            alt={item.name}
            width={600}
            height={400}
            className="relative z-10 group-hover:scale-[1.05] transition-transform duration-700 cursor-pointer object-contain w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_30px_50px_rgba(0,116,255,0.3)]"
          />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
            <span className="bg-cabuwebMedium text-white font-lemonLight text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,116,255,0.4)] translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
              Ver Proyecto
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
