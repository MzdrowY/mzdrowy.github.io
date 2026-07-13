import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { GitHubIcon } from "@/components/icons";

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
    <header>
      <div className="headbar wrap">
        <Link href={`/${locale}`} className="logo">mzdrowy</Link>
        <nav>
          <div className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="lang">
            <Link href={`/${other}`} className={l === other ? "active" : ""}>{other}</Link>
            <span className="active">{l}</span>
          </div>
          <a href="https://github.com/MzdrowY" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </nav>
      </div>
    </header>
  );
}
