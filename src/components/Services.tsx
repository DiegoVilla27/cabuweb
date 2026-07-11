"use client";

import TitleSection from "./widgets/TitleSection";
import ServiceItem from "./widgets/ServiceItem";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function Services() {
  const lang = useStore((state) => state.lang);
  const t = translations[lang].services;

  return (
    <section id="services" className="px-6 py-32 w-full relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cabuwebMedium/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 animate-breathe" />
      <div className="absolute bottom-0 left-0 w-modal h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2 animate-breathe" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <TitleSection
          titleOne={t.titleOne}
          titleTwo={t.titleTwo}
          text={t.subtitle}
        />

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ServiceItem
            icon="cw-web.svg"
            titleOne={lang === "es" ? "Desarrollo" : "Web"}
            titleTwo={lang === "es" ? "Web" : "Development"}
            text={t.webText}
            modalType="web"
            className="min-h-[300px]"
          />
          <ServiceItem
            icon="cw-app.svg"
            titleOne={lang === "es" ? "Aplicaciones" : "Hybrid"}
            titleTwo={lang === "es" ? "Híbridas" : "Mobile Apps"}
            text={t.appText}
            modalType="app"
            className="min-h-[300px]"
          />
          <ServiceItem
            icon="cw-software.svg"
            titleOne={lang === "es" ? "Software a" : "Custom"}
            titleTwo={lang === "es" ? "la Medida" : "Software"}
            text={t.softwareText}
            modalType="software"
            className="min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
