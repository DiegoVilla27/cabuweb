"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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
    const toastId = toast.loading("Enviando mensaje...");

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
        toast.success("¡Mensaje enviado satisfactoriamente!", {
          id: toastId,
        });
        reset();
        router.push("/gracias");
      }
    } catch {
      toast.error("No se pudo enviar el mensaje.", {
        id: toastId,
        description: "Inténtalo de nuevo más tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-zinc-950 relative pt-24 mt-32 border-t border-white/5 overflow-hidden" id="footer">
      {/* Background glow for footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-cabuwebMedium/10 blur-[150px] rounded-full pointer-events-none animate-breathe" style={{ animationDelay: "3s" }} />

      <div className="px-6 w-full relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-16 pb-24">

          {/* Logo and About */}
          <div className="col-span-12 lg:col-span-4 lg:mt-8">
            <div className="px-4">
              <Link href="#home" className="cursor-pointer">
                <figure className="max-w-[180px]">
                  <img src="/img/logos/logo-white.svg" alt="Logo Cabuweb White" className="w-full" />
                </figure>
              </Link>
              <p className="font-helveticaRoman text-zinc-400 mt-8 text-sm md:text-base leading-relaxed">
                Somos una <strong className="text-zinc-200">agencia boutique de software</strong> dedicada al diseño de élite, desarrollo e implementación de ecosistemas digitales que transforman industrias.
                <br />
                <br />
                Nacimos con la misión de proveer <strong className="text-zinc-200">soluciones tecnológicas de alta gama</strong> para empresas que buscan liderar su mercado.
              </p>
            </div>
          </div>

          {/* Contact Information & Quick Access */}
          <div className="col-span-12 lg:col-span-3 lg:mt-8">
            <div className="px-4">
              <h4 className="uppercase font-helveticaBold text-sm md:text-base text-zinc-200 tracking-widest">
                Conectar
              </h4>
              <hr className="mt-4 mb-8 w-1/5 border-zinc-800" />
              <div className="flex flex-col gap-5 text-zinc-400 font-helveticaRoman text-sm">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cabuweb.info@gmail.com&su=Consulta%20sobre%20proyecto" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><img className="w-4 h-4 filter brightness-200" src="/icons/cw-mail.svg" alt="Email" /></div>
                  cabuweb.info@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><img className="w-4 h-4 filter brightness-200" src="/icons/cw-phone.svg" alt="Phone" /></div>
                  <div className="flex flex-col">
                    <a href="https://api.whatsapp.com/send?phone=573114780189&text=%C2%A1Hola%20equipo%20de%20Cabuweb!%20%F0%9F%91%8B%20Estoy%20interesado%20en%20cotizar%20un%20proyecto%20tecnol%C3%B3gico%20con%20ustedes.%20%F0%9F%9A%80" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block py-0.5">(+57) 311 478 0189</a>
                    <a href="https://api.whatsapp.com/send?phone=34658074821&text=%C2%A1Hola%20equipo%20de%20Cabuweb!%20%F0%9F%91%8B%20Estoy%20interesado%20en%20cotizar%20un%20proyecto%20tecnol%C3%B3gico%20con%20ustedes.%20%F0%9F%9A%80" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block py-0.5">(+34) 658 074 821</a>
                  </div>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><img className="w-4 h-4 filter brightness-200" src="/icons/cw-map.svg" alt="Map" /></div>
                  Colombia | España
                </div>
              </div>

              <div className="flex gap-4 mt-8 pl-1">
                <a href="https://www.facebook.com/cabuweb" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cabuwebMedium transition-colors">
                  <img className="w-6 h-6 filter brightness-100 opacity-60 hover:opacity-100 transition-opacity" src="/icons/cw-facebook.svg" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/cabuweb" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-cabuwebMedium transition-colors">
                  <img className="w-6 h-6 filter brightness-100 opacity-60 hover:opacity-100 transition-opacity" src="/icons/cw-instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-5 mt-12 lg:mt-0 z-20 relative">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <h3 className="font-lemonLight text-2xl md:text-3xl text-zinc-100 tracking-wide">
                Escalemos tu <br /><span className="font-lemonBold text-white">Empresa</span>
              </h3>
              <p className="font-helveticaRoman text-sm md:text-base text-zinc-400 mt-4 leading-relaxed mb-8">
                Estás a un mensaje de distancia de transformar tu negocio. Cuéntanos sobre tu visión y nuestro equipo de arquitectos digitales se pondrá en contacto hoy mismo.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <input
                      type="text"
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all ${errors.name ? "border-red-500/50 focus:border-red-500" : ""}`}
                      placeholder="Nombre completo"
                      {...register("name")}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <input
                      type="email"
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all ${errors.email ? "border-red-500/50 focus:border-red-500" : ""}`}
                      placeholder="Correo electrónico"
                      {...register("email")}
                    />
                  </div>
                </div>

                {/* Error messages for Row 1 */}
                {(errors.name || errors.email) && (
                  <div className="flex justify-between -mt-3">
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.name?.message}</small>
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.email?.message}</small>
                  </div>
                )}

                {/* Service Type */}
                <div className="flex flex-col relative group">
                  <select
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-400 focus:outline-none focus:border-cabuwebMedium focus:text-zinc-200 focus:bg-white/5 transition-all cursor-pointer appearance-none"
                    {...register("type")}
                  >
                    <option value="web" className="bg-zinc-900 text-zinc-200">Página Web</option>
                    <option value="app" className="bg-zinc-900 text-zinc-200">Aplicación Móvil</option>
                    <option value="software" className="bg-zinc-900 text-zinc-200">Software a la medida</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col relative group">
                  <textarea
                    rows={4}
                    className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all resize-none ${errors.message ? "border-red-500/50 focus:border-red-500" : ""}`}
                    placeholder="Cuéntanos sobre tu visión..."
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <small className="text-red-400 font-helveticaRoman text-xs mt-1.5 pl-1">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                {/* Checkbox */}
                <div className="flex flex-col mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="checkPolitics"
                      className="w-4 h-4 rounded text-cabuwebMedium bg-zinc-900 border-white/20 focus:ring-cabuwebMedium/50 focus:ring-2 cursor-pointer accent-cabuwebMedium"
                      {...register("check")}
                    />
                    <label className="font-helveticaRoman text-xs pl-3 text-zinc-400 select-none cursor-pointer" htmlFor="checkPolitics">
                      Acepto las&nbsp;
                      <Link href="/politica-de-privacidad" className="font-helveticaMedium text-zinc-300 hover:text-white transition-colors" target="_blank">
                        Políticas de privacidad
                      </Link>
                      &nbsp;y&nbsp;
                      <Link href="/terminos-y-condiciones" className="font-helveticaMedium text-zinc-300 hover:text-white transition-colors" target="_blank">
                        Términos y condiciones
                      </Link>
                    </label>
                  </div>
                  {errors.check && (
                    <small className="text-red-400 font-helveticaRoman text-xs mt-1.5 pl-1">
                      {errors.check.message}
                    </small>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-zinc-950 hover:bg-zinc-200 focus:ring-4 focus:ring-white/20 rounded-xl py-4 font-helveticaBold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Procesando...</span>
                      </>
                    ) : (
                      <span>Enviar Solicitud</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t border-white/5 bg-zinc-950 py-6">
        <p className="text-center font-helveticaRoman text-xs text-zinc-600">
          © {new Date().getFullYear()} Cabuweb. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
