"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export default function Welcome() {
  const isLargeScreen = useBreakpoint(576);

  const backgrounds = isLargeScreen
    ? {
      back: "/img/welcome/background-home-big.jpg",
      waves: "/img/welcome/white-top-big.png",
    }
    : {
      back: "/img/welcome/background-home-small.jpg",
      waves: "/img/welcome/white-top-small.png",
    };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full bg-fixed"
      style={{ backgroundImage: `url("${backgrounds.back}")` }}
    >
      <div
        className="bg-contain bg-bottom bg-no-repeat w-[101%] h-[101vh] min-h-[600px] flex flex-col justify-between"
        style={{ backgroundImage: `url("${backgrounds.waves}")` }}
      >
        <section id="home" className="h-full flex flex-col justify-center items-center px-6 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-lemonBold text-white text-center text-4xl md:text-6xl lg:text-7xl leading-tight"
            >
              Descubre nuestros servicios de <br className="hidden xl:block" /> desarrollo web y aplicaciones móviles
            </motion.h1>

            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "33.333%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border-t border-white my-3"
            />

            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-white font-helveticaMedium text-center text-sm md:text-base lg:text-lg mt-3 px-4 max-w-2xl"
            >
              ¡Mira cómo el desarrollo de software lleva a tu empresa más allá de la competencia!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <Link href="#footer" className="cursor-pointer">
                <button className="animate-pulse-scale bg-white hover:bg-zinc-100 text-cabuwebMedium px-8 py-3 mt-16 text-sm md:text-base lg:text-lg rounded-full uppercase font-lemonLight border-4 border-cabuwebMedium/20 transition-colors">
                  ¡Cotiza Ahora!
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="relative pb-6 xl:pb-10">
            <Link href="#services" className="cursor-pointer">
              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Icon Scroll Cabuweb"
                src="/icons/cw-scroll.svg"
                className="h-8 xl:h-10 4xl:h-12"
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
