import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Info } from "lucide-react";
import { CategoryBadge, BadgeType } from "./CategoryBadge";
import { Button } from "./Button";
import { DataChip, ChipType } from "./DataChip";
import { semantic } from "../../styles/tokens";
import svgDrawer from "../../imports/InsightDrawer/svg-232pl23iiw";
import svgCal1 from "../../imports/InsightDrawer-1/svg-0f8rrx0smv";
import svgCal2 from "../../imports/InsightDrawer-1-1/svg-4thx9qpsds";
import svgCal3 from "../../imports/InsightDrawer-3/svg-lrl54htpbp";

export type FunnelVariant = "A" | "B";

export interface InsightDrawerData {
  id: number;
  badgeType: BadgeType;
  title: string;
  recommendation: string;
}

interface InsightDrawerProps {
  isOpen: boolean;
  data: InsightDrawerData | null;
  onClose: () => void;
  scenarioIdx: number | null;
  funnelVariant: FunnelVariant;
}

// ── Icons ─────────────────────────────────────────────────

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15 5L5 15" stroke="var(--gray-500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d="M5 5L15 15" stroke="var(--gray-500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d={svgDrawer.p18375980} stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
      <path d="M7.125 14.25H11.875" stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
      <path d="M7.91602 17.4165H11.0827" stroke="#2A3678" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
    </svg>
  );
}

function QualityBars({ color }: { color: string }) {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
      <rect x="0" y="8" width="4" height="6" rx="1" fill={color} />
      <rect x="6" y="4" width="4" height="10" rx="1" fill={color} />
      <rect x="12" y="0" width="4" height="14" rx="1" fill={color} />
    </svg>
  );
}

// ── Per-card content ───────────────────────────────────────

interface DetailsContent {
  recommendationHeadline: string;
  recommendationBody: string;
  attributionModel: string;
  attributionMetric: { label: string; value: string; pct: number };
  attributionDesc: string;
  dataQualityLabel: string;
  dataQualityColor: string;
  dataQualityChecks: { text: string; passed: boolean }[];
}

interface SupportingCard {
  label: string;
  value: string;
  valueUnit?: string;
  dateRange: string;
  explanation: string;
  tooltip: string;
  calPath: string;
  chips: ChipType[];
}

interface ConversionEvent {
  name: string;
  funnel: "mid" | "low";
}

const SHARED_FUNNEL_EVENTS: ConversionEvent[] = [
  { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
  { name: "BT-F1",                                  funnel: "mid" },
  { name: "Lead",                                   funnel: "low" },
  { name: "schedule_appt_click",                    funnel: "low" },
  { name: "BT-F6",                                  funnel: "low" },
];

// ── Dev scenario data (based on customer event distribution query) ──
// Exported so DevUtility can render the labels without duplicating them.
// Low-funnel: 148 customers — Min 1, P25 2, Median 3, P75 6, Max 45
// Mid-funnel: 113 customers — Min 1, P25 2, Median 4, P75 8, Max 72
export const EVENT_SCENARIOS: { label: string; sublabel: string; events: ConversionEvent[] }[] = [
  {
    label: "Min",
    sublabel: "1+1",
    events: [
      { name: "schedule_appt_click", funnel: "low" },
      { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
    ],
  },
  {
    label: "P25",
    sublabel: "2+2",
    events: [
      { name: "schedule_appt_click", funnel: "low" },
      { name: "Lead", funnel: "low" },
      { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
      { name: "form_submission", funnel: "mid" },
    ],
  },
  {
    label: "Median",
    sublabel: "3+4",
    events: [
      { name: "schedule_appt_click", funnel: "low" },
      { name: "Lead", funnel: "low" },
      { name: "book_consultation", funnel: "low" },
      { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
      { name: "form_submission", funnel: "mid" },
      { name: "insurance_check", funnel: "mid" },
      { name: "pricing_page_view", funnel: "mid" },
    ],
  },
  {
    label: "P75",
    sublabel: "6+8",
    events: [
      { name: "schedule_appt_click", funnel: "low" },
      { name: "Lead", funnel: "low" },
      { name: "book_consultation", funnel: "low" },
      { name: "request_callback", funnel: "low" },
      { name: "phone_call_tracked", funnel: "low" },
      { name: "chat_initiated", funnel: "low" },
      { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
      { name: "form_submission", funnel: "mid" },
      { name: "insurance_check", funnel: "mid" },
      { name: "pricing_page_view", funnel: "mid" },
      { name: "doctor_bio_view", funnel: "mid" },
      { name: "testimonials_page_view", funnel: "mid" },
      { name: "faq_page_view", funnel: "mid" },
      { name: "locations_search", funnel: "mid" },
    ],
  },
  {
    label: "Outlier",
    sublabel: "12+15",
    events: [
      { name: "schedule_appt_click", funnel: "low" },
      { name: "Lead", funnel: "low" },
      { name: "book_consultation", funnel: "low" },
      { name: "request_callback", funnel: "low" },
      { name: "phone_call_tracked", funnel: "low" },
      { name: "chat_initiated", funnel: "low" },
      { name: "consultation_confirmed", funnel: "low" },
      { name: "new_patient_form_submit", funnel: "low" },
      { name: "intake_form_complete", funnel: "low" },
      { name: "appointment_confirmed", funnel: "low" },
      { name: "referral_submitted", funnel: "low" },
      { name: "waitlist_join", funnel: "low" },
      { name: "Google Ads - Locations Ortho Page View", funnel: "mid" },
      { name: "form_submission", funnel: "mid" },
      { name: "insurance_check", funnel: "mid" },
      { name: "pricing_page_view", funnel: "mid" },
      { name: "doctor_bio_view", funnel: "mid" },
      { name: "testimonials_page_view", funnel: "mid" },
      { name: "faq_page_view", funnel: "mid" },
      { name: "locations_search", funnel: "mid" },
      { name: "before_after_gallery_view", funnel: "mid" },
      { name: "patient_portal_signup", funnel: "mid" },
      { name: "virtual_tour_view", funnel: "mid" },
      { name: "treatment_comparison_view", funnel: "mid" },
      { name: "financing_options_view", funnel: "mid" },
      { name: "downloadable_brochure_view", funnel: "mid" },
      { name: "provider_search", funnel: "mid" },
    ],
  },
];

const cardContent: Record<
  number,
  { details: DetailsContent; supporting: SupportingCard[]; conversionEvents: ConversionEvent[] }
> = {
  1: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      recommendationHeadline: "Investigate Google Ads changes made around Mar 23 causing the volume decline.",
      recommendationBody: "Review campaign status, bid changes, budget adjustments, and audience targeting changes made in that window.",
      attributionModel: "Last-touch",
      attributionMetric: { label: "BT-F6 events closed by Google Ads", value: "97%", pct: 97 },
      attributionDesc: "The decline is visible in direct-response volume, which makes last-touch the clearest lens for this change.",
      dataQualityLabel: "High",
      dataQualityColor: semantic.quality.high,
      dataQualityChecks: [
        { text: "Weekly trend matches", passed: true },
        { text: "Peak volume matches", passed: true },
        { text: "Channel share matches", passed: true },
        { text: "Decline percentages match", passed: true },
        { text: "Forward projection left out (not supported by the data)", passed: false },
      ],
    },
    supporting: [
      {
        label: "Trend from Peak",
        value: "-87%",
        dateRange: "Mar 23 – Apr 19, 2026",
        explanation:
          "Peak week conversions (287, Mar 23) minus latest week (37, Apr 13), divided by peak = -87%.",
        tooltip:
          "Peak week conversions (287, Mar 23) minus latest week (37, Apr 13), divided by peak = -87%.",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
      {
        label: "Peak Week Conversions",
        value: "287",
        dateRange: "Mar 23 – Apr 19, 2026",
        explanation:
          "Highest weekly Google Ads BT-F6 event count in the window, occurring week of Mar 23.",
        tooltip:
          "Highest weekly Google Ads BT-F6 event count in the window, occurring week of Mar 23.",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
      {
        label: "Latest Complete Week",
        value: "37",
        dateRange: "Mar 23 – Apr 19, 2026",
        explanation:
          "Google Ads BT-F6 events in the most recent complete week (Apr 13).",
        tooltip:
          "Google Ads BT-F6 events in the most recent complete week (Apr 13).",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
      {
        label: "Google Portfolio Share",
        value: "97%",
        dateRange: "Mar 23 – Apr 19, 2026",
        explanation:
          "Google Ads BT-F6 conversions (430) ÷ Total portfolio BT-F6 conversions (445) = 97%.",
        tooltip:
          "Google Ads BT-F6 conversions (430) ÷ Total portfolio BT-F6 conversions (445) = 97%.",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
      {
        label: "Meta Trend from Peak",
        value: "-91%",
        dateRange: "Mar 23 – Apr 19, 2026",
        explanation:
          "Meta Ads peak week (11, Mar 16) minus latest week (1, Apr 19), divided by peak = -91%.",
        tooltip:
          "Meta Ads peak week (11, Mar 16) minus latest week (1, Apr 19), divided by peak = -91%.",
        calPath: svgCal1.p1b069600,
        chips: ["low-funnel"],
      },
    ],
  },
  2: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      recommendationHeadline: "Stabilize Google Ads BT-F1 volume to protect downstream BT-F6 output.",
      recommendationBody: "Review keywords and audiences driving mid-funnel events and increase budget allocation toward those segments.",
      attributionModel: "First-touch",
      attributionMetric: { label: "Google Ads first-touch share", value: "68%", pct: 68 },
      attributionDesc: "First-touch attribution captures Google Ads' role as an Introducer, generating the top-of-funnel activity that feeds mid-funnel events.",
      dataQualityLabel: "High",
      dataQualityColor: semantic.quality.high,
      dataQualityChecks: [
        { text: "Acquisition cost verified against source", passed: true },
        { text: "Mid-funnel softness flagged", passed: true },
        { text: "Period-over-period metrics verified", passed: true },
        { text: "Actionable steps included", passed: true },
      ],
    },
    supporting: [
      {
        label: "Acquisition Cost",
        value: "$139",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "$59,586 spend ÷ 430 conversions = $139.",
        tooltip:
          "$59,586 spend ÷ 430 conversions = $139.",
        calPath: svgCal2.p3b7aed80,
        chips: ["ad-spend", "low-funnel"],
      },
      {
        label: "BT-F1 Events (30d)",
        value: "1,476",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "Mid-funnel events attributed to Google Ads over the 30-day window.",
        tooltip:
          "Mid-funnel events attributed to Google Ads over the 30-day window.",
        calPath: svgCal2.p3b7aed80,
        chips: ["mid-funnel"],
      },
      {
        label: "BT-F1 Period Change",
        value: "-14%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "Period-over-period change in mid-funnel events: current 30d vs prior 30d window = -14%.",
        tooltip:
          "Period-over-period change in mid-funnel events: current 30d vs prior 30d window = -14%.",
        calPath: svgCal2.p3b7aed80,
        chips: ["mid-funnel"],
      },
      {
        label: "BT-F6 Period Change",
        value: "-57%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "Period-over-period change in bottom-funnel events: current 30d vs prior 30d window = -57%.",
        tooltip:
          "Period-over-period change in bottom-funnel events: current 30d vs prior 30d window = -57%.",
        calPath: svgCal2.p3b7aed80,
        chips: ["low-funnel"],
      },
      {
        label: "Progression Rate",
        value: "29.1%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "430 BT-F6 conversions ÷ 1,476 BT-F1 events = 29.1%.",
        tooltip:
          "430 BT-F6 conversions ÷ 1,476 BT-F1 events = 29.1%.",
        calPath: svgCal2.p3b7aed80,
        chips: ["low-funnel", "mid-funnel"],
      },
    ],
  },
  3: {
    conversionEvents: SHARED_FUNNEL_EVENTS,
    details: {
      recommendationHeadline: "Cut Meta Ads budget by 50% and shift savings to Google Ads.",
      recommendationBody: "Monitor Meta's assist role given its 73% multi-channel participation before cutting further.",
      attributionModel: "Linear",
      attributionMetric: { label: "Meta multi-channel path rate", value: "73%", pct: 73 },
      attributionDesc: "Even with full linear credit, Meta only reaches 15 conversions, confirming the efficiency gap despite its assist role.",
      dataQualityLabel: "Medium",
      dataQualityColor: semantic.quality.medium,
      dataQualityChecks: [
        { text: "All metrics match source data", passed: true },
        { text: "Sample size flagged as directional (<20 conversions)", passed: true },
        { text: "Budget reallocation recommendation included", passed: true },
        { text: "$3,393 CPA may be volatile at this sample size", passed: false },
      ],
    },
    supporting: [
      {
        label: "Meta CPA",
        value: "$3,393",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "$47,509 spend ÷ 14 conversions · directional.",
        tooltip:
          "$47,509 spend ÷ 14 conversions · directional.",
        calPath: svgCal3.p3b7aed80,
        chips: ["ad-spend", "low-funnel"],
      },
      {
        label: "Google Ads CPA",
        value: "$139",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "$59,586 spend ÷ 430 conversions = $139.",
        tooltip:
          "$59,586 spend ÷ 430 conversions = $139.",
        calPath: svgCal3.p3b7aed80,
        chips: ["ad-spend", "low-funnel"],
      },
      {
        label: "Meta Share of Spend",
        value: "44%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "$47,509 of $107,095 total portfolio spend = 44%.",
        tooltip:
          "$47,509 of $107,095 total portfolio spend = 44%.",
        calPath: svgCal3.p3b7aed80,
        chips: ["ad-spend"],
      },
      {
        label: "Meta Share of Conversions",
        value: "3%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "14 of 445 total portfolio conversions = 3%.",
        tooltip:
          "14 of 445 total portfolio conversions = 3%.",
        calPath: svgCal3.p3b7aed80,
        chips: ["low-funnel"],
      },
      {
        label: "Meta Multi-channel Rate",
        value: "73%",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "73% of Meta conversions involved 2+ channels — confirm assist role before deeper cuts.",
        tooltip:
          "73% of Meta conversions involved 2+ channels — confirm assist role before deeper cuts.",
        calPath: svgCal3.p3b7aed80,
        chips: ["touches", "low-funnel"],
      },
      {
        label: "Acquisition Cost Gap",
        value: "~24x",
        dateRange: "Mar 23 – Apr 21, 2026",
        explanation:
          "$3,393 Meta CPA ÷ $139 Google CPA ≈ 24x.",
        tooltip:
          "$3,393 Meta CPA ÷ $139 Google CPA ≈ 24x.",
        calPath: svgCal3.p3b7aed80,
        chips: ["ad-spend", "low-funnel"],
      },
    ],
  },
};

// ── Conversion Events Block ────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.18s ease", flexShrink: 0 }}
    >
      <path d="M4 6L8 10L12 6" stroke="var(--gray-500)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
    </svg>
  );
}

// ── Variant A: Expandable widget ───────────────────────────
// Collapsed row shows counts. Expands to tab + search + scrollable list.
function VariantA({ midEvents, lowEvents }: { midEvents: ConversionEvent[]; lowEvents: ConversionEvent[] }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"mid" | "low">("mid");
  const [search, setSearch] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  const tabEvents = activeTab === "mid" ? midEvents : lowEvents;
  const filtered = search.trim()
    ? tabEvents.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    : tabEvents;

  return (
    <div style={{ border: "1px solid var(--gray-300)", borderRadius: 10, overflow: "hidden", background: "#fff" }}>
      {/* Header / toggle row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-[10px] px-4 py-[13px] transition-colors cursor-pointer"
        style={{ background: "var(--gray-50)", border: "none", textAlign: "left" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--gray-100)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "var(--gray-50)"; }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="var(--gray-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="text-[14px] leading-[20px] flex-1"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "var(--gray-800)" }}
        >
          Conversion events
        </span>
        {/* Count dots — hidden when open */}
        {!open && (
          <span className="flex items-center gap-[14px]">
            <span className="flex items-center gap-[5px]">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3f51b5", flexShrink: 0, display: "inline-block" }} />
              <span className="text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-800)" }}>
                {midEvents.length} mid
              </span>
            </span>
            <span className="flex items-center gap-[5px]">
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#249980", flexShrink: 0, display: "inline-block" }} />
              <span className="text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-800)" }}>
                {lowEvents.length} low
              </span>
            </span>
          </span>
        )}
        <ChevronIcon open={open} />
      </button>

      {open && (
        <>
          {/* Tab bar + search icon button */}
          <div
            className="flex items-center gap-2 px-4 py-[10px]"
            style={{ borderTop: "1px solid var(--gray-150)" }}
          >
            {/* Tab switcher with counts */}
            <div
              className="flex items-center rounded-[6px] p-[3px] shrink-0"
              style={{ background: "var(--gray-100)" }}
            >
              {(["mid", "low"] as const).map((tab) => {
                const active = activeTab === tab;
                const count = tab === "mid" ? midEvents.length : lowEvents.length;
                const textColor = active ? "var(--gray-800)" : "var(--gray-500)";
                const fontWeight = active ? 600 : 400;
                return (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setSearch(""); }}
                    className="px-3 py-[4px] rounded-[4px] text-[13px] leading-[20px] transition-all cursor-pointer flex items-center gap-[5px]"
                    style={{
                      fontFamily: "'Roboto', sans-serif",
                      fontWeight,
                      color: textColor,
                      background: active ? "#fff" : "transparent",
                      border: "none",
                      boxShadow: active ? "0 1px 2px rgba(0,0,0,0.08)" : "none",
                    }}
                  >
                    <span
                      style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: tab === "mid" ? "#3f51b5" : "#249980",
                        flexShrink: 0, display: "inline-block",
                      }}
                    />
                    {tab === "mid" ? "Mid-funnel" : "Low-funnel"}
                    <span style={{ fontWeight, color: textColor }}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Search icon button */}
            <button
              onClick={() => { setSearchVisible((v) => !v); if (searchVisible) setSearch(""); }}
              className="flex items-center justify-center w-[30px] h-[30px] rounded-[6px] transition-colors cursor-pointer shrink-0"
              style={{
                background: searchVisible ? "#e8eafb" : "transparent",
                border: searchVisible ? "1px solid #c5c9e8" : "1px solid transparent",
              }}
              title="Search events"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke={searchVisible ? "#3f51b5" : "var(--gray-500)"} strokeWidth="2" />
                <path d="M21 21l-4.35-4.35" stroke={searchVisible ? "#3f51b5" : "var(--gray-500)"} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Search bar (revealed below toggles) */}
          {searchVisible && (
            <div className="px-4 pb-[10px]" style={{ borderTop: "1px solid var(--gray-100)" }}>
              <div
                className="flex items-center gap-[8px] w-full px-3 py-[6px] rounded-[6px] mt-[10px]"
                style={{ border: "1px solid var(--gray-300)", background: "#fff" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="11" cy="11" r="8" stroke="var(--gray-400)" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" stroke="var(--gray-400)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Filter events"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="text-[13px] leading-[20px] outline-none bg-transparent flex-1"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-800)", border: "none", minWidth: 0 }}
                  autoFocus
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 0 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M9 3L3 9M3 3L9 9" stroke="var(--gray-400)" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Event list */}
          <div style={{ maxHeight: 280, overflowY: "auto", borderTop: "1px solid var(--gray-100)" }}>
            {filtered.length === 0 ? (
              <div className="px-4 py-6 text-center">
                <span className="text-[13px]" style={{ fontFamily: "'Roboto', sans-serif", color: "var(--gray-500)" }}>No events match</span>
              </div>
            ) : (
              filtered.map((e) => (
                <div
                  key={e.name}
                  className="flex items-center gap-3 px-4 py-[11px]"
                  style={{ borderTop: "1px solid var(--gray-100)" }}
                >
                  <span
                    style={{
                      width: 7, height: 7, borderRadius: "50%",
                      background: activeTab === "mid" ? "#3f51b5" : "#249980",
                      flexShrink: 0, display: "inline-block",
                    }}
                  />
                  <span
                    className="text-[13px] leading-[20px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-800)" }}
                  >
                    {e.name}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-end px-4 py-[10px]"
            style={{ borderTop: "1px solid var(--gray-150)" }}
          >
            <button
              className="text-[12px] leading-[16px] cursor-pointer"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "#3f51b5", background: "none", border: "none" }}
            >
              Edit definitions
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ── Variant B: Inline sentence with click-to-open popover ──
// "Built from your 15 mid-funnel and 12 low-funnel conversion events."
// Clicking each colored term opens a 2-column event panel.

interface PopoverState {
  stage: "mid" | "low";
  rect: DOMRect;
}

function EventsPopover({
  stage,
  events,
  anchorRect,
  onClose,
}: {
  stage: "mid" | "low";
  events: ConversionEvent[];
  anchorRect: DOMRect;
  onClose: () => void;
}) {
  const color = stage === "mid" ? "#3f51b5" : "#249980";
  const label = stage === "mid" ? "Mid-funnel" : "Low-funnel";

  // Split into two columns
  const half = Math.ceil(events.length / 2);
  const col1 = events.slice(0, half);
  const col2 = events.slice(half);

  // Position below the anchor word, left-aligned
  const top = anchorRect.bottom + 8 + window.scrollY;
  const left = Math.max(8, anchorRect.left - 16);

  return ReactDOM.createPortal(
    <>
      {/* Click-outside backdrop */}
      <div
        style={{ position: "fixed", inset: 0, zIndex: 99990 }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          top: anchorRect.bottom + 8,
          left,
          zIndex: 99999,
          width: 380,
          background: "#fff",
          borderRadius: 10,
          border: "1px solid var(--gray-300)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-[8px] px-4 py-[12px]"
          style={{ borderBottom: "1px solid var(--gray-150)" }}
        >
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: color, flexShrink: 0, display: "inline-block" }} />
          <span
            className="flex-1 text-[14px] leading-[20px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, color: "var(--gray-800)" }}
          >
            {label} events
          </span>
          <span
            className="text-[13px] leading-[20px] mr-2"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-500)" }}
          >
            {events.length}
          </span>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-6 h-6 rounded hover:bg-gray-100 transition-colors cursor-pointer"
            style={{ background: "none", border: "none" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="var(--gray-500)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* 2-column grid */}
        <div className="flex" style={{ maxHeight: 300, overflowY: "auto" }}>
          {[col1, col2].map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col" style={{ borderRight: ci === 0 ? "1px solid var(--gray-100)" : "none" }}>
              {col.map((e, ri) => (
                <div
                  key={e.name}
                  className="px-4 py-[9px] text-[13px] leading-[18px]"
                  style={{
                    fontFamily: "'Roboto', sans-serif",
                    fontWeight: 400,
                    color: "var(--gray-800)",
                    borderTop: ri === 0 ? "none" : "1px solid var(--gray-100)",
                  }}
                >
                  {e.name}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between px-4 py-[10px]"
          style={{ borderTop: "1px solid var(--gray-150)" }}
        >
          <span
            className="text-[12px] leading-[16px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-500)" }}
          >
            Defined in your conversion settings
          </span>
          <button
            className="text-[12px] leading-[16px] cursor-pointer"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "#3f51b5", background: "none", border: "none" }}
          >
            Edit definitions
          </button>
        </div>
      </div>
    </>,
    document.body
  );
}

function VariantB({ midEvents, lowEvents }: { midEvents: ConversionEvent[]; lowEvents: ConversionEvent[] }) {
  const [popover, setPopover] = useState<PopoverState | null>(null);

  function handleTermClick(stage: "mid" | "low", e: React.MouseEvent<HTMLSpanElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    if (popover?.stage === stage) {
      setPopover(null);
    } else {
      setPopover({ stage, rect });
    }
  }

  function termStyle(stage: "mid" | "low"): React.CSSProperties {
    const color = stage === "mid" ? "#3f51b5" : "#249980";
    const active = popover?.stage === stage;
    return {
      color,
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "underline",
      textDecorationStyle: "dotted",
      textUnderlineOffset: 3,
      background: active ? (stage === "mid" ? "#e8eafb" : "#def7f2") : "transparent",
      borderRadius: 3,
      padding: "0 2px",
    };
  }

  const activeEvents = popover ? (popover.stage === "mid" ? midEvents : lowEvents) : [];

  return (
    <>
      <p
        className="text-[14px] leading-[22px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, color: "var(--gray-800)" }}
      >
        Built from your{" "}
        <span style={termStyle("mid")} onClick={(e) => handleTermClick("mid", e)}>
          {midEvents.length} mid-funnel
        </span>
        {" "}and{" "}
        <span style={termStyle("low")} onClick={(e) => handleTermClick("low", e)}>
          {lowEvents.length} low-funnel
        </span>
        {" "}conversion events.
      </p>

      {popover && (
        <EventsPopover
          stage={popover.stage}
          events={activeEvents}
          anchorRect={popover.rect}
          onClose={() => setPopover(null)}
        />
      )}
    </>
  );
}

// ── Dispatcher ─────────────────────────────────────────────
function ConversionEventsBlock({ events, variant }: { events: ConversionEvent[]; variant: FunnelVariant }) {
  const midEvents = events.filter((e) => e.funnel === "mid");
  const lowEvents = events.filter((e) => e.funnel === "low");

  if (midEvents.length === 0 && lowEvents.length === 0) return null;

  if (variant === "A") return <VariantA midEvents={midEvents} lowEvents={lowEvents} />;
  return <VariantB midEvents={midEvents} lowEvents={lowEvents} />;
}

// ── Stat Card ─────────────────────────────────────────────

function StatCard({ label, value, valueUnit, dateRange, explanation, tooltip, chips, conversionEvents }: Omit<SupportingCard, "calPath"> & { calPath?: string; conversionEvents?: ConversionEvent[] }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const infoRef = useRef<HTMLButtonElement>(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });

  function handleMouseEnter() {
    if (infoRef.current) {
      const rect = infoRef.current.getBoundingClientRect();
      setTooltipPos({
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
      });
    }
    setTooltipVisible(true);
  }

  return (
    <div
      className="bg-white rounded-[6px] flex flex-col gap-[12px] px-[19px] py-[17px] relative"
      style={{ border: "1px solid var(--gray-300)" }}
    >
      {/* ── Header: label + info left, date right ── */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-[5px]">
          <span
            className="text-gray-600 text-[12px] leading-[16px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            {label}
          </span>
          <button
            ref={infoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setTooltipVisible(false)}
            className="flex items-center justify-center shrink-0 cursor-default"
            style={{ background: "none", border: "none", padding: 0, lineHeight: 0 }}
          >
            <Info size={12} color="var(--gray-400)" strokeWidth={1.5} />
          </button>
        </div>
        <p
          className="text-gray-500 text-[11px] leading-[16px] shrink-0"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          {dateRange}
        </p>
      </div>

      {/* ── Value ── */}
      <p
        className="text-gray-800 text-[28px] leading-[36px] tracking-[-0.28px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
      >
        {value}{valueUnit && ` ${valueUnit}`}
      </p>

      {/* ── Explanation (above divider) ── */}
      <p
        className="text-gray-800 text-[13px] leading-[20px]"
        style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
      >
        {explanation}
      </p>

      {/* ── Divider + chips (only when chips present) ── */}
      {chips.length > 0 && (
        <>
          <div style={{ borderTop: "1px solid var(--gray-200)" }} />
          <div className="flex flex-wrap gap-[4px]">
            {chips.map((chip) => {
              let eventNames: string[] | undefined;
              if (chip === "low-funnel" && conversionEvents) {
                eventNames = conversionEvents.filter((e) => e.funnel === "low").map((e) => e.name);
              } else if (chip === "mid-funnel" && conversionEvents) {
                eventNames = conversionEvents.filter((e) => e.funnel === "mid").map((e) => e.name);
              }
              return <DataChip key={chip} type={chip} eventNames={eventNames} />;
            })}
          </div>
        </>
      )}

      {/* ── Tooltip (portal) ── */}
      {tooltipVisible && ReactDOM.createPortal(
        <div
          style={{
            position: "fixed",
            top: tooltipPos.top,
            left: tooltipPos.left,
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
              maxWidth: 240,
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "18px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            {tooltip}
          </div>
          {/* Arrow */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "5px solid var(--gray-800)" }} />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function SupportingDataTab({ cards, conversionEvents, scenarioIdx, funnelVariant }: { cards: SupportingCard[]; conversionEvents: ConversionEvent[]; scenarioIdx: number | null; funnelVariant: FunnelVariant }) {
  const activeEvents = scenarioIdx !== null ? EVENT_SCENARIOS[scenarioIdx].events : conversionEvents;

  return (
    <div className="flex flex-col gap-3 p-8">
      <ConversionEventsBlock events={activeEvents} variant={funnelVariant} />
      {cards.map((card) => (
        <StatCard key={card.label} {...card} conversionEvents={activeEvents} />
      ))}
    </div>
  );
}

// ── Details Tab ───────────────────────────────────────────

const QUALITY_BADGE: Record<string, { bg: string; color: string }> = {
  High:   { bg: "#e0f7ef", color: "#249980" },
  Medium: { bg: "#fef3d8", color: "#c28200" },
  Low:    { bg: "#fdeaea", color: "#c0191b" },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="text-[11px] leading-[14px] uppercase tracking-[0.88px]"
      style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, color: "var(--gray-600)" }}
    >
      {children}
    </span>
  );
}

function DetailsTab({ content, onSwitchToSupporting }: { content: DetailsContent; onSwitchToSupporting: () => void }) {
  const F = "'Roboto', sans-serif";
  const qualityBadge = QUALITY_BADGE[content.dataQualityLabel] ?? { bg: "var(--gray-100)", color: "var(--gray-500)" };

  const passedChecks = content.dataQualityChecks.filter((c) => c.passed);
  const failedChecks = content.dataQualityChecks.filter((c) => !c.passed);

  // Pair up passed checks for 2-column layout
  const passedRows: typeof passedChecks[] = [];
  for (let i = 0; i < passedChecks.length; i += 2) {
    passedRows.push(passedChecks.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col px-6 py-7 gap-0">

      {/* ── RECOMMENDED ACTION ── */}
      <div className="flex flex-col gap-3">
        <SectionLabel>Recommended Action</SectionLabel>
        <p
          className="text-gray-800 text-[20px] leading-[28px]"
          style={{ fontFamily: F, fontWeight: 700 }}
        >
          {content.recommendationHeadline}
        </p>
        <p
          className="text-gray-500 text-[14px] leading-[22px]"
          style={{ fontFamily: F, fontWeight: 400 }}
        >
          {content.recommendationBody}
        </p>
      </div>

      {/* Divider */}
      <div className="my-6" style={{ borderTop: "1px solid var(--gray-150)" }} />

      {/* ── WHY YOU CAN TRUST THIS ── */}
      <div className="flex flex-col gap-3">
        <SectionLabel>Why you can trust this</SectionLabel>

        {/* Single gray container holding both trust sections */}
        <div
          className="rounded-[12px] overflow-hidden"
          style={{ background: "var(--gray-50)" }}
        >
          {/* ── Attribution model section ── */}
          <div className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3">
              <span
                className="text-[14px] leading-[20px]"
                style={{ fontFamily: F, fontWeight: 700, color: "var(--gray-800)" }}
              >
                Attribution model
              </span>
              {/* Pill badge */}
              <div
                className="flex items-center gap-[6px] px-3 py-[5px] rounded-full shrink-0"
                style={{ background: "#e8eafb" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="18" cy="5" r="3" stroke="#3f51b5" strokeWidth="2" />
                  <circle cx="6" cy="12" r="3" stroke="#3f51b5" strokeWidth="2" />
                  <circle cx="18" cy="19" r="3" stroke="#3f51b5" strokeWidth="2" />
                  <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span
                  className="text-[13px] leading-[18px]"
                  style={{ fontFamily: F, fontWeight: 600, color: "#3f51b5" }}
                >
                  {content.attributionModel}
                </span>
              </div>
            </div>

            {/* Metric row + bar */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[13px] leading-[18px]"
                  style={{ fontFamily: F, fontWeight: 400, color: "var(--gray-500)" }}
                >
                  {content.attributionMetric.label}
                </span>
                <span
                  className="text-[14px] leading-[20px] shrink-0"
                  style={{ fontFamily: F, fontWeight: 700, color: "var(--gray-800)" }}
                >
                  {content.attributionMetric.value}
                </span>
              </div>
              <div
                className="w-full rounded-full overflow-hidden"
                style={{ height: 6, background: "var(--gray-250)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${content.attributionMetric.pct}%`, background: "#3f51b5", transition: "width 0.4s ease" }}
                />
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[13px] leading-[20px]"
              style={{ fontFamily: F, fontWeight: 400, color: "var(--gray-500)" }}
            >
              {content.attributionDesc}
            </p>
          </div>

          {/* Divider between sections */}
          <div style={{ borderTop: "1px solid var(--gray-200)", marginLeft: 20, marginRight: 20 }} />

          {/* ── Data quality section ── */}
          <div className="flex flex-col gap-3 p-5">
            {/* Header */}
            <div className="flex items-center justify-between gap-3">
              <span
                className="text-[14px] leading-[20px]"
                style={{ fontFamily: F, fontWeight: 700, color: "var(--gray-800)" }}
              >
                Data quality
              </span>
              {/* Quality badge pill */}
              <div
                className="flex items-center gap-[6px] px-3 py-[5px] rounded-full shrink-0"
                style={{ background: qualityBadge.bg }}
              >
                <QualityBars color={qualityBadge.color} />
                <span
                  className="text-[13px] leading-[18px]"
                  style={{ fontFamily: F, fontWeight: 600, color: qualityBadge.color }}
                >
                  {content.dataQualityLabel}
                </span>
              </div>
            </div>

            {/* Subheader */}
            <p
              className="text-[13px] leading-[18px]"
              style={{ fontFamily: F, fontWeight: 400, color: "var(--gray-500)" }}
            >
              Checked against your source data
            </p>

            {/* 2-column grid for passed checks */}
            {passedRows.length > 0 && (
              <div className="flex flex-col gap-[10px]">
                {passedRows.map((row, ri) => (
                  <div key={ri} className="grid grid-cols-2 gap-x-3">
                    {row.map((check, ci) => (
                      <div key={ci} className="flex items-start gap-[7px]">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path d="M3 8.5L6.5 12L13 5" stroke="#249980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span
                          className="text-[13px] leading-[18px]"
                          style={{ fontFamily: F, fontWeight: 400, color: "var(--gray-800)" }}
                        >
                          {check.text}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Full-width dash rows for excluded/failed checks */}
            {failedChecks.length > 0 && (
              <div className="flex flex-col gap-[8px]" style={{ paddingTop: passedRows.length > 0 ? 2 : 0 }}>
                {failedChecks.map((check, i) => (
                  <div key={i} className="flex items-start gap-[7px]">
                    <span
                      style={{ flexShrink: 0, width: 14, textAlign: "center", color: "var(--gray-500)", fontWeight: 500, fontSize: 14, lineHeight: "18px", display: "inline-block", marginTop: 1 }}
                    >
                      –
                    </span>
                    <span
                      className="text-[13px] leading-[18px]"
                      style={{ fontFamily: F, fontWeight: 400, color: "var(--gray-500)" }}
                    >
                      {check.text}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── See supporting data link ── */}
      <button
        onClick={onSwitchToSupporting}
        className="flex items-center gap-[6px] mt-6 cursor-pointer"
        style={{ background: "none", border: "none", padding: 0 }}
      >
        <span
          className="text-[14px] leading-[20px]"
          style={{ fontFamily: F, fontWeight: 500, color: "#3f51b5" }}
        >
          See the supporting data
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M9 4L13 8L9 12" stroke="#3f51b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

    </div>
  );
}

// ── Main Drawer ────────────────────────────────────────────

export function InsightDrawer({ isOpen, data, onClose, scenarioIdx, funnelVariant }: InsightDrawerProps) {
  const [activeTab, setActiveTab] = useState<"details" | "supporting">("details");

  useEffect(() => {
    if (isOpen) setActiveTab("details");
  }, [isOpen, data?.id]);

  const content = data ? (cardContent[data.id] ?? cardContent[1]) : null;

  return (
    <AnimatePresence>
      {isOpen && data && content && (
        <>
          {/* Overlay */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 cursor-default"
            style={{ backgroundColor: "rgba(17, 24, 39, 0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 h-full z-50 bg-white flex flex-col"
            style={{
              width: "439px",
              maxWidth: "90vw",
              boxShadow: "-8px 0px 24px 0px rgba(17,24,39,0.12)",
              borderLeft: "1px solid var(--gray-300)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
          >
            {/* Header */}
            <div className="px-[33px] pt-[33px] pb-0 border-b border-gray-300 shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-4 flex-1 min-w-0">
                  <CategoryBadge type={data.badgeType} />
                  <p
                    className="text-gray-800 text-[24px] leading-[32px]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
                  >
                    {data.title}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-8 h-8 rounded-[6px] hover:bg-[#f4f5fb] transition-colors shrink-0 mt-1 cursor-pointer"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-end gap-0 mt-[32px]">
                {(["details", "supporting"] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`relative px-0 pb-[11px] flex items-center cursor-pointer ${tab === "details" ? "mr-6" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span
                      className="text-[14px] leading-[20px]"
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 500,
                        color: activeTab === tab ? "var(--gray-800)" : "var(--gray-500)",
                      }}
                    >
                      {tab === "details" ? "Details" : "Supporting Data"}
                    </span>
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t-[2px] bg-[#3f51b5]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === "details" ? (
                <DetailsTab content={content.details} onSwitchToSupporting={() => setActiveTab("supporting")} />
              ) : (
                <SupportingDataTab cards={content.supporting} conversionEvents={content.conversionEvents} scenarioIdx={scenarioIdx} funnelVariant={funnelVariant} />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}