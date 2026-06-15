"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function RecaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!recaptchaKey) {
    // Si no hay llave configurada, renderiza los hijos normalmente
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <style>{`
        .grecaptcha-badge {
          visibility: hidden !important;
        }
      `}</style>
      {children}
    </GoogleReCaptchaProvider>
  );
}
