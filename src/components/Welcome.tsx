"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function Welcome() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 150]);
  const lang = useStore((state) => state.lang);

  const t = translations[lang].welcome;

  return (
    <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Aurora Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-cabuwebMedium/20 blur-[150px] rounded-full pointer-events-none animate-aurora-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none animate-aurora-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none animate-breathe" />
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
            <p className="font-helveticaRoman text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-cabuwebMedium drop-shadow-md -mb-1">
              {t.badge}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-lemonBold text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500 text-center text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tight max-w-5xl drop-shadow-lg"
          >
            {t.titlePre} <br className="hidden md:block" />
            <span className="text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">{t.titlePost}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mt-8 md:mt-12 w-full flex flex-col items-center"
          >
            <p className="font-helveticaRoman text-base md:text-xl lg:text-2xl text-zinc-400 max-w-3xl text-center leading-relaxed drop-shadow">
              {t.subtitle}
            </p>

            <Link href="#footer" className="mt-12 md:mt-16 group relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-cabuwebMedium/20 rounded-full blur-xl group-hover:bg-cabuwebMedium/40 transition-colors duration-500" />
              <button className="relative overflow-hidden font-lemonLight tracking-widest text-xs md:text-sm uppercase bg-zinc-900 border border-white/10 text-white px-10 py-5 rounded-full hover:border-cabuwebMedium transition-all duration-500 flex items-center gap-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="relative z-10 font-bold">{t.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
