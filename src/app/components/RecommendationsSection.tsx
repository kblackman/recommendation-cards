import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { RecommendationCard } from "./RecommendationCard";
import { InsightDrawerData } from "./InsightDrawer";
import { BadgeType } from "./CategoryBadge";

// ── Updated pill ─────────────────────────────────────────────────────────────

function UpdatedPill() {
  const [tipVisible, setTipVisible] = useState(false);
  const [tipPos, setTipPos] = useState({ top: 0, left: 0 });
  const pillRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    if (pillRef.current) {
      const rect = pillRef.current.getBoundingClientRect();
      setTipPos({ top: rect.top - 8, left: rect.left + rect.width / 2 });
    }
    setTipVisible(true);
  }

  return (
    <div
      ref={pillRef}
      className="flex items-center gap-[6px] px-3 py-[5px] rounded-full shrink-0"
      style={{ background: "#fff", border: "1px solid var(--gray-200)", cursor: "pointer" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setTipVisible(false)}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#249980", flexShrink: 0, display: "inline-block" }} />
      <span
        className="text-[12px] leading-[16px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, color: "var(--gray-800)" }}
      >
        Updated Mon, May 4th.
      </span>
      <button
        style={{ background: "none", border: "none", padding: 0, lineHeight: 0, cursor: "pointer", display: "flex", alignItems: "center" }}
        aria-label="Update cadence information"
        tabIndex={-1}
      >
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.83" stroke="var(--gray-400)" strokeWidth="1.167" />
          <path d="M7 9.33V7" stroke="var(--gray-400)" strokeWidth="1.167" strokeLinecap="round" />
          <path d="M7 4.67H7.006" stroke="var(--gray-400)" strokeWidth="1.167" strokeLinecap="round" />
        </svg>
      </button>

      {tipVisible && ReactDOM.createPortal(
        <div
          style={{
            position: "fixed",
            top: tipPos.top,
            left: tipPos.left,
            transform: "translate(-50%, -100%)",
            zIndex: 99999,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "var(--gray-800)",
              color: "#fff",
              borderRadius: 6,
              padding: "8px 12px",
              maxWidth: 220,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "18px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
              whiteSpace: "normal",
              textAlign: "center",
            }}
          >
            Recommendations refresh every Monday morning based on your latest attribution data.
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid var(--gray-800)" }} />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// ── Card pool ────────────────────────────────────────────────────────────────

export interface CardDef {
  id: number;
  badgeType: BadgeType;
  title: string;
  recommendation: string;
  attributionModel: string;
}

export const ALL_RECOMMENDATION_CARDS: CardDef[] = [
  {
    id: 1,
    badgeType: "channel-performance",
    title: "BT-F6 volume dropped 87% from peak — four consecutive weeks of decline",
    recommendation:
      "Investigate Google Ads changes made around Mar 23 causing the volume decline.",
    attributionModel: "Last-touch",
  },
  {
    id: 2,
    badgeType: "funnel-journey",
    title: "Google Ads delivers a strong $139 acquisition cost but mid-funnel softness signals future pressure",
    recommendation:
      "Stabilize Google Ads BT-F1 volume to protect downstream BT-F6 output.",
    attributionModel: "First-touch",
  },
  {
    id: 3,
    badgeType: "budget",
    title: "Meta Ads accounts for 44% of spend but only 3% of BT-F6 events",
    recommendation:
      "Cut Meta Ads budget by 50% and shift savings to Google Ads.",
    attributionModel: "Linear",
  },
  {
    id: 4,
    badgeType: "efficiency-gap",
    title:
      "Display campaigns show high impression volume but sub-1% conversion rate",
    recommendation:
      "Pause underperforming display ad sets and reallocate budget to Search.",
    attributionModel: "Last-touch",
  },
  {
    id: 5,
    badgeType: "channel-win",
    title:
      "Email nurture sequences close 18% of leads originated by paid search",
    recommendation:
      "Expand email nurture to Bing-originated leads to leverage the cross-channel assist.",
    attributionModel: "Linear",
  },
  {
    id: 6,
    badgeType: "efficiency-gap",
    title:
      "YouTube pre-roll has zero attributable conversions in the last 30 days",
    recommendation:
      "Pause YouTube pre-roll and shift budget to proven bottom-funnel channels.",
    attributionModel: "First-touch",
  },
  {
    id: 7,
    badgeType: "channel-win",
    title:
      "Organic Search drives 24% of first-touch attribution at zero variable cost",
    recommendation:
      "Invest in SEO content targeting high-converting ortho keywords.",
    attributionModel: "First-touch",
  },
];

const CARDS_PER_PAGE = 3;

// ── Badge pill for context menu ───────────────────────────────────────────────

const BADGE_COLORS: Record<BadgeType, { bg: string; text: string }> = {
  "channel-win":    { bg: "#DEF7F2", text: "#249980" },
  "efficiency-gap": { bg: "#FEF3CD", text: "#B07D00" },
  "multi-channel":  { bg: "#EDE9FE", text: "#7C3AED" },
};

function MenuBadgePill({ type }: { type: BadgeType }) {
  const c = BADGE_COLORS[type] ?? BADGE_COLORS["channel-win"];
  const label =
    type === "channel-win"
      ? "Channel Win"
      : type === "efficiency-gap"
      ? "Efficiency Gap"
      : "Multi-Channel";
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        borderRadius: 100,
        padding: "2px 8px",
        fontSize: 11,
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}

// ── Context menu (portal) ─────────────────────────────────────────────────────

interface ContextMenuProps {
  x: number;
  y: number;
  cards: CardDef[];
  pendingIds: Set<number>;
  onToggle: (id: number) => void;
  onApply: () => void;
  onCancel: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>;
}

function ContextMenu({
  x,
  y,
  cards,
  pendingIds,
  onToggle,
  onApply,
  onCancel,
  menuRef,
}: ContextMenuProps) {
  const menuWidth = 340;
  const menuHeight = cards.length * 48 + 130; // rough estimate

  // Clamp to viewport
  const left = Math.min(x, window.innerWidth - menuWidth - 12);
  const top  = Math.min(y, window.innerHeight - menuHeight - 12);

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        ref={menuRef}
        key="ctx-menu"
        initial={{ opacity: 0, scale: 0.96, y: -4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -4 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        style={{
          position: "fixed",
          left,
          top,
          width: menuWidth,
          zIndex: 99999,
          background: "#1e2125",
          borderRadius: 10,
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.36), 0 2px 8px rgba(0,0,0,0.2)",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "14px 16px 10px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Customize Insight Cards
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: 11,
              color: "rgba(255,255,255,0.45)",
              margin: "3px 0 0",
            }}
          >
            Select which insights to show. Right-click anytime to reopen.
          </p>
        </div>

        {/* Card list */}
        <div style={{ padding: "6px 0" }}>
          {cards.map((card) => {
            const checked = pendingIds.has(card.id);
            const shortTitle =
              card.title.length > 52
                ? card.title.slice(0, 52) + "…"
                : card.title;
            return (
              <button
                key={card.id}
                onClick={() => onToggle(card.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 16px",
                  background: checked
                    ? "rgba(255,255,255,0.07)"
                    : "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    checked
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.04)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    checked ? "rgba(255,255,255,0.07)" : "transparent")
                }
              >
                {/* Checkbox */}
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 4,
                    border: checked
                      ? "none"
                      : "1.5px solid rgba(255,255,255,0.3)",
                    background: checked ? "#3f51b5" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.12s",
                  }}
                >
                  {checked && <Check size={10} color="#fff" strokeWidth={3} />}
                </div>

                {/* Title */}
                <span
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.85)",
                    flex: 1,
                    lineHeight: "16px",
                  }}
                >
                  {shortTitle}
                </span>

                {/* Badge */}
                <MenuBadgePill type={card.badgeType} />
              </button>
            );
          })}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: "10px 16px 14px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
          }}
        >
          <button
            onClick={onCancel}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: "rgba(255,255,255,0.5)",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 6,
              padding: "5px 14px",
              cursor: "pointer",
              transition: "all 0.1s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.8)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "rgba(255,255,255,0.5)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.15)";
            }}
          >
            Cancel
          </button>
          <button
            onClick={onApply}
            disabled={pendingIds.size === 0}
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              color: pendingIds.size === 0 ? "rgba(255,255,255,0.3)" : "#fff",
              background:
                pendingIds.size === 0
                  ? "rgba(63,81,181,0.3)"
                  : "#3f51b5",
              border: "none",
              borderRadius: 6,
              padding: "5px 14px",
              cursor: pendingIds.size === 0 ? "not-allowed" : "pointer",
              transition: "all 0.1s",
            }}
            onMouseEnter={(e) => {
              if (pendingIds.size > 0)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#5c6bc0";
            }}
            onMouseLeave={(e) => {
              if (pendingIds.size > 0)
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#3f51b5";
            }}
          >
            Apply ({pendingIds.size})
          </button>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

interface RecommendationsSectionProps {
  visibleIds: number[];
  onVisibleIdsChange: (ids: number[]) => void;
  onOpenDrawer: (data: InsightDrawerData) => void;
}

export function RecommendationsSection({
  visibleIds,
  onVisibleIdsChange,
  onOpenDrawer,
}: RecommendationsSectionProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [contextMenuPos, setContextMenuPos] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [pendingIds, setPendingIds] = useState<Set<number>>(
    new Set(visibleIds)
  );
  const menuRef = useRef<HTMLDivElement>(null);

  const visibleCards = ALL_RECOMMENDATION_CARDS.filter((c) =>
    visibleIds.includes(c.id)
  );
  const isCarousel = visibleCards.length > CARDS_PER_PAGE;
  const totalPages = Math.ceil(visibleCards.length / CARDS_PER_PAGE);
  const pageCards = visibleCards.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  // Clamp page when card set changes
  useEffect(() => {
    const newTotal = Math.ceil(visibleCards.length / CARDS_PER_PAGE);
    if (currentPage >= newTotal) {
      setCurrentPage(Math.max(0, newTotal - 1));
    }
  }, [visibleIds]); // eslint-disable-line

  const goNext = () => {
    setDirection(1);
    setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentPage((p) => Math.max(p - 1, 0));
  };

  // Right-click handler
  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setPendingIds(new Set(visibleIds));
      setContextMenuPos({ x: e.clientX, y: e.clientY });
    },
    [visibleIds]
  );

  // Dismiss context menu on outside click / escape
  useEffect(() => {
    if (!contextMenuPos) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setContextMenuPos(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContextMenuPos(null);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [contextMenuPos]);

  const togglePending = (id: number) => {
    setPendingIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const applySelection = () => {
    if (pendingIds.size === 0) return;
    const ordered = ALL_RECOMMENDATION_CARDS.filter((c) =>
      pendingIds.has(c.id)
    ).map((c) => c.id);
    onVisibleIdsChange(ordered);
    setCurrentPage(0);
    setContextMenuPos(null);
  };

  // ── Slide animation variants ────────────────────────────────────────────────
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 48 : -48,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -48 : 48,
      opacity: 0,
    }),
  };

  return (
    <section
      className="flex flex-col gap-4"
      onContextMenu={handleContextMenu}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2
            className="text-[#1e2125] text-[24px] leading-[32px] whitespace-nowrap"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            Weekly Recommendations
          </h2>
          {/* Updated pill with trailing info icon */}
          <UpdatedPill />
        </div>

        {isCarousel && (
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="w-8 h-8 rounded-[6px] flex items-center justify-center border border-[#c9ced4] bg-white hover:bg-[#f4f6f8] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} color="#6d7783" />
            </button>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#6d7783",
                minWidth: 36,
                textAlign: "center",
              }}
            >
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={goNext}
              disabled={currentPage >= totalPages - 1}
              className="w-8 h-8 rounded-[6px] flex items-center justify-center border border-[#c9ced4] bg-white hover:bg-[#f4f6f8] disabled:opacity-35 disabled:cursor-not-allowed cursor-pointer transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={16} color="#6d7783" />
            </button>
          </div>
        )}
      </div>

      {/* Cards area — padding gives shadow room; negative margin compensates layout */}
      <div className="py-3 -my-3 px-2 -mx-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`page-${currentPage}-${visibleIds.join("-")}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex gap-2 items-stretch"
          >
            {pageCards.map((card) => (
              <RecommendationCard
                key={card.id}
                id={card.id}
                badgeType={card.badgeType}
                title={card.title}
                recommendation={card.recommendation}
                attributionModel={card.attributionModel}
                onClick={() =>
                  onOpenDrawer({
                    id: card.id,
                    badgeType: card.badgeType,
                    title: card.title,
                    recommendation: card.recommendation,
                  })
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page dots */}
      {isCarousel && totalPages > 1 && (
        <div className="flex items-center justify-center gap-[6px] mt-0.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1);
                setCurrentPage(i);
              }}
              className="cursor-pointer flex items-center justify-center"
              aria-label={`Go to page ${i + 1}`}
            >
              <motion.div
                className="rounded-full"
                animate={{
                  width: i === currentPage ? 20 : 8,
                  background: i === currentPage ? "#3f51b5" : "#c9ced4",
                }}
                transition={{ duration: 0.2 }}
                style={{ height: 8 }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Context menu */}
      {contextMenuPos && (
        <ContextMenu
          x={contextMenuPos.x}
          y={contextMenuPos.y}
          cards={ALL_RECOMMENDATION_CARDS}
          pendingIds={pendingIds}
          onToggle={togglePending}
          onApply={applySelection}
          onCancel={() => setContextMenuPos(null)}
          menuRef={menuRef}
        />
      )}
    </section>
  );
}