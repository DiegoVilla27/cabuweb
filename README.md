# 🚀 Cabuweb — Ecosystem Frontend de Alta Costura Tecnológica

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.9-blue.svg?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-blue.svg?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38bdf8.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square)](#)
[![SEO Performance](https://img.shields.io/badge/Lighthouse_SEO-100%25-emerald.svg?style=flat-square)](#)

*Ecosistema digital premium de alto rendimiento y lujo visual, diseñado como el portal corporativo insignia y plataforma de adquisición de leads de alta conversión para la consultoría tecnológica de élite.*

---

## 📖 Core Abstract & Functional Overview

Este repositorio alberga el frontend corporativo y de adquisición publicitaria de [Cabuweb](https://www.cabuweb.com). Concebido bajo un enfoque de **Lujo Digital Silencioso**, combina un diseño inmersivo con una arquitectura de ingeniería extremadamente optimizada. El sistema resuelve el problema clásico de la retención y captación en campañas de anuncios pagados, reduciendo los tiempos de carga y fricción al mínimo mediante pre-renderizado estático avanzado e interacciones de micro-animaciones fluidas.

### 📊 Key Features Matrix

| Icon | Key Feature Component | Core Business or Performance Impact |
| :--- | :--- | :--- |
| 💎 | **Dark Luxury Design System** | Aumenta el valor percibido del servicio y la confianza corporativa mediante micro-animaciones y glassmorphism premium con `framer-motion`. |
| 📈 | **Conversion-Optimized Landing** | Ruta dedicada `/desarrollo-apps` estructurada específicamente para campañas de anuncios dirigidos a startups y medianas empresas. |
| 🛡️ | **Zero-Spam Lead Generation** | Formulario robusto gestionado con `react-hook-form` + validación estricta de esquemas `zod` y validación de seguridad de doble vía usando **Google reCAPTCHA v3**. |
| ⚡ | **Static Site Generation (SSG)** | Pre-renderizado estático a través de `generateStaticParams()` para la sección dinámica `/proyectos/[slug]`, eliminando la latencia de base de datos. |
| ⚙️ | **Serverless Data Routing** | Acción de Servidor (`use server`) que canaliza automáticamente los datos de contacto validados hacia **Supabase** y alerta vía **EmailJS REST API**. |
| 🍪 | **GDPR Compliance System** | Banner inteligente y persistente de gestión de cookies con almacenamiento local, sincronizado con políticas de privacidad estrictas. |

---

## 🚀 Architectural Runtime Flow

El flujo de procesamiento de datos y navegación de la aplicación sigue una ruta determinista y segura:

```
[Cliente Web / Navegador]
        │
        ├──► [Acceso a ruta dinámica /proyectos/[slug]] ──► Carga instantánea de página SSG
        │
        └──► [Llenado de Formulario de Contacto]
                    │ (Validación de Esquema Zod en Cliente)
                    ▼
             [Acción de Servidor: submitContactForm]
                    │
                    ├──► [Verificación Google reCAPTCHA v3 API] ── (Si es Bot) ──► Lanzar Error
                    │
                    ├──► [Envío seguro REST API a EmailJS]
                    │
                    └──► [Inserción exitosa en Supabase Database]
                                │
                                ▼
                     [Retorno de Éxito / Feedback Visual (Toast)]
```

> **Aislamiento de Carga:** El visor interactivo de proyectos `IframeViewer` utiliza sandboxing estricto (`allow-scripts allow-same-origin allow-forms allow-popups`) y un estado derivado de React en el renderizado para evitar recargas en cascada y fugas de rendimiento en la GPU.

---

## 📁 Commented Annotated Directory Tree

```
cabuweb/
├── public/                     # Archivos públicos estáticos optimizados
│   ├── favicons/               # Iconografía multicanal de marca
│   ├── fonts/                  # Tipografías corporativas de alta gama (Helvetica, Lemon)
│   └── img/                    # Activos visuales y capturas de proyectos reales
├── src/
│   ├── app/                    # Directorio de rutas de Next.js (App Router)
│   │   ├── actions/            # Acciones del servidor protegidas (use server)
│   │   │   └── contact.ts      # Verificación reCAPTCHA, envío de email e inserción Supabase
│   │   ├── desarrollo-apps/    # Embudo de conversión publicitario para apps móviles
│   │   ├── gracias/            # Página de éxito e impacto publicitario (Thank You Page)
│   │   ├── proyectos/          # Ruta dinámica SSG para el detalle de portafolio
│   │   │   └── [slug]/         # Landing page de venta y simulación interactiva
│   │   ├── layout.tsx          # Estructura global, inyección de GA4, Meta Pixel y CookieBanner
│   │   └── page.tsx            # Portal principal de la agencia
│   ├── components/             # Componentes reactivos modulares
│   │   ├── widgets/            # Pequeñas interfaces interactivas (Cookies, Modales, Cards)
│   │   ├── IframeViewer.tsx    # Simulador responsivo multipantalla de websites reales
│   │   └── Projects.tsx        # Sección interactiva de filtrado de portafolio
│   ├── constants/              # Archivos de datos estáticos y configuraciones de navegación
│   ├── helpers/                # Utilidades y esquemas de datos del portafolio
│   │   ├── projectDetailsData.ts # Data de marketing y métricas de rendimiento por proyecto
│   │   └── projectsArrays.ts   # Listado global de proyectos activos y sus slugs
│   ├── hooks/                  # React Hooks personalizados (useScroll, etc.)
│   ├── lib/                    # Clientes de servicios de infraestructura
│   │   └── supabase.ts         # Cliente singleton configurado para base de datos Supabase
│   ├── shared/                 # Componentes compartidos de layout global (Header, Footer, Sidenav)
│   └── store/                  # Gestión de estados del cliente ligera con Zustand
└── tsconfig.json               # Configuración de TypeScript con alias de ruta @/*
```

---

## 🛠️ Technical Stack & Dependency Layer

### Production Dependencies

| Icon | Core Technology / Library | Strict Semantic Version | Explicit Project Purpose |
| :--- | :--- | :--- | :--- |
| ⚡ | **next** | `16.2.9` | Framework principal de react con App Router y renderizado híbrido. |
| ⚛️ | **react** | `19.2.4` | Librería principal para interfaces reactivas basada en componentes. |
| ⚛️ | **react-dom** | `19.2.4` | Adaptador DOM para el motor reactivo de React 19. |
| 🎬 | **framer-motion** | `12.40.0` | Motor de animaciones fluidas en tiempo real y transiciones de tabs. |
| 🟢 | **@supabase/supabase-js** | `2.108.2` | SDK oficial para almacenar y persistir los leads generados de forma segura. |
| 🔒 | **react-google-recaptcha-v3** | `1.11.0` | Cliente de validación heurística invisible contra bots en formularios. |
| 📋 | **react-hook-form** | `7.79.0` | Gestor de formularios ultraligero sin re-renders innecesarios. |
| 🔍 | **zod** | `4.4.3` | Validador declarativo de esquemas y tipos estáticos en formularios. |
| 🐻 | **zustand** | `5.0.14` | Gestor de estado global ultraligero para abrir/cerrar menús. |
| 🎨 | **lucide-react** | `1.18.0` | Pack de iconos vectoriales optimizado para árboles de dependencias. |
| 📨 | **@emailjs/browser** | `4.4.1` | Integración del SDK para notificaciones automáticas. |
| 🍪 | **sonner** | `2.0.7` | Gestor de notificaciones toast flotantes elegantes de alta visibilidad. |

### Development/Build Tooling Dependencies

| Icon | Core Technology / Library | Strict Semantic Version | Explicit Project Purpose |
| :--- | :--- | :--- | :--- |
| 🎨 | **tailwindcss** | `^4` | Motor de estilos atómicos CSS moderno de alta velocidad. |
| 🔧 | **@tailwindcss/postcss** | `^4` | Procesador de soporte para compatibilidad de Tailwind CSS 4 con PostCSS. |
| 📝 | **typescript** | `^5` | Lenguaje de tipado estático estricto sobre JavaScript. |
| 🛡️ | **eslint** | `^9` | Herramienta de auditoría estática de calidad de código y lints de React. |

---

## ⚙️ Provisioning & Infrastructure Execution Guide

### Prerequisites
- **Node.js** `>= 20.0.0` (Recomendado versión LTS activa).
- **npm** `>= 10.0.0`
- Cuenta activa en **Supabase** (para persistencia) y **Google reCAPTCHA v3** (para seguridad).

### Environment Configuration
Crea un archivo `.env.local` o modifica el archivo `.env` en la raíz del proyecto usando el siguiente formato:

| Variable | Tipo | Propósito | Ejemplo / Mock |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL | Endpoint API de tu instancia Supabase | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | JWT | Llave pública anónima de base de datos | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | String | Llave pública para renderizar el widget invisible | `6LfcayEtAAAAAMXCeK...` |
| `RECAPTCHA_SECRET_KEY` | String | Llave secreta en backend para validación REST | `6LfcayEtAAAAAJhPq...` |

### Executable Code Blocks

#### 1. Clonar el repositorio
```bash
git clone https://github.com/DiegoVilla27/cabuweb.git
cd cabuweb
```

#### 2. Instalación del árbol de dependencias
```bash
npm install
```

#### 3. Inicialización del servidor de desarrollo local
```bash
npm run dev
```
> El servidor estará disponible con recarga en caliente en [http://localhost:3000](http://localhost:3000).

#### 4. Auditoría y verificación de calidad de código
```bash
npm run lint
```

#### 5. Compilación optimizada para producción
```bash
npm run build
```

#### 6. Servir la compilación localmente
```bash
npm run start
```

---

## 📈 Core Web Vitals & Architectural Resilience

Este sistema está optimizado para garantizar un tiempo de interacción (TTI) inferior a 1.2 segundos y un Cumulative Layout Shift (CLS) de `0`:

- **Static Generation (SSG)**: El uso de `generateStaticParams()` pre-compila todas las landings de proyectos en el build, de modo que el contenido se sirve directamente desde un CDN sin consultas en tiempo real.
- **Micro-interacciones en la GPU**: Las animaciones se ejecutan mediante transformaciones aceleradas por hardware (`transform-style-3d`, `rotate-x-12`) controladas por `framer-motion`, lo que garantiza una renderización fluida de 60fps en móviles de gamas media/baja.
- **Prevención de Layout Shifts**: Todas las imágenes utilizan la etiqueta de optimización nativa `next/image` con dimensiones precalculadas, mitigando el parpadeo de carga (Content Hydration Shock).
- **Control de Inyecciones de Terceros**: Las APIs pesadas de Google Analytics y Meta Pixel se cargan de forma asíncrona mediante `@next/third-parties/google` para no bloquear el hilo de ejecución principal del navegador.

---

## 🤝 Contribution Bounds & License

1. **Crear una rama de característica**: `git checkout -b feat/nueva-caracteristica`
2. **Confirmar cambios**: Seguir las directrices de `conventional-commits` (`feat(scope): mensaje`).
3. **Enviar a origen**: `git push origin feat/nueva-caracteristica`
4. **Abrir Pull Request**: Solicitar revisión detallando el impacto en rendimiento visual y SEO.

Este código es propiedad intelectual protegida. Todos los derechos reservados bajo licencia propietaria de **Cabuweb**. Queda terminantemente prohibida su copia, distribución o modificación sin autorización expresa de los autores.

---

## ✒️ Authorship & Credits

> This digital ecosystem has been designed, structured, and developed to high-performance standards by [Cabuweb](https://www.cabuweb.com).
