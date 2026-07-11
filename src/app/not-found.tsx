import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Premium ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cabuwebMedium/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 text-center max-w-lg mx-auto flex flex-col items-center">
        {/* Animated logo/mark */}
        <Link href="/" className="mb-12 cursor-pointer block">
          <h1 className="font-lemonLight text-2xl tracking-widest text-white uppercase">
            CABU<span className="font-lemonBold text-cabuwebMedium">WEB</span>
          </h1>
        </Link>

        {/* 404 Glowing Number */}
        <div className="relative mb-6">
          <span className="text-8xl md:text-9xl font-lemonBold tracking-tighter text-white block select-none drop-shadow-[0_15px_30px_rgba(0,116,255,0.2)]">
            404
          </span>
          <div className="absolute -inset-1 bg-linear-to-r from-cabuwebMedium to-sky-400 rounded-full blur opacity-15 pointer-events-none animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="font-lemonLight text-xl md:text-2xl text-zinc-200 uppercase tracking-wide mb-4">
          Órbita no encontrada
        </h2>

        {/* Description */}
        <p className="font-helveticaRoman text-zinc-500 text-sm md:text-base leading-relaxed mb-10">
          El destino digital que estás buscando ha sido trasladado o no existe en nuestra red de software. Regresa al inicio para continuar navegando.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 px-6 py-4 bg-white text-zinc-950 hover:bg-zinc-200 font-lemonLight text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:scale-[1.03] active:scale-[0.97]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Regresar al Inicio
        </Link>
      </div>
    </main>
  );
}
