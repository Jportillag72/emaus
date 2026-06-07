"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "@/lib/admin-actions";

const initialState: LoginState = {
  error: ""
};

export function AdminLoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="card grid gap-5 p-7">
      <label className="label">
        Usuario
        <input className="input" type="text" name="username" required autoComplete="username" />
      </label>
      <label className="label">
        Contraseña
        <input className="input" type="password" name="password" required autoComplete="current-password" />
      </label>
      {state.error ? <p className="rounded-md bg-gold/20 px-4 py-3 text-sm font-bold text-night">{state.error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={isPending}>
        {isPending ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
