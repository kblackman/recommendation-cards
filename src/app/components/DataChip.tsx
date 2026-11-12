import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Target, Milestone, DollarSign, MousePointerClick } from "lucide-react";

export type ChipType = "low-funnel" | "mid-funnel" | "ad-spend" | "touches";

const CHIP_CONFIG: Record<
  ChipType,
  {
    label: string;
    tooltip: React.ReactNode;
    Icon: React.FC<{ size: number; strokeWidth?: number }>;
  }
> = {
  "low-funnel": {
    label: "Low-funnel events",
    tooltip: (
      <>
        An action that shows a user has moved from awareness into active consideration, but has not yet converted. You defined this in the <strong>Manage Conversions</strong> section.
      </>
    ),
    Icon: Target,
  },
  "mid-funnel": {
    label: "Mid-funnel events",
    tooltip: (
      <>
        The closest measurable step to actual revenue impact. It's an action that represents clear commitment to receiving care, enrolling in a service, or initiating treatment. You defined this in the <strong>Manage Conversions</strong> section.
      </>
    ),
    Icon: Milestone,
  },
  "ad-spend": {
    label: "Ad spend data",
    tooltip: "Data on dollars spent on paid marketing channels.",
    Icon: DollarSign,
  },
  touches: {
    label: "Touches data",
    tooltip:
      "Data on views and/or clicks coming to landing pages from paid marketing channels.",
    Icon: MousePointerClick,
  },
};

export function DataChip({ type, eventNames, disableTooltip }: { type: ChipType; eventNames?: string[]; disableTooltip?: boolean }) {
  const { label, tooltip, Icon } = CHIP_CONFIG[type];

  // For funnel chips, override tooltip with actual event names when provided
  const resolvedTooltip: React.ReactNode =
    eventNames && eventNames.length > 0 && (type === "mid-funnel" || type === "low-funnel") ? (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {eventNames.map((name) => (
          <div key={name} style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
            <span style={{ opacity: 0.6, flexShrink: 0 }}>•</span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    ) : tooltip;

  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
    setVisible(true);
  }

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={disableTooltip ? undefined : handleMouseEnter}
        onMouseLeave={disableTooltip ? undefined : () => setVisible(false)}
        className="inline-flex items-center gap-[4px] px-[8px] py-[4px] rounded-full shrink-0 cursor-pointer"
        style={{
          background: "var(--gray-100)",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "16px",
          color: "var(--gray-600)",
        }}
      >
        <Icon size={14} strokeWidth={1.5} />
        <span>{label}</span>
      </div>

      {!disableTooltip && visible &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -100%)",
              zIndex: 99999,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                background: "#1e2125",
                color: "#fff",
                borderRadius: 6,
                padding: "8px 12px",
                maxWidth: 260,
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "18px",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
                textAlign: "left",
              }}
            >
              {resolvedTooltip}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "5px solid #1e2125",
                }}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}