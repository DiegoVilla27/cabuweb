"use client";

import TitleSection from "./widgets/TitleSection";
import ServiceItem from "./widgets/ServiceItem";

export default function Services() {
  return (
    <section id="services" className="px-6 py-32 w-full relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cabuwebMedium/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 animate-breathe" />
      <div className="absolute bottom-0 left-0 w-modal h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2 animate-breathe" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <TitleSection
          titleOne="Soluciones"
          titleTwo="Tecnológicas"
          text="No hacemos simples páginas web. Diseñamos infraestructuras digitales de alto impacto preparadas para escalar, convertir y superar a tu competencia."
        />

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <ServiceItem
            icon="cw-web.svg"
            titleOne="Desarrollo"
            titleTwo="Web"
            text="Sitios web de altísima calidad con desempeño extremo. Desde Landing Pages hasta E-commerce."
            modalType="web"
            className="min-h-[300px]"
          />
          <ServiceItem
            icon="cw-app.svg"
            titleOne="Aplicaciones"
            titleTwo="Híbridas"
            text="Aplicaciones móviles multiplataforma para iOS y Android con rendimiento excepcional."
            modalType="app"
            className="min-h-[300px]"
          />
          <ServiceItem
            icon="cw-software.svg"
            titleOne="Software a"
            titleTwo="la Medida"
            text="Sistemas complejos reducidos a interfaces minimalistas para escalar tus operaciones."
            modalType="software"
            className="min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
