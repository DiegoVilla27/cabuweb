"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

interface TitleSectionProps {
  titleOne: string;
  titleTwo: string;
  text: string;
}

export default function TitleSection({ titleOne, titleTwo, text }: TitleSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center my-10"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-zinc-100 tracking-tight leading-tight drop-shadow-lg">
        <span className="font-lemonLight text-zinc-400">{titleOne}</span><br className="md:hidden" />&nbsp;
        <Typewriter
          strings={[titleTwo]}
          typeSpeed={80}
          backSpeed={80}
          className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400 drop-shadow-[0_0_20px_rgba(0,116,255,0.3)]"
        />
      </h2>
      <hr className="border-t border-zinc-800 w-1/5 xl:w-1/12 my-8 mx-auto" />
      <p className="font-helveticaRoman text-center mt-6 mb-5 text-base md:text-lg lg:text-xl xl:px-40 4xl:px-80 text-zinc-400 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
}
