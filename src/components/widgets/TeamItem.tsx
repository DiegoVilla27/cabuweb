"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  lastname: string;
  img: string;
  rol: string;
}

interface TeamItemProps {
  item: TeamMember;
}

export default function TeamItem({ item }: TeamItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center group cursor-pointer w-40 sm:w-48 lg:w-52"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mx-auto rounded-4xl overflow-hidden bg-zinc-900 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-cabuwebMedium/50 group-hover:shadow-[0_0_40px_rgba(0,116,255,0.3)] transition-all duration-500">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 208px"
          className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <h3 className="font-helveticaBold text-xl md:text-2xl text-zinc-300 mt-6 tracking-wide drop-shadow-md group-hover:text-white transition-colors">
        {item.name}
      </h3>
      <p className="text-zinc-500 font-lemonLight text-xs tracking-widest mt-2 uppercase group-hover:text-cabuwebMedium transition-colors drop-shadow-md">
        {item.rol}
      </p>
    </motion.div>
  );
}
