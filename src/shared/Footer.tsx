/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

// EmailJS Keys
const EMAILJS_CONFIG = {
  publicKey: "user_w5bQqSa3wGzfuaGANvzru",
  serviceId: "service_1hnq2yg",
  templateId: "template_exbq856",
};

// Form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre es requerido.")
    .max(40, "El nombre es demasiado largo (máximo 40 caracteres).")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/, "El nombre solo debe contener letras."),
  email: z
    .string()
    .min(1, "El correo electrónico es requerido.")
    .email("El correo electrónico es inválido.")
    .max(40, "El correo es demasiado largo (máximo 40 caracteres)."),
  type: z.enum(["web", "app", "software"]),
  message: z
    .string()
    .min(1, "El mensaje es requerido.")
    .max(200, "El mensaje es demasiado largo (máximo 200 caracteres)."),
  check: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar nuestras políticas de privacidad para continuar.",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Footer() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "web",
      message: "",
      check: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const toastId = toast.loading("Enviando formulario...");

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: data.name,
          email: data.email,
          type: data.type === "web" ? "Página Web" : data.type === "app" ? "Aplicación Móvil" : "Software a la medida",
          message: data.message,
        },
        EMAILJS_CONFIG.publicKey
      );

      if (response.status === 200) {
        toast.success("¡Formulario enviado satisfactoriamente!", {
          id: toastId,
          description: "En breve nos pondremos en contacto contigo.",
        });
        reset();
      }
    } catch {
      toast.error("No se pudo enviar el formulario.", {
        id: toastId,
        description: "Inténtalo de nuevo más tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-cabuwebLight relative pt-24 xl:pt-28 4xl:pt-40 mt-24" id="footer">
      <picture className="w-full transform -rotate-180 absolute -top-4 xs:top-0 sm:-top-1 border-none pointer-events-none select-none">
        <source media="(max-width:425px)" srcSet="/img/welcome/white-top-small.png" />
        <img src="/img/welcome/white-top-big.png" className="w-[101%] max-w-[inherit]" alt="Footer Waves" />
      </picture>

      <div className="bg-cabuwebLight px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Logo and About */}
          <div className="col-span-12 lg:col-span-4 lg:mt-8">
            <div className="px-4">
              <Link href="#home" className="cursor-pointer">
                <figure className="max-w-[200px]">
                  <img src="/img/logos/logo-white.svg" alt="Logo Cabuweb White" className="w-full" />
                </figure>
              </Link>
              <p className="font-helveticaRoman text-white mt-6 text-sm md:text-base leading-relaxed">
                Somos una <strong className="font-helveticaMedium">empresa de software</strong> conformada por un equipo de profesionales dedicada al diseño, desarrollo e implementación de servicios informáticos.
                <br />
                <br />
                Cabuweb nace en el año 2018 con la misión de proveer <strong className="font-helveticaMedium">soluciones de tecnología</strong> para la pequeña, mediana y gran empresa.
              </p>
            </div>
          </div>

          {/* Quick Access */}
          <div className="col-span-12 lg:col-span-4 lg:mt-8">
            <div className="px-4">
              <h4 className="uppercase font-helveticaMedium text-lg md:text-xl text-white tracking-wider">
                Accesos Rápidos
              </h4>
              <hr className="mt-2 mb-6 w-1/5 border-white/40" />
              <ul className="flex flex-col gap-3 font-helveticaRoman text-white text-sm md:text-base">
                <li>
                  <Link href="#services" className="cursor-pointer hover:text-white/70 transition-colors">
                    • Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#proyects" className="cursor-pointer hover:text-white/70 transition-colors">
                    • Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="cursor-pointer hover:text-white/70 transition-colors">
                    • Equipo
                  </Link>
                </li>
                <li>
                  <Link href="#footer" className="cursor-pointer hover:text-white/70 transition-colors">
                    • Contáctanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-span-12 lg:col-span-4 lg:mt-8">
            <div className="px-4">
              <h4 className="uppercase font-helveticaMedium text-lg md:text-xl text-white tracking-wider">
                Información
              </h4>
              <hr className="mt-2 mb-6 w-1/5 border-white/40" />
              <div className="flex flex-col gap-4 text-white font-helveticaRoman text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src="/icons/cw-map.svg" alt="Dirección" />
                  <span>Colombia | España.</span>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src="/icons/cw-mail.svg" alt="Email" />
                  <a href="mailto:cabuweb.info@gmail.com" className="hover:underline">cabuweb.info@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src="/icons/cw-facebook.svg" alt="Facebook" />
                  <a href="https://www.facebook.com/cabuweb" target="_blank" rel="noreferrer" className="hover:underline">facebook.com/cabuweb</a>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src="/icons/cw-instagram.svg" alt="Instagram" />
                  <a href="https://www.instagram.com/cabuweb" target="_blank" rel="noreferrer" className="hover:underline">instagram.com/cabuweb</a>
                </div>
                <div className="flex items-center gap-3">
                  <img className="w-6 h-6" src="/icons/cw-phone.svg" alt="Teléfono" />
                  <div className="flex gap-1.5 flex-wrap">
                    <a href="https://api.whatsapp.com/send?phone=+573023537918" target="_blank" rel="noreferrer" className="hover:underline">(+57) 3023537918</a>
                    <span>|</span>
                    <a href="https://api.whatsapp.com/send?phone=+34658074821" target="_blank" rel="noreferrer" className="hover:underline">(+34) 658074821</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 mt-12 z-20 relative">
            <div className="border-15 border-white/11 rounded-[25px] shadow-lg bg-white/10">
              <div className="bg-white rounded-2xl p-6 xs:p-8 xl:p-10 shadow-inner">
                <h3 className="font-lemonBold pt-2 text-center text-2xl md:text-3xl text-zinc-800">
                  Contáctanos
                </h3>
                <hr className="border-t border-gray-300 w-1/5 mt-2 mx-auto" />

                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                  <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                    {/* Name */}
                    <div className="col-span-12 xl:col-span-6 flex flex-col relative group">
                      <label htmlFor="inputName" className="mb-2 font-helveticaMedium text-sm text-zinc-600 transition-colors group-focus-within:text-cabuwebMedium">Nombre completo</label>
                      <input
                        type="text"
                        id="inputName"
                        className={`px-4 py-3 bg-white border border-zinc-200 rounded-xl w-full text-sm text-zinc-800 focus:outline-none focus:border-cabuwebMedium focus:ring-4 focus:ring-cabuwebMedium/10 transition-all ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""
                          }`}
                        placeholder="Ej. Juan Pérez"
                        {...register("name")}
                      />
                      {errors.name && (
                        <small className="text-red-500 font-helveticaRoman text-xs mt-1.5 pl-1">
                          {errors.name.message}
                        </small>
                      )}
                    </div>

                    {/* Email */}
                    <div className="col-span-12 xl:col-span-6 flex flex-col relative group">
                      <label htmlFor="inputEmail" className="mb-2 font-helveticaMedium text-sm text-zinc-600 transition-colors group-focus-within:text-cabuwebMedium">Correo electrónico</label>
                      <input
                        type="email"
                        id="inputEmail"
                        className={`px-4 py-3 bg-white border border-zinc-200 rounded-xl w-full text-sm text-zinc-800 focus:outline-none focus:border-cabuwebMedium focus:ring-4 focus:ring-cabuwebMedium/10 transition-all ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""
                          }`}
                        placeholder="ejemplo@correo.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <small className="text-red-500 font-helveticaRoman text-xs mt-1.5 pl-1">
                          {errors.email.message}
                        </small>
                      )}
                    </div>

                    {/* Service Type */}
                    <div className="col-span-12 flex flex-col relative group">
                      <label htmlFor="selectService" className="mb-2 font-helveticaMedium text-sm text-zinc-600 transition-colors group-focus-within:text-cabuwebMedium">Tipo de servicio</label>
                      <select
                        id="selectService"
                        className="px-4 py-3 bg-white border border-zinc-200 rounded-xl w-full text-sm text-zinc-800 focus:outline-none focus:border-cabuwebMedium focus:ring-4 focus:ring-cabuwebMedium/10 transition-all cursor-pointer"
                        {...register("type")}
                      >
                        <option value="web" className="font-helveticaRoman text-sm">Página Web</option>
                        <option value="app" className="font-helveticaRoman text-sm">Aplicación Móvil</option>
                        <option value="software" className="font-helveticaRoman text-sm">Software a la medida</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="col-span-12 flex flex-col relative group">
                      <label htmlFor="inputMessage" className="mb-2 font-helveticaMedium text-sm text-zinc-600 transition-colors group-focus-within:text-cabuwebMedium">Dudas / Inquietudes / Mensaje</label>
                      <textarea
                        id="inputMessage"
                        rows={4}
                        className={`px-4 py-3 bg-white border border-zinc-200 rounded-xl w-full text-sm text-zinc-800 focus:outline-none focus:border-cabuwebMedium focus:ring-4 focus:ring-cabuwebMedium/10 transition-all resize-none ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/10" : ""
                          }`}
                        placeholder="Escribe tu mensaje detallando lo que necesitas..."
                        {...register("message")}
                      ></textarea>
                      {errors.message && (
                        <small className="text-red-500 font-helveticaRoman text-xs mt-1.5 pl-1">
                          {errors.message.message}
                        </small>
                      )}
                    </div>

                    {/* Checkbox */}
                    <div className="col-span-12 flex flex-col mt-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkPolitics"
                          className="w-4 h-4 rounded text-cabuwebMedium bg-zinc-100 border-zinc-300 focus:ring-cabuwebMedium focus:ring-2 cursor-pointer"
                          {...register("check")}
                        />
                        <label className="font-helveticaMedium text-sm pl-2.5 text-zinc-700 select-none cursor-pointer" htmlFor="checkPolitics">
                          Acepto las&nbsp;
                          <Link href="/politica-de-privacidad" className="font-helveticaMedium text-cabuwebDark hover:underline" target="_blank">
                            Políticas de privacidad
                          </Link>
                        </label>
                      </div>
                      {errors.check && (
                        <small className="text-red-500 font-helveticaRoman text-xs mt-1.5 pl-1">
                          {errors.check.message}
                        </small>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-12 mt-4 flex justify-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-linear-to-r from-cabuwebMedium to-blue-600 hover:shadow-lg hover:shadow-cabuwebMedium/30 hover:scale-[1.02] focus:ring-4 focus:ring-cabuwebMedium/20 text-white rounded-xl py-3.5 font-helveticaBold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Enviando...</span>
                          </>
                        ) : (
                          <span>Enviar formulario</span>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <figure className="mt-[-54px] mx-auto text-center select-none pointer-events-none">
              <img src="/img/footer/contact-bottom.png" alt="Icon Contact Hand" className="mx-auto w-[150px]" />
            </figure>
          </div>
        </div>
      </div>

      <div className="bg-cabuwebFooter absolute bottom-0 w-full z-10" style={{ height: "250px" }}></div>
    </footer>
  );
}
