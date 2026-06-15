# Cabuweb - Elite Software & Design Agency 🚀

Cabuweb is a high-end, boutique software development agency specializing in elite Web Development, Native & Hybrid Mobile Apps, and Custom Software Solutions. This repository contains the official frontend ecosystem for Cabuweb, engineered with a "Dark Luxury" glassmorphism aesthetic and optimized for high-conversion advertising campaigns.

## 🌟 Key Features

- **Dark Luxury UI/UX:** Premium design system featuring deep contrast, smooth glassmorphism (backdrop-blur), and elegant micro-animations via Framer Motion.
- **Conversion-Optimized Landing Pages:** Includes a dedicated App Development landing page (`/desarrollo-apps`) specifically designed to funnel ad traffic into leads.
- **Lead Generation System:** A robust contact form using `react-hook-form` and `zod` for strict validation, integrated with `EmailJS` to send direct notifications without needing a backend.
- **Marketing Tracking Ready:** Fully integrated with **Meta Pixel (Facebook Ads)** and **Google Analytics 4** for precise tracking of page views and conversions. Includes an isolated Thank You page (`/gracias`) for accurate ROI measurement.
- **EU Legal Compliance:** Built-in GDPR/LOPDGDD compliance featuring an intelligent Cookie Consent Banner, complete Privacy Policy (`/politica-de-privacidad`), and Terms of Service (`/terminos-y-condiciones`).

## 🛠️ Technology Stack

- **Core:** [Next.js 15 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVGs
- **Analytics:** `@next/third-parties/google` (GA4) & Native Meta Pixel Injection

## 🚀 Getting Started

To run the development server locally, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js** (v18.17.0 or higher) installed on your machine.

### 2. Installation
Clone the repository and install the dependencies using npm:

```bash
git clone https://github.com/DiegoVilla27/cabuweb.git
cd cabuweb
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application supports hot-reloading.

## ⚙️ Integrations & Configuration

To adapt the website for your specific infrastructure, you may need to update the following third-party credentials:

### EmailJS (Contact Form)
The contact form located in `src/shared/Footer.tsx` is powered by EmailJS. If you wish to receive emails to a different inbox or template, update the `EMAILJS_CONFIG` object:
```typescript
const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
};
```

### Meta Pixel (Facebook Ads)
The Meta Pixel snippet is injected in the `<head>` of `src/app/layout.tsx`. 
Look for the `fbq('init', '1047018098005087');` line and replace `1047018098005087` with your own Meta Business Pixel ID if it changes.

### Google Analytics 4
GA4 is implemented in `src/app/layout.tsx` using the official Next.js third-party package.
Update the Measurement ID if necessary:
```tsx
<GoogleAnalytics gaId="G-8V04X7W300" />
```

## 📂 Project Structure Highlights

- `/src/app/page.tsx`: The main landing page.
- `/src/app/desarrollo-apps/`: Specific landing page for mobile development marketing campaigns.
- `/src/app/gracias/`: Conversion success page (Thank You page).
- `/src/app/layout.tsx`: Root layout containing global SEO metadata, Pixel, GA4, and Cookie Banner.
- `/src/components/widgets/CookieBanner.tsx`: Intelligent cookie consent manager utilizing `localStorage`.
- `/src/shared/Footer.tsx`: Global footer containing the main lead generation form.
- `/src/shared/Header.tsx` & `/src/shared/Sidenav.tsx`: Smart navigation components with built-in smooth scroll routing.

## 📄 License
© 2026 Cabuweb. All Rights Reserved. Codebase is proprietary and cannot be copied or distributed without permission.
