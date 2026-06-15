"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleSection from "./widgets/TitleSection";
import ProjectItem from "./widgets/ProjectItem";
import { listWeb, listApps, listForYou, Project } from "@/helpers/projectsArrays";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"web" | "apps" | "foryou">("web");
  const [list, setList] = useState<Project[]>(listWeb);

  const handleTabChange = (tab: "web" | "apps" | "foryou") => {
    setActiveTab(tab);
    if (tab === "web") setList(listWeb);
    else if (tab === "apps") setList(listApps);
    else setList(listForYou);
  };

  return (
    <section id="proyects" className="px-6 py-24 xl:px-40 3xl:px-48 4xl:px-80 relative bg-zinc-50/50">
      {/* Background patterns */}
      <picture className="absolute top-0 -left-6 pointer-events-none select-none">
        <source media="(min-width:1280px)" srcSet="/img/proyects/bg-proyects-top-big.png" />
        <img src="/img/proyects/bg-proyects-top-small.png" className="opacity-40" alt="Background Proyects Top" />
      </picture>
      <picture className="absolute bottom-0 -right-6 pointer-events-none select-none">
        <source media="(min-width:1280px)" srcSet="/img/proyects/bg-proyects-bottom-big.png" />
        <img src="/img/proyects/bg-proyects-bottom-small.png" className="opacity-40" alt="Background Proyects Bottom" />
      </picture>

      <TitleSection
        titleOne="Nuestros"
        titleTwo="Proyectos"
        text="En nuestro portafolio, puedes navegar por los últimos proyectos desarrollados para nuestros clientes de diferentes empresas cumpliendo siempre con un propósito objetivo. Nuestro equipo calificado de diseñadores de interfaces y desarrolladores de software, siempre están listos para crear algo único para ti."
      />

      {/* Navigation Tabs */}
      <div className="flex justify-center my-12 relative z-10">
        <div className="flex justify-evenly items-center w-full max-w-2xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-zinc-100 p-1.5 rounded-full">
          {[
            { id: "web", label: "Páginas web" },
            { id: "apps", label: "Aplicaciones móviles" },
            { id: "foryou", label: "Para ti" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as "web" | "apps" | "foryou")}
                className={`flex-1 text-center py-2.5 px-2 text-2xs xs:text-xs md:text-sm uppercase font-helveticaMedium cursor-pointer rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-cabuwebMediumOpacitity10 text-cabuwebMedium font-bold shadow-sm"
                    : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid container with animation */}
      <div className="grid grid-cols-12 gap-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {list.map((item) => (
            <motion.div
              layout
              key={item.id + "-" + activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-6 xl:col-span-4"
            >
              <ProjectItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
