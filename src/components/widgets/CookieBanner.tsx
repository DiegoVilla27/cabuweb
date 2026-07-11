"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const lang = useStore((state) => state.lang);
  const t = translations[lang].cookies;

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay slightly to not overwhelm the user immediately
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShow(false);
  };

  const txtTitle = lang === "es" ? "Control de Privacidad" : "Privacy Control";
  const txtMoreInfo = lang === "es" ? "Más detalles en nuestra " : "More details in our ";
  const txtPolicyLink = lang === "es" ? "Política de Privacidad" : "Privacy Policy";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:max-w-md z-9999"
        >
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-cabuwebMedium/10 blur-[50px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="flex items-start gap-4 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,116,255,0.2)]">
                <Cookie className="w-5 h-5 text-cabuwebMedium" />
              </div>
              <div>
                <h3 className="font-lemonBold text-zinc-100 text-sm mb-2 tracking-wide uppercase">{txtTitle}</h3>
                <p className="font-helveticaRoman text-xs text-zinc-400 leading-relaxed mb-5">
                  {t.message}
                  {" "}{txtMoreInfo}
                  <Link href="/politica-de-privacidad" className="text-cabuwebMedium hover:text-white transition-colors">
                    {txtPolicyLink}
                  </Link>.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-white text-zinc-950 hover:bg-zinc-200 font-helveticaBold uppercase text-[10px] tracking-wider py-3 rounded-lg transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
                  >
                    {t.accept}
                  </button>
                  <button
                    onClick={handleReject}
                    className="flex-1 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white border border-white/10 font-helveticaBold uppercase text-[10px] tracking-wider py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    {t.decline}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
