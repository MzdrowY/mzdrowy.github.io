export interface Book {
  slug: string
  titlePl: string
  titleEn: string
  subtitlePl: string
  subtitleEn: string
  file: string
  pages: number
  sizeBytes: number
  descriptionPl: string
  descriptionEn: string
}

export function bookLocale(book: Book, locale: string) {
  return {
    ...book,
    title: locale === "en" ? book.titleEn : book.titlePl,
    subtitle: locale === "en" ? book.subtitleEn : book.subtitlePl,
    description: locale === "en" ? book.descriptionEn : book.descriptionPl,
  };
}

export const books: Book[] = [
  {
    slug: "internet-domeny-dns",
    titlePl: "Internet, Domeny i DNS",
    titleEn: "Internet, Domains & DNS",
    subtitlePl: "Podręcznik edukacyjny od podstaw",
    subtitleEn: "An educational guide from the ground up",
    file: "/books/Internet, Domeny i DNS – Podręcznik edukacyjny od podstaw.pdf",
    pages: 72,
    sizeBytes: 2526253,
    descriptionPl:
      "Przystępny przewodnik po fundamentach cyfrowego świata, stworzony z myślą o osobach, które chcą zrozumieć mechanizmy rządzące siecią bez zagłębiania się w trudny żargon techniczny. Książka wyjaśnia, w jaki sposób zapytania użytkowników podróżują przez fizyczną infrastrukturę kabli i światłowodów do serwerów. Czytelnik dowie się z niej, czym dokładnie są domeny i system DNS, jak działają strony internetowe oraz jak zadbać o bezpieczeństwo online poprzez silne hasła i kopię zapasową. Podręcznik zawiera również praktyczne przykłady zakupu domeny i konfiguracji hostingu, co czyni go idealnym startem dla każdego cyfrowego nowicjusza.",
    descriptionEn:
      "A beginner-friendly guide to the foundations of the digital world, designed for anyone who wants to understand how the internet works without wading through technical jargon. This book explains how user requests travel through cables and fiber optics to servers, what domains and DNS actually are, how websites work, and how to stay safe online with strong passwords and backups. It includes practical examples of buying a domain and setting up hosting, making it the perfect starting point for any digital newcomer.",
  },
  {
    slug: "pod-skora-systemu",
    titlePl: "Pod skórą systemu",
    titleEn: "Under the Hood of Your OS",
    subtitlePl: "Przewodnik po terminalu dla Windows i macOS",
    subtitleEn: "A terminal guide for Windows and macOS",
    file: "/books/Pod skórą systemu.pdf",
    pages: 145,
    sizeBytes: 1402397,
    descriptionPl:
      "Praktyczny przewodnik po terminalu dla użytkowników systemów Windows i macOS, który pozwala odczarować czarny ekran z migającym kursorem. Książka uczy, jak zarządzać plikami i folderami bez użycia myszki, diagnozować problemy z siecią oraz tworzyć pierwsze skrypty automatyzujące powtarzalne czynności. Autor wyjaśnia różnice między powłokami takimi jak CMD i PowerShell, a także wprowadza w świat nowoczesnych narzędzi, takich jak menedżery pakietów (Winget, Homebrew) czy system kontroli wersji Git. To pozycja dla osób, które chcą pracować szybciej i lepiej rozumieć działanie swojego komputera.",
    descriptionEn:
      "A practical terminal guide for Windows and macOS users that demystifies the black screen with a blinking cursor. Learn to manage files and folders without a mouse, diagnose network issues, and write your first automation scripts. The book explains the differences between CMD and PowerShell, and introduces modern tools like package managers (Winget, Homebrew) and Git version control. Perfect for anyone who wants to work faster and understand their computer better.",
  },
  {
    slug: "sztuczna-inteligencja",
    titlePl: "Sztuczna inteligencja bez tajemnic",
    titleEn: "Artificial Intelligence Unpacked",
    subtitlePl: "AI wyjaśniona przystępnie",
    subtitleEn: "AI explained in plain language",
    file: "/books/Sztuczna inteligencja bez tajemnic.pdf",
    pages: 144,
    sizeBytes: 1306347,
    descriptionPl:
      "Kompleksowy poradnik, który w klarowny sposób wyjaśnia świat współczesnej sztucznej inteligencji – od jej historycznych początków po najnowsze modele językowe (LLM). Książka rozplątuje zawiłą terminologię (AI, ML, DL) i uczy, jak skutecznie rozmawiać z modelami takimi jak ChatGPT czy Claude za pomocą technik prompt engineeringu. Unikalną cechą podręcznika jest instrukcja uruchamiania lokalnych modeli AI na własnym komputerze przy użyciu narzędzi takich jak Ollama czy LM Studio, co pozwala na korzystanie z technologii bez internetu i z pełną prywatnością danych. To obowiązkowa lektura dla każdego, kto chce świadomie korzystać z rewolucji AI.",
    descriptionEn:
      "A comprehensive guide that clearly explains the world of modern artificial intelligence — from its historical roots to the latest large language models (LLMs). The book untangles confusing terminology (AI, ML, DL) and teaches you how to talk effectively with models like ChatGPT and Claude using prompt engineering techniques. A unique feature is the step-by-step guide to running local AI models on your own computer with Ollama or LM Studio — no internet required, full privacy. Essential reading for anyone who wants to use the AI revolution consciously.",
  },
  {
    slug: "mam-strone-i-co-dalej",
    titlePl: "Mam stronę i co dalej",
    titleEn: "I Have a Website, Now What",
    subtitlePl: "Praktyczny poradnik dla właścicieli stron internetowych",
    subtitleEn: "A practical guide for website owners",
    file: "/books/Mam stronę i co dalej.pdf",
    pages: 56,
    sizeBytes: 1614211,
    descriptionPl:
      "Praktyczny poradnik dla właścicieli stron internetowych, którzy nie wiedzą od czego zacząć promocję w sieci. Książka prowadzi krok po kroku przez SEO, Google Search Console, social media, content marketing, email marketing i analitykę — bez zbędnej teorii i z planem na pierwsze 90 dni. 56 stron konkretnych instrukcji i narzędzi, które pozwolą Ci zrozumieć jak działa promocja w internecie i zrobić ją samodzielnie.",
    descriptionEn:
      "A practical guide for website owners who don't know where to start with online promotion. Step by step through SEO, Google Search Console, social media, content marketing, email marketing, and analytics — no fluff, with a 90-day action plan. 56 pages of concrete instructions and tools to help you understand how online promotion works and do it yourself.",
  },
]
