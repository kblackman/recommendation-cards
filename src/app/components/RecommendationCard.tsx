import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Share2, CheckCircle } from "lucide-react";
import { CategoryBadge, BadgeType } from "./CategoryBadge";
import { Button } from "./Button";
import thumbsUpPath from "../../imports/PositiveFeedback/svg-1mxrnpaxhp";
import thumbsDownPath from "../../imports/NegativeFeedback/svg-vbbists0eh";

interface RecommendationCardProps {
  id: number;
  badgeType: BadgeType;
  title: string;
  recommendation: string;
  attributionModel: string;
  onClick: () => void;
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function LightbulbIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path
        d="M9.5 2.375C7.08375 2.375 5.125 4.33375 5.125 6.75C5.125 8.38 6.03125 9.7975 7.375 10.545V12.625C7.375 13.1083 7.76667 13.5 8.25 13.5H10.75C11.2333 13.5 11.625 13.1083 11.625 12.625V10.545C12.9688 9.7975 13.875 8.38 13.875 6.75C13.875 4.33375 11.9162 2.375 9.5 2.375Z"
        stroke="#2A3678"
        strokeWidth="1.58333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.125 14.25H11.875" stroke="#2A3678" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.916 17.417H11.083" stroke="#2A3678" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThumbsUpIcon({ selected, size = 18 }: { selected: boolean; size?: number }) {
  const stroke = selected ? "#15803D" : "var(--gray-500)";
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d={thumbsUpPath.p3cbf2030} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.25 7.5V16.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ThumbsDownIcon({ selected, size = 18 }: { selected: boolean; size?: number }) {
  const stroke = selected ? "#900F11" : "var(--gray-500)";
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path d={thumbsDownPath.pa286900} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.75 10.5V1.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Feedback Popover ─────────────────────────────────────────────────────────

const DOWN_REASONS = ["Not relevant", "Inaccurate", "Not actionable", "Other"] as const;
type DownReason = (typeof DOWN_REASONS)[number];

function FeedbackPopover({
  sentiment,
  anchorRef,
  onClose,
  onSubmit,
}: {
  sentiment: "up" | "down";
  anchorRef: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onSubmit: (reasons: string[], text: string) => void;
}) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [selectedReasons, setSelectedReasons] = useState<DownReason[]>([]);
  const [text, setText] = useState("");
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    if (anchorRef.current) {
      setAnchorRect(anchorRef.current.getBoundingClientRect());
    }
  }, [anchorRef]);

  // Click outside dismisses and confirms
  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    // Small delay so the opening click doesn't immediately close
    const t = setTimeout(() => {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("keydown", handleKey);
    }, 50);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  function toggleReason(reason: DownReason) {
    setSelectedReasons((prev) =>
      prev.includes(reason) ? prev.filter((r) => r !== reason) : [...prev, reason]
    );
  }

  if (!anchorRect) return null;

  const POPOVER_WIDTH = 264;
  const GAP = 8;
  // Position the popover's bottom edge just above the anchor button
  const bottomPx = window.innerHeight - anchorRect.top + GAP;
  // Left-align with the anchor; clamp so it doesn't bleed off screen
  const leftPx = Math.min(
    anchorRect.left,
    window.innerWidth - POPOVER_WIDTH - 12
  );

  const isUp = sentiment === "up";

  return ReactDOM.createPortal(
    <div
      ref={popoverRef}
      style={{
        position: "fixed",
        bottom: bottomPx,
        left: leftPx,
        width: POPOVER_WIDTH,
        zIndex: 500,
        background: "#fff",
        borderRadius: 8,
        border: "1px solid var(--gray-200)",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.14)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 16,
      }}
      // Prevent clicks inside from bubbling to the card
      onClick={(e) => e.stopPropagation()}
    >
      {/* Arrow pointing down */}
      <div
        style={{
          position: "absolute",
          bottom: -6,
          left: 16,
          width: 10,
          height: 6,
          overflow: "visible",
        }}
      >
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path d="M6 7L0 0H12L6 7Z" fill="#fff" />
          <path d="M0 0.5L6 6.5L12 0.5" stroke="var(--gray-200)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Header */}
      <p
        className="text-gray-800 text-[13px] leading-[20px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600 }}
      >
        {isUp ? "Thanks! Anything else you'd like to share?" : "What went wrong?"}
      </p>

      {/* Reason chips (thumbs down only) */}
      {!isUp && (
        <div className="flex flex-wrap gap-1.5">
          {DOWN_REASONS.map((reason) => {
            const active = selectedReasons.includes(reason);
            return (
              <button
                key={reason}
                onClick={() => toggleReason(reason)}
                className="cursor-pointer transition-colors"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "18px",
                  padding: "3px 10px",
                  borderRadius: 999,
                  border: active ? "1px solid #900F11" : "1px solid var(--gray-300)",
                  background: active ? "#fdeaea" : "#fff",
                  color: active ? "#900F11" : "var(--gray-700)",
                }}
              >
                {reason}
              </button>
            );
          })}
        </div>
      )}

      {/* Optional textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={isUp ? "Share your thoughts (optional)…" : "Anything else? (optional)…"}
        rows={3}
        className="rounded-[6px] border border-gray-300 px-3 py-2 text-[13px] leading-[20px] text-gray-800 outline-none resize-none transition-colors"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#3f51b5")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--gray-300)")}
      />

      {/* Submit */}
      <div className="flex justify-end">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onSubmit(selectedReasons, text.trim())}
        >
          Submit
        </Button>
      </div>
    </div>,
    document.body
  );
}

// ─── Main Card ────────────────────────────────────────────────────────────────

export function RecommendationCard({
  badgeType,
  title,
  recommendation,
  attributionModel,
  onClick,
}: RecommendationCardProps) {
  // "up" | "down" = locked choice; null = not yet voted
  const [lockedSentiment, setLockedSentiment] = useState<"up" | "down" | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  // true = permanently done, shows checkmark row
  const [confirmed, setConfirmed] = useState(false);

  const [isCardHovered, setIsCardHovered] = useState(false);

  const thumbUpRef = useRef<HTMLButtonElement>(null);
  const thumbDownRef = useRef<HTMLButtonElement>(null);

  function handleThumbClick(sentiment: "up" | "down", e: React.MouseEvent) {
    e.stopPropagation();
    if (confirmed || lockedSentiment) return;
    setLockedSentiment(sentiment);
    setPopoverOpen(true);
  }

  // Called when popover closes (click-outside OR submit)
  function handleConfirm() {
    setPopoverOpen(false);
    setConfirmed(true);
  }

  const activeRef = lockedSentiment === "up" ? thumbUpRef : thumbDownRef;

  return (
    <>
      <div
        className="bg-white rounded-[8px] border border-gray-300 flex flex-col p-8 cursor-pointer select-none"
        style={{
          position: "relative",
          transition: "transform 0.15s ease, box-shadow 0.15s ease",
          flex: "1 0 0",
          minWidth: 0,
        }}
        onMouseEnter={(e) => {
          setIsCardHovered(true);
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
        }}
        onMouseLeave={(e) => {
          setIsCardHovered(false);
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        }}
        onClick={onClick}
      >
        {/* Top: Badge left, attribution right — same row */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <CategoryBadge type={badgeType} />
            <div className="flex items-center gap-[5px] shrink-0">
              <Share2 size={12} color="var(--gray-400)" strokeWidth={1.5} />
              <span
                className="text-gray-500 text-[11px] leading-[16px] tracking-[0.2px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                {attributionModel} attribution
              </span>
            </div>
          </div>
          <p
            className="text-gray-800 text-[20px] leading-[28px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
          >
            {title}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom: Recommendation + Feedback */}
        <div className="flex flex-col gap-4 pt-6">
          {/* Recommendation box */}
          <div className="bg-[#f4f5fb] rounded-[6px] flex flex-col gap-2 pl-4 pr-2 py-4 w-full">
            <div className="flex items-center gap-[10px]">
              <div className="w-[19px] h-[19px] flex items-center justify-center shrink-0">
                <LightbulbIcon />
              </div>
              <span
                className="text-[#2a3678] text-[12px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
              >
                RECOMMENDATION
              </span>
            </div>
            <p
              className="text-gray-800 text-[14px] leading-[20px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
            >
              {recommendation}
            </p>
          </div>

          {/* Feedback row */}
          <div
            className="flex items-center justify-between"
            style={{ minHeight: 28 }}
          >
          <div onClick={(e) => e.stopPropagation()}>
            {confirmed ? (
              /* ── Step 3: permanent confirmation ── */
              <div className="flex items-center gap-1.5">
                <CheckCircle size={14} color="var(--gray-500)" strokeWidth={1.75} />
                <span
                  className="text-gray-500 text-[12px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Feedback received
                </span>
              </div>
            ) : lockedSentiment ? (
              /* ── Step 1b: locked, only selected thumb shown ── */
              <div className="flex items-center gap-2">
                <span
                  className="text-gray-500 text-[12px] leading-[20px] mr-0.5"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Was this useful?
                </span>
                {lockedSentiment === "up" ? (
                  <button
                    ref={thumbUpRef}
                    className="flex items-center justify-center w-7 h-7 cursor-default"
                    style={{
                      borderRadius: 6,
                      backgroundColor: "#dcfce7",
                      border: "none",
                      padding: "5px",
                    }}
                  >
                    <ThumbsUpIcon selected size={18} />
                  </button>
                ) : (
                  <button
                    ref={thumbDownRef}
                    className="flex items-center justify-center w-7 h-7 cursor-default"
                    style={{
                      borderRadius: 6,
                      backgroundColor: "#fdeaea",
                      border: "none",
                      padding: "5px",
                    }}
                  >
                    <ThumbsDownIcon selected size={18} />
                  </button>
                )}
              </div>
            ) : (
              /* ── Step 1a: initial state, both thumbs ── */
              <div className="flex items-center">
                <span
                  className="text-gray-500 text-[12px] leading-[20px] mr-2"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  Was this useful?
                </span>

                <button
                  ref={thumbUpRef}
                  className="flex items-center justify-center w-7 h-7 cursor-pointer transition-colors"
                  style={{
                    borderRadius: 6,
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "5px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--gray-200)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
                  }
                  onClick={(e) => handleThumbClick("up", e)}
                  title="Yes, useful"
                >
                  <ThumbsUpIcon selected={false} />
                </button>

                <button
                  ref={thumbDownRef}
                  className="flex items-center justify-center w-7 h-7 cursor-pointer transition-colors"
                  style={{
                    borderRadius: 6,
                    backgroundColor: "transparent",
                    border: "none",
                    padding: "5px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--gray-200)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent")
                  }
                  onClick={(e) => handleThumbClick("down", e)}
                  title="Not useful"
                >
                  <ThumbsDownIcon selected={false} />
                </button>
              </div>
            )}
          </div>

            {/* View details affordance */}
            <div
              className="flex items-center gap-[4px] shrink-0"
              style={{
                opacity: isCardHovered ? 1 : 0,
                transition: "opacity 0.15s ease",
                pointerEvents: "none",
              }}
            >
              <span
                className="text-[12px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, color: "#3f51b5" }}
              >
                View details
              </span>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5H10.5M7 3L10.5 6.5L7 10" stroke="#3f51b5" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Step 2: Feedback popover ── */}
      {popoverOpen && lockedSentiment && (
        <FeedbackPopover
          sentiment={lockedSentiment}
          anchorRef={activeRef}
          onClose={handleConfirm}
          onSubmit={(_reasons, _text) => handleConfirm()}
        />
      )}
    </>
  );
}