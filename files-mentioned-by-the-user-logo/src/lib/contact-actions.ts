"use server";

import { createContactRequest } from "./supabase-rest";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function text(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function submitContactRequest(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = text(formData, "company");

  if (honeypot) {
    return {
      status: "success",
      message: "Gracias. Hemos recibido tu solicitud."
    };
  }

  const name = text(formData, "name");
  const email = text(formData, "email");
  const phone = text(formData, "phone");
  const communityInterest = text(formData, "community_interest");
  const message = text(formData, "message");
  const privacyAccepted = formData.get("privacy_accepted") === "on";

  if (!name || !email || !message || !communityInterest) {
    return {
      status: "error",
      message: "Revisa los campos obligatorios antes de enviar."
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Introduce un email válido."
    };
  }

  if (!privacyAccepted) {
    return {
      status: "error",
      message: "Acepta la política de privacidad para poder enviar la solicitud."
    };
  }

  await createContactRequest({
    name,
    email,
    phone,
    community_interest: communityInterest,
    message,
    privacy_accepted: privacyAccepted
  });

  return {
    status: "success",
    message:
      communityInterest === "EMAÚS Hombres"
        ? "Gracias por escribirnos. Hemos recibido tu solicitud sobre EMAÚS Hombres. El equipo correspondiente se pondrá en contacto contigo cuando sea posible."
        : communityInterest === "EMAÚS Mujeres"
          ? "Gracias por escribirnos. Hemos recibido tu solicitud sobre EMAÚS Mujeres. El equipo correspondiente se pondrá en contacto contigo cuando sea posible."
          : "Gracias. Hemos recibido tu solicitud y el equipo correspondiente se pondrá en contacto contigo cuando sea posible."
  };
}
