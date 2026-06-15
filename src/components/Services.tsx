"use client";

import TitleSection from "./widgets/TitleSection";
import ServiceItem from "./widgets/ServiceItem";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 xl:px-40 3xl:px-48 4xl:px-80">
      <TitleSection
        titleOne="Nuestros"
        titleTwo="Servicios"
        text="Creamos experiencias digitales que transforman tu marca. Transformamos ideas innovadoras en proyectos digitales."
      />
      <div className="grid grid-cols-12 gap-6 mt-12">
        <ServiceItem
          icon="cw-web.svg"
          titleOne="Desarrollo"
          titleTwo="Web"
          text="Ofrecemos sitios web de alta calidad y una infraestructura de alto desempeño! Adaptables para dispositivos móviles. Landing Page, E-commerce, entre otros."
          modalType="web"
        />
        <ServiceItem
          icon="cw-app.svg"
          titleOne="Desarrollo de"
          titleTwo="aplicaciones"
          text="El mundo ha cambiado y ahora es móvil! Tu contenido al alcance de todos garantizando total funcionalidad y fiabilidad. Aplicaciones para Android y iOS."
          modalType="app"
        />
        <ServiceItem
          icon="cw-software.svg"
          titleOne="Desarrollo a"
          titleTwo="la medida"
          text="Desarrollamos a la medida de tus necesidades y las de tu empresa para optimizar el flujo de trabajo. Un software exclusivo y adaptado."
          modalType="software"
        />
      </div>
    </section>
  );
}
