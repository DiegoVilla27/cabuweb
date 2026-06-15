"use client";

import { useStore } from "@/store/useStore";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  icon: string;
  titleOne: string;
  titleTwo: string;
  text: string;
  modalType: "web" | "app" | "software";
  className?: string;
}

export default function ServiceItem({ icon, titleOne, titleTwo, text, modalType, className }: ServiceItemProps) {
  const openModal = useStore((state) => state.openModal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative p-8 md:p-12 rounded-4xl border border-white/5 bg-zinc-900/40 backdrop-blur-md overflow-hidden hover:bg-zinc-900/60 transition-colors duration-500 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:border-cabuwebMedium/30 ${className || ""}`}
    >
      {/* Spotlight glow effect on hover */}
      <div className="absolute inset-0 bg-linear-to-br from-cabuwebMedium/0 via-cabuwebMedium/0 to-cabuwebMedium/0 group-hover:from-cabuwebMedium/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-700 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start h-full">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          <img src={`/img/services/${icon}`} className="w-8 h-8 filter brightness-200" alt="Icon Service" />
        </div>

        <h3 className="font-helveticaBold uppercase text-3xl md:text-4xl lg:text-5xl text-zinc-100 tracking-wide leading-tight drop-shadow-md">
          {titleOne} <br /> {titleTwo}
        </h3>

        <p className="text-base md:text-lg text-zinc-400 font-helveticaRoman pt-6 leading-relaxed grow">
          {text}
        </p>

        <button
          onClick={() => openModal(modalType)}
          className="mt-10 font-helveticaBold text-sm md:text-base uppercase tracking-widest flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group/btn cursor-pointer"
        >
          <span>Saber más</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2 text-cabuwebMedium" />
        </button>
      </div>

      {/* Decorative large icon faded in background */}
      <img
        src={`/img/services/${icon}`}
        className="absolute -bottom-10 -right-10 w-64 h-64 opacity-5 filter blur-sm group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none"
        alt="Background Icon"
      />
    </motion.div>
  );
}
