export interface Book {
  slug: string
  title: string
  subtitle: string
  file: string
  pages: number
  sizeBytes: number
  description: string
}

export const books: Book[] = [
  {
    slug: "internet-domeny-dns",
    title: "Internet, Domeny i DNS",
    subtitle: "Podręcznik edukacyjny od podstaw",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
    pages: 72,
    sizeBytes: 2526253,
    description:
      "Przystępny przewodnik po fundamentach cyfrowego świata, stworzony z myślą o osobach, które chcą zrozumieć mechanizmy rządzące siecią bez zagłębiania się w trudny żargon techniczny. Książka wyjaśnia, w jaki sposób zapytania użytkowników podróżują przez fizyczną infrastrukturę kabli i światłowodów do serwerów. Czytelnik dowie się z niej, czym dokładnie są domeny i system DNS, jak działają strony internetowe oraz jak zadbać o bezpieczeństwo online poprzez silne hasła i kopię zapasową. Podręcznik zawiera również praktyczne przykłady zakupu domeny i konfiguracji hostingu, co czyni go idealnym startem dla każdego cyfrowego nowicjusza.",
  },
  {
    slug: "pod-skora-systemu",
    title: "Pod skórą systemu",
    subtitle: "Przewodnik po terminalu dla Windows i macOS",
    file: "/books/Pod skórą systemu.pdf",
    pages: 145,
    sizeBytes: 1402397,
    description:
      "Praktyczny przewodnik po terminalu dla użytkowników systemów Windows i macOS, który pozwala odczarować czarny ekran z migającym kursorem. Książka uczy, jak zarządzać plikami i folderami bez użycia myszki, diagnozować problemy z siecią oraz tworzyć pierwsze skrypty automatyzujące powtarzalne czynności. Autor wyjaśnia różnice między powłokami takimi jak CMD i PowerShell, a także wprowadza w świat nowoczesnych narzędzi, takich jak menedżery pakietów (Winget, Homebrew) czy system kontroli wersji Git. To pozycja dla osób, które chcą pracować szybciej i lepiej rozumieć działanie swojego komputera.",
  },
  {
    slug: "sztuczna-inteligencja",
    title: "Sztuczna inteligencja bez tajemnic",
    subtitle: "AI wyjaśniona przystępnie",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
    pages: 144,
    sizeBytes: 1306347,
    description:
      "Kompleksowy poradnik, który w klarowny sposób wyjaśnia świat współczesnej sztucznej inteligencji – od jej historycznych początków po najnowsze modele językowe (LLM). Książka rozplątuje zawiłą terminologię (AI, ML, DL) i uczy, jak skutecznie rozmawiać z modelami takimi jak ChatGPT czy Claude za pomocą technik prompt engineeringu. Unikalną cechą podręcznika jest instrukcja uruchamiania lokalnych modeli AI na własnym komputerze przy użyciu narzędzi takich jak Ollama czy LM Studio, co pozwala na korzystanie z technologii bez internetu i z pełną prywatnością danych. To obowiązkowa lektura dla każdego, kto chce świadomie korzystać z rewolucji AI.",
  },
]
