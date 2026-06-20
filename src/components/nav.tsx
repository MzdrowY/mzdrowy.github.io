import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { GitHubIcon, PlFlag, EnFlag } from "@/components/icons";

const locales: Locale[] = ["pl", "en"];

export function Nav({ locale }: { locale: string }) {
  const l = locale as Locale;
  const other = locales.find((x) => x !== l) || "en";

  const links = [
    { href: `/${locale}`, label: locale === "pl" ? "Strona główna" : "Home" },
    { href: `/${locale}/ksiazki`, label: locale === "pl" ? "Ebooki" : "Ebooks" },
    { href: `/${locale}/programy`, label: locale === "pl" ? "Programy" : "Software" },
    { href: `/${locale}/sugestie`, label: locale === "pl" ? "Zgłoś błąd" : "Report bug" },
  ];

  return (
    <nav className="border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-4">
        <Link href={`/${locale}`} className="text-lg font-bold tracking-tight gradient-text">
          mzdrowy
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 transition-colors hover:text-neon-green"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-3">
          <Link href={`/${other}`} className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-neon-cyan transition-colors" aria-label={other === "pl" ? "Polski" : "English"}>
            {other === "pl" ? <PlFlag /> : <EnFlag />}
            <span className="text-xs uppercase tracking-wider">{other}</span>
          </Link>
          <a
            href="https://github.com/MzdrowY"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
