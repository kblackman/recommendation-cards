import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, TriangleAlert, MousePointer2, Zap, Search } from "lucide-react";
import { Button } from "./Button";
import { AlertInline } from "./AlertInline";
import { Note } from "./Note";

// ── Mock event data ──────────────────────────────────────────────────────────

interface ConversionEvent {
  id: string;
  label: string;
}

const MID_FUNNEL_OPTIONS: ConversionEvent[] = [
  { id: "ga-locations-ortho", label: "Google Ads - Locations Ortho Page View" },
  { id: "schedule-appt-start", label: "Schedule Appointment Start" },
  { id: "contact-form-view", label: "Contact Form View" },
  { id: "pricing-page-view", label: "Pricing Page View" },
  { id: "download-brochure", label: "Download Brochure" },
  { id: "free-consult-request", label: "Free Consultation Request" },
  { id: "newsletter-signup", label: "Newsletter Signup" },
  { id: "demo-request", label: "Demo Request" },
  { id: "webinar-registration", label: "Webinar Registration" },
];

const LOW_FUNNEL_OPTIONS: ConversionEvent[] = [
  { id: "lead", label: "Lead" },
  { id: "schedule-appt-click", label: "schedule_appt_click" },
  { id: "attended-appointment", label: "Attended Appointment" },
  { id: "book-now-click", label: "Button - Book Now" },
  { id: "purchase-complete", label: "Purchase Complete" },
  { id: "trial-started", label: "Trial Started" },
  { id: "demo-booked", label: "Demo Booked" },
];

const DEFAULT_MID: string[] = ["ga-locations-ortho"];
const DEFAULT_LOW: string[] = ["lead", "schedule-appt-click"];

// ── Event Selector component ──────────────────────────────────────────────────

interface EventSelectorProps {
  options: ConversionEvent[];
  selected: string[];
  max: number;
  onChange: (ids: string[]) => void;
  placeholder?: string;
}

function EventSelector({ options, selected, max, onChange, placeholder }: EventSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [open]);

  const filtered = options.filter(
    (o) =>
      !selected.includes(o.id) &&
      o.label.toLowerCase().includes(search.toLowerCase())
  );

  function toggle(id: string) {
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      if (selected.length >= max) return;
      onChange([...selected, id]);
    }
  }

  function removeTag(id: string) {
    onChange(selected.filter((s) => s !== id));
  }

  const selectedEvents = options.filter((o) => selected.includes(o.id));

  return (
    <div ref={containerRef} className="relative">
      {/* Tag display + trigger */}
      <div
        className="min-h-[44px] border border-[#c9ced4] rounded-[6px] bg-white flex items-start gap-2 px-3 py-2 cursor-pointer hover:border-[#a3acb7] transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
          {selectedEvents.length === 0 && (
            <span
              className="text-[#a3acb7] text-[14px] leading-[28px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
            >
              {placeholder ?? "Select events…"}
            </span>
          )}
          {selectedEvents.map((ev) => (
            <span
              key={ev.id}
              className="inline-flex items-center gap-1.5 bg-[#eef0fb] text-[#2a3678] text-[13px] leading-[20px] px-2 py-1 rounded-[4px]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MousePointer2 size={11} color="#4c5aa8" />
              {ev.label}
              <button
                onClick={(e) => { e.stopPropagation(); removeTag(ev.id); }}
                className="flex items-center cursor-pointer text-[#4c5aa8] hover:text-[#e81c1f] transition-colors"
              >
                <X size={11} strokeWidth={2.5} />
              </button>
            </span>
          ))}
        </div>
        <div className="shrink-0 flex items-center self-center ml-1">
          <ChevronDown
            size={16}
            color="#6d7783"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.15s ease",
            }}
          />
        </div>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#c9ced4] rounded-[6px] z-50 overflow-hidden"
            style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.12)" }}
          >
            {/* Search */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-[#f1f3f4]">
              <Search size={13} color="#a3acb7" />
              <input
                autoFocus
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events…"
                className="flex-1 outline-none border-none bg-transparent text-[13px] text-[#1e2125]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Limit hint */}
            {selected.length >= max && (
              <div className="px-3 py-2 bg-[#fff8e1] border-b border-[#f1f3f4]">
                <span className="text-[#856404] text-[12px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Maximum of {max} events selected
                </span>
              </div>
            )}

            {/* Options list */}
            <div className="max-h-[220px] overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="px-3 py-3 text-[#a3acb7] text-[13px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  No matching events
                </div>
              ) : (
                filtered.map((opt) => {
                  const isSelected = selected.includes(opt.id);
                  const isDisabled = !isSelected && selected.length >= max;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => !isDisabled && toggle(opt.id)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 text-[13px] transition-colors ${
                        isDisabled
                          ? "opacity-40 cursor-not-allowed"
                          : "cursor-pointer hover:bg-[#f4f5fb]"
                      }`}
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        color: "#1e2125",
                      }}
                    >
                      <Zap size={13} color="#a3acb7" />
                      {opt.label}
                    </div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Warning banner ────────────────────────────────────────────────────────────

function WarningBanner() {
  return (
    <div className="flex items-start gap-3 bg-[#fffbeb] border border-[#fde68a] rounded-[6px] px-4 py-3">
      <TriangleAlert size={16} color="#b45309" className="shrink-0 mt-[1px]" />
      <p
        className="text-[#92400e] text-[13px] leading-[20px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
      >
        The indicated event(s) may not lead to a conversion and/or can cause
        performance issues if selected.{" "}
        <a href="#" className="underline text-[#92400e] hover:text-[#78350f]">
          Learn more
        </a>
      </p>
    </div>
  );
}

// ── Confirmation modal ────────────────────────────────────────────────────────

function ConfirmationModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 10100, backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.15 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 480,
          maxWidth: "calc(100vw - 48px)",
          background: "white",
          borderRadius: 8,
          boxShadow: "0px 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 16px 16px 24px",
            borderBottom: "1px solid #dde0e4",
          }}
        >
          <span
            style={{
              flex: 1,
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "26px",
              color: "#1e2125",
            }}
          >
            Conversion events updated
          </span>
          <button
            onClick={onClose}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              padding: 8,
              borderRadius: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#6d7783",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body — content + CTA together, no separate footer */}
        <div style={{ padding: "24px 24px 24px", display: "flex", flexDirection: "column", gap: 24 }}>
          <p
            style={{
              fontWeight: 400,
              fontSize: 15,
              lineHeight: "22px",
              color: "#1e2125",
              margin: 0,
            }}
          >
            Your changes are live. Metrics and data across Attribution will reflect your updated events.
          </p>

          <Note type="info">
            <strong>About Recommendation Cards</strong>
            <br />
            These refresh weekly. Updated recommendations arrive Monday morning. The current ones will stay visible until then.
          </Note>

          {/* Actions — right-aligned, no border above */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="primary" size="md" onClick={onClose}>
              Got it
            </Button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

// ── Main drawer ───────────────────────────────────────────────────────────────

interface ManageConversionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManageConversionsDrawer({ isOpen, onClose }: ManageConversionsDrawerProps) {
  const [midSelected, setMidSelected] = useState<string[]>(DEFAULT_MID);
  const [lowSelected, setLowSelected] = useState<string[]>(DEFAULT_LOW);
  const [showConfirm, setShowConfirm] = useState(false);

  // Track original state to detect changes
  const originalMid = useRef<string[]>(DEFAULT_MID);
  const originalLow = useRef<string[]>(DEFAULT_LOW);

  // Reset to defaults when drawer opens
  useEffect(() => {
    if (isOpen) {
      setMidSelected([...DEFAULT_MID]);
      setLowSelected([...DEFAULT_LOW]);
      originalMid.current = [...DEFAULT_MID];
      originalLow.current = [...DEFAULT_LOW];
    }
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !showConfirm) onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, showConfirm]);

  const hasChanges = useCallback(() => {
    const midSame =
      midSelected.length === originalMid.current.length &&
      midSelected.every((id) => originalMid.current.includes(id));
    const lowSame =
      lowSelected.length === originalLow.current.length &&
      lowSelected.every((id) => originalLow.current.includes(id));
    return !midSame || !lowSame;
  }, [midSelected, lowSelected]);

  function handleSave() {
    if (hasChanges()) {
      // Commit as new baseline
      originalMid.current = [...midSelected];
      originalLow.current = [...lowSelected];
      setShowConfirm(true);
    } else {
      onClose();
    }
  }

  function handleConfirmClose() {
    setShowConfirm(false);
    onClose();
  }

  return ReactDOM.createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0"
              style={{ zIndex: 9000, backgroundColor: "rgba(0,0,0,0.45)" }}
              onClick={() => !showConfirm && onClose()}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 340, damping: 36, mass: 1 }}
              className="fixed bottom-0 left-0 right-0 bg-white flex flex-col"
              style={{
                zIndex: 9001,
                borderRadius: "12px 12px 0 0",
                maxHeight: "88vh",
                boxShadow: "0px -4px 24px rgba(0,0,0,0.14)",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Header ── */}
              <div
                className="flex items-center px-6 shrink-0"
                style={{
                  minHeight: 56,
                  borderBottom: "1px solid #dde0e4",
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: "28px",
                    color: "#1e2125",
                  }}
                >
                  Manage conversions
                </span>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-9 h-9 rounded-[4px] hover:bg-[#f4f5fb] transition-colors cursor-pointer"
                  style={{ border: "none", background: "transparent" }}
                >
                  <X size={18} color="#6d7783" />
                </button>
              </div>

              {/* ── Scrollable body ── */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="max-w-[760px]">
                  {/* Section heading */}
                  <h2
                    style={{
                      fontWeight: 600,
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#1e2125",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Your conversion events
                  </h2>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: "#6d7783",
                      margin: "0 0 28px 0",
                    }}
                  >
                    Set up your marketing performance insights by selecting events
                    that represent your mid- and low-funnel conversions. You can
                    update these anytime and select multiple events if your funnel
                    has different paths.
                  </p>

                  {/* ── Mid-funnel section ── */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          lineHeight: "20px",
                          color: "#1e2125",
                        }}
                      >
                        Mid-funnel conversion events
                      </span>
                      <span
                        style={{
                          fontWeight: 400,
                          fontSize: 13,
                          color: "#6d7783",
                          marginLeft: 4,
                        }}
                      >
                        (select up to 20)
                      </span>
                    </div>

                    <EventSelector
                      options={MID_FUNNEL_OPTIONS}
                      selected={midSelected}
                      max={20}
                      onChange={setMidSelected}
                      placeholder="Select mid-funnel events…"
                    />

                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: "18px",
                        color: "#6d7783",
                        margin: 0,
                      }}
                    >
                      Events that best indicate a user's progress towards conversion.
                      For example "Start appointment scheduling", "Add to cart", or
                      "Contact form submission".
                    </p>

                    <WarningBanner />
                  </div>

                  {/* Divider */}
                  <div style={{ borderTop: "1px solid #f1f3f4", marginBottom: 24 }} />

                  {/* ── Low-funnel section ── */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-1">
                      <span
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          lineHeight: "20px",
                          color: "#1e2125",
                        }}
                      >
                        Low-funnel conversion events
                      </span>
                      <span
                        style={{
                          fontWeight: 400,
                          fontSize: 13,
                          color: "#6d7783",
                          marginLeft: 4,
                        }}
                      >
                        (select up to 10)
                      </span>
                      <span style={{ color: "#e81c1f", marginLeft: 2, fontWeight: 500 }}>*</span>
                    </div>

                    <EventSelector
                      options={LOW_FUNNEL_OPTIONS}
                      selected={lowSelected}
                      max={10}
                      onChange={setLowSelected}
                      placeholder="Select low-funnel events…"
                    />

                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: "18px",
                        color: "#6d7783",
                        margin: 0,
                      }}
                    >
                      Events that represent your primary conversion event where revenue
                      is generated. For example "Appointment booked" or "Purchase".
                      More than one event can be selected if your funnel has multiple
                      end goals, but only the first conversion in each session will be
                      counted.
                    </p>

                    <WarningBanner />
                  </div>
                </div>
              </div>

              {/* ── Sticky footer ── */}
              <div
                className="shrink-0 flex items-center justify-between px-6"
                style={{
                  minHeight: 56,
                  borderTop: "1px solid #dde0e4",
                  background: "white",
                }}
              >
                {/* Workspace indicator */}
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full bg-[#22c55e]"
                  />
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      color: "#6d7783",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    Main · Production
                  </span>
                </div>

                {/* Save */}
                <Button variant="primary" size="md" onClick={handleSave}>
                  Save
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Confirmation modal — rendered above the drawer */}
      <AnimatePresence>
        {showConfirm && <ConfirmationModal key="confirm" onClose={handleConfirmClose} />}
      </AnimatePresence>
    </>,
    document.body
  );
}