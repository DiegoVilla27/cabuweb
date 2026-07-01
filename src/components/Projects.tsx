"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleSection from "./widgets/TitleSection";
import ProjectItem from "./widgets/ProjectItem";
import { projectsList, Project } from "@/helpers/projectsArrays";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"web" | "apps">("web");

  const filteredList = projectsList.filter((item) => item.category === activeTab);

  const handleTabChange = (tab: "web" | "apps") => {
    setActiveTab(tab);
  };

  return (
    <section id="proyects" className="px-6 py-32 relative w-full overflow-hidden bg-zinc-900/30 border-y border-white/5">
      {/* Subtle Dotted Pattern for differentiation */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cabuwebLight/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-breathe" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 right-0 w-modal h-[600px] bg-cabuwebDark/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2 animate-breathe" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <TitleSection
          titleOne="Casos de"
          titleTwo="Éxito"
          text="Nuestro trabajo habla por sí solo. Explora el portafolio de empresas y startups que han revolucionado su industria con nuestra ingeniería."
        />

        {/* Navigation Tabs */}
        <div className="flex justify-center my-16 relative z-10">
          <div className="flex justify-evenly items-center w-full max-w-2xl bg-zinc-900/50 backdrop-blur-md shadow-lg border border-white/10 p-1.5 rounded-full">
            {[
              { id: "web", label: "Páginas web" },
              { id: "apps", label: <>Aplicaciones <span className="hidden md:inline">móviles</span></> },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as "web" | "apps")}
                  className={`flex-1 text-center py-3 px-2 text-xs md:text-sm uppercase font-helveticaBold cursor-pointer rounded-full transition-all duration-300 ${isActive
                    ? "bg-cabuwebMedium text-white shadow-[0_0_20px_rgba(0,116,255,0.4)] scale-[1.02]"
                    : "text-zinc-500 hover:text-zinc-300"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 relative z-10 mt-8">
          <AnimatePresence mode="popLayout">
            {filteredList.map((item, i) => (
              <motion.div
                layout
                key={item.id + "-" + activeTab}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-center"
              >
                <ProjectItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
