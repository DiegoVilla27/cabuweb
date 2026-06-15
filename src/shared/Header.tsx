/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useScroll } from "@/hooks/useScroll";
import { NAVIGATION_LINKS } from "@/constants/data";

export default function Header() {
  const toggleSidenav = useStore((state) => state.toggleSidenav);
  const isScrolled = useScroll(100);

  return (
    <header id="header">
      <nav
        className={`w-full mx-auto grid grid-cols-12 p-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-cabuwebLight shadow-md" : "bg-transparent"
        }`}
      >
        <div className="col-span-6 lg:col-span-5 4xl:col-span-6 flex items-center">
          <Link href="#home" className="cursor-pointer">
            <figure className="m-0">
              <img src="/img/logos/logo-white.svg" width="200" alt="Logo Cabuweb" className="w-[150px] xs:w-[200px]" />
            </figure>
          </Link>
        </div>

        <div className="col-span-6 self-center justify-self-end lg:hidden flex items-center">
          <button
            onClick={toggleSidenav}
            className="text-white cursor-pointer hover:scale-105 transition-transform"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6 xs:w-8 xs:h-8" />
          </button>
        </div>

        <div className="hidden lg:block col-span-7 self-center 4xl:col-span-6">
          <ul className="flex flex-row justify-end gap-6 2xl:gap-8">
            {NAVIGATION_LINKS.map((item) => (
              <li
                key={item.id}
                className="font-lemonLight text-center text-white text-xs 2xl:text-sm 3xl:text-base cursor-pointer drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:text-cabuwebMediumOpacitity50 transition-colors"
              >
                <Link href={`#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
