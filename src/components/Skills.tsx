import { skills } from "../data";

export default function Skills() {
  return (
    <section id="habilidades" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight text-ink">Habilidades</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold text-ink">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent-strong"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
