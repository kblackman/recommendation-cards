import React, { useState, useRef, useEffect, useCallback } from "react";
import { EVENT_SCENARIOS, FunnelVariant } from "./InsightDrawer";

export type CardState = "cards" | "promo" | "events" | "waiting" | "empty" | "error";

const FUNNEL_VARIANTS: { id: FunnelVariant; label: string; desc: string }[] = [
  { id: "A", label: "A · Widget",   desc: "Expandable, tabbed, searchable" },
  { id: "B", label: "B · Inline",   desc: "Sentence with click-to-open panel" },
];

const STATES: { id: CardState; label: string }[] = [
  { id: "promo",   label: "Promo"   },
  { id: "events",  label: "Events"  },
  { id: "waiting", label: "Waiting" },
  { id: "cards",   label: "Cards"   },
  { id: "empty",   label: "Empty"   },
  { id: "error",   label: "Error"   },
];

interface DevUtilityProps {
  current: CardState;
  onChange: (state: CardState) => void;
  scenarioIdx: number | null;
  onScenarioChange: (idx: number | null) => void;
  funnelVariant: FunnelVariant;
  onFunnelVariantChange: (v: FunnelVariant) => void;
  onHide: () => void;
}

export function DevUtility({ current, onChange, scenarioIdx, onScenarioChange, funnelVariant, onFunnelVariantChange, onHide }: DevUtilityProps) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === "BUTTON") return;
    if (e.button !== 0) return;
    dragging.current = true;
    const rect = panelRef.current!.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    e.preventDefault();
  }, []);

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragging.current) return;
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    }
    function onMouseUp() { dragging.current = false; }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const panelStyle: React.CSSProperties = pos
    ? { position: "fixed", left: pos.x, top: pos.y, zIndex: 9000, fontFamily: "'Roboto', sans-serif" }
    : { position: "fixed", bottom: 24, left: 264, zIndex: 9000, fontFamily: "'Roboto', sans-serif" };

  return (
    <div ref={panelRef} style={panelStyle} onMouseDown={onMouseDown}>
      <div
        style={{
          background: "#1a1f26",
          borderRadius: 10,
          boxShadow: "0 4px 20px rgba(0,0,0,0.28)",
          padding: "10px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          minWidth: 0,
          cursor: "grab",
          userSelect: "none",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <path
              d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
              stroke="#6d7783"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#6d7783",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              userSelect: "none",
              flex: 1,
            }}
          >
            Page States
          </span>
          <button
            onClick={onHide}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: 10,
              fontWeight: 500,
              color: "#4a5260",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "1px 4px",
              borderRadius: 4,
              letterSpacing: "0.4px",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#6d7783"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#4a5260"; }}
          >
            Hide
          </button>
        </div>

        {/* State buttons */}
        <div style={{ display: "flex", gap: 4 }}>
          {STATES.map(({ id, label }) => {
            const active = current === id;
            return (
              <button
                key={id}
                onClick={() => onChange(id)}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 11,
                  fontWeight: active ? 600 : 400,
                  padding: "4px 9px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                  background: active ? "#3f51b5" : "rgba(255,255,255,0.07)",
                  color: active ? "#ffffff" : "#a3acb7",
                  letterSpacing: active ? "0.1px" : 0,
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 -2px" }} />

        {/* Scenario label */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#6d7783" strokeWidth="2" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#6d7783" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#6d7783",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            Data Volume Scale
          </span>
        </div>

        {/* Scenario buttons */}
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {EVENT_SCENARIOS.map((s, i) => {
            const active = scenarioIdx === i;
            return (
              <button
                key={s.label}
                onClick={() => onScenarioChange(active ? null : i)}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 11,
                  fontWeight: active ? 600 : 400,
                  padding: "4px 9px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                  background: active ? "#3f51b5" : "rgba(255,255,255,0.07)",
                  color: active ? "#ffffff" : "#a3acb7",
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                {s.label}
                <span style={{ opacity: 0.55, fontSize: 10 }}>{s.sublabel}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 -2px" }} />

        {/* Funnel display variant label */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="#6d7783" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#6d7783",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            Events Display
          </span>
        </div>

        {/* Funnel variant buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {FUNNEL_VARIANTS.map(({ id, label, desc }) => {
            const active = funnelVariant === id;
            return (
              <button
                key={id}
                onClick={() => onFunnelVariantChange(id)}
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: 11,
                  fontWeight: active ? 600 : 400,
                  padding: "5px 9px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.12s ease",
                  background: active ? "#3f51b5" : "rgba(255,255,255,0.07)",
                  color: active ? "#ffffff" : "#a3acb7",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                <span style={{ minWidth: 60 }}>{label}</span>
                <span style={{ opacity: 0.5, fontSize: 10, fontWeight: 400 }}>{desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
