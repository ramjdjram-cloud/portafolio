import { profile } from "../data";

export default function Hero() {
  return (
    <section id="inicio" className="border-b border-slate-100 bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center md:flex-row md:py-28 md:text-left">
        {/* Avatar: foto (si la configuras) o tus iniciales */}
        <div className="flex h-36 w-36 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent text-4xl font-bold text-white shadow-lg ring-4 ring-white">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span>{profile.initials}</span>
          )}
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Hola, soy
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            José de Jesús Ramos Ramos
          </h1>
          <p className="mt-3 text-xl text-muted">{profile.role}</p>
          <p className="mt-4 max-w-xl text-muted">
            Construyo interfaces web con React y JavaScript. Apasionado por el
            frontend, el trabajo en equipo y aprender algo nuevo en cada
            proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
