import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { InsightDrawer, InsightDrawerData } from "./components/InsightDrawer";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { BadgeType } from "./components/CategoryBadge";
import { DevUtility, CardState } from "./components/DevUtility";
import { FunnelVariant } from "./components/InsightDrawer";
import { AiConsentModalWrapper } from "./components/AiConsentModalWrapper";
import { JourneysView } from "./components/JourneysView";
import { ManageConversionsDrawer } from "./components/ManageConversionsDrawer";
import { Toaster } from "sonner";
import PromoContainer from "../imports/Container/Container";
import EventsContainer from "../imports/Container-1/Container-22-2662";
import WaitingContainer from "../imports/Container-2/Container-22-2782";
import ErrorStateComponent from "../imports/EmptyState/EmptyState";
import EmptyStateComponent from "../imports/EmptyState-1/EmptyState";

// ────────────────────────────────────────────────────────
// Data
// ────────────────────────────────────────────────────────
// (Cards are now managed inside RecommendationsSection)

// ────────────────────────────────────────────────────────
// Small shared icons
// ────────────────────────────────────────────────────────
function InfoIcon({ color = "#A3ACB7" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.83" stroke={color} strokeWidth="1.167" />
      <path d="M7 9.33V7" stroke={color} strokeWidth="1.167" strokeLinecap="round" />
      <path d="M7 4.67H7.006" stroke={color} strokeWidth="1.167" strokeLinecap="round" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M0.44 0.44H3.94V3.94" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
      <path d="M0.44 6.85L6.85 0.44" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
      <path d="M9.19 4.52V8.02C9.19 8.33 9.06 8.63 8.85 8.85C8.63 9.06 8.33 9.19 8.02 9.19H1.6C1.29 9.19 1 9.06 0.78 8.85C0.56 8.63 0.44 8.33 0.44 8.02V1.6C0.44 1.29 0.56 1 0.78 0.78C1 0.56 1.29 0.44 1.6 0.44H5.1" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
    </svg>
  );
}

function ChevronRightSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.02" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 2.75C6.44 2.75 2.75 6.44 2.75 11C2.75 15.56 6.44 19.25 11 19.25C15.56 19.25 19.25 15.56 19.25 11C19.25 6.44 15.56 2.75 11 2.75Z" stroke="#A3ACB7" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.8 8.25C9.17 7.26 10.24 6.72 11.26 6.98C12.28 7.25 12.98 8.21 12.83 9.25C12.62 10.54 11 11 11 11" stroke="#A3ACB7" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 15.58H11.01" stroke="#A3ACB7" strokeWidth="1.375" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6.67 1.67V5" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46" />
      <path d="M13.33 1.67V5" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46" />
      <rect x="2.5" y="3.33" width="15" height="13.33" rx="1.67" stroke="#6D7783" strokeWidth="1.46" />
      <path d="M2.5 8.33H17.5" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#6D7783" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46" />
    </svg>
  );
}

// ────────────────────────────────────────────────────────
// Header component
// ────────────────────────────────────────────────────────
function TopHeader({ activeView }: { activeView: "recommendations" | "journeys" }) {
  return (
    <header className="bg-white border-b border-[#c9ced4] h-[52px] flex items-center justify-between px-8 shrink-0 w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-[7px]">
        <span className="text-[#6d7783] text-[13px] leading-normal whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
          Insights
        </span>
        <ChevronRightSmall />
        <span className="text-[#1e2125] text-[13px] leading-normal whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
          {activeView === "recommendations" ? "Attribution" : "Journeys"}
        </span>
      </div>

      {/* Right: Help + Avatar */}
      <div className="flex items-center gap-1">
        <button className="flex flex-col items-center justify-center gap-px px-2 py-1.5 rounded-[6px] hover:bg-[#f4f5fb] transition-colors w-12 h-[47px]">
          <HelpIcon />
          <span className="text-[#a3acb7] text-[12px] font-semibold capitalize leading-[12px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Help
          </span>
        </button>
        <button className="flex items-center justify-center rounded-[24px] w-12 h-12">
          <div className="bg-[#6473c9] rounded-full w-9 h-9 flex items-center justify-center">
            <span className="text-white text-[16px] leading-normal uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
              er
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}

// ── View Switcher ──────────────────────────────────────────
function ViewSwitcher({
  activeView,
  onChange,
}: {
  activeView: "recommendations" | "journeys";
  onChange: (v: "recommendations" | "journeys") => void;
}) {
  return (
    <div className="flex items-end gap-0 border-b border-[#c9ced4]">
      {(["recommendations", "journeys"] as const).map((view) => {
        const label = view === "recommendations" ? "Overview" : "Journeys";
        const isActive = activeView === view;
        return (
          <button
            key={view}
            className="relative mr-7 pb-[11px] flex items-center cursor-pointer bg-transparent border-0 p-0"
            onClick={() => onChange(view)}
          >
            <span
              className="text-[15px] leading-[22px]"
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500,
                color: isActive ? "#1e2125" : "#6d7783",
              }}
            >
              {label}
            </span>
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t-[2px] bg-[#3f51b5]" />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ──────────────────────────────────────────────────────
// Page header (Insights title area)
// ────────────────────────────────────────────────────────
function PageHeader({ onManageConversions }: { onManageConversions: () => void }) {
  return (
    <div className="flex items-start justify-between w-full">
      {/* Left: title + subtitle */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[#1e2125] text-[32px] leading-[40px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
          Attribution
        </h1>
        <p className="text-[#6d7783] text-[14px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
          Attribution Insights are based on a touch-based time cohorted analysis. Learn more{" "}
          <a href="#" className="text-[#3f51b5] underline decoration-solid">
            in our documentation
          </a>{" "}
          <span className="inline-flex items-center align-middle ml-0.5">
            <ExternalLinkIcon />
          </span>
        </p>
      </div>

      {/* Right: Manage Conversions */}
      <div className="flex items-center gap-6 shrink-0">
        <button
          onClick={onManageConversions}
          className="bg-[#3f51b5] text-white px-5 h-10 rounded-[6px] whitespace-nowrap drop-shadow-[0px_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#324090] transition-colors cursor-pointer"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "16px", border: "none" }}
        >
          Manage Conversions
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// Filter bar
// ───────────────────────────────────────────────────────
function FilterBar() {
  return (
    <div className="bg-[#f4f5fb] rounded-[8px] w-full">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: dropdowns */}
        <div className="flex items-center gap-4">
          <span className="text-[#1e2125] text-[14px] leading-[20px] shrink-0" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
            Filters:
          </span>
          {/* Group results by */}
          <div className="flex flex-col gap-1">
            <span className="text-[#6d7783] text-[13px] leading-[16px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
              Group results by
            </span>
            <div className="bg-white border border-[#c9ced4] rounded-[6px] flex items-center justify-between pl-4 pr-3 py-2 w-[240px] cursor-pointer">
              <span className="text-[#1e2125] text-[14px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                Source &amp; campaign
              </span>
              <ChevronDown />
            </div>
          </div>
          {/* Attribution model */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-[#6d7783] text-[13px] leading-[16px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                Attribution model
              </span>
              <InfoIcon />
            </div>
            <div className="bg-white border border-[#c9ced4] rounded-[6px] flex items-center justify-between pl-4 pr-3 py-2 w-[240px] cursor-pointer">
              <span className="text-[#1e2125] text-[14px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                Last touch
              </span>
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Right: date range picker */}
        <div className="bg-white flex items-center gap-0.5 px-2 py-1 rounded-[12px] h-[46px]">
          {/* Calendar icon + Custom */}
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-[6px] cursor-pointer hover:bg-[#f4f5fb] transition-colors">
            <CalendarIcon />
            <span className="text-[#6d7783] text-[14px] font-semibold leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Custom
            </span>
          </div>
          {/* Period buttons */}
          {[
            { label: "7D", active: false, disabled: false },
            { label: "30D", active: true, disabled: false },
            { label: "3M", active: false, disabled: false },
            { label: "6M", active: false, disabled: true },
            { label: "12M", active: false, disabled: true },
          ].map(({ label, active, disabled }) => (
            <div
              key={label}
              className={`flex items-center justify-center px-2.5 py-1 rounded-[6px] cursor-pointer h-[38px] min-w-[38px] transition-colors ${active ? "bg-[#e1e4f4]" : "hover:bg-[#f4f5fb]"}`}
            >
              <span
                className="text-[14px] font-semibold leading-[20px] text-center"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  color: active ? "#1e2125" : disabled ? "#a3acb7" : "#6d7783",
                }}
              >
                {label}
              </span>
            </div>
          ))}
          {/* Date range text */}
          <span className="text-[#6d7783] text-[14px] leading-[20px] px-2 whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
            Mar 21, 2026 - Apr 19, 2026
          </span>
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// Metric card
// ────────────────────────────────────────────────────────
interface MetricCardProps {
  title: string;
  titleInfo?: boolean;
  value: string;
  description?: React.ReactNode;
  bottomLabel: string;
  bottomValue: string;
  bottomChange?: { value: string; positive: boolean };
}

function MetricCard({
  title,
  titleInfo,
  value,
  description,
  bottomLabel,
  bottomValue,
  bottomChange,
}: MetricCardProps) {
  return (
    <div className="bg-white flex-1 rounded-[8px] border border-[#c9ced4] p-[25px] flex flex-col gap-4 min-w-0">
      {/* Header + value */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[#1e2125] text-[14px] leading-[20px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
            {title}
          </span>
          {titleInfo && <InfoIcon />}
        </div>
        <span className="text-[#1e2125] text-[32px] leading-[40px] tracking-[-0.32px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
          {value}
        </span>
      </div>

      {/* Description */}
      {description && (
        <div className="text-[#6d7783] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
          {description}
        </div>
      )}

      {/* Bottom divider + stat */}
      <div className="flex flex-col gap-4 pt-5 border-t border-[#c9ced4] mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-[#6d7783] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
            {bottomLabel}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[#1e2125] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
              {bottomValue}
            </span>
            {bottomChange && (
              <span
                className="text-[13px] leading-[20px]"
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  color: bottomChange.positive ? "#249980" : "#e81c1f",
                }}
              >
                {bottomChange.value}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────
// Performance chart placeholder
// ───────────────────────────────────────────────────────
function PerformanceSection() {
  const bars = [
    {
      label: "Impressions",
      segments: [
        { color: "#8AD6C2", pct: 100 },
      ],
    },
    {
      label: "Landing page views",
      segments: [
        { color: "#4C5AA8", pct: 60 },
        { color: "#F08092", pct: 40 },
      ],
    },
    {
      label: "Mid-funnel conversions\nBooking Starts",
      segments: [
        { color: "#4C5AA8", pct: 55 },
        { color: "#F08092", pct: 30 },
        { color: "#F4C65F", pct: 15 },
      ],
    },
    {
      label: "Low-funnel conversions\nAttended Appointment, Button",
      segments: [
        { color: "#4C5AA8", pct: 45 },
        { color: "#F08092", pct: 35 },
        { color: "#F4C65F", pct: 15 },
        { color: "#8AD6C2", pct: 5 },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-[8px] border border-[#c9ced4] w-full overflow-hidden">
      {/* Top bar with segmented picker */}
      <div className="flex items-center justify-end p-6 pb-0">
        <div className="bg-[#f4f6f8] border border-[#c9ced4] rounded-[6px] flex gap-0.5 p-[3px]">
          <div className="flex items-center px-2.5 py-1 rounded-[4px]">
            <span className="text-[#6d7783] text-[12px] font-medium leading-[14px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Linear</span>
          </div>
          <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.08)] flex items-center px-2.5 py-1 rounded-[4px]">
            <span className="text-[#1e2125] text-[12px] font-medium leading-[14px]" style={{ fontFamily: "'Roboto', sans-serif" }}>%</span>
          </div>
        </div>
      </div>

      <div className="flex p-6 pt-4">
        {/* Left sidebar: legend + metric */}
        <div className="w-[220px] shrink-0 flex flex-col gap-2 pr-4">
          {/* Metric label */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#1e2125] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
              Conversion rate
            </span>
            <InfoIcon />
          </div>
          {/* Big metric */}
          <span className="text-[#1e2125] text-[28px] leading-[36px] tracking-[-0.28px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}>
            84.72%
          </span>

          {/* Legend */}
          <div className="flex flex-col gap-1.5 mt-3">
            {[
              { color: "#4C5AA8", label: "Bing Ads", value: "(119.1)" },
              { color: "#F08092", label: "Google Ads", value: "(696.9)" },
              { color: "#F4C65F", label: "Meta Ads", value: "(528.9)" },
              { color: "#8AD6C2", label: "MNTN", value: "(3)" },
            ].map(({ color, label, value }) => (
              <div key={label} className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="w-[10px] h-[10px] rounded-[5px] shrink-0" style={{ backgroundColor: color }} />
                <span className="text-[#1e2125] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
                  {label}
                </span>
                <span className="text-[#6d7783] text-[13px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Toggle hint */}
          <div className="mt-1 flex items-start gap-1">
            <InfoIcon color="#a3acb7" />
            <span className="text-[#6d7783] text-[12px] leading-[16px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
              Click on each source to toggle visibility in graph
            </span>
          </div>
        </div>

        {/* Right: chart */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          {/* Grid lines + bars */}
          <div className="relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between pr-2 text-right">
              {["100%", "75%", "50%", "25%", "0%"].map((label) => (
                <span key={label} className="text-[#6d7783] text-[11px] leading-normal" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                  {label}
                </span>
              ))}
            </div>

            {/* Chart area — bars and labels in separate rows */}
            <div className="ml-14 flex flex-col gap-2">
              {/* Bars row — all bottom-aligned, fixed height */}
              <div className="flex items-end gap-10" style={{ height: "240px" }}>
                {bars.map(({ segments }, i) => (
                  <div key={i} className="flex-1 flex justify-center h-full">
                    <div className="max-w-[200px] w-full flex flex-col-reverse rounded-sm overflow-hidden h-full">
                      {segments.map(({ color, pct }, j) => (
                        <div
                          key={j}
                          style={{
                            backgroundColor: color,
                            height: `${pct}%`,
                            transition: "height 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Labels row — fixed height so bars never shift */}
              <div className="flex gap-10">
                {bars.map(({ label }, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center" style={{ minHeight: "28px" }}>
                    {label.split("\n").map((line, li) => (
                      <p key={li} className="text-[#6d7783] text-[11px] leading-[14px] text-center" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="px-4 pb-4 pt-2 border-t border-[#f1f3f4]">
        <p className="text-[#6d7783] text-[12px] leading-[16px]" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>
          Mid and low-funnel conversions currently include all journeys. We're updating this to allow filtering for multi-channel journeys only (with touchpoints from at least two channels), making attribution model differences easier to see.
        </p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// BannerWrap — hoisted to module level so it has a stable
// identity across App re-renders (prevents remount on drawer open)
// ────────────────────────────────────────────────────────
function BannerWrap({
  onClick,
  children,
  clickable = false,
}: {
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  clickable?: boolean;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: 245,
        borderRadius: 20,
        overflow: "hidden",
        position: "relative",
        cursor: clickable ? "default" : undefined,
      }}
      onClick={onClick}
    >
      {/* Nudge content up 5px so front card is exactly centred */}
      <div style={{ width: "100%", height: "100%", transform: "translateY(-5px)" }}>
        {children}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────
// WeeklySection — hoisted to module level so it has a stable
// identity across App re-renders (prevents remount on drawer open)
// ────────────────────────────────────────────────────────
interface WeeklySectionProps {
  cardState: CardState;
  visibleCardIds: number[];
  onVisibleIdsChange: (ids: number[]) => void;
  onOpenDrawer: (card: InsightDrawerData) => void;
  onPromoClick: (e: React.MouseEvent) => void;
  onEventsClick: (e: React.MouseEvent) => void;
}

function WeeklySection({
  cardState,
  visibleCardIds,
  onVisibleIdsChange,
  onOpenDrawer,
  onPromoClick,
  onEventsClick,
}: WeeklySectionProps) {
  if (cardState === "promo") {
    return (
      <section className="pt-14">
        <BannerWrap onClick={onPromoClick} clickable>
          <PromoContainer />
        </BannerWrap>
      </section>
    );
  }
  if (cardState === "events") {
    return (
      <section className="pt-14">
        <BannerWrap onClick={onEventsClick} clickable>
          <EventsContainer />
        </BannerWrap>
      </section>
    );
  }
  if (cardState === "waiting") {
    return (
      <section className="pt-14">
        <BannerWrap>
          <WaitingContainer />
        </BannerWrap>
      </section>
    );
  }
  if (cardState === "empty") {
    return (
      <section className="pt-14 flex flex-col gap-4">
        <h2 className="text-[#1e2125] text-[24px] leading-[32px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
          Weekly Recommendations
        </h2>
        <div style={{ width: "100%", height: 245, overflow: "hidden", borderRadius: 8, outline: "none" }}>
          <EmptyStateComponent />
        </div>
      </section>
    );
  }
  if (cardState === "error") {
    return (
      <section className="pt-14 flex flex-col gap-4">
        <h2 className="text-[#1e2125] text-[24px] leading-[32px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
          Weekly Recommendations
        </h2>
        <div style={{ width: "100%", height: 245, overflow: "hidden", borderRadius: 8, outline: "none" }}>
          <ErrorStateComponent />
        </div>
      </section>
    );
  }
  // default: "cards"
  return (
    <section className="pt-14">
      <RecommendationsSection
        visibleIds={visibleCardIds}
        onVisibleIdsChange={onVisibleIdsChange}
        onOpenDrawer={onOpenDrawer}
      />
    </section>
  );
}

// ────────────────────────────────────────────────────────
// Main App
// ────────────────────────────────────────────────────────
export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerData, setDrawerData] = useState<InsightDrawerData | null>(null);
  const [cardState, setCardState] = useState<CardState>("cards");
  const [scenarioIdx, setScenarioIdx] = useState<number | null>(null);
  const [devPanelVisible, setDevPanelVisible] = useState(true);
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<"recommendations" | "journeys">("recommendations");
  const [visibleCardIds, setVisibleCardIds] = useState<number[]>([1, 2, 3]);
  const [manageConversionsOpen, setManageConversionsOpen] = useState(false);
  const [funnelVariant, setFunnelVariant] = useState<FunnelVariant>("A");

  function openDrawer(card: InsightDrawerData) {
    setDrawerData(card);
    setDrawerOpen(true);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  // Intercept clicks inside Promo container to catch "Enable AI" button
  function handlePromoClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const btn = target.closest('[data-name="Button"]') as HTMLElement | null;
    if (btn && btn.textContent?.trim() === "Enable AI") {
      setAiModalOpen(true);
    }
  }

  // After consent confirmed: switch to events state
  function handleAiConfirm() {
    setAiModalOpen(false);
    setCardState("events");
  }

  // Intercept clicks inside Events container to catch "Set up conversion events"
  function handleEventsClick(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    const btn = target.closest('[data-name="Button"]') as HTMLElement | null;
    if (btn && btn.textContent?.includes("Set up conversion events")) {
      setCardState("waiting");
    }
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar onLogoClick={() => setDevPanelVisible(true)} />

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top header (full width within main area) */}
        <TopHeader activeView={activeView} />

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          {/* Max-width container */}
          <div className="max-w-[1800px] mx-auto px-8 pb-12">
            {/* Page header */}
            <div className="pt-[56px] pb-0">
              <PageHeader onManageConversions={() => setManageConversionsOpen(true)} />
            </div>

            {/* View switcher — sits between page header and view-specific content */}
            <div className="pt-8">
              <ViewSwitcher activeView={activeView} onChange={setActiveView} />
            </div>

            {activeView === "recommendations" ? (
              <>
                {/* Weekly Recommendations — state-driven */}
                <WeeklySection
                  cardState={cardState}
                  visibleCardIds={visibleCardIds}
                  onVisibleIdsChange={setVisibleCardIds}
                  onOpenDrawer={openDrawer}
                  onPromoClick={handlePromoClick}
                  onEventsClick={handleEventsClick}
                />

                {/* Filter bar */}
                <section className="pt-8">
                  <FilterBar />
                </section>

                {/* Key metrics */}
                <section className="pt-4 flex gap-2 items-stretch">
                  <MetricCard
                    title="Total Conversion Credit"
                    titleInfo
                    value="1,347"
                    description={
                      <p>
                        Total Conversion Credit count may change based on which attribution model you select. Attribution models assign credit differently across touchpoints, so the same conversion may be included or excluded, causing your Total Conversion Credit to change.{" "}
                        <a href="#" className="text-[#3f51b5] underline">
                          Learn more
                        </a>
                      </p>
                    }
                    bottomLabel="Conversion rate"
                    bottomValue="84.72%"
                  />
                  <MetricCard
                    title="ROAS"
                    value="91.17%"
                    bottomLabel="ROAS last period"
                    bottomValue="73%"
                    bottomChange={{ value: "+3%", positive: true }}
                  />
                  <MetricCard
                    title="Total Spend"
                    value="$24,842.40"
                    bottomLabel="Total spend last period"
                    bottomValue="$80,000"
                    bottomChange={{ value: "-6.7%", positive: false }}
                  />
                </section>

                {/* Performance */}
                <section className="pt-6 flex flex-col gap-4">
                  <h2 className="text-[#1e2125] text-[24px] leading-[32px] whitespace-nowrap" style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>
                    Performance
                  </h2>
                  <PerformanceSection />
                </section>
              </>
            ) : (
              <div className="pt-8">
                <JourneysView />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Insight Drawer */}
      <InsightDrawer
        isOpen={drawerOpen}
        data={drawerData}
        onClose={closeDrawer}
        scenarioIdx={scenarioIdx}
        funnelVariant={funnelVariant}
      />

      {/* Toast notifications */}
      <Toaster position="bottom-right" richColors />

      {/* AI Consent Modal */}
      <AiConsentModalWrapper
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        onConfirm={handleAiConfirm}
      />

      {/* Dev utility — floating state switcher */}
      {devPanelVisible && <DevUtility current={cardState} onChange={setCardState} scenarioIdx={scenarioIdx} onScenarioChange={setScenarioIdx} funnelVariant={funnelVariant} onFunnelVariantChange={setFunnelVariant} onHide={() => setDevPanelVisible(false)} />}

      {/* Manage Conversions Drawer */}
      <ManageConversionsDrawer
        isOpen={manageConversionsOpen}
        onClose={() => setManageConversionsOpen(false)}
      />
    </div>
  );
}