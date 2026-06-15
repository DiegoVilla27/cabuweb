import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Cabuweb - Política de Privacidad",
  description: "Política de privacidad de Cabuweb. Conoce cómo gestionamos y protegemos tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-400 py-16 px-6 lg:px-24 relative overflow-hidden">
      {/* Subtle Dotted Pattern */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

      {/* Background Ambience Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-cabuwebMedium/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-xl rounded-4xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/10 p-8 xs:p-12 xl:p-16 relative z-10 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-white/10 pb-8">
          <figure className="max-w-[150px]">
            <img src="/img/logos/logo-white.svg" alt="Logo Cabuweb White" className="w-full" />
          </figure>
          <Link
            href="/"
            className="group flex items-center gap-2 text-zinc-500 hover:text-white text-sm font-helveticaMedium transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <h1 className="font-lemonLight text-2xl xs:text-3xl md:text-4xl text-zinc-100 uppercase tracking-wide leading-tight mb-8">
          Política de <br />
          <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400">
            Privacidad
          </span>
        </h1>

        <div className="space-y-8 font-helveticaRoman text-sm md:text-base leading-relaxed text-zinc-400">
          <p>
            En cumplimiento del <strong>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD)</strong>,
            y la <strong>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD)</strong>,
            <span className="font-bold text-white">Cabuweb</span> le informa sobre su Política de Privacidad respecto al tratamiento
            y protección de los datos de carácter personal de los usuarios que puedan ser recabados por la navegación o contratación de
            servicios a través del sitio web.
          </p>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>1. Responsable del Tratamiento</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-cabuwebMedium">
              <li><strong>Titular / Nombre comercial:</strong> Cabuweb</li>
              <li><strong>Correo electrónico:</strong> cabuweb.info@gmail.com</li>
              <li><strong>Actividad:</strong> Diseño y desarrollo de software y aplicaciones web/móviles.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>2. Finalidad del tratamiento de los datos personales</span>
            </h2>
            <p>
              Cabuweb tratará la información que nos proporcione con las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-400 marker:text-cabuwebMedium">
              <li>Responder a las consultas, solicitudes o peticiones realizadas a través del formulario de contacto.</li>
              <li>Elaborar presupuestos personalizados sobre desarrollo de software, web o aplicaciones móviles.</li>
              <li>Gestionar la relación comercial o profesional en caso de contratación de nuestros servicios.</li>
              <li>Enviar comunicaciones comerciales o boletines de noticias, únicamente si el usuario ha dado su consentimiento expreso.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>3. Legitimación para el tratamiento de sus datos</span>
            </h2>
            <p>
              La base legal para el tratamiento de sus datos es el <strong>consentimiento expreso</strong> del interesado.
              Al marcar la casilla de aceptación de la Política de Privacidad en nuestros formularios de contacto, usted
              consiente libre, específica, informada e inequívocamente el tratamiento de sus datos para las finalidades indicadas.
            </p>
            <p className="mt-4">
              En caso de contratación de servicios, la base de legitimación será la ejecución de un contrato o la aplicación de medidas precontractuales.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>4. Conservación de los datos</span>
            </h2>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo estrictamente necesario para cumplir
              con la finalidad para la que fueron recabados. En caso de solicitar un presupuesto o realizar una consulta,
              se conservarán hasta la resolución de la misma. En caso de relación contractual, se conservarán durante el
              tiempo que exija la legislación aplicable (fiscal, mercantil, etc.). En cualquier momento podrá solicitar
              su supresión.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>5. Comunicación de datos a terceros</span>
            </h2>
            <p>
              Cabuweb no venderá, cederá ni distribuirá sus datos personales a terceros sin su consentimiento, salvo
              obligación legal. No obstante, para prestar servicios estrictamente necesarios para el desarrollo de nuestra
              actividad (como el envío de correos electrónicos a través de EmailJS o el alojamiento web), compartimos datos
              con proveedores de servicios bajo sus correspondientes condiciones de privacidad y cumpliendo las normativas vigentes.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>6. Derechos de los usuarios (Derechos RGPD)</span>
            </h2>
            <p>
              Como usuario, tiene derecho a obtener confirmación sobre si en Cabuweb estamos tratando sus datos personales.
              Por tanto, tiene derecho a:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-400 marker:text-cabuwebMedium">
              <li><strong>Acceder</strong> a sus datos personales.</li>
              <li>Solicitar la <strong>rectificación</strong> de datos inexactos.</li>
              <li>Solicitar su <strong>supresión</strong> cuando, entre otros motivos, ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Solicitar la <strong>limitación</strong> de su tratamiento, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.</li>
              <li><strong>Oponerse</strong> al tratamiento de sus datos, en cuyo caso Cabuweb dejará de tratarlos, salvo por motivos legítimos imperiosos.</li>
              <li>Solicitar la <strong>portabilidad</strong> de sus datos.</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, puede enviar un correo electrónico a <a href="mailto:cabuweb.info@gmail.com" className="text-cabuwebMedium hover:text-white transition-colors">cabuweb.info@gmail.com</a>.
            </p>
            <p className="mt-4">
              Asimismo, si considera que el tratamiento de sus datos personales vulnera la normativa, tiene derecho a
              presentar una reclamación ante la autoridad de control pertinente, que en España es la <strong>Agencia Española de Protección de Datos (AEPD)</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>7. Uso de Cookies</span>
            </h2>
            <p>
              El sitio web de Cabuweb puede utilizar cookies (pequeños archivos de información que el servidor envía al
              ordenador del usuario) para llevar a cabo determinadas funciones que son consideradas imprescindibles para el
              correcto funcionamiento y visualización del sitio, así como para analíticas de tráfico. El usuario tiene la
              posibilidad de configurar su navegador para ser avisado de la recepción de cookies y para impedir su instalación en su equipo.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-zinc-500">
            <p>
              <span className="font-bold text-white">Cabuweb</span> se reserva el derecho de modificar la presente Política
              para adaptarla a novedades legislativas o jurisprudenciales. Estas modificaciones serán válidas desde el momento
              de su publicación en esta web. <em>Última actualización: Junio de 2026.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
