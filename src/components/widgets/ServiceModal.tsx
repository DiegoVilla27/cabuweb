"use client";

import { useStore } from "@/store/useStore";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { translations } from "@/constants/translations";

export default function ServiceModal() {
  const { activeModal, closeModal, lang } = useStore();

  if (!activeModal) return null;

  const t = translations[lang].modal;

  const getModalContent = () => {
    switch (activeModal) {
      case "web":
        return {
          titleOne: lang === "es" ? "Desarrollo" : "Web",
          titleTwo: lang === "es" ? "Web Élite" : "Development",
          description: t.web.intro,
          features: t.web.features,
          tech: [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" }
          ],
        };
      case "app":
        return {
          titleOne: lang === "es" ? "Aplicaciones" : "Hybrid",
          titleTwo: lang === "es" ? "Híbridas" : "Mobile Apps",
          description: t.app.intro,
          features: t.app.features,
          tech: [
            { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic/3880FF" },
            { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" }
          ],
        };
      case "software":
        return {
          titleOne: lang === "es" ? "Software" : "Custom",
          titleTwo: lang === "es" ? "a la Medida" : "Software",
          description: t.software.intro,
          features: t.software.features,
          tech: [
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
            { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic/3880FF" },
            { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" }
          ],
        };
    }
  };

  const content = getModalContent();

  const txtIncluded = lang === "es" ? "¿Qué incluimos?" : "What's included?";
  const txtStack = lang === "es" ? "Tecnologías Base" : "Base Technologies";
  const txtQuote = lang === "es" ? "Cotizar Ahora" : "Quote Now";

  return (
    <AnimatePresence>
      <div
        onClick={closeModal}
        className="fixed inset-0 flex bg-black/80 backdrop-blur-sm w-screen h-screen z-9999 flex-col justify-center items-center overflow-x-hidden p-4 md:p-8 cursor-pointer"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative bg-zinc-950 border border-white/10 flex flex-col md:flex-row w-full max-w-[900px] rounded-4xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden cursor-auto"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-cabuwebMedium/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full cursor-pointer text-zinc-400 hover:text-white transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column (Content) */}
          <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <h2 className="font-lemonLight text-3xl md:text-4xl text-zinc-100 uppercase tracking-wide leading-tight">
              {content?.titleOne} <br />
              <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400 drop-shadow-md">
                {content?.titleTwo}
              </span>
            </h2>
            <p className="font-helveticaRoman mt-6 text-sm md:text-base text-zinc-400 leading-relaxed">
              {content?.description}
            </p>

            <div className="mt-8">
              <p className="font-lemonBold text-xs text-zinc-300 uppercase tracking-widest mb-4">{txtIncluded}</p>
              <ul className="flex flex-col gap-3">
                {content?.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cabuwebMedium shrink-0 mt-0.5" />
                    <span className="font-helveticaRoman text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Sidebar/CTA) */}
          <div className="w-full md:w-[320px] bg-zinc-900/50 border-t md:border-t-0 md:border-l border-white/5 p-8 md:p-12 relative z-10 flex flex-col justify-between">
            <div>
              <p className="font-lemonBold text-xs text-zinc-300 uppercase tracking-widest mb-4">{txtStack}</p>
              <div className="flex flex-wrap gap-2">
                {content?.tech.map((techItem, index) => (
                  <span key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-helveticaRoman text-zinc-400 hover:bg-white/10 transition-colors">
                    <img src={techItem.icon} alt={techItem.name} className="w-4 h-4 object-contain" />
                    {techItem.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <Link href="#footer" onClick={closeModal} className="group relative w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-cabuwebMedium/20 rounded-xl blur-md group-hover:bg-cabuwebMedium/40 transition-colors duration-500" />
                <button className="relative w-full font-helveticaBold text-sm uppercase tracking-widest bg-zinc-800 border border-white/10 text-white px-6 py-4 rounded-xl hover:border-cabuwebMedium transition-all duration-500 flex items-center justify-center gap-3 shadow-lg">
                  <span className="relative z-10">{txtQuote}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
