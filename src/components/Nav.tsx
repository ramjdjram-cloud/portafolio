import { profile } from "../data";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="text-lg font-bold tracking-tight text-ink">
          {profile.initials}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-strong"
          >
            Contáctame
          </a>
        </div>
      </nav>
    </header>
  );
}
