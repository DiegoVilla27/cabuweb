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
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-zinc-800">
        <span className="font-lemonLight">{titleOne}</span>&nbsp;
        <Typewriter
          strings={[titleTwo]}
          typeSpeed={80}
          backSpeed={80}
          className="font-lemonBold text-cabuwebMedium"
        />
      </h2>
      <hr className="border-t border-gray-400 w-1/5 xl:w-1/12 my-5 mx-auto" />
      <p className="font-helveticaRoman text-center mt-6 mb-5 text-sm md:text-base lg:text-lg xl:px-60 4xl:px-80 text-gray-500">
        {text}
      </p>
    </motion.div>
  );
}
