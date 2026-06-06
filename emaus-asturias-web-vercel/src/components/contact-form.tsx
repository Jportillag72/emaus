"use client";

import { useActionState, useState } from "react";
import { communityOptions } from "@/lib/site";
import { submitContactRequest, type ContactFormState } from "@/lib/contact-actions";

const initialState: ContactFormState = {
  status: "idle",
  message: ""
};

export function ContactForm({ defaultCommunity = "" }: { defaultCommunity?: string }) {
  const [state, formAction, isPending] = useActionState(submitContactRequest, initialState);
  const [selectedCommunity, setSelectedCommunity] = useState(defaultCommunity);
  const selectedHelp = communityOptions.find((option) => option.label === selectedCommunity)?.help;

  return (
    <form action={formAction} className="card grid gap-5 p-5 md:p-7">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Nombre
          <input className="input" name="name" required autoComplete="name" />
        </label>
        <label className="label">
          Email
          <input className="input" type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="label">
          Teléfono
          <input className="input" name="phone" autoComplete="tel" />
        </label>
        <label className="label">
          Comunidad de interés
          <select
            className="select"
            name="community_interest"
            required
            value={selectedCommunity}
            onChange={(event) => setSelectedCommunity(event.target.value)}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {communityOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedHelp ? <span className="text-xs font-semibold leading-5 text-ink/58">{selectedHelp}</span> : null}
        </label>
      </div>
      <label className="label">
        Mensaje
        <textarea className="textarea" name="message" required />
      </label>
      <label className="flex items-start gap-3 text-sm font-bold leading-6 text-ink/72">
        <input className="mt-1 size-4 accent-night" type="checkbox" name="privacy_accepted" required />
        Acepto la política de privacidad.
      </label>
      {state.message ? (
        <p
          className={`rounded-md px-4 py-3 text-sm font-bold ${
            state.status === "success" ? "bg-olive/12 text-olive" : "bg-gold/20 text-night"
          }`}
        >
          {state.message}
        </p>
      ) : null}
      <button className="btn btn-primary w-fit" type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar solicitud"}
      </button>
    </form>
  );
}
