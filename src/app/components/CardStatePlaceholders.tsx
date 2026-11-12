import React, { useEffect, useState } from "react";

// ─── Shared wrapper ───────────────────────────────────────────────────────────
function StateShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full rounded-[12px] border border-[#c9ced4] bg-white flex items-center justify-center"
      style={{ minHeight: 200 }}
    >
      {children}
    </div>
  );
}

// ─── Events ───────────────────────────────────────────────────────────────────
export function EventsState() {
  return (
    <StateShell>
      <div className="flex flex-col items-center gap-3 py-10 px-8 text-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#a3acb7" strokeWidth="1.5" />
          <path d="M3 9h18" stroke="#a3acb7" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 2v3M16 2v3" stroke="#a3acb7" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8.5" cy="14" r="1" fill="#a3acb7" />
          <circle cx="12" cy="14" r="1" fill="#a3acb7" />
          <circle cx="15.5" cy="14" r="1" fill="#a3acb7" />
        </svg>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, color: "#1e2125" }}>
          No events this week
        </p>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 13, color: "#6d7783", maxWidth: 300 }}>
          There are no tracked events scheduled for the current window. Check back once events are configured.
        </p>
      </div>
    </StateShell>
  );
}

// ─── Waiting ──────────────────────────────────────────────────────────────────
function Spinner() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ animation: "spin 0.9s linear infinite" }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="16" cy="16" r="13" stroke="#e1e4f4" strokeWidth="3" />
      <path d="M16 3a13 13 0 0 1 13 13" stroke="#3f51b5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function WaitingState() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const t = setInterval(() => setDots((d) => (d.length >= 3 ? "." : d + ".")), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <StateShell>
      <div className="flex flex-col items-center gap-4 py-10">
        <Spinner />
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 14, color: "#6d7783", minWidth: 120, textAlign: "center" }}>
          Generating insights{dots}
        </p>
      </div>
    </StateShell>
  );
}

// ─── Empty ────────────────────────────────────────────────────────────────────
export function EmptyState() {
  return (
    <StateShell>
      <div className="flex flex-col items-center gap-3 py-10 px-8 text-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#c9ced4" strokeWidth="1.5" />
          <path d="M9 9h.01M15 9h.01" stroke="#c9ced4" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 14.5h6" stroke="#c9ced4" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, color: "#1e2125" }}>
          No recommendations yet
        </p>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 13, color: "#6d7783", maxWidth: 300 }}>
          There's not enough data to generate recommendations for this period. Try widening your date range or check back next week.
        </p>
      </div>
    </StateShell>
  );
}

// ─── Error ────────────────────────────────────────────────────────────────────
export function ErrorState() {
  return (
    <StateShell>
      <div className="flex flex-col items-center gap-3 py-10 px-8 text-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#e81c1f" strokeWidth="1.5" opacity="0.5" />
          <path d="M12 8v4" stroke="#e81c1f" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="12" cy="15.5" r="0.875" fill="#e81c1f" />
        </svg>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 16, color: "#1e2125" }}>
          Something went wrong
        </p>
        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 13, color: "#6d7783", maxWidth: 300 }}>
          We couldn't load your weekly recommendations. Please refresh the page or try again shortly.
        </p>
        <button
          style={{
            marginTop: 4,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 13,
            color: "#3f51b5",
            background: "transparent",
            border: "1px solid #3f51b5",
            borderRadius: 6,
            padding: "6px 16px",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </StateShell>
  );
}
