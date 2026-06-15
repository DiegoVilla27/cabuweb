/* eslint-disable @next/next/no-img-element */
"use client";

import { useStore } from "@/store/useStore";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceItemProps {
  icon: string;
  titleOne: string;
  titleTwo: string;
  text: string;
  modalType: "web" | "app" | "software";
}

export default function ServiceItem({ icon, titleOne, titleTwo, text, modalType }: ServiceItemProps) {
  const openModal = useStore((state) => state.openModal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group col-span-12 lg:col-span-4 relative shadow-[0_8px_30px_rgba(0,0,0,0.04)] my-4 p-8 rounded-2xl border border-zinc-100 hover:border-cabuwebLight/50 hover:shadow-[0_20px_40px_rgba(0,116,255,0.12)] hover:bg-linear-to-br hover:from-white hover:to-blue-50/40 transition-all duration-500 bg-white"
    >
      {/* Dynamic animated decorative triangles using hover states */}
      <img
        src="/img/services/triangle-back.svg"
        className="absolute -top-5 right-0 mx-auto transition-all duration-300 left-6 transform scale-110 group-hover:rotate-[-35deg] group-hover:left-0 pointer-events-none"
        alt="Triangle Back"
      />
      <img
        src="/img/services/triangle-top.svg"
        className="absolute -top-5 right-0 mx-auto transition-all duration-300 -left-6 group-hover:rotate-35 group-hover:left-0 pointer-events-none"
        alt="Triangle Top"
      />

      <img src={`/img/services/${icon}`} className="absolute top-16 left-0 right-0 mx-auto" alt="Icon Service" />

      <h3 className="font-helveticaBold uppercase text-center text-xl md:text-2xl lg:text-3xl mt-32 text-gray-800">
        {titleOne} <br /> {titleTwo}
      </h3>

      <hr className="border-t border-gray-400 w-1/5 my-3 mx-auto transition-all duration-300 group-hover:w-2/5 group-hover:border-cabuwebLight" />

      <p className="text-sm md:text-base text-gray-500 font-helveticaRoman text-left pt-5 leading-relaxed">
        {text}
      </p>

      <button
        onClick={() => openModal(modalType)}
        className="w-full text-center mt-6 font-helveticaBold text-base flex items-center justify-center gap-2 text-zinc-800 hover:text-cabuwebMedium transition-colors group/btn cursor-pointer"
      >
        <span>Saber más</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5 text-cabuwebMedium" />
      </button>
    </motion.div>
  );
}
