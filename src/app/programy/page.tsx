const sizeMB = (31261562 / (1024 * 1024)).toFixed(1);

export default function ProgramsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight">Programy</h1>
      <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6">
        <h2 className="mb-2 text-xl font-semibold">Anti-Spaghetti Notatnik</h2>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">
          Instalator programu Anti-Spaghetti Notatnik. Pobierz i uruchom, aby zainstalować.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="/programs/Anti-Spaghetti-Setup.exe"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Pobierz instalator
          </a>
          <span className="text-sm text-zinc-500">{sizeMB} MB &middot; .exe</span>
        </div>
      </div>
    </div>
  );
}
