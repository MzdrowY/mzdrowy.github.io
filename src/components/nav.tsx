import Link from "next/link";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/ksiazki", label: "Ebooki" },
  { href: "/programy", label: "Programy" },
  { href: "/sugestie", label: "Zgłoś błąd" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-zinc-400 transition-colors hover:fill-zinc-100" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
    </svg>
  );
}

export function Nav() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-900">
      <div className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          mzdrowy
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto">
          <a
            href="https://github.com/MzdrowY"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
