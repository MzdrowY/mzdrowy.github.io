import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { VisitTracker } from "@/components/visit-tracker";
import { t, type Locale } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = { params: Promise<{ locale: string }>; children: React.ReactNode };

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  return {
    title: { default: t(l, "site.title"), template: t(l, "site.template") },
    description: t(l, "site.description"),
    metadataBase: new URL("https://mzdrowy.github.io"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "pl-PL": "/pl",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: t(l, "site.title"),
      description: t(l, "site.description"),
      url: `https://mzdrowy.github.io/${locale}`,
      siteName: "MzdrowY",
      locale: t(l, "site.locale"),
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MzdrowY" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t(l, "site.title"),
      description: t(l, "site.description"),
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
    icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  };
}

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col bg-zinc-950 text-zinc-100 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                { "@type": "WebSite", name: "MzdrowY", url: "https://mzdrowy.github.io" },
                { "@type": "Person", name: "Maciej Zdrowowicz", url: "https://mzdrowy.github.io" },
              ],
            }),
          }}
        />
        <Nav locale={locale} />
        <VisitTracker />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} {t(locale as Locale, "site.copyright")}</p>
          <p className="mt-1"><a href={`mailto:${t(locale as Locale, "site.email")}`} className="hover:text-zinc-300 transition-colors">{t(locale as Locale, "site.email")}</a></p>
          <p className="mt-2"><a href={`/admin`} className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">{t(locale as Locale, "site.admin")}</a></p>
        </footer>
      </body>
    </html>
  );
}
