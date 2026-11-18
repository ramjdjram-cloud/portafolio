import { projects } from "../data";

export default function Projects() {
  return (
    <section id="proyectos" className="border-y border-slate-100 bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-ink">Proyectos</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Algunas cosas que he construido por mi cuenta.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <span
                  className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
                    p.status === "Terminado"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
              >
                Ver en GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
