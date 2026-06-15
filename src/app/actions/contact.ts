"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(data: any, token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) throw new Error("Falta la configuración de reCAPTCHA en el servidor.");

  // Verificar el token con la API de Google
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });
  
  const verifyData = await verifyRes.json();
  
  // v3 devuelve un score. Menos de 0.5 suele ser bot.
  if (!verifyData.success || verifyData.score < 0.5) {
    throw new Error("Validación de seguridad fallida. ¿Eres un bot?");
  }

  // Insertar en Supabase
  const { error } = await supabase.from("contacts").insert([{
    name: data.name,
    email: data.email,
    type: data.type,
    message: data.message,
  }]);

  if (error) {
    console.error("Error Supabase:", error);
    throw new Error("No se pudo guardar la información en la base de datos.");
  }

  return { success: true };
}
