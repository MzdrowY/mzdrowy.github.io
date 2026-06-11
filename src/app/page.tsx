import Link from "next/link";
import { TrackedLink } from "@/components/tracked-link";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-blue-400">
          Witaj na mojej stronie
        </h1>
        <p className="text-lg leading-relaxed text-zinc-400">
          Znajdziesz tutaj moje książki oraz programy, które stworzyłem.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Książki</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <TrackedLink
            href="/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf"
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">Internet, Domeny i DNS</h3>
            <p className="text-sm text-zinc-400">Podręcznik edukacyjny od podstaw</p>
          </TrackedLink>
          <TrackedLink
            href="/books/Pod skórą systemu.pdf"
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">Pod skórą systemu</h3>
            <p className="text-sm text-zinc-400">W głąb architektury komputerów</p>
          </TrackedLink>
          <TrackedLink
            href="/books/Sztuczna inteligencja bez tajemnic.pdf"
            className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md sm:col-span-2"
          >
            <h3 className="mb-2 font-semibold">Sztuczna inteligencja bez tajemnic</h3>
            <p className="text-sm text-zinc-400">AI wyjaśniona przystępnie</p>
          </TrackedLink>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Programy</h2>
        <Link
          href="/programy"
          className="block rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-shadow hover:shadow-md"
        >
          <p className="text-sm text-zinc-400">Zobacz dostępne programy &rarr;</p>
        </Link>
      </section>
    </div>
  );
}
