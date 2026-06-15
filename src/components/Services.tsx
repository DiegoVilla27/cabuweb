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
          titleOne="Nuestros"
          titleTwo="Servicios"
          text="Transformamos ideas innovadoras en plataformas digitales de élite. Creamos experiencias que redefinen tu marca y la posicionan en la cima."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-20">
          <ServiceItem
            icon="cw-web.svg"
            titleOne="Desarrollo"
            titleTwo="Web"
            text="Ofrecemos sitios web de altísima calidad con una infraestructura de desempeño extremo. Desde Landing Pages inmersivas hasta E-commerce transaccionales, todo diseñado a la perfección."
            modalType="web"
            className="md:col-span-12 lg:col-span-7 min-h-[420px]"
          />
          <ServiceItem
            icon="cw-app.svg"
            titleOne="Desarrollo de"
            titleTwo="aplicaciones"
            text="Tu contenido al alcance de todos garantizando máxima funcionalidad y fiabilidad nativa. Ecosistemas móviles para iOS y Android."
            modalType="app"
            className="md:col-span-12 lg:col-span-5 min-h-[420px]"
          />
          <ServiceItem
            icon="cw-software.svg"
            titleOne="Desarrollo a"
            titleTwo="la medida"
            text="Sistemas complejos reducidos a interfaces minimalistas. Desarrollamos arquitecturas a la medida para optimizar tu flujo de trabajo y escalar tus operaciones."
            modalType="software"
            className="md:col-span-12 min-h-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
