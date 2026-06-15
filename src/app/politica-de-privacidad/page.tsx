import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export const metadata = {
  title: "Cabuweb - Política de Privacidad",
  description: "Política de privacidad de Cabuweb. Conoce cómo gestionamos y protegemos tus datos personales.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-100 p-8 xs:p-12 xl:p-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 border-b border-zinc-100 pb-8">
          <figure className="max-w-[150px]">
            <img src="/img/logos/logo-blue.svg" alt="Logo Cabuweb Azul" className="w-full" />
          </figure>
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-500 hover:text-cabuwebMedium text-sm font-helveticaMedium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <h1 className="font-lemonBold text-md xs:text-lg md:text-xl text-zinc-800 uppercase tracking-wide mb-8">
          POLÍTICA DE PRIVACIDAD
        </h1>

        <div className="space-y-6 text-zinc-600 font-helveticaRoman text-xs xs:text-sm md:text-base leading-relaxed">
          <p>
            La presente Política de Privacidad establece los términos en que{" "}
            <span className="font-bold text-zinc-850">Cabuweb</span> usa y protege la información que es proporcionada por sus
            usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus
            usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo
            hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo, esta Política de
            Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar
            continuamente esta página para asegurarse de que está de acuerdo con dichos cambios.
          </p>

          <div>
            <h2 className="font-lemonBold text-xs xs:text-sm md:text-md text-zinc-800 mt-8 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Información que es recogida</span>
            </h2>
            <p>
              Nuestro sitio web podrá recoger información personal, por ejemplo:{" "}
              <span className="italic font-helveticaMedium text-zinc-700">Nombre</span>,{" "}
              <span className="italic font-helveticaMedium text-zinc-700">información de contacto</span> como su{" "}
              <span className="italic font-helveticaMedium text-zinc-700">dirección de correo electrónico</span> e{" "}
              <span className="italic font-helveticaMedium text-zinc-700">información demográfica</span>. Asimismo, cuando sea
              necesario, podrá ser requerida información específica para procesar algún pedido o realizar una entrega o
              facturación.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-xs xs:text-sm md:text-md text-zinc-800 mt-8 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Uso de la información recogida</span>
            </h2>
            <p>
              Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para
              mantener un registro de usuarios, de pedidos en caso de que aplique, y mejorar nuestros productos y servicios. Es
              posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales,
              nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún
              beneficio; estos correos electrónicos serán enviados a la dirección que usted preocupe y podrán ser cancelados en
              cualquier momento.
            </p>
            <p className="mt-4">
              <span className="font-bold text-zinc-800">Cabuweb</span> está altamente comprometido para cumplir con el
              compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente
              para asegurarnos de que no exista ningún acceso no autorizado.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-xs xs:text-sm md:text-md text-zinc-800 mt-8 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Cookies</span>
            </h2>
            <p>
              Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su
              ordenador; al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico
              web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con
              ellas las web pueden reconocerte individualmente y, por tanto, brindarte el mejor servicio personalizado de su web.
            </p>
            <p className="mt-4">
              Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta
              información es empleada únicamente para análisis estadístico y después la información se elimina de forma
              permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo, las cookies
              ayudan a proporcionar un mejor servicio de los sitios web, estas no dan acceso a información de su ordenador ni de
              usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de
              cookies; sin embargo, la mayoría de navegadores aceptan cookies automáticamente, pues sirve para tener un mejor
              servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan,
              es posible que no pueda utilizar algunos de nuestros servicios.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-xs xs:text-sm md:text-md text-zinc-800 mt-8 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Enlaces a Terceros</span>
            </h2>
            <p>
              Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted dé clic en
              estos enlaces y abandone nuestra página, ya no tenemos control sobre el sitio al que es redirigido y, por lo tanto,
              no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
              Dichos sitios están sujetos a sus propias políticas de privacidad, por lo cual es recomendable que los consulte
              para confirmar que usted está de acuerdo con estas.
            </p>
          </div>

          <div>
            <h2 className="font-lemonBold text-xs xs:text-sm md:text-md text-zinc-800 mt-8 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cabuwebMedium inline-block"></span>
              <span>Control de su información personal</span>
            </h2>
            <p>
              En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada
              a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o
              desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir
              nuestro boletín o publicidad, usted puede cancelarla en cualquier momento.
            </p>
            <p className="mt-4">
              Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento,
              salvo que sea requerido por un juez con una orden judicial.
            </p>
            <p className="mt-4">
              <span className="font-bold text-zinc-800">Cabuweb</span> se reserva el derecho de cambiar los términos de la
              presente Política de Privacidad en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
