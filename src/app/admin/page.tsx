import type { Metadata } from "next";
import AdminForm from "./admin-form";
import { Nav } from "@/components/nav";
import Script from "next/script";
import { VisitTracker } from "@/components/visit-tracker";

export const metadata: Metadata = {
  title: "Panel administracyjny",
  description: "Panel administracyjny MzdrowY",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
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
      <Nav locale="pl" />
      <VisitTracker />
      <Script async defer src="https://somehow-listings-analysis-velvet.trycloudflare.com/script.js" data-website-id="26de6bdf-4239-4e30-b855-83f4160b3bbf" strategy="afterInteractive" />
      <main className="wrap">
        <section className="hero" style={{ borderTop: "none" }}>
          <AdminForm />
        </section>
      </main>
      <footer>
        <div className="wrap foot-row">
          <span>&copy; {new Date().getFullYear()} MzdrowY</span>
          <a href="mailto:mzdrowy@gmail.com">mzdrowy@gmail.com</a>
          <a href="/admin.html">Panel</a>
        </div>
      </footer>
    </>
  );
}
