"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { submitContactForm } from "@/app/actions/contact";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useStore } from "@/store/useStore";
import { translations } from "@/constants/translations";

// Form validation schema
const getContactSchema = (lang: "es" | "en") => {
  const t = translations[lang].footer.form.validation;
  return z.object({
    name: z
      .string()
      .min(3, t.name)
      .max(40, lang === "es" ? "El nombre es demasiado largo." : "Name is too long.")
      .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/, lang === "es" ? "El nombre solo debe contener letras." : "Name must only contain letters."),
    email: z
      .string()
      .min(1, t.email)
      .email(t.email)
      .max(40, lang === "es" ? "El correo electrónico es demasiado largo." : "Email is too long."),
    company: z
      .string()
      .max(50, lang === "es" ? "El nombre de la empresa es demasiado largo." : "Company name is too long.")
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .min(6, t.phone),
    budget: z
      .string()
      .min(1, t.budget),
    business_type: z
      .string()
      .min(1, t.businessType),
    type: z.enum(["web", "app", "software"]),
    message: z
      .string()
      .min(10, t.message)
      .max(200, lang === "es" ? "El mensaje es demasiado largo (máximo 200 caracteres)." : "Message is too long (maximum 200 characters)."),
    check: z.boolean().refine((val) => val === true, {
      message: lang === "es"
        ? "Debes aceptar nuestras políticas de privacidad para continuar."
        : "You must accept our privacy policies to continue.",
    }),
  });
};

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

function FooterContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const lang = useStore((state) => state.lang);
  const t = translations[lang].footer;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(getContactSchema(lang)),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      budget: "",
      business_type: "",
      type: "web",
      message: "",
      check: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!executeRecaptcha) {
      toast.error(
        lang === "es" ? "Sistema de seguridad iniciando." : "Security system initializing.",
        {
          description: lang === "es"
            ? "Por favor, espera un segundo e intenta de nuevo."
            : "Please wait a second and try again."
        }
      );
      return;
    }

    setLoading(true);
    const toastId = toast.loading(lang === "es" ? "Enviando mensaje..." : "Sending message...");

    try {
      const typeLabel = data.type === "web"
        ? (lang === "es" ? "Página Web" : "Website")
        : data.type === "app"
          ? (lang === "es" ? "Aplicación Móvil" : "Mobile App")
          : (lang === "es" ? "Software a la medida" : "Custom Software");

      const budgetLabelMap: Record<string, string> = {
        low: t.form.budgets.low,
        medium: t.form.budgets.medium,
        high: t.form.budgets.high,
        enterprise: t.form.budgets.enterprise,
      };

      const businessTypeLabelMap: Record<string, string> = {
        ecommerce: t.form.businessTypes.ecommerce,
        saas: t.form.businessTypes.saas,
        corporate: t.form.businessTypes.corporate,
        local: t.form.businessTypes.local,
        other: t.form.businessTypes.other,
      };

      // 1. Obtener Token de reCAPTCHA v3
      const token = await executeRecaptcha("contact");

      // 2. Validar Token, Enviar EmailJS y Guardar en Supabase a través del Servidor
      await submitContactForm(
        {
          name: data.name,
          email: data.email,
          company: data.company || "",
          phone: data.phone,
          budget: budgetLabelMap[data.budget] || data.budget,
          business_type: businessTypeLabelMap[data.business_type] || data.business_type,
          type: typeLabel,
          message: data.message,
        },
        token
      );

      toast.success(t.form.successTitle, {
        id: toastId,
        description: t.form.successText,
      });
      reset();
      router.push("/gracias");
    } catch (error: any) {
      toast.error(t.form.errorTitle, {
        id: toastId,
        description: error.message || t.form.errorText,
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
          <div className="col-span-12 lg:col-span-3 lg:mt-8">
            <div className="px-4">
              <Link href="#home" className="cursor-pointer">
                <figure className="max-w-[180px]">
                  <img src="/img/logos/logo-white.svg" alt="Logo Cabuweb White" className="w-full" />
                </figure>
              </Link>
              <p className="font-helveticaRoman text-zinc-400 mt-8 text-sm md:text-base leading-relaxed">
                {lang === "es" ? (
                  <>
                    Somos una <strong className="text-zinc-200">agencia boutique de software</strong> dedicada al diseño de élite, desarrollo e implementación de ecosistemas digitales que transforman industrias.
                    <br />
                    <br />
                    Nacimos con la misión de proveer <strong className="text-zinc-200">soluciones tecnológicas de alta gama</strong> para empresas que buscan liderar su mercado.
                  </>
                ) : (
                  <>
                    We are a <strong className="text-zinc-200">boutique software agency</strong> dedicated to elite design, development, and deployment of digital ecosystems that transform industries.
                    <br />
                    <br />
                    We were born with the mission of providing <strong className="text-zinc-200">high-end tech solutions</strong> for businesses looking to lead their market.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Contact Information & Quick Access */}
          <div className="col-span-12 lg:col-span-3 lg:mt-8">
            <div className="px-4">
              <h4 className="uppercase font-helveticaBold text-sm md:text-base text-zinc-200 tracking-widest">
                {lang === "es" ? "Conectar" : "Connect"}
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
          <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 z-20 relative">
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <h3 className="font-lemonLight text-2xl md:text-3xl text-zinc-100 tracking-wide">
                {lang === "es" ? (
                  <>
                    Escalemos tu <br /><span className="font-lemonBold text-white">Empresa</span>
                  </>
                ) : (
                  <>
                    Let's Scale Your <br /><span className="font-lemonBold text-white">Business</span>
                  </>
                )}
              </h3>
              <p className="font-helveticaRoman text-sm md:text-base text-zinc-400 mt-4 leading-relaxed mb-8">
                {t.subtitle}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <input
                      type="text"
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all ${errors.name ? "border-red-500/50 focus:border-red-500" : ""}`}
                      placeholder={t.form.name}
                      {...register("name")}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <input
                      type="email"
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all ${errors.email ? "border-red-500/50 focus:border-red-500" : ""}`}
                      placeholder={t.form.email}
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

                {/* Company & Phone Row */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <input
                      type="text"
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all ${errors.company ? "border-red-500/50 focus:border-red-500" : ""}`}
                      placeholder={t.form.company}
                      {...register("company")}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group contact-phone-input">
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          defaultCountry="es"
                          value={field.value}
                          onChange={field.onChange}
                          className={`w-full bg-zinc-950/50 border rounded-xl flex items-center transition-all ${errors.phone
                            ? "border-red-500/50 focus-within:border-red-500"
                            : "border-white/10 focus-within:border-cabuwebMedium focus-within:bg-white/5"
                            }`}
                          style={{
                            height: "50px",
                            '--react-international-phone-height': '48px',
                            '--react-international-phone-background-color': 'transparent',
                            '--react-international-phone-border-color': 'transparent',
                            '--react-international-phone-text-color': '#e4e4e7',
                            '--react-international-phone-selected-dial-code-text-color': '#e4e4e7',
                            '--react-international-phone-country-selector-background-color-hover': 'rgba(255, 255, 255, 0.05)',
                            '--react-international-phone-dropdown-item-background-color': '#18181b',
                            '--react-international-phone-selected-dropdown-item-background-color': 'rgba(255, 255, 255, 0.1)',
                            '--react-international-phone-focused-dropdown-item-background-color': 'rgba(255, 255, 255, 0.05)',
                          } as React.CSSProperties}
                          inputClassName="w-full bg-transparent border-0 pl-5 pr-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-0"
                          countrySelectorStyleProps={{
                            buttonClassName: "bg-transparent border-0 py-3.5 hover:bg-white/5 transition-all h-full rounded-l-xl flex items-center justify-center",
                            buttonStyle: {
                              paddingLeft: "16px",
                              paddingRight: "8px",
                            },
                            flagClassName: "ml-1",
                            dropdownStyleProps: {
                              className: "border border-white/10 rounded-xl text-zinc-200 text-sm max-h-60 overflow-y-auto z-50",
                              style: {
                                backgroundColor: "#18181b",
                                color: "#e4e4e7",
                              }
                            }
                          }}
                        />
                      )}
                    />
                  </div>
                </div>

                {/* Error messages for Row 2 */}
                {(errors.company || errors.phone) && (
                  <div className="flex justify-between -mt-3">
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.company?.message}</small>
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.phone?.message}</small>
                  </div>
                )}

                {/* Business Type & Budget Row */}
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <select
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-400 focus:outline-none focus:border-cabuwebMedium focus:text-zinc-200 focus:bg-white/5 transition-all cursor-pointer appearance-none ${errors.business_type ? "border-red-500/50 focus:border-red-500" : ""}`}
                      {...register("business_type")}
                    >
                      <option value="" className="bg-zinc-900 text-zinc-500">{t.form.businessTypePlaceholder}</option>
                      <option value="ecommerce" className="bg-zinc-900 text-zinc-200">{t.form.businessTypes.ecommerce}</option>
                      <option value="saas" className="bg-zinc-900 text-zinc-200">{t.form.businessTypes.saas}</option>
                      <option value="corporate" className="bg-zinc-900 text-zinc-200">{t.form.businessTypes.corporate}</option>
                      <option value="local" className="bg-zinc-900 text-zinc-200">{t.form.businessTypes.local}</option>
                      <option value="other" className="bg-zinc-900 text-zinc-200">{t.form.businessTypes.other}</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-1 flex flex-col relative group">
                    <select
                      className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-400 focus:outline-none focus:border-cabuwebMedium focus:text-zinc-200 focus:bg-white/5 transition-all cursor-pointer appearance-none ${errors.budget ? "border-red-500/50 focus:border-red-500" : ""}`}
                      {...register("budget")}
                    >
                      <option value="" className="bg-zinc-900 text-zinc-500">{t.form.budgetPlaceholder}</option>
                      <option value="low" className="bg-zinc-900 text-zinc-200">{t.form.budgets.low}</option>
                      <option value="medium" className="bg-zinc-900 text-zinc-200">{t.form.budgets.medium}</option>
                      <option value="high" className="bg-zinc-900 text-zinc-200">{t.form.budgets.high}</option>
                      <option value="enterprise" className="bg-zinc-900 text-zinc-200">{t.form.budgets.enterprise}</option>
                    </select>
                  </div>
                </div>

                {/* Error messages for Row 3 */}
                {(errors.business_type || errors.budget) && (
                  <div className="flex justify-between -mt-3">
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.business_type?.message}</small>
                    <small className="text-red-400 font-helveticaRoman text-xs pl-1">{errors.budget?.message}</small>
                  </div>
                )}

                {/* Service Type */}
                <div className="flex flex-col relative group">
                  <select
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-400 focus:outline-none focus:border-cabuwebMedium focus:text-zinc-200 focus:bg-white/5 transition-all cursor-pointer appearance-none"
                    {...register("type")}
                  >
                    <option value="web" className="bg-zinc-900 text-zinc-200">{t.form.servicesList.web}</option>
                    <option value="app" className="bg-zinc-900 text-zinc-200">{t.form.servicesList.app}</option>
                    <option value="software" className="bg-zinc-900 text-zinc-200">{t.form.servicesList.software}</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col relative group">
                  <textarea
                    rows={4}
                    className={`w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-cabuwebMedium focus:bg-white/5 transition-all resize-none ${errors.message ? "border-red-500/50 focus:border-red-500" : ""}`}
                    placeholder={t.form.messagePlaceholder}
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
                      {lang === "es" ? "Acepto las" : "I accept the"}&nbsp;
                      <Link href="/politica-de-privacidad" className="font-helveticaMedium text-zinc-300 hover:text-white transition-colors" target="_blank">
                        {lang === "es" ? "Políticas de privacidad" : "Privacy policies"}
                      </Link>
                      &nbsp;{lang === "es" ? "y" : "and"}&nbsp;
                      <Link href="/terminos-y-condiciones" className="font-helveticaMedium text-zinc-300 hover:text-white transition-colors" target="_blank">
                        {lang === "es" ? "Términos y condiciones" : "Terms and conditions"}
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
                        <span>{t.form.submitting}</span>
                      </>
                    ) : (
                      <span>{t.form.submit}</span>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-zinc-600 mt-2 text-center font-helveticaRoman">
                  {lang === "es" ? "Este sitio está protegido por reCAPTCHA y aplican la " : "This site is protected by reCAPTCHA and Google's "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
                  </a>{" "}
                  {lang === "es" ? "y los " : "and "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    {lang === "es" ? "Términos de Servicio" : "Terms of Service"}
                  </a>{" "}
                  {lang === "es" ? "de Google." : "apply."}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full border-t border-white/5 bg-zinc-950 py-6">
        <p className="text-center font-helveticaRoman text-xs text-zinc-600">
          © {new Date().getFullYear()} Cabuweb. {t.rights}
        </p>
      </div>
    </footer>
  );
}

import RecaptchaProvider from "@/components/providers/RecaptchaProvider";

export default function Footer() {
  return (
    <RecaptchaProvider>
      <FooterContent />
    </RecaptchaProvider>
  );
}
