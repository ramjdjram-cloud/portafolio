import { about, facts } from "../data";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-ink">Sobre mí</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-[1fr_280px]">
        <div className="space-y-4 leading-7 text-muted">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="space-y-3">
          {facts.map((f) => (
            <li key={f.label} className="rounded-xl border border-slate-200 p-4">
              <div className="text-xs uppercase tracking-wide text-muted">
                {f.label}
              </div>
              <div className="mt-1 text-sm font-semibold text-ink">{f.value}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
