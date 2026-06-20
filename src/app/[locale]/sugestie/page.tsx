import type { Metadata } from "next";
import { type Locale, t } from "@/lib/i18n";
import { SugestieForm } from "@/components/sugestie-form";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  return {
    title: t(l, "sugestie.title"),
    description: t(l, "sugestie.description"),
    alternates: {
      canonical: `/${locale}/sugestie`,
      languages: {
        "pl-PL": "/pl/sugestie",
        "en-US": "/en/sugestie",
        "x-default": "/pl/sugestie",
      },
    },
  };
}

export default async function SugestiePage({ params }: Props) {
  const { locale } = await params;
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold tracking-tight gradient-text">{t(locale as Locale, "sugestie.title")}</h1>
      <SugestieForm locale={locale} />
    </div>
  );
}
