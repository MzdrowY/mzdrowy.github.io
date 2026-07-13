import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Nav } from "@/components/nav";
import { VisitTracker } from "@/components/visit-tracker";
import "../new-design.css";
import { t, type Locale } from "@/lib/i18n";

const UMAMI_SRC = "https://somehow-listings-analysis-velvet.trycloudflare.com/script.js";
const UMAMI_ID = "26de6bdf-4239-4e30-b855-83f4160b3bbf";

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
        "x-default": "/pl",
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
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  themeColor: "#191d22",
};

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;

  return (
    <>
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
      <Script async defer src={UMAMI_SRC} data-website-id={UMAMI_ID} strategy="afterInteractive" />
      <main className="wrap">{children}</main>
      <footer>
        <div className="wrap foot-row">
          <span>&copy; {new Date().getFullYear()} MzdrowY</span>
          <a href={`mailto:${t(locale as Locale, "site.email")}`}>{t(locale as Locale, "site.email")}</a>
          <a href="/admin.html">{t(locale as Locale, "site.admin")}</a>
        </div>
      </footer>
    </>
  );
}
