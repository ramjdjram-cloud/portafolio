import { useState, type FormEvent } from "react";
import { profile } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contacto desde el portafolio — ${name || "Visitante"}`
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="border-t border-slate-100 bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink">Contacto</h2>
        <p className="mt-3 text-muted">
          ¿Un proyecto, una oportunidad o solo saludar? Escríbeme.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-xl space-y-4 text-left"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tu mensaje"
            rows={4}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Enviar
          </button>
          <p className="text-center text-xs text-muted">
            Se abrirá tu correo con el mensaje listo para enviar.
          </p>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
