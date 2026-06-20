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
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-cyan-600 px-6 py-3 text-sm font-medium text-white transition-all hover:from-green-500 hover:to-cyan-500 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]"
    >
      {label}
    </a>
  );
}
