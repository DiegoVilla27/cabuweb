"use client";

import { useState } from "react";
import TitleSection from "./widgets/TitleSection";
import ProjectItem from "./widgets/ProjectItem";
import { projectsList } from "@/helpers/projectsArrays";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"web" | "apps">("web");
  const lang = useStore((state) => state.lang);

  const filteredList = projectsList.filter((item) => item.category === activeTab);

  const handleTabChange = (tab: "web" | "apps") => {
    setActiveTab(tab);
  };

  const t = translations[lang].projects;

  return (
    <section id="proyects" className="px-6 py-32 relative w-full overflow-hidden bg-zinc-900/30 border-y border-white/5">
      {/* Subtle Dotted Pattern for differentiation */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-cabuwebLight/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-breathe" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-0 right-0 w-modal h-[600px] bg-cabuwebDark/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2 animate-breathe" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <TitleSection
          titleOne={t.titleOne}
          titleTwo={t.titleTwo}
          text={t.subtitle}
        />

        {/* Navigation Tabs */}
        <div className="flex justify-center my-16 relative z-10">
          <div className="flex justify-evenly items-center w-full max-w-2xl bg-zinc-900/50 backdrop-blur-md shadow-lg border border-white/10 p-1.5 rounded-full">
            {[
              { id: "web", label: t.tabWeb },
              { id: "apps", label: t.tabApps },
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

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative z-10">
          {filteredList.map((project) => (
            <ProjectItem key={project.id} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
