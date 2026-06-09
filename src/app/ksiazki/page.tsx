import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";

const books = [
  {
    title: "Internet, Domeny i DNS",
    subtitle: "Podręcznik edukacyjny od podstaw",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
  },
  {
    title: "Pod skórą systemu",
    subtitle: "W głąb architektury komputerów",
    file: "/books/Pod skórą systemu.pdf",
  },
  {
    title: "Sztuczna inteligencja bez tajemnic",
    subtitle: "AI wyjaśniona przystępnie",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
  },
];

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Książki</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {books.map((book) => (
          <TrackedLink
            key={book.title}
            href={book.file}
            className="flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{book.title}</h2>
            <p className="mb-4 flex-1 text-sm text-zinc-500 dark:text-zinc-400">{book.subtitle}</p>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Otwórz PDF &rarr;
            </span>
          </TrackedLink>
        ))}
        <div className="flex flex-col rounded-xl border border-dashed border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900 p-6 sm:col-span-2">
          <h2 className="mb-2 text-xl font-semibold text-zinc-400 dark:text-zinc-500">Więcej wkrótce</h2>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">Kolejne książki pojawią się w przyszłości.</p>
        </div>
      </div>
    </div>
  );
}
