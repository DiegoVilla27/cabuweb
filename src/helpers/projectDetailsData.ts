export interface ProjectDetail {
  slug: string;
  tagline: string;
  marketingPitch: string;
  features: string[];
  specs: {
    performance: string;
    seo: string;
    loadingTime: string;
    mobileScore: string;
  };
  technologies: string[];
  businessGoal: string;
}

export const projectDetailsMap: Record<string, ProjectDetail> = {
  "joyeria-amaia": {
    slug: "joyeria-amaia",
    tagline: "Elegancia que Perdura",
    marketingPitch: "Una sofisticada boutique de comercio electrónico diseñada para reflejar lujo, exclusividad y confianza. Con una interfaz limpia y fluida, este sitio web maximiza el valor percibido del producto e impulsa las conversiones gracias a una navegación intuitiva y pasarelas de pago integradas.",
    features: [
      "Catálogo digital interactivo de alta resolución",
      "Filtros avanzados por colección y metales",
      "Pasarela de pago 100% segura integrada",
      "Diseño responsivo optimizado para compras móviles",
      "Panel de administración sencillo para control de stock"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "95%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    businessGoal: "Incrementar el ticket promedio y proyectar la exclusividad de piezas de alta joyería mediante una navegación premium."
  },
  "burger-store": {
    slug: "burger-store",
    tagline: "El Sabor del Éxito en Pantalla",
    marketingPitch: "Una plataforma web de comida rápida y delivery diseñada para abrir el apetito. Con un sistema de pedidos interactivo y menús visuales extremadamente atractivos, este sitio web acelera las ventas locales y fideliza a los clientes de forma inmediata.",
    features: [
      "Menú digital autogestionable con fotos dinámicas",
      "Carrito de compras en tiempo real sin recargar página",
      "Integración directa para recibir pedidos vía WhatsApp",
      "Sección de promociones y combos de tiempo limitado",
      "Geolocalización para entregas optimizadas"
    ],
    specs: {
      performance: "95%",
      seo: "98%",
      loadingTime: "1.1s",
      mobileScore: "93%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Zustand"],
    businessGoal: "Automatizar el flujo de pedidos online de restaurantes locales reduciendo la dependencia de plataformas de terceros."
  },
  "aurum-cafe": {
    slug: "aurum-cafe",
    tagline: "Despierta tus Sentidos",
    marketingPitch: "Una experiencia digital inmersiva para cafeterías de especialidad y tostadores locales. Transmite la pasión, el origen y la calidad de cada grano mediante un diseño minimalista, tipografía elegante y animaciones sutiles que elevan el valor de tu marca.",
    features: [
      "Diseño editorial minimalista de alta gama",
      "Historias de origen de granos de café interactivas",
      "Módulo de suscripción mensual de café integrado",
      "Carta de bebidas interactiva y actualizada en vivo",
      "Sección para reservar catas y talleres privados"
    ],
    specs: {
      performance: "99%",
      seo: "100%",
      loadingTime: "0.7s",
      mobileScore: "98%"
    },
    technologies: ["Next.js 15", "Tailwind CSS 4", "Framer Motion"],
    businessGoal: "Construir una comunidad alrededor del café de especialidad y vender suscripciones directas al consumidor."
  },
  "gym-store-elite": {
    slug: "gym-store-elite",
    tagline: "Redefine tu Límite",
    marketingPitch: "Una web audaz y enérgica para centros fitness y marcas de ropa deportiva premium. Su diseño moderno de alto contraste transmite fuerza, disciplina y superación, ideal para captar leads y vender membresías o productos.",
    features: [
      "Calculadora de membresías y accesos al gimnasio",
      "Tienda integrada de suplementación y ropa deportiva",
      "Calendario interactivo de clases grupales y reservas",
      "Testimonios en formato de casos de éxito con progreso",
      "Estética cyberpunk oscura de alto impacto visual"
    ],
    specs: {
      performance: "97%",
      seo: "96%",
      loadingTime: "0.9s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    businessGoal: "Captar prospectos de membresías y automatizar el registro de alumnos recurrentes."
  },
  "herbs-botanica": {
    slug: "herbs-botanica",
    tagline: "Arquitectura Botánica",
    marketingPitch: "Una web sofisticada inspirada en la naturaleza, perfecta para florerías, paisajistas y tiendas de plantas exclusivas. Combina colores terrosos, tipografía orgánica y transiciones elegantes para ofrecer una experiencia pacífica y de alta gama.",
    features: [
      "Guías interactivas de cuidado personal para plantas",
      "Galería editorial de diseño de interiores y paisajismo",
      "Proceso de compra simplificado (Fast Checkout)",
      "Recomendador inteligente de plantas según el espacio",
      "Sección de blog botánico integrado para SEO de contenido"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "96%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    businessGoal: "Atraer a un público urbano interesado en el diseño de interiores y la botánica de lujo."
  },
  "healthcare-medicina": {
    slug: "healthcare-medicina",
    tagline: "Medicina de Vanguardia",
    marketingPitch: "Una plataforma web profesional e informativa para clínicas y especialistas médicos. Transmite confianza, pulcritud y seguridad. Optimiza la atención al cliente al facilitar la reserva de citas y mostrar los servicios de manera transparente.",
    features: [
      "Sistema de agendamiento y reserva de citas médicas",
      "Directorio interactivo de especialistas por especialidad",
      "Fichas de tratamientos de salud y medicina estética",
      "Preguntas frecuentes con colapsables de respuesta rápida",
      "Estructura accesible adaptada a normativas de salud"
    ],
    specs: {
      performance: "96%",
      seo: "100%",
      loadingTime: "1.0s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    businessGoal: "Reducir las llamadas de atención al cliente facilitando la gestión de consultas online y la descarga de información médica."
  },
  "lawyers-partners": {
    slug: "lawyers-partners",
    tagline: "Defensa y Estrategia Corporativa",
    marketingPitch: "Una plataforma corporativa premium para bufetes de abogados y consultoras financieras. Su diseño sobrio y distinguido refuerza el prestigio, la ética y la fiabilidad técnica de la firma, atrayendo a clientes de alto perfil y corporaciones.",
    features: [
      "Estructura legal detallada por áreas de práctica",
      "Biografía interactiva y experiencia de socios directores",
      "Reserva de consultoría legal virtual y presencial",
      "Blog de análisis de jurisprudencia y derecho corporativo",
      "Formulario seguro de captación de casos confidenciales"
    ],
    specs: {
      performance: "97%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "95%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Proyectar liderazgo en el sector legal e iniciar el funnel de atracción de clientes de gran volumen empresarial."
  },
  "clinica-veterinaria": {
    slug: "clinica-veterinaria",
    tagline: "Cuidado Veterinario Compasivo",
    marketingPitch: "Una web cálida, profesional e interactiva para clínicas veterinarias y hospitales de animales. Combina información detallada de servicios con un diseño amigable que genera tranquilidad a los dueños de mascotas y facilita el contacto directo.",
    features: [
      "Agendamiento y recordatorio automatizado de vacunas",
      "Fichas de servicios especializados de cirugía y laboratorio",
      "Blog educativo sobre salud y alimentación animal",
      "Sección de urgencias médicas 24/7 con botón de marcado rápido",
      "Galería fotográfica de las instalaciones de vanguardia"
    ],
    specs: {
      performance: "95%",
      seo: "98%",
      loadingTime: "1.2s",
      mobileScore: "92%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Fidelizar a las familias locales y consolidarse como la opción veterinaria número uno de la zona."
  },
  "vortex-streetwear": {
    slug: "vortex-streetwear",
    tagline: "Confort Reinventado",
    marketingPitch: "Una tienda online de zapatillas urbana e hiper-moderna enfocada en la cultura streetwear. Con una estética rebelde, tipografías audaces y efectos de desplazamiento futuristas, esta web está diseñada para captar la atención de la generación Z y entusiastas de la moda.",
    features: [
      "Buscador y filtros avanzados de siluetas de calzado",
      "Lanzamientos exclusivos ('Drops') con cuenta regresiva",
      "Diseño inspirado en el lookbook de moda urbana",
      "Integración de pasarela de pago y pasarela de cuotas",
      "Sección especial de fidelización para clientes VIP"
    ],
    specs: {
      performance: "98%",
      seo: "99%",
      loadingTime: "0.9s",
      mobileScore: "96%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Convertir visitas en ventas de productos de moda y calzado rápido con un look súper moderno."
  },
  "derby-zapateria": {
    slug: "derby-zapateria",
    tagline: "Elegancia Definitiva",
    marketingPitch: "Una web de calzado clásico artesanal de lujo. Sus tonos cuero, tipografía serif clásica y amplias galerías de imágenes transmiten el cuidado, la herencia y el detalle del trabajo artesano hecho a mano.",
    features: [
      "Sistema de reserva para cita privada en showroom físico",
      "Explicación detallada del proceso de manufactura (Goodyear Welted)",
      "Galerías a pantalla completa de cuero y detalles de costura",
      "Catálogo estructurado con historia de cada modelo de zapato",
      "Asesor de tallas interactivo para compras en línea"
    ],
    specs: {
      performance: "99%",
      seo: "100%",
      loadingTime: "0.7s",
      mobileScore: "97%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Posicionar a la marca en el nicho de lujo y calzado a medida, justificando el valor de la artesanía premium."
  },
  "boutique-alta-costura": {
    slug: "boutique-alta-costura",
    tagline: "Elegancia Definida",
    marketingPitch: "Una web minimalista con estética de alta costura que celebra el 'lujo silencioso'. Espacios amplios, tipografía de revista de moda y una visualización limpia que permite que la costura y los materiales sean los verdaderos protagonistas.",
    features: [
      "Sección de editoriales de moda y desfiles digitales",
      "Fichas de producto enfocadas en la procedencia y tejido (cashmere, seda)",
      "Agenda privada para pruebas de confección en tienda",
      "Integración impecable con canales de comunicación directa",
      "Diseño adaptado a pantallas Retina de alta definición"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "96%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    businessGoal: "Exhibir las colecciones de temporada como obras de arte, atrayendo clientes de alta costura."
  },
  "antica-forno-pizza": {
    slug: "antica-forno-pizza",
    tagline: "El Arte de la Llama y la Masa",
    marketingPitch: "Una plataforma web cautivadora para pizzerías gourmet y restaurantes italianos de alta gama. Combina texturas oscuras y colores cálidos que emulan el horno de leña, creando una atmósfera digital que invita a reservar mesa y pedir al instante.",
    features: [
      "Menú interactivo con alérgenos e ingredientes de origen DOP",
      "Reservas de mesa automatizadas integradas con el software local",
      "Apartado de historia sobre la fermentación lenta de masa madre",
      "Integración directa de opiniones de TripAdvisor",
      "Mapas de ubicación y horarios con integración de Google Maps"
    ],
    specs: {
      performance: "97%",
      seo: "100%",
      loadingTime: "0.9s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Elevar la experiencia de reserva online y potenciar la venta de creaciones culinarias de alta gama."
  }
};

export const projectDetailsMapEn: Record<string, ProjectDetail> = {
  "joyeria-amaia": {
    slug: "joyeria-amaia",
    tagline: "Enduring Elegance",
    marketingPitch: "A sophisticated e-commerce boutique designed to reflect luxury, exclusivity, and trust. With a clean and fluid user interface, this website maximizes product perceived value and drives conversions with intuitive navigation and integrated payment gateways.",
    features: [
      "High-resolution interactive digital catalog",
      "Advanced filtering by collection and precious metals",
      "100% secure integrated payment gateway",
      "Responsive design optimized for mobile shopping",
      "Simple admin dashboard for stock management"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "95%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    businessGoal: "Increase average ticket value and project exclusivity of fine jewelry items via a premium user journey."
  },
  "burger-store": {
    slug: "burger-store",
    tagline: "The Flavor of Success on Screen",
    marketingPitch: "A fast-food and delivery web platform designed to trigger appetite. With an interactive ordering system and highly visual menus, this website accelerates local sales and instantly builds customer loyalty.",
    features: [
      "Self-manageable digital menu with dynamic food photography",
      "Real-time shopping cart without page refreshes",
      "Direct integration to receive orders via WhatsApp",
      "Limited-time promotions and combos section",
      "Optimized geolocation for delivery address routing"
    ],
    specs: {
      performance: "95%",
      seo: "98%",
      loadingTime: "1.1s",
      mobileScore: "93%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Zustand"],
    businessGoal: "Automate online orders for local restaurants, reducing reliance on expensive third-party delivery platforms."
  },
  "aurum-cafe": {
    slug: "aurum-cafe",
    tagline: "Awaken Your Senses",
    marketingPitch: "An immersive digital experience for specialty coffee shops and local roasters. Conveys the passion, origin, and quality of every single bean with minimalist layout design, editorial typography, and subtle micro-animations.",
    features: [
      "High-end minimalist editorial layout",
      "Interactive coffee bean origin and roasting stories",
      "Integrated monthly coffee subscription module",
      "Interactive beverage menu updated live",
      "Booking portal for private catas and masterclasses"
    ],
    specs: {
      performance: "99%",
      seo: "100%",
      loadingTime: "0.7s",
      mobileScore: "98%"
    },
    technologies: ["Next.js 15", "Tailwind CSS 4", "Framer Motion"],
    businessGoal: "Build a community around specialty coffee and sell subscriptions directly to consumers."
  },
  "gym-store-elite": {
    slug: "gym-store-elite",
    tagline: "Redefine Your Limit",
    marketingPitch: "A bold and high-energy website for fitness centers and premium athletic clothing brands. Its high-contrast modern design conveys strength, discipline, and achievement, perfect for capturing leads and selling memberships or gear.",
    features: [
      "Interactive membership price calculator",
      "Integrated supplement and activewear e-store",
      "Interactive group class schedule and booking",
      "Transformational student progress cases",
      "High-impact dark cyberpunk aesthetics"
    ],
    specs: {
      performance: "97%",
      seo: "96%",
      loadingTime: "0.9s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    businessGoal: "Capture new membership leads and automate repetitive student scheduling."
  },
  "herbs-botanica": {
    slug: "herbs-botanica",
    tagline: "Botanical Architecture",
    marketingPitch: "A sophisticated nature-inspired website, perfect for luxury florists, landscape designers, and exclusive plant nurseries. Combines organic earthy tones, custom typography, and elegant transitions to provide a peaceful user experience.",
    features: [
      "Interactive plant care and gardening guides",
      "Editorial interior design and landscaping gallery",
      "Simplified checkout process (Fast Checkout)",
      "Smart plant selector quiz based on room parameters",
      "Integrated botanical blog for technical content SEO optimization"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "96%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    businessGoal: "Attract design-oriented urban demographics looking for luxury indoor plants and decor services."
  },
  "healthcare-medicina": {
    slug: "healthcare-medicina",
    tagline: "State-of-the-Art Medicine",
    marketingPitch: "A clean, highly professional, and informative web platform for clinics and medical specialists. Conveys trust, cleanliness, and safety. Optimizes patient intake by allowing direct booking and detailing treatments clearly.",
    features: [
      "Online appointment booking and scheduling system",
      "Interactive directory of resident medical specialists",
      "Comprehensive medical treatment and procedure detail files",
      "Frequently Asked Questions with rapid accordion toggles",
      "Fully accessible design meeting health information regulations"
    ],
    specs: {
      performance: "96%",
      seo: "100%",
      loadingTime: "1.0s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    businessGoal: "Reduce customer support call volumes by enabling online consultation scheduling and patient resources download."
  },
  "lawyers-partners": {
    slug: "lawyers-partners",
    tagline: "Corporate Defense & Strategy",
    marketingPitch: "A premium corporate platform for law firms and financial advisories. Its sober and distinguished design reinforces prestige, ethics, and technical reliability, attracting high-profile clients and corporate partnerships.",
    features: [
      "Detailed legal practice areas structure navigation",
      "Interactive profiles and bios of senior managing partners",
      "Virtual and physical consultation scheduler",
      "Corporate law and financial jurisprudence updates blog",
      "Secure and confidential case inquiry intake form"
    ],
    specs: {
      performance: "97%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "95%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Project thought leadership in the legal space and initiate the intake funnel for high-volume corporate clients."
  },
  "clinica-veterinaria": {
    slug: "clinica-veterinaria",
    tagline: "Compassionate Veterinary Care",
    marketingPitch: "A warm, welcoming, and interactive website for vet clinics and animal hospitals. Blends detailed services breakdowns with a friendly design that reassures pet owners and facilitates direct contact.",
    features: [
      "Automated pet vaccination tracking and appointment reminders",
      "Specialized surgical, emergency, and lab diagnostic service files",
      "Educational pet care and nutrition guidelines blog",
      "24/7 medical emergency alert header with tap-to-call link",
      "Full digital tour gallery of advanced clinic facilities"
    ],
    specs: {
      performance: "95%",
      seo: "98%",
      loadingTime: "1.2s",
      mobileScore: "92%"
    },
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Build trust with local families and consolidate local market leadership as the premier pet clinic."
  },
  "vortex-streetwear": {
    slug: "vortex-streetwear",
    tagline: "Comfort Reinvented",
    marketingPitch: "An urban, hyper-modern online footwear store centered on streetwear culture. With bold typography, rebel styling, and futuristic scrolling animations, this web store is built to capture Gen-Z fashion enthusiasts.",
    features: [
      "Advanced sneaker catalog search and color filters",
      "Limited-edition shoe 'Drops' with real-time countdowns",
      "Lookbook-style urban fashion catalog structure",
      "Integrated credit card and dynamic checkout options",
      "Exclusive VIP loyalty program rewards dashboard"
    ],
    specs: {
      performance: "98%",
      seo: "99%",
      loadingTime: "0.9s",
      mobileScore: "96%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Convert web traffic into streetwear retail purchases with an immersive mobile first shopping catalog."
  },
  "derby-zapateria": {
    slug: "derby-zapateria",
    tagline: "Definitive Elegance",
    marketingPitch: "A luxury store web space showcasing classic handcrafted shoes. Its leather color palettes, serif typography, and rich media galleries convey Goodyear-welted heritage and strict artisanal craftsmanship details.",
    features: [
      "Private physical showroom consulting scheduler",
      "Goodyear Welted manufacturing process guides",
      "Full-screen high-res leather and stitching detail galleries",
      "Individual model heritage story logs",
      "Interactive shoe size recommender for remote shoppers"
    ],
    specs: {
      performance: "99%",
      seo: "100%",
      loadingTime: "0.7s",
      mobileScore: "97%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Position the brand firmly in the custom luxury shoemaking niche, justifying custom pricing models."
  },
  "boutique-alta-costura": {
    slug: "boutique-alta-costura",
    tagline: "Elegance Defined",
    marketingPitch: "A minimalist fashion showcase celebrating 'quiet luxury'. Clean grids, fashion editorial layouts, and ample negative space allow premium textile details and craftsmanship to take center stage.",
    features: [
      "Fashion editorials and virtual seasonal fashion shows",
      "Textile provenance and care details sheets (cashmere, silk)",
      "Private tailoring fitting showroom booking widget",
      "Seamless instant messaging and chat channels integration",
      "Ultra-crisp design optimized for Retina display monitors"
    ],
    specs: {
      performance: "98%",
      seo: "100%",
      loadingTime: "0.8s",
      mobileScore: "96%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    businessGoal: "Display seasonal designer releases as fine art, attracting elite haute couture clientele."
  },
  "antica-forno-pizza": {
    slug: "antica-forno-pizza",
    tagline: "The Art of Flame and Flour",
    marketingPitch: "A captivating dining web platform for gourmet pizzerias and high-end Italian eateries. Combines dark textures and warm volcanic tones to mimic wood-fired ovens, prompting online reservations.",
    features: [
      "Interactive menu detailing DOP ingredients and allergen safety",
      "Automated reservation system integrated with local restaurant POS",
      "Sourdough slow-fermentation process storytelling sheets",
      "Live integrated TripAdvisor review sliders",
      "Google Maps local directions and live operating hours"
    ],
    specs: {
      performance: "97%",
      seo: "100%",
      loadingTime: "0.9s",
      mobileScore: "94%"
    },
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    businessGoal: "Elevate the online reservation experience and boost organic gourmet creation orders."
  }
};
