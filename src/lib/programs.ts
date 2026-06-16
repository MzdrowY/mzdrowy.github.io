export interface Program {
  slug: string
  titlePl: string
  titleEn: string
  subtitlePl: string
  subtitleEn: string
  descriptionPl: string
  descriptionEn: string
  version: string
  tech: string
  license: string
  features: string[]
  installer: string
  installerSize: number
  repo: string
}

export function programLocale(program: Program, locale: string) {
  return {
    ...program,
    title: locale === "en" ? program.titleEn : program.titlePl,
    subtitle: locale === "en" ? program.subtitleEn : program.subtitlePl,
    description: locale === "en" ? program.descriptionEn : program.descriptionPl,
  };
}

export const programs: Program[] = [
  {
    slug: "anti-spaghetti",
    titlePl: "Anti-Spaghetti Notatnik",
    titleEn: "Anti-Spaghetti Notes",
    subtitlePl: "Podręczny notatnik-składnica z ochroną PIN",
    subtitleEn: "Handy scratchpad with PIN protection",
    descriptionPl:
      "Podręczny notatnik-składnica zbudowany w Pythonie z PyQt6. Ciemny, minimalistyczny interfejs do szybkiego zapisywania fragmentów tekstu — prompty, klucze API, przepisy, notatki. Zabezpieczony PIN-em, z eksportem do wielu formatów i drag & drop.",
    descriptionEn:
      "A handy scratchpad built in Python with PyQt6. Dark, minimalist interface for quickly saving text snippets — prompts, API keys, recipes, notes. Protected with a PIN, with export to multiple formats and drag & drop.",
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
  {
    slug: "monogram-studio",
    titlePl: "Monogram Studio",
    titleEn: "Monogram Studio",
    subtitlePl: "Proste, eleganckie narzędzie do projektowania monogramów i sygnatur",
    subtitleEn: "A simple, elegant tool for designing monograms and signatures",
    descriptionPl:
      "Monogram Studio to narzędzie do projektowania spersonalizowanych znaków graficznych złożonych z dwóch liter (inicjałów). Wybierasz dwie litery, czcionkę, kolor i kształt ramki. Możesz dodać datę lub dodatkowy napis. Wszystko ustawiasz wizualnie — przesuwasz, powiększasz, centrujesz. Gotowy projekt pobierasz jako plik SVG — wektorowy obrazek, który zachowuje jakość w każdym rozmiarze.",
    descriptionEn:
      "Monogram Studio is a tool for designing personalized graphic marks from two letters (initials). Pick two letters, a font, a color, and a frame shape. You can add a date or extra text. Everything is set visually — drag, scale, center. Download your finished design as an SVG file — a vector image that keeps its quality at any size.",
    version: "1.0.0",
    tech: "React/Vite",
    license: "MIT",
    features: [
      "Plik SVG do pobrania (skalowalny, przezroczyste tło)",
      "Możliwość skopiowania kodu źródłowego SVG",
      "4 gotowe szablony startowe",
      "12 różnych czcionek",
      "5 układów liter i 5 rodzajów ramek",
      "Ustawienia kolorów i precyzyjne pozycjonowanie",
    ],
    installer: "/programs/Monogram Studio-1.0.0-setup.exe",
    installerSize: 113108680,
    repo: "",
  },
];
