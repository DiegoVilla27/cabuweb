"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants/data";
import { translations } from "@/constants/translations";

export default function Sidenav() {
  const { isSidenavOpen, toggleSidenav, lang, setLang } = useStore();
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/" || pathname === "/desarrollo-apps" || pathname === "/gracias") {
      if (id === "home") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `/#${id}`);
        }
      }
    }
    toggleSidenav();
  };

  const txtFollow = lang === "es" ? "Síguenos en redes" : "Follow us";

  return (
    <AnimatePresence>
      {isSidenavOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={toggleSidenav}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-9998 cursor-pointer"
          />

          {/* Drawer menu */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full xs:w-[360px] md:w-[400px] h-full bg-zinc-950/90 backdrop-blur-2xl border-l border-white/10 z-9999 shadow-[-20px_0_100px_rgba(0,0,0,0.8)] flex flex-col p-8 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <Link href="/" onClick={(e) => handleNavClick(e, "home")} className="cursor-pointer block">
                <img src="/img/logos/logo-white.svg" alt="Cabuweb" className="h-8 object-contain" />
              </Link>
              <button
                onClick={toggleSidenav}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center">
              <ul className="flex flex-col gap-8">
                {NAVIGATION_LINKS.filter(item => item.id !== "home").map((item, i) => {
                  const navKey = item.id as keyof typeof translations.es.nav;
                  const label = translations[lang].nav[navKey] || item.label;
                  return (
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      key={item.id}
                    >
                      <Link
                        href={`/#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className="group flex flex-col items-start text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="font-lemonLight text-3xl md:text-4xl capitalize tracking-wide drop-shadow-md">
                          {label}
                        </span>
                        <span className="h-[2px] w-0 bg-cabuwebMedium mt-2 group-hover:w-16 transition-all duration-500 ease-out"></span>
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Mobile Sidenav Language Switcher */}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + NAVIGATION_LINKS.length * 0.1 }}
                  className="flex items-center gap-3 text-sm font-helveticaBold select-none mt-4 pt-4 border-t border-white/5"
                >
                  <button
                    onClick={() => { setLang("es"); toggleSidenav(); }}
                    className={`hover:text-white transition-colors cursor-pointer ${lang === 'es' ? 'text-white' : 'text-zinc-500'}`}
                  >
                    ESPAÑOL (ES)
                  </button>
                  <span className="text-zinc-700">|</span>
                  <button
                    onClick={() => { setLang("en"); toggleSidenav(); }}
                    className={`hover:text-white transition-colors cursor-pointer ${lang === 'en' ? 'text-white' : 'text-zinc-500'}`}
                  >
                    ENGLISH (EN)
                  </button>
                </motion.li>
              </ul>
            </div>

            {/* Footer / Socials */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-zinc-500 font-helveticaRoman text-xs uppercase tracking-widest mb-6">{txtFollow}</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/cabuweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-cabuwebMedium/20 hover:border-cabuwebMedium/50 hover:text-white transition-all cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cabuweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-cabuwebMedium/20 hover:border-cabuwebMedium/50 hover:text-white transition-all cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
