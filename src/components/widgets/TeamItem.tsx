"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group col-span-6 lg:col-span-3 my-8 text-center"
    >
      <div className="relative inline-block">
        <Image
          src={item.img}
          alt={`Avatar de ${item.name}`}
          width={180}
          height={180}
          className="transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:shadow-[4px_4px_0px_rgba(0,116,255,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-full object-cover w-[120px]! h-[120px]! xl:w-[180px]! xl:h-[180px]! mx-auto border-4 border-white shadow-sm"
        />
      </div>
      <h4 className="text-center font-lemonLight text-xl md:text-2xl text-cabuwebMedium mt-4 transition-colors group-hover:text-cabuwebDark">
        {item.name} <span className="font-lemonBold">{item.lastname}</span>
      </h4>
      <hr className="border-t border-gray-300 w-1/5 mt-2 mb-4 mx-auto transition-all duration-300 group-hover:w-2/5 group-hover:border-cabuwebMedium" />
      <p className="text-center font-helveticaMedium text-sm md:text-base text-gray-500 leading-snug">
        {item.rol}
      </p>
    </motion.div>
  );
}
