import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
