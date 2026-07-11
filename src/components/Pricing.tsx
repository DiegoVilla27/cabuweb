"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ShoppingCart, Globe } from "lucide-react";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function Pricing() {
  const lang = useStore((state) => state.lang);
  const t = translations[lang].pricing;

  const plans = [
    {
      slug: "landing",
      name: t.landing.name,
      price: t.landing.price,
      description: t.landing.desc,
      icon: <Globe className="w-5 h-5 text-zinc-400" />,
      ctaText: t.landing.cta,
      highlighted: false,
      features: t.landing.features,
    },
    {
      slug: "tienda-virtual",
      name: t.tienda.name,
      price: t.tienda.price,
      description: t.tienda.desc,
      icon: <ShoppingCart className="w-5 h-5 text-cabuwebMedium" />,
      ctaText: t.tienda.cta,
      highlighted: true,
      features: t.tienda.features,
    },
    {
      slug: "ecommerce",
      name: t.ecommerce.name,
      price: t.ecommerce.price,
      description: t.ecommerce.desc,
      icon: <Zap className="w-5 h-5 text-zinc-400" />,
      ctaText: t.ecommerce.cta,
      highlighted: false,
      features: t.ecommerce.features,
    }
  ];

  const handleCtaClick = (planName: string) => {
    // Find the textarea in the footer
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
    if (textarea) {
      // Professional pre-filled message based on selected package
      textarea.value = lang === "es"
        ? `Hola, equipo de Cabuweb. Estoy interesado/a en solicitar más información y cotizar el paquete de "${planName}".`
        : `Hello, Cabuweb team. I am interested in requesting more information and quoting the "${planName}" package.`;
      // Dispatch input event for react-hook-form to register the change
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      // Smooth scroll to the form
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="px-6 py-32 relative w-full overflow-hidden bg-zinc-950">
      {/* Background ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-modal h-[600px] bg-cabuwebMedium/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid Pattern for differentiation */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-lemonLight text-cabuwebMedium text-xs md:text-sm uppercase tracking-widest block mb-3">
            {t.titleOne}
          </span>
          <h2 className="font-lemonLight text-3xl md:text-5xl text-white uppercase tracking-tight leading-none mb-6">
            {lang === "es" ? (
              <>
                Elige tu plan de <span className="font-lemonBold">Desarrollo</span>
              </>
            ) : (
              <>
                Choose your <span className="font-lemonBold">Development</span> plan
              </>
            )}
          </h2>
          <p className="font-helveticaRoman text-zinc-400 text-sm md:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
          {plans.map((plan, index) => (
            <div
              key={plan.slug}
              className={`relative flex flex-col justify-between bg-zinc-900/40 backdrop-blur-xl border rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,116,255,0.15)] group ${plan.highlighted
                ? "border-cabuwebMedium/50 shadow-[0_15px_40px_rgba(0,116,255,0.1)]"
                : "border-white/5 hover:border-white/20"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cabuwebMedium text-white px-4 py-1.5 rounded-full text-xs font-helveticaBold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_5px_15px_rgba(0,116,255,0.4)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.popular}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  {/* <span className="font-lemonBold text-xs text-zinc-500 uppercase tracking-widest">
                    {plan.slug.replace("-", " ")}
                  </span> */}
                </div>

                <h3 className="font-lemonLight text-xl md:text-2xl text-white uppercase mb-2">
                  {plan.name}
                </h3>
                <p className="font-helveticaRoman text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="border-t border-white/5 pt-6 mb-8">
                  <span className="font-lemonBold text-2xl md:text-3xl text-white block">
                    {plan.price}
                  </span>
                </div>

                {/* Plan Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-cabuwebMedium/50 transition-colors">
                        <Check className="w-3 h-3 text-cabuwebMedium" />
                      </div>
                      <span className="font-helveticaRoman text-zinc-300 text-xs md:text-sm leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => handleCtaClick(plan.name)}
                className={`w-full text-center py-4 font-lemonLight text-xs tracking-widest uppercase rounded-xl transition-all duration-300 cursor-pointer ${plan.highlighted
                  ? "bg-cabuwebMedium hover:bg-cabuwebMedium/90 text-white shadow-[0_10px_30px_rgba(0,116,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                  : "bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:scale-[1.02] active:scale-[0.98]"
                  }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
