"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useScroll } from "@/hooks/useScroll";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS } from "@/constants/data";
import { translations } from "@/constants/translations";

export default function Header() {
  const toggleSidenav = useStore((state) => state.toggleSidenav);
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);
  const isScrolled = useScroll(100);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/" || pathname === "/desarrollo-apps" || pathname === "/gracias") {
      // If we are on home section pages, allow smooth scrolling
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
  };

  return (
    <header id="header">
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-zinc-950/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-4 border-b border-white/5" : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-12">
          <div className="col-span-6 lg:col-span-4 flex items-center">
            <Link href="/" onClick={(e) => handleNavClick(e, "home")} className="cursor-pointer">
              <figure className="m-0">
                <img src="/img/logos/logo-white.svg" width="200" alt="Logo Cabuweb" className="w-[150px] xs:w-[200px]" />
              </figure>
            </Link>
          </div>

          <div className="col-span-6 self-center justify-self-end lg:hidden flex items-center gap-4">
            {/* Language Switcher for Mobile (Top-Right) */}
            <div className="flex items-center gap-1.5 text-[10px] font-helveticaBold select-none bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <button
                onClick={() => setLang("es")}
                className={`hover:text-white transition-colors cursor-pointer ${lang === 'es' ? 'text-white' : 'text-zinc-500'}`}
              >
                ES
              </button>
              <span className="text-zinc-700">|</span>
              <button
                onClick={() => setLang("en")}
                className={`hover:text-white transition-colors cursor-pointer ${lang === 'en' ? 'text-white' : 'text-zinc-500'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={toggleSidenav}
              className="text-white cursor-pointer hover:scale-105 transition-transform"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6 xs:w-8 xs:h-8" />
            </button>
          </div>

          <div className="hidden lg:block col-span-8 self-center">
            <ul className="flex flex-row justify-end items-center gap-6 2xl:gap-8">
              {NAVIGATION_LINKS.map((item) => {
                const navKey = item.id as keyof typeof translations.es.nav;
                const label = translations[lang].nav[navKey] || item.label;
                return (
                  <li
                    key={item.id}
                    className="font-lemonLight text-center text-zinc-300 text-xs 2xl:text-sm 3xl:text-base cursor-pointer drop-shadow-md hover:text-white transition-colors"
                  >
                    <Link
                      href={item.id === "home" ? "/" : `/#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}

              {/* Language Switcher for Desktop (Top-Right) */}
              <li className="flex items-center gap-2 ml-4 pl-4 border-l border-white/10 text-xs font-helveticaBold select-none">
                <button
                  onClick={() => setLang("es")}
                  className={`hover:text-white transition-colors cursor-pointer ${lang === 'es' ? 'text-white' : 'text-zinc-500'}`}
                >
                  ES
                </button>
                <span className="text-zinc-700">|</span>
                <button
                  onClick={() => setLang("en")}
                  className={`hover:text-white transition-colors cursor-pointer ${lang === 'en' ? 'text-white' : 'text-zinc-500'}`}
                >
                  EN
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
