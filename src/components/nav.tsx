import Link from "next/link";

const links = [
  { href: "/", label: "Strona główna" },
  { href: "/ksiazki", label: "Książki" },
  { href: "/programy", label: "Programy" },
];

export function Nav() {
  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          mzdrowy
        </Link>
        <div className="flex gap-4 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
