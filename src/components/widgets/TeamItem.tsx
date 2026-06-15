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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="col-span-12 sm:col-span-6 lg:col-span-3 text-center group cursor-pointer"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto mb-8 rounded-full overflow-hidden bg-zinc-900 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-cabuwebMedium/50 group-hover:shadow-[0_0_40px_rgba(0,116,255,0.2)] transition-all duration-500">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover object-top grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <h3 className="font-helveticaBold text-xl md:text-2xl text-zinc-300 tracking-wide drop-shadow-md group-hover:text-white transition-colors">
        {item.name}
      </h3>
      <p className="text-zinc-500 font-lemonLight text-xs tracking-widest mt-2 uppercase group-hover:text-cabuwebMedium transition-colors">
        {item.rol}
      </p>
    </motion.div>
  );
}
