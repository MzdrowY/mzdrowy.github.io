export interface Book {
  slug: string
  title: string
  subtitle: string
  file: string
}

export const books: Book[] = [
  {
    slug: "internet-domeny-dns",
    title: "Internet, Domeny i DNS",
    subtitle: "Podręcznik edukacyjny od podstaw",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
  },
  {
    slug: "pod-skora-systemu",
    title: "Pod skórą systemu",
    subtitle: "W głąb architektury komputerów",
    file: "/books/Pod skórą systemu.pdf",
  },
  {
    slug: "sztuczna-inteligencja",
    title: "Sztuczna inteligencja bez tajemnic",
    subtitle: "AI wyjaśniona przystępnie",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
  },
]
