"use client";

import Link from "next/link";
import { ArrowLeft, Bug } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] bg-cabuwebMedium/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center max-w-2xl"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 mb-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <Bug className="w-10 h-10 md:w-12 md:h-12 text-zinc-400" />
        </div>

        <h1 className="font-lemonLight text-7xl md:text-9xl text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 mb-4 tracking-tighter drop-shadow-lg">
          404
        </h1>

        <h2 className="font-lemonLight text-2xl md:text-4xl text-zinc-100 uppercase tracking-widest mb-6">
          Página no encontrada
        </h2>

        <p className="font-helveticaRoman text-zinc-400 text-base md:text-lg leading-relaxed mb-12 max-w-lg">
          Parece que te has perdido en el ciberespacio. La ruta que buscas no existe o ha sido movida a otra dimensión.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-xl font-helveticaBold text-sm text-white uppercase tracking-widest transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-cabuwebMedium" />
          Volver a la base
        </Link>
      </motion.div>

      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
    </main>
  );
}
