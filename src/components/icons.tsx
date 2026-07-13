export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className={className ?? "fill-[var(--text-dim)] transition-colors hover:fill-[var(--amber)]"} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
    </svg>
  );
}

export function PlFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" className={className ?? "inline-block rounded-sm"} aria-hidden="true">
      <rect width="24" height="8" fill="#fff" />
      <rect y="8" width="24" height="8" fill="#dc143c" />
    </svg>
  );
}

export function EnFlag({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" className={className ?? "inline-block rounded-sm"} aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16m0-16L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l24 16m0-16L0 16" stroke="#c8102e" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#c8102e" strokeWidth="2.5" />
    </svg>
  );
}
