import Link from "next/link";

const sizeMB = (31261562 / (1024 * 1024)).toFixed(1);

const features = [
  "Tworzenie, edycja i usuwanie notatek z automatycznym zapisem",
  "Drag & drop do zmiany kolejności notatek w sidebarze",
  "Wyszukiwanie po nazwie i treści notatki",
  "Automatyczny zapis co 5 sekund + zapis przy zamknięciu",
  "Kopiowanie treści do schowka z wizualnym feedbackiem",
  "Eksport notatek do JSON, Markdown, TXT",
  "Dwa motywy: Klasyczny i Ciemny",
  "Ochrona PIN z PBKDF2 (100k iteracji)",
  "Licznik tokenów i czas ostatniej edycji w pasku stanu",
];

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Programy</h1>

      <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6">
        <h2 className="mb-1 text-xl font-semibold">Anti-Spaghetti Notatnik</h2>
        <p className="mb-4 text-sm text-zinc-500">v1.0.0 &middot; Python/PyQt6 &middot; MIT</p>
        <p className="mb-6 text-sm leading-relaxed text-zinc-300">
          Podręczny notatnik-składnica zbudowany w Pythonie z PyQt6. Ciemny, minimalistyczny interfejs do szybkiego zapisywania fragmentów tekstu — prompty, klucze API, przepisy, notatki. Zabezpieczony PIN-em, z eksportem do wielu formatów i drag & drop.
        </p>

        <h3 className="mb-2 text-sm font-semibold text-zinc-100">Funkcje</h3>
        <ul className="mb-6 space-y-1">
          {features.map((f) => (
            <li key={f} className="text-sm text-zinc-400">&bull; {f}</li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/programs/Anti-Spaghetti-Setup.exe"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Pobierz instalator
          </a>
          <span className="text-sm text-zinc-500">{sizeMB} MB &middot; .exe</span>
          <a
            href="https://github.com/MzdrowY/anti-spaghetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
          >
            GitHub &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
