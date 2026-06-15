"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(data: any, token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) throw new Error("Falta la configuración de reCAPTCHA en el servidor.");

  // 1. Verificar el token con la API de Google
  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${secretKey}&response=${token}`,
  });
  
  const verifyData = await verifyRes.json();
  
  if (!verifyData.success || verifyData.score < 0.5) {
    throw new Error("Validación de seguridad fallida. ¿Eres un bot?");
  }

  // 2. Enviar correo por EmailJS a través de su API REST
  const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "service_1hnq2yg",
      template_id: "template_exbq856",
      user_id: "user_w5bQqSa3wGzfuaGANvzru",
      template_params: {
        name: data.name,
        email: data.email,
        type: data.type,
        message: data.message,
      },
    }),
  });

  if (!emailRes.ok) {
    const errorText = await emailRes.text();
    console.error("EmailJS Error:", errorText);
    throw new Error("El servicio de correo está experimentando problemas.");
  }

  // 3. Insertar en Supabase SOLO si el correo se envió correctamente
  const { error } = await supabase.from("contacts").insert([{
    name: data.name,
    email: data.email,
    type: data.type,
    message: data.message,
  }]);

  if (error) {
    console.error("Error Supabase:", error);
    throw new Error("El correo se envió, pero no se pudo guardar en la base de datos.");
  }

  return { success: true };
}
