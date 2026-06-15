"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Welcome() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Glow */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-screen h-[100vw] max-w-[1000px] max-h-[1000px] bg-cabuwebMedium/10 blur-[120px] rounded-full pointer-events-none animate-breathe" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />

      <section id="home" className="relative z-10 w-full flex flex-col justify-center items-center px-6 max-w-7xl mx-auto min-h-screen pt-20 pb-12">
        <motion.div style={{ y: contentY }} className="flex-1 flex flex-col justify-center items-center w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12 shadow-[0_0_30px_rgba(0,116,255,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cabuwebMedium opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cabuwebLight"></span>
            </span>
            <span className="text-zinc-300 font-helveticaRoman text-xs tracking-widest uppercase">Diseño & Desarrollo Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-lemonBold text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 text-center text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight max-w-5xl drop-shadow-lg"
          >
            Construimos <br className="hidden md:block" />
            <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">el futuro digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-zinc-400 font-helveticaRoman text-center text-base md:text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed"
          >
            Llevamos a tu empresa más allá de la competencia con páginas web, aplicaciones móviles y software a la medida diseñados para dominar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
            className="mt-16"
          >
            <Link href="#footer">
              <button className="group relative flex items-center gap-4 bg-white text-zinc-950 px-8 py-4 rounded-full font-helveticaBold text-sm uppercase tracking-widest hover:scale-105 transition-all duration-300 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] cursor-pointer">
                <span className="relative z-10">Cotiza Ahora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative pb-6 xl:pb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <Link href="#services" className="cursor-pointer">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 border-2 border-zinc-600 rounded-full flex justify-center p-1"
            >
              <motion.div className="w-1 h-3 bg-zinc-400 rounded-full" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
