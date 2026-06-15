"use client";

import Link from "next/link";
import { useStore } from "@/store/useStore";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAVIGATION_LINKS } from "@/constants/data";

export default function Sidenav() {
  const { isSidenavOpen, toggleSidenav } = useStore();

  return (
    <AnimatePresence>
      {isSidenavOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidenav}
            className="fixed inset-0 bg-black z-1000 cursor-pointer"
          />

          {/* Drawer menu */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-full xs:w-[320px] h-full bg-cabuwebLight z-1001 shadow-2xl flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleSidenav}
                className="text-white cursor-pointer hover:scale-110 transition-transform"
                aria-label="Cerrar menú"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center">
              <ul className="text-center flex flex-col gap-6">
                {NAVIGATION_LINKS.filter(item => item.id !== "home").map((item) => (
                  <li
                    key={item.id}
                    className="text-white font-lemonLight uppercase text-md cursor-pointer hover:text-cabuwebMediumOpacitity50 transition-colors"
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={toggleSidenav}
                      className="block w-full py-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li className="text-white/85 font-helveticaRoman mt-12 text-sm">
                  Síguenos en nuestras <br /> redes sociales:
                </li>

                <li className="text-white flex justify-center gap-6 mt-2">
                  <a
                    href="https://www.facebook.com/cabuweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-white"
                    aria-label="Facebook"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/cabuweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-white"
                    aria-label="Instagram"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/cabuweb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform text-white"
                    aria-label="Twitter"
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
