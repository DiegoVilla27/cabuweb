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
        <div className="overflow-hidden rounded-2xl shadow-sm group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-zinc-100 transition-all duration-300">
          <Image
            src={item.img}
            alt={item.name}
            width={600}
            height={400}
            className="rounded-3xl hover:shadow-[5px_5px_0px_rgba(0,116,255,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer object-cover w-full h-auto"
          />
        </div>
      </a>
    </div>
  );
}
