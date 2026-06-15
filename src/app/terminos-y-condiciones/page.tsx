import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Cabuweb - Términos y Condiciones",
  description: "Términos y condiciones de servicio de Cabuweb. Marco legal y condiciones de uso de nuestros servicios de desarrollo de software.",
};

export default function TermsPage() {
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
          Términos y <br />
          <span className="font-lemonBold text-transparent bg-clip-text bg-linear-to-r from-cabuwebMedium to-blue-400">
            Condiciones
          </span>
        </h1>

        <div className="space-y-8 font-helveticaRoman text-sm md:text-base leading-relaxed text-zinc-400">
          <p>
            En cumplimiento de la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>,
            estos Términos y Condiciones establecen el marco legal que regula el uso de los servicios prestados por <span className="font-bold text-white">Cabuweb</span>,
            así como las relaciones comerciales derivadas del desarrollo de software, páginas web y aplicaciones móviles.
          </p>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>1. Objeto del Servicio</span>
            </h2>
            <p>
              Cabuweb es una agencia boutique dedicada al diseño, desarrollo e implementación de soluciones tecnológicas personalizadas.
              Los servicios incluyen, pero no se limitan a: desarrollo de páginas web corporativas, comercio electrónico (e-commerce),
              aplicaciones móviles (iOS/Android) híbridas y nativas, y sistemas de software a la medida.
              El alcance específico, cronograma y entregables de cada proyecto se detallarán en un <strong>Presupuesto o Contrato de Servicios</strong>
              formalizado y aceptado por el Cliente antes de iniciar el desarrollo.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>2. Presupuestos, Precios y Condiciones de Pago</span>
            </h2>
            <p>
              Los presupuestos enviados por Cabuweb tendrán una validez de <strong>30 días naturales</strong> desde su emisión.
              Salvo acuerdo diferente estipulado por contrato, la estructura de pagos habitual para proyectos de desarrollo será:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-400 marker:text-cabuwebMedium">
              <li><strong>50% del total</strong> a la firma del contrato (anticipo para inicio de proyecto).</li>
              <li><strong>50% restante</strong> a la entrega y validación del proyecto en entorno de pruebas, previo a la subida a producción (lanzamiento).</li>
            </ul>
            <p className="mt-4">
              Cabuweb se reserva el derecho de suspender temporal o permanentemente los trabajos de desarrollo y/o el alojamiento si el cliente
              incurre en impagos injustificados.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>3. Propiedad Intelectual y Derechos de Autor</span>
            </h2>
            <p>
              <strong>Código Fuente:</strong> A menos que se negocie una cesión de derechos de autor exclusiva (con coste adicional),
              Cabuweb retiene la autoría del código base subyacente y módulos reutilizables. El Cliente adquiere una licencia perpetua
              para el uso, explotación y modificación del software para los fines previstos de su negocio una vez completado el 100% del pago.
            </p>
            <p className="mt-4">
              El Cliente garantiza que posee los derechos legales sobre cualquier material (textos, imágenes, logotipos, vídeos) entregado a
              Cabuweb para la inclusión en el proyecto, eximiendo a la agencia de cualquier reclamación por infracción de derechos de terceros.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>4. Modificaciones y Mantenimiento</span>
            </h2>
            <p>
              El alcance del proyecto queda cerrado mediante la aprobación del documento de requisitos o contrato inicial.
              Cualquier funcionalidad no contemplada originalmente, o cambios estructurales sustanciales solicitados una vez iniciada
              la fase de desarrollo, serán cotizados de manera adicional.
            </p>
            <p className="mt-4">
              Una vez entregado y desplegado el proyecto en el servidor de producción, se ofrecerá un periodo de <strong>30 días de garantía</strong>
              para la resolución de posibles "bugs" (errores de código) directamente atribuibles al desarrollo, sin coste. Transcurrido este periodo,
              cualquier soporte o actualización requerirá de un plan de mantenimiento contratado por separado.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>5. Limitación de Responsabilidad</span>
            </h2>
            <p>
              Cabuweb pondrá todos los medios tecnológicos, humanos y medidas de seguridad (encriptación, SSL, buenas prácticas) para garantizar
              el mejor funcionamiento del software desarrollado. No obstante, en ningún caso Cabuweb será responsable de pérdidas de datos,
              interrupciones de negocio, ataques informáticos (hackeos), caídas de servidores de terceros (AWS, Vercel, Hostinger), o daños
              consecuentes derivados del uso de la aplicación por parte del cliente o de los usuarios finales.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>6. Confidencialidad (NDA)</span>
            </h2>
            <p>
              Toda la información intercambiada entre el Cliente y Cabuweb (modelos de negocio, estrategias, secretos comerciales)
              tendrá carácter estrictamente confidencial. Cabuweb se compromete a no revelar esta información a terceros bajo ninguna circunstancia.
              No obstante, Cabuweb se reserva el derecho de mostrar el producto final (interfaz gráfica) en su portafolio de "Casos de Éxito",
              a menos que el cliente exprese explícitamente lo contrario por escrito.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-sm md:text-md text-white mt-10 mb-4 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block shadow-[0_0_10px_rgba(0,116,255,0.8)]"></span>
              <span>7. Ley Aplicable y Jurisdicción</span>
            </h2>
            <p>
              Estos Términos y Condiciones, así como cualquier relación entre Cabuweb y el Cliente, se regirán e interpretarán de acuerdo
              con la legislación española y europea. Para la resolución de cualquier controversia que pudiera surgir, ambas partes se someten
              voluntariamente a los Juzgados y Tribunales de España (Valencia), renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-zinc-500">
            <p>
              <span className="font-bold text-white">Cabuweb</span> se reserva el derecho de modificar el presente documento
              para adaptarlo a novedades legales o cambios en su modelo de negocio. <em>Última actualización: Junio de 2026.</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
