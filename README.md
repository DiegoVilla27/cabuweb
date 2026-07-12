# 🚀 Cabuweb — Ecosystem Frontend de Alta Costura Tecnológica

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.9-blue.svg?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-blue.svg?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.0.0-38bdf8.svg?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18n ES|EN](https://img.shields.io/badge/i18n-ES%20%7C%20EN-0074ff.svg?style=flat-square)](#)
[![SEO Performance](https://img.shields.io/badge/Lighthouse_SEO-100%25-emerald.svg?style=flat-square)](#)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square)](#)

*Ecosistema digital premium de alto rendimiento y lujo visual, diseñado como el portal corporativo insignia y plataforma de adquisición de leads de alta conversión para la consultoría tecnológica de élite.*

---

## 📖 Core Abstract & Functional Overview

Este repositorio alberga el frontend corporativo y de adquisición publicitaria de [Cabuweb](https://www.cabuweb.com). Concebido bajo un enfoque de **Lujo Digital Silencioso**, combina un diseño inmersivo con una arquitectura de ingeniería extremadamente optimizada. El sistema resuelve el problema clásico de la retención y captación en campañas de anuncios pagados, reduciendo los tiempos de carga y fricción al mínimo mediante pre-renderizado estático avanzado e interacciones de micro-animaciones fluidas.

### 📊 Key Features Matrix

| Icon | Key Feature Component | Core Business or Performance Impact |
| :--- | :--- | :--- |
| 💎 | **Dark Luxury Design System** | Aumenta el valor percibido del servicio y la confianza corporativa mediante micro-animaciones y glassmorphism premium con `framer-motion`. |
| 🌐 | **Bilingual ES \| EN (i18n)** | Switch de idioma persistido en Zustand (`localStorage`) que traduce reactivamente todos los textos, formularios y mensajes de WhatsApp sin cambiar la URL. |
| 📈 | **Conversion-Optimized Landing** | Ruta dedicada `/desarrollo-apps` estructurada específicamente para campañas de anuncios dirigidos a startups y medianas empresas. |
| 🛡️ | **Zero-Spam Lead Generation** | Formulario robusto gestionado con `react-hook-form` + validación estricta de esquemas `zod` y validación de seguridad de doble vía usando **Google reCAPTCHA v3**. |
| ⚡ | **Static Site Generation (SSG)** | Pre-renderizado estático a través de `generateStaticParams()` para la sección dinámica `/proyectos/[slug]`, eliminando la latencia de base de datos. |
| ⚙️ | **Serverless Data Routing** | Acción de Servidor (`use server`) que canaliza automáticamente los datos de contacto validados hacia **Supabase** y alerta vía **EmailJS REST API**. |
| 🔍 | **Technical SEO Hardened** | `BreadcrumbList` JSON-LD por proyecto, `ProfessionalService` schema en root, OG images absolutas `1200×630`, canonical por slug, hreflang ES/EN, `robots.ts` con bloqueo de scrapers de IA. |
| 🍪 | **GDPR Compliance System** | Banner inteligente y persistente de gestión de cookies con almacenamiento local, sincronizado con políticas de privacidad estrictas. |

---

## 🚀 Architectural Runtime Flow

El flujo de procesamiento de datos y navegación de la aplicación sigue una ruta determinista y segura:

```
[Cliente Web / Navegador]
        │
        ├──► [Acceso a ruta dinámica /proyectos/[slug]] ──► Carga instantánea SSG + BreadcrumbList JSON-LD
        │
        ├──► [Switch ES | EN en Header] ──► Zustand setLang() ──► Traducción reactiva de toda la UI
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

> **Aislamiento de Carga:** El Meta Pixel y Google Analytics se cargan con `next/script strategy="afterInteractive"` para no bloquear el hilo principal (FCP/LCP). Las fuentes críticas son pre-cargadas con `<link rel="preload">` para eliminar el FOUT en el H1.

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
│   │   │   └── [slug]/         # Landing page de venta + BreadcrumbList JSON-LD server-side
│   │   ├── layout.tsx          # Root layout: font preloads, JSON-LD ProfessionalService,
│   │   │                       # Meta Pixel (afterInteractive), GA4, security headers
│   │   ├── robots.ts           # Crawler rules: bloqueo de scrapers IA (GPTBot, Claude-Web…)
│   │   ├── sitemap.ts          # Sitemap dinámico: landing + 12 proyectos + páginas legales
│   │   └── page.tsx            # Portal principal de la agencia
│   ├── components/             # Componentes reactivos modulares
│   │   ├── widgets/            # Pequeñas interfaces interactivas (Cookies, Modales, Cards)
│   │   ├── IframeViewer.tsx    # Simulador responsivo multipantalla de websites reales (i18n)
│   │   ├── ProjectDetailContent.tsx  # Client wrapper para páginas de proyecto (i18n)
│   │   └── Projects.tsx        # Sección interactiva de filtrado de portafolio
│   ├── constants/              # Archivos de datos estáticos y configuraciones de navegación
│   │   └── translations.ts     # Diccionario ES/EN completo para todos los componentes
│   ├── helpers/                # Utilidades y esquemas de datos del portafolio
│   │   ├── projectDetailsData.ts # Data de marketing, métricas y traducciones ES/EN por proyecto
│   │   └── projectsArrays.ts   # Listado global de proyectos activos y sus slugs
│   ├── hooks/                  # React Hooks personalizados (useScroll, etc.)
│   ├── lib/                    # Clientes de servicios de infraestructura
│   │   └── supabase.ts         # Cliente singleton configurado para base de datos Supabase
│   ├── shared/                 # Componentes compartidos de layout global (Header, Footer, Sidenav)
│   └── store/                  # Gestión de estados del cliente ligera con Zustand
│       └── useStore.ts         # lang (es|en) persistido en localStorage + UI state
└── next.config.ts              # Security headers, Cache-Control inmutable, AVIF/WebP images
```

---

## 🛠️ Technical Stack & Dependency Layer

### Production Dependencies

| Icon | Core Technology / Library | Strict Semantic Version | Explicit Project Purpose |
| :--- | :--- | :--- | :--- |
| ⚡ | **next** | `16.2.9` | Framework principal de React con App Router y renderizado híbrido. |
| ⚛️ | **react** | `19.2.4` | Librería principal para interfaces reactivas basada en componentes. |
| ⚛️ | **react-dom** | `19.2.4` | Adaptador DOM para el motor reactivo de React 19. |
| 🎬 | **framer-motion** | `12.40.0` | Motor de animaciones fluidas en tiempo real y transiciones de tabs. |
| 🟢 | **@supabase/supabase-js** | `2.108.2` | SDK oficial para almacenar y persistir los leads generados de forma segura. |
| 🔒 | **react-google-recaptcha-v3** | `1.11.0` | Cliente de validación heurística invisible contra bots en formularios. |
| 📋 | **react-hook-form** | `7.79.0` | Gestor de formularios ultraligero sin re-renders innecesarios. |
| 🔍 | **zod** | `4.4.3` | Validador declarativo de esquemas y tipos estáticos en formularios. |
| 🐻 | **zustand** | `5.0.14` | Estado global: idioma (ES/EN persistido) + UI state (modales, sidenav). |
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
Crea un archivo `.env.local` en la raíz del proyecto con el siguiente formato:

| Variable | Tipo | Propósito | Ejemplo / Mock |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | URL | Dominio canónico del sitio para SEO metadata, OG images y sitemap | `https://www.cabuweb.com` |
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

## 📈 Core Web Vitals & SEO Architecture

Este sistema está optimizado bajo los más altos estándares de Technical SEO y rendimiento de carga:

- **Font Preloading:** `LemonMilkBold.otf` y `HelveticaRoman.otf` se pre-cargan en `<head>` con `<link rel="preload">` para eliminar el FOUT (Flash of Unstyled Text) en el elemento LCP (H1).
- **Non-blocking Third Parties:** Meta Pixel y Google Analytics usan `next/script strategy="afterInteractive"` — no bloquean FCP ni LCP en el hilo principal.
- **Static Generation (SSG):** `generateStaticParams()` pre-compila las 12 landings de proyectos en el build, sirviéndose desde CDN sin consultas en tiempo real.
- **Structured Data (JSON-LD):** Schema `ProfessionalService` en el root layout (head) + `BreadcrumbList` server-side en cada `/proyectos/[slug]` para rich results en SERP.
- **Security Headers:** `next.config.ts` emite HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy` y `Permissions-Policy` en cada respuesta.
- **Immutable Asset Caching:** Fuentes e imágenes sirven con `Cache-Control: public, max-age=31536000, immutable` para máximo rendimiento de CDN.
- **AI Scraper Protection:** `robots.ts` bloquea explícitamente `GPTBot`, `ChatGPT-User`, `CCBot`, `anthropic-ai` y `Claude-Web`.
- **Micro-interacciones en la GPU:** Las animaciones se ejecutan mediante transformaciones aceleradas por hardware (`transform-style-3d`) controladas por `framer-motion`, garantizando 60fps en móviles.

---

## 🌐 Internacionalización (ES | EN)

El sistema de i18n usa **Zustand** con persistencia en `localStorage`. No hay rutas separadas `/es` o `/en`.

- El estado `lang: "es" | "en"` se persiste automáticamente entre sesiones.
- El switch `ES | EN` en el Header y Sidenav actualiza el estado y re-renderiza reactivamente todos los textos sin cambiar la URL.
- El diccionario completo está en `src/constants/translations.ts` — cubre todas las secciones, formularios, modales, páginas de error, mensajes de WhatsApp y el IframeViewer.
- Los detalles de proyectos (`projectDetailsData.ts`) tienen traducciones ES y EN independientes.

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
