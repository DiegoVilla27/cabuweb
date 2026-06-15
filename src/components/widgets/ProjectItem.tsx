"use client";

import Image from "next/image";
import { Project } from "@/helpers/projectsArrays";

interface ProjectItemProps {
  item: Project;
}

export default function ProjectItem({ item }: ProjectItemProps) {
  return (
    <div className="group transition-all duration-300 cursor-pointer z-10 text-center w-full max-w-[400px] mx-auto">
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
        <h4 className="text-center font-helveticaBold text-xl md:text-2xl text-gray-800 group-hover:text-cabuwebMedium transition-colors">
          {item.name}
        </h4>
        <hr className="border-t border-gray-300 w-1/12 mt-2 mb-5 mx-auto transition-all duration-300 group-hover:w-1/5 group-hover:border-cabuwebLight" />
        <div className="relative overflow-visible transition-all duration-500 mt-6">
          <Image
            src={item.img}
            alt={item.name}
            width={600}
            height={400}
            className="group-hover:scale-[1.03] group-hover:-translate-y-2 transition-all duration-500 cursor-pointer object-contain w-full h-auto drop-shadow-sm group-hover:drop-shadow-[0_15px_30px_rgba(0,116,255,0.2)]"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <span className="bg-cabuwebMedium/90 backdrop-blur-sm text-white font-lemonLight text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-full drop-shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Ver Proyecto
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
