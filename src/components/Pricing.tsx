"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ShoppingCart, Globe } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
  highlighted: boolean;
  slug: string;
}

const plans: PricingPlan[] = [
  {
    slug: "landing",
    name: "Landing Page",
    price: "Desde $399 USD",
    description: "Ideal para lanzamientos de productos, campañas de marketing y marcas personales.",
    icon: <Globe className="w-5 h-5 text-zinc-400" />,
    ctaText: "Cotizar Landing",
    highlighted: false,
    features: [
      "Diseño UI/UX 100% Personalizado (Sin plantillas)",
      "Una página de aterrizaje (secciones ilimitadas)",
      "Formulario de contacto y Whatsapp integrados",
      "Carga Ultra Rápida (<1.2s)",
      "Hosting y Dominio gratis por 1 año",
      "Soporte técnico garantizado por 3 meses"
    ]
  },
  {
    slug: "tienda-virtual",
    name: "Tienda Virtual",
    price: "Desde $899 USD",
    description: "La solución perfecta para comercios que buscan vender online de forma rápida y profesional.",
    icon: <ShoppingCart className="w-5 h-5 text-cabuwebMedium" />,
    ctaText: "Cotizar Tienda",
    highlighted: true,
    features: [
      "Catálogo autogestionable hasta 50 productos",
      "Pasarela de pagos integrada (Stripe, PayPal, etc.)",
      "Carrito de compras y Checkout optimizado",
      "Panel de control para pedidos e inventario",
      "Buscador predictivo y filtros de categorías",
      "Soporte técnico garantizado por 6 meses"
    ]
  },
  {
    slug: "ecommerce-robusto",
    name: "E-commerce Custom",
    price: "Desde $1,699 USD",
    description: "Para marcas consolidadas que requieren automatizaciones de negocio y máxima escala.",
    icon: <Zap className="w-5 h-5 text-zinc-400" />,
    ctaText: "Cotizar E-commerce",
    highlighted: false,
    features: [
      "Productos, categorías e inventario ilimitados",
      "Sincronización con ERP, CRM o punto de venta (POS)",
      "Soporte multi-idioma",
      "Sistema automatizado de cupones y membresías",
      "SEO técnico avanzado y sección de blog",
      "Soporte prioritario 24/7"
    ]
  }
];

export default function Pricing() {
  const handlePlanSelect = (planName: string) => {
    // Find the textarea in the footer
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    const select = document.querySelector('select[name="type"]') as HTMLSelectElement;

    if (textarea) {
      textarea.value = `Hola, equipo de Cabuweb. Estoy interesado/a en cotizar el Plan ${planName}. Me gustaría recibir más información y asesoramiento personalizado.`;
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (select) {
      if (planName.includes("Landing")) {
        select.value = "web";
      } else if (planName.includes("Tienda") || planName.includes("E-commerce")) {
        select.value = "software";
      }
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Scroll to form in footer
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-modal h-[600px] bg-cabuwebMedium/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-lemonLight text-cabuwebMedium text-xs md:text-sm uppercase tracking-widest block mb-3">
            Planes y Precios
          </span>
          <h2 className="font-lemonLight text-3xl md:text-5xl text-white uppercase tracking-tight leading-none mb-4">
            Nuestros <span className="font-lemonBold">Paquetes</span>
          </h2>
          <p className="font-helveticaRoman text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Soluciones de software de élite adaptadas al tamaño y los objetivos comerciales de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className={`col-span-12 lg:col-span-4 flex flex-col relative rounded-3xl p-8 transition-all duration-500 group ${plan.highlighted
                ? "bg-zinc-900/80 border border-cabuwebMedium/40 shadow-[0_15px_40px_rgba(0,116,255,0.15)] scale-100 lg:scale-[1.03] z-10"
                : "bg-zinc-900/40 border border-white/5 shadow-xl hover:border-white/10"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cabuwebMedium text-white font-lemonLight text-[9px] tracking-widest uppercase py-1 px-4 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  Más popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${plan.highlighted
                  ? "bg-cabuwebMedium/10 border-cabuwebMedium/20"
                  : "bg-white/5 border-white/5"
                  }`}>
                  {plan.icon}
                </div>
                <h3 className="font-lemonLight text-lg text-white uppercase tracking-wider">
                  {plan.name}
                </h3>
              </div>

              <div className="mb-4">
                <span className="text-2xl md:text-3xl font-lemonBold text-white tracking-tight">
                  {plan.price}
                </span>
              </div>

              <p className="font-helveticaRoman text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                {plan.description}
              </p>

              <hr className="border-white/5 mb-6" />

              <ul className="space-y-4 grow mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? "bg-cabuwebMedium/20" : "bg-white/5"
                      }`}>
                      <Check className={`w-2.5 h-2.5 ${plan.highlighted ? "text-cabuwebMedium" : "text-zinc-400"}`} />
                    </div>
                    <span className="font-helveticaRoman text-zinc-300 text-xs md:text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelect(plan.name)}
                className={`w-full py-4 rounded-xl font-lemonLight text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer text-center hover:scale-[1.02] active:scale-[0.98] ${plan.highlighted
                  ? "bg-cabuwebMedium text-white hover:bg-cabuwebMedium/90 shadow-[0_5px_15px_rgba(0,116,255,0.3)]"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
              >
                {plan.ctaText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
