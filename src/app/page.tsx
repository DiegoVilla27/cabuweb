import Header from "@/shared/Header";
import Sidenav from "@/shared/Sidenav";
import Whatsapp from "@/shared/Whatsapp";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Footer from "@/shared/Footer";
import ServiceModal from "@/components/widgets/ServiceModal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cabuweb",
    url: "https://www.cabuweb.com",
    description:
      "Diseñamos, desarrollamos e implementamos Páginas Web, Aplicaciones Móviles y Software a la medida.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="overflow-x-hidden">
        <Welcome />
        <Services />
        <Projects />
        <Team />
      </main>
      <Footer />
      <Sidenav />
      <Whatsapp />
      <ServiceModal />
    </>
  );
}
