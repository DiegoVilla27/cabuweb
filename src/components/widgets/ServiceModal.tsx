/* eslint-disable @next/next/no-img-element */
"use client";

import { useStore } from "@/store/useStore";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ServiceModal() {
  const { activeModal, closeModal } = useStore();

  if (!activeModal) return null;

  const getModalContent = () => {
    switch (activeModal) {
      case "web":
        return {
          titleOne: "Desarrollo de",
          titleTwo: "páginas web",
          description:
            "Ofrece a tus clientes un ambiente digital único, donde disfruten pasar el tiempo descubriendo tus productos y servicios.",
        };
      case "app":
        return {
          titleOne: "Desarrollo de",
          titleTwo: "aplicaciones",
          description:
            "Ofrece a tus clientes un ambiente digital único, donde disfruten pasar el tiempo descubriendo tus productos y servicios.",
        };
      case "software":
        return {
          titleOne: "Desarrollo",
          titleTwo: "a la medida",
          description:
            "Ofrece a tus clientes un ambiente digital único, donde disfruten pasar el tiempo descubriendo tus productos y servicios.",
        };
    }
  };

  const content = getModalContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex bg-black/60 w-screen h-screen z-2000 flex-col justify-center items-center overflow-x-hidden p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white px-8 py-12 flex flex-col justify-center items-center w-full max-w-[600px] rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Background shapes */}
          <img
            src="/img/proyects/bg-proyects-top-small.png"
            className="opacity-60 absolute top-0 -left-6 pointer-events-none"
            alt="Decoration Top"
          />
          <img
            src="/img/proyects/bg-proyects-bottom-small.png"
            className="opacity-60 absolute bottom-0 -right-6 pointer-events-none"
            alt="Decoration Bottom"
          />

          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 cursor-pointer text-gray-400 hover:text-gray-700 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <h2 className="font-lemonLight text-center text-2xl md:text-3xl relative z-10 text-gray-800">
            {content.titleOne} <span className="font-lemonBold">{content.titleTwo}</span>
          </h2>
          <hr className="border-t border-gray-400 w-1/5 mt-2 mx-auto relative z-10" />

          {/* Description */}
          <p className="font-helveticaRoman text-center my-10 text-sm md:text-base text-gray-600 relative z-10 leading-relaxed">
            {content.description}
          </p>

          {/* Sectores / Features */}
          <ul className="list-inside list-disc mb-10 w-full px-4 relative z-10">
            <li className="font-helveticaRoman font-bold my-2 text-sm sm:text-base text-gray-800 list-none">
              <span className="block mb-2">Sectores:</span>
              <div className="grid grid-cols-2 gap-2 mt-1 pl-2">
                {[
                  "Páginas estáticas",
                  "Blogs",
                  "Landing page",
                  "E-commerce",
                  "Web personal",
                  "Web corporativa",
                ].map((item) => (
                  <div key={item} className="col-span-1 text-gray-600 font-light text-sm flex items-center gap-2">
                    <img className="w-4 h-4" src="/img/modal/checkbox.svg" alt="Checkbox" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </li>
            <li className="font-helveticaRoman font-bold mt-6 mb-2 text-sm sm:text-base text-gray-800 list-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Infraestructura sólida</span>
            </li>
            <li className="font-helveticaRoman font-bold my-2 text-sm sm:text-base text-gray-800 list-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Analíticas de Google</span>
            </li>
            <li className="font-helveticaRoman font-bold my-2 text-sm sm:text-base text-gray-800 list-none flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Implementación de la plataforma</span>
            </li>
          </ul>

          <img className="w-full mt-2 relative z-10" src="/img/modal/proccess.svg" alt="Proceso de desarrollo | Cabuweb" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
