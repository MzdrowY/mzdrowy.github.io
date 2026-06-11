export interface Book {
  slug: string
  title: string
  subtitle: string
  file: string
  pages: number
  sizeBytes: number
}

export const books: Book[] = [
  {
    slug: "internet-domeny-dns",
    title: "Internet, Domeny i DNS",
    subtitle: "Podręcznik edukacyjny od podstaw",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
    pages: 72,
    sizeBytes: 2526253,
  },
  {
    slug: "pod-skora-systemu",
    title: "Pod skórą systemu",
    subtitle: "W głąb architektury komputerów",
    file: "/books/Pod skórą systemu.pdf",
    pages: 145,
    sizeBytes: 1402397,
  },
  {
    slug: "sztuczna-inteligencja",
    title: "Sztuczna inteligencja bez tajemnic",
    subtitle: "AI wyjaśniona przystępnie",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
    pages: 144,
    sizeBytes: 1306347,
  },
]
