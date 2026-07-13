"use client";

export function TrackedDownload({ href, label, slug }: { href: string; label: string; slug: string }) {
  const handleClick = () => {
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/mzdrowy-program-${slug}`).catch(() => {});
    fetch(`https://countapi.mileshilliard.com/api/v1/hit/mzdrowy-total-downloads`).catch(() => {});
  };

  return (
    <a
      href={href}
      download
      onClick={handleClick}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-mono text-[var(--amber)] border border-[var(--amber-dim)] rounded-lg hover:bg-[var(--surface-2)] transition-colors"
    >
      {label}
    </a>
  );
}
