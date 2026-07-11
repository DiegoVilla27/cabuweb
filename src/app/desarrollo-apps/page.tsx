"use client";

import Header from "@/shared/Header";
import Sidenav from "@/shared/Sidenav";
import Whatsapp from "@/shared/Whatsapp";
import Footer from "@/shared/Footer";
import { ArrowRight, Smartphone, Code2, Zap } from "lucide-react";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function DesarrolloApps() {
  const lang = useStore((state) => state.lang);
  const t = translations[lang].appsPage;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-950 text-zinc-400 overflow-hidden pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-24 flex flex-col items-center justify-center text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-cabuwebMedium/20 blur-[150px] rounded-full pointer-events-none" />

          <h1 className="font-lemonLight text-4xl md:text-6xl lg:text-7xl text-zinc-100 uppercase tracking-wide leading-tight mb-6 relative z-10 max-w-4xl">
            {t.heroTitlePre} <br />
            <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400 drop-shadow-[0_0_20px_rgba(0,116,255,0.3)]">
              {t.heroTitlePost}
            </span>
          </h1>

          <p className="font-helveticaRoman text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12 relative z-10">
            {t.heroDesc}
          </p>

          <a href="#footer" className="relative z-10 bg-white text-zinc-950 hover:bg-zinc-200 px-8 py-4 rounded-xl font-helveticaBold text-sm tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-flex items-center gap-3 group">
            {t.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 lg:px-24 relative z-10 bg-zinc-900/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cabuwebMedium/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6 text-cabuwebMedium" />
              </div>
              <h3 className="font-lemonBold text-xl text-white mb-4">{t.features.designTitle}</h3>
              <p className="font-helveticaRoman text-sm text-zinc-400 leading-relaxed">
                {t.features.designDesc}
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cabuwebMedium/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-cabuwebMedium" />
              </div>
              <h3 className="font-lemonBold text-xl text-white mb-4">{t.features.perfTitle}</h3>
              <p className="font-helveticaRoman text-sm text-zinc-400 leading-relaxed">
                {t.features.perfDesc}
              </p>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-cabuwebMedium/50 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-cabuwebMedium" />
              </div>
              <h3 className="font-lemonBold text-xl text-white mb-4">{t.features.codeTitle}</h3>
              <p className="font-helveticaRoman text-sm text-zinc-400 leading-relaxed">
                {t.features.codeDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 px-6 lg:px-24 relative z-10 text-center">
          <h2 className="font-lemonBold text-2xl md:text-3xl text-zinc-100 mb-12">{t.stackTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {/* Apps */}
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React Native" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">React Native</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/ionic/3880FF" alt="Ionic" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Ionic</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/flutter/02569B" alt="Flutter" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Flutter</span>
            </div>

            {/* Web */}
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">React</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Next.js</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/angular/DD0031" alt="Angular" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Angular</span>
            </div>

            {/* Backend / Software */}
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Node.js</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Python</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
              <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-5 h-5" />
              <span className="font-helveticaMedium text-sm text-zinc-300">Laravel</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Sidenav />
      <Whatsapp />
    </>
  );
}
