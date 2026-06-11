export interface Program {
  slug: string
  title: string
  subtitle: string
  description: string
  version: string
  tech: string
  license: string
  features: string[]
  installer: string
  installerSize: number
  repo: string
}

export const programs: Program[] = [
  {
    slug: "anti-spaghetti",
    title: "Anti-Spaghetti Notatnik",
    subtitle: "Podręczny notatnik-składnica z ochroną PIN",
    description:
      "Podręczny notatnik-składnica zbudowany w Pythonie z PyQt6. Ciemny, minimalistyczny interfejs do szybkiego zapisywania fragmentów tekstu — prompty, klucze API, przepisy, notatki. Zabezpieczony PIN-em, z eksportem do wielu formatów i drag & drop.",
    version: "1.0.0",
    tech: "Python/PyQt6",
    license: "MIT",
    features: [
      "Tworzenie, edycja i usuwanie notatek z automatycznym zapisem",
      "Drag & drop do zmiany kolejności notatek w sidebarze",
      "Wyszukiwanie po nazwie i treści notatki",
      "Automatyczny zapis co 5 sekund + zapis przy zamknięciu",
      "Kopiowanie treści do schowka z wizualnym feedbackiem",
      "Eksport notatek do JSON, Markdown, TXT",
      "Dwa motywy: Klasyczny i Ciemny",
      "Ochrona PIN z PBKDF2 (100k iteracji)",
      "Licznik tokenów i czas ostatniej edycji w pasku stanu",
    ],
    installer: "/programs/Anti-Spaghetti-Setup.exe",
    installerSize: 31261562,
    repo: "https://github.com/MzdrowY/anti-spaghetti",
  },
];
