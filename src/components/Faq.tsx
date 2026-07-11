"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    question: "¿Cuál es el tiempo de entrega promedio de un proyecto?",
    answer: "Depende de la complejidad. Una página web corporativa/landing suele tomar entre 2 y 4 semanas. Un desarrollo a la medida (ERP, CRM) o aplicación móvil puede tomar de 8 a 16 semanas. Siempre establecemos un cronograma detallado con fases e hitos de entrega claros."
  },
  {
    question: "¿El diseño de las aplicaciones y páginas web es único?",
    answer: "Sí, en Cabuweb no trabajamos con plantillas prediseñadas o genéricas. Todo el diseño de interfaz de usuario (UI/UX) es creado desde cero por nuestros diseñadores, adaptándose 100% a la identidad de tu marca."
  },
  {
    question: "¿Cómo manejan el soporte técnico post-lanzamiento?",
    answer: "Ofrecemos una garantía técnica de 6 meses post-lanzamiento contra cualquier tipo de fallo de programación. Además, disponemos de planes de mantenimiento mensual que incluyen copias de seguridad, actualizaciones de seguridad y optimizaciones constantes."
  },
  {
    question: "¿El código fuente y la base de datos me pertenecen?",
    answer: "Por supuesto. Al finalizar el proyecto y completar los hitos de pago, todos los derechos de propiedad intelectual, código fuente y acceso a bases de datos e infraestructura se transfieren en su totalidad al cliente."
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer: "Nos especializamos en tecnologías modernas y de alto rendimiento. Para sitios web y SaaS utilizamos Next.js, React y Tailwind CSS. Para aplicaciones móviles desarrollamos tanto en React Native como nativo (Swift/Kotlin). Para bases de datos y backend nos apoyamos en Supabase, Node.js y PostgreSQL."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Google FAQ Structured Data (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950" id="faq">
      {/* Script injection for SEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-lemonLight text-cabuwebMedium text-xs md:text-sm uppercase tracking-widest block mb-3">
            Preguntas Frecuentes
          </span>
          <h2 className="font-lemonLight text-3xl md:text-5xl text-white uppercase tracking-tight leading-none mb-4">
            Resolver tus <span className="font-lemonBold">Dudas</span>
          </h2>
          <p className="font-helveticaRoman text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestra metodología de trabajo de élite, desarrollo tecnológico y soporte.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-lemonLight text-sm md:text-base text-zinc-200 hover:text-white transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cabuwebMedium shrink-0" />
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-zinc-400 font-helveticaRoman text-sm leading-relaxed border-t border-white/5 pl-14">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
