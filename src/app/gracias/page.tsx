"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function ThankYouPage() {
  const lang = useStore((state) => state.lang);
  const t = translations[lang].thanksPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center py-20 px-6 relative overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-cabuwebMedium/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl w-full bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-10 md:p-16 text-center relative z-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-cabuwebMedium/10 border border-cabuwebMedium/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,116,255,0.3)]"
        >
          <CheckCircle2 className="w-12 h-12 text-cabuwebMedium" />
        </motion.div>

        <h1 className="font-lemonLight text-3xl md:text-5xl text-zinc-100 tracking-wide mb-4">
          {lang === "es" ? (
            <>
              ¡Tu Visión Está En <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400">Marcha!</span>
            </>
          ) : (
            <>
              Your Vision Is In <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400">Motion!</span>
            </>
          )}
        </h1>

        <p className="font-helveticaRoman text-base md:text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg mx-auto">
          {t.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-xl font-helveticaBold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center justify-center gap-2">
            {t.btnHome}
          </Link>
          <a href="https://www.instagram.com/cabuweb" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10 px-8 py-4 rounded-xl font-helveticaBold text-sm tracking-widest uppercase transition-all inline-flex items-center justify-center gap-2 group">
            {t.btnSocial} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 flex items-center gap-8 opacity-60 relative z-10"
      >
        <div className="flex items-center gap-2 text-zinc-400 font-helveticaMedium text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {t.badgeResponse}
        </div>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <div className="flex items-center gap-2 text-zinc-400 font-helveticaMedium text-xs uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          {t.badgeConfidential}
        </div>
      </motion.div>
    </div>
  );
}
