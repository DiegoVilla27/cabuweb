"use client";

import { useState, useEffect } from "react";

type FloatingCtaProps = {
  projectName: string;
};

export default function FloatingCta({ projectName }: FloatingCtaProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);

  useEffect(() => {
    // Show after 1.2 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    // Subtle bounce every 10 seconds to catch attention without being annoying
    const bounceInterval = setInterval(() => {
      setShouldBounce(true);
      setTimeout(() => setShouldBounce(false), 800);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(bounceInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 z-50 w-[90%] max-w-[340px] sm:w-auto">
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          30% { transform: translateY(-6px) scale(1.02); }
          50% { transform: translateY(-3px) scale(1.01); }
          70% { transform: translateY(-1px) scale(1); }
        }
        .animate-subtle-bounce {
          animation: subtle-bounce 0.8s ease-in-out;
        }
      `}</style>
      
      <div
        className={`bg-zinc-950/90 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl flex items-center justify-between gap-6 shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-all duration-500 transform ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        } ${shouldBounce ? "animate-subtle-bounce" : ""}`}
      >
        <div className="flex flex-col gap-0.5 min-w-0 pr-2">
          <span className="text-[9px] text-zinc-500 font-lemonLight uppercase tracking-widest block">
            Caso de Éxito
          </span>
          <span className="text-xs text-white font-lemonBold truncate max-w-[130px] sm:max-w-[180px] block">
            {projectName}
          </span>
        </div>

        <a
          href="#footer"
          className="px-4 py-2 bg-white hover:bg-zinc-200 text-zinc-950 rounded-xl font-lemonLight text-[9px] tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:scale-[1.03] active:scale-[0.97] shrink-0"
        >
          Cotizar Similar
        </a>
      </div>
    </div>
  );
}
