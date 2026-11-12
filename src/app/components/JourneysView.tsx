import React, { useState } from "react";

// ── Icons ────────────────────────────────────────────────

function InfoIcon({ color = "#A3ACB7" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.83" stroke={color} strokeWidth="1.167" />
      <path d="M7 9.33V7" stroke={color} strokeWidth="1.167" strokeLinecap="round" />
      <path d="M7 4.67H7.006" stroke={color} strokeWidth="1.167" strokeLinecap="round" />
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

function SortIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 2L4 4.5H8L6 2Z" fill="#A3ACB7" />
      <path d="M6 10L4 7.5H8L6 10Z" fill="#A3ACB7" />
    </svg>
  );
}

// ── Journey Filter Bar ────────────────────────────────────

function JourneysFilterBar() {
  return (
    <div className="bg-[#f4f5fb] rounded-[8px] w-full">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: attribution model */}
        <div className="flex items-center gap-4">
          <span
            className="text-[#1e2125] text-[14px] leading-[20px] shrink-0"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
          >
            Filters:
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span
                className="text-[#6d7783] text-[13px] leading-[16px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Attribution model
              </span>
              <InfoIcon />
            </div>
            <div className="bg-white border border-[#c9ced4] rounded-[6px] flex items-center justify-between pl-4 pr-3 py-2 w-[200px] cursor-pointer">
              <span
                className="text-[#1e2125] text-[14px] leading-[20px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                Linear
              </span>
              <ChevronDown />
            </div>
          </div>
        </div>

        {/* Right: date range picker */}
        <div className="bg-white flex items-center gap-0.5 px-2 py-1 rounded-[12px] h-[46px]">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-[6px] cursor-pointer hover:bg-[#f4f5fb] transition-colors">
            <CalendarIcon />
            <span
              className="text-[#6d7783] text-[14px] font-semibold leading-[20px]"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              Custom
            </span>
          </div>
          {[
            { label: "7D", active: false, disabled: false },
            { label: "30D", active: true, disabled: false },
            { label: "3M", active: false, disabled: false },
            { label: "6M", active: false, disabled: true },
            { label: "12M", active: false, disabled: true },
          ].map(({ label, active, disabled }) => (
            <div
              key={label}
              className={`flex items-center justify-center px-2.5 py-1 rounded-[6px] cursor-pointer h-[38px] min-w-[38px] transition-colors ${
                active ? "bg-[#e1e4f4]" : "hover:bg-[#f4f5fb]"
              }`}
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
          <span
            className="text-[#6d7783] text-[14px] leading-[20px] px-2 whitespace-nowrap"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Apr 4, 2026 – May 3, 2026
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Journey Stats ─────────────────────────────────────────

interface JourneysStatProps {
  label: string;
  value: string;
  subValue?: string;
  hasInfo?: boolean;
}

function JourneysStat({ label, value, subValue, hasInfo }: JourneysStatProps) {
  return (
    <div className="bg-white border border-[#c9ced4] rounded-[8px] flex-1 min-w-0 px-6 py-5 flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <span
          className="text-[#6d7783] text-[13px] leading-[20px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          {label}
        </span>
        {hasInfo && <InfoIcon />}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span
          className="text-[#1e2125] text-[28px] leading-[36px] tracking-[-0.28px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
        >
          {value}
        </span>
        {subValue && (
          <span
            className="text-[#6d7783] text-[14px] leading-[20px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            {subValue}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Alluvial / Sankey Diagram ─────────────────────────────

const GOOGLE_COLOR = "#C17070";
const META_COLOR = "#7BA7C4";
const CONV_COLOR = "#4CAF77";

/**
 * Custom SVG alluvial diagram — approximates the screenshot's Sankey.
 * ViewBox: 0 0 1000 290
 * Bar area: y=30..270 (240px usable)
 * Gap between stacked bars in a column: 4px
 * Per-channel height = pct * (240-4) = pct * 236
 *
 * Column x positions (bar left edge), bar width=18:
 *   T1: x=60, T2: x=360, T3: x=660, Conv: x=932
 */

interface TouchData {
  label: string;
  google: number; // 0..1 fraction
  meta: number;
}

function getAlluvialPaths(numTouches: number) {
  // Per-touch proportions
  const allTouches: TouchData[] = [
    { label: "Touch 1", google: 0.84, meta: 0.16 },
    { label: "Touch 2", google: 0.80, meta: 0.20 },
    { label: "Touch 3", google: 0.74, meta: 0.26 },
    { label: "Touch 4", google: 0.70, meta: 0.30 },
    { label: "Touch 5", google: 0.65, meta: 0.35 },
  ];

  const touches = allTouches.slice(0, numTouches);

  const CHART_H = 240;
  const GAP = 4;
  const BAR_W = 18;
  const BAR_Y = 30;

  // Calculate column x positions based on numTouches
  // We have numTouches + 1 columns (touches + conversion)
  const totalCols = numTouches + 1;
  const xPositions: number[] = [];
  const colWidth = 940 / totalCols; // distribute over ~940px
  for (let i = 0; i < totalCols; i++) {
    xPositions.push(30 + i * colWidth);
  }

  // Get y extents for a channel in a column
  function getExtents(col: TouchData | null, isGoogle: boolean) {
    if (!col) {
      // Conversion column - full bar
      return { top: BAR_Y, bottom: BAR_Y + CHART_H };
    }
    const usableH = CHART_H - GAP;
    if (isGoogle) {
      const h = col.google * usableH;
      return { top: BAR_Y, bottom: BAR_Y + h };
    } else {
      const googleH = col.google * usableH;
      return {
        top: BAR_Y + googleH + GAP,
        bottom: BAR_Y + CHART_H,
      };
    }
  }

  // Conversion column: google fills top 84%, meta fills bottom 16%
  const convUsableH = CHART_H - GAP;
  const convGoogleH = 0.84 * convUsableH;
  const convGoogleExtent = { top: BAR_Y, bottom: BAR_Y + convGoogleH };
  const convMetaExtent = { top: BAR_Y + convGoogleH + GAP, bottom: BAR_Y + CHART_H };

  function bandPath(
    x1: number,
    y1top: number,
    y1bot: number,
    x2: number,
    y2top: number,
    y2bot: number
  ) {
    const cx = (x1 + x2) / 2;
    return `M ${x1} ${y1top} C ${cx} ${y1top}, ${cx} ${y2top}, ${x2} ${y2top} L ${x2} ${y2bot} C ${cx} ${y2bot}, ${cx} ${y1bot}, ${x1} ${y1bot} Z`;
  }

  const bands: { path: string; color: string; opacity: number }[] = [];
  const bars: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
    label?: string;
    labelY?: number;
  }[] = [];
  const colLabels: { x: number; label: string }[] = [];

  // Draw bands between adjacent columns
  for (let i = 0; i < touches.length; i++) {
    const x1Right = xPositions[i] + BAR_W;
    const x2Left = xPositions[i + 1];
    const isLastBand = i === touches.length - 1;

    const g1 = getExtents(touches[i], true);
    const m1 = getExtents(touches[i], false);

    let g2: { top: number; bottom: number };
    let m2: { top: number; bottom: number };

    if (isLastBand) {
      // Connect to conversion proportions
      g2 = convGoogleExtent;
      m2 = convMetaExtent;
    } else {
      g2 = getExtents(touches[i + 1], true);
      m2 = getExtents(touches[i + 1], false);
    }

    bands.push({
      path: bandPath(x1Right, g1.top, g1.bottom, x2Left, g2.top, g2.bottom),
      color: GOOGLE_COLOR,
      opacity: 0.45,
    });
    bands.push({
      path: bandPath(x1Right, m1.top, m1.bottom, x2Left, m2.top, m2.bottom),
      color: META_COLOR,
      opacity: 0.45,
    });
  }

  // Draw touch bars
  for (let i = 0; i < touches.length; i++) {
    const col = touches[i];
    const x = xPositions[i];
    const usableH = CHART_H - GAP;

    const googleH = col.google * usableH;
    const metaH = col.meta * usableH;

    bars.push({ x, y: BAR_Y, width: BAR_W, height: googleH, fill: GOOGLE_COLOR });
    bars.push({ x, y: BAR_Y + googleH + GAP, width: BAR_W, height: metaH, fill: META_COLOR });
    colLabels.push({ x: x + BAR_W / 2, label: col.label });
  }

  // Conversion bar
  const convX = xPositions[numTouches];
  bars.push({ x: convX, y: BAR_Y, width: BAR_W, height: CHART_H, fill: CONV_COLOR });
  colLabels.push({ x: convX + BAR_W / 2, label: "Conversion" });

  // Channel label positions (left-aligned to first touch, centered on bar midpoints)
  const googleMidY = BAR_Y + getExtents(touches[0], true).bottom / 2;
  const metaMidY =
    (getExtents(touches[0], false).top + getExtents(touches[0], false).bottom) / 2;

  return { bands, bars, colLabels, xPositions, googleMidY, metaMidY, BAR_W };
}

function AlluvialDiagram({ numTouches }: { numTouches: number }) {
  const { bands, bars, colLabels, xPositions, BAR_W } = getAlluvialPaths(numTouches);

  return (
    <svg
      viewBox="0 0 1000 295"
      width="100%"
      style={{ display: "block" }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Column header labels */}
      {colLabels.map((col, i) => (
        <text
          key={i}
          x={col.x}
          y={20}
          textAnchor="middle"
          fill="#6d7783"
          fontSize={11}
          fontFamily="'Roboto', sans-serif"
          fontWeight={500}
        >
          {col.label}
        </text>
      ))}

      {/* Bands (drawn behind bars) */}
      {bands.map((band, i) => (
        <path key={i} d={band.path} fill={band.color} opacity={band.opacity} />
      ))}

      {/* Bars (drawn on top) */}
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width={bar.width}
          height={bar.height}
          fill={bar.fill}
          rx={2}
        />
      ))}

      {/* Inline channel labels on first touch bars */}
      {(() => {
        const x0 = xPositions[0];
        const usableH = 236; // 240-4
        const googleH = 0.84 * usableH;
        const metaH = 0.16 * usableH;
        const googleMidY = 30 + googleH / 2;
        const metaTopY = 30 + googleH + 4;
        const metaMidY = metaTopY + metaH / 2;
        return (
          <>
            <text
              x={x0 - 6}
              y={googleMidY + 4}
              textAnchor="end"
              fill={GOOGLE_COLOR}
              fontSize={10}
              fontFamily="'Roboto', sans-serif"
              fontWeight={600}
            >
              google_ads
            </text>
            <text
              x={x0 - 6}
              y={metaMidY + 4}
              textAnchor="end"
              fill={META_COLOR}
              fontSize={10}
              fontFamily="'Roboto', sans-serif"
              fontWeight={600}
            >
              meta_ads
            </text>
          </>
        );
      })()}

      {/* Label at conversion bar */}
      {(() => {
        const convX = xPositions[numTouches];
        return (
          <text
            x={convX + BAR_W + 6}
            y={30 + 240 / 2 + 4}
            textAnchor="start"
            fill={CONV_COLOR}
            fontSize={10}
            fontFamily="'Roboto', sans-serif"
            fontWeight={600}
          >
            conversion
          </text>
        );
      })()}
    </svg>
  );
}

// ── Journey Flow Section ──────────────────────────────────

function JourneyFlowSection() {
  const [selectedTouches, setSelectedTouches] = useState(3);

  return (
    <div className="bg-white border border-[#c9ced4] rounded-[8px] w-full overflow-hidden">
      {/* Header row */}
      <div className="flex items-center justify-between px-6 pt-5 pb-0">
        <h2
          className="text-[#1e2125] text-[24px] leading-[32px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
        >
          Journey Flow
        </h2>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        {/* Left: touches selector */}
        <div className="flex items-center gap-3">
          <span
            className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.24px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            TOUCHES
          </span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setSelectedTouches(n)}
                className={`w-7 h-7 rounded-full flex items-center justify-center cursor-pointer transition-colors text-[13px] ${
                  selectedTouches === n
                    ? "bg-[#1e2125] text-white"
                    : "text-[#6d7783] hover:bg-[#f4f5fb]"
                }`}
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
              >
                {n}
              </button>
            ))}
          </div>
          <span
            className="text-[#a3acb7] text-[12px] leading-[16px] ml-2"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Click a node in the diagram to filter by path
          </span>
        </div>

        {/* Right: channel pills */}
        <div className="flex items-center gap-2">
          <span
            className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.24px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            CHANNELS
          </span>
          <InfoIcon />
          <span
            className="bg-[#C17070] text-white text-[11px] px-2.5 py-0.5 rounded-full"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            google_ads
          </span>
          <span
            className="bg-[#7BA7C4] text-white text-[11px] px-2.5 py-0.5 rounded-full"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            meta_ads
          </span>
        </div>
      </div>

      {/* Diagram */}
      <div className="px-6 pb-6 pt-2">
        <AlluvialDiagram numTouches={selectedTouches} />
      </div>
    </div>
  );
}

// ── Top Journeys Table ────────────────────────────────────

interface JourneyRow {
  path: string[];
  length: number;
  channels: number;
  conversions: number;
  attributed: number;
  avgTime: string;
}

const journeyRows: JourneyRow[] = [
  { path: ["google_ads"], length: 1, channels: 1, conversions: 494, attributed: 494, avgTime: "6 days 7 hrs" },
  { path: ["google_ads", "google_ads"], length: 2, channels: 1, conversions: 159, attributed: 159, avgTime: "12 days" },
  { path: ["google_ads", "google_ads", "google_ads"], length: 3, channels: 1, conversions: 77, attributed: 77, avgTime: "18 days 19 hrs" },
  { path: ["google_ads", "google_ads", "google_ads", "google_ads"], length: 4, channels: 1, conversions: 36, attributed: 36, avgTime: "22 days 19 hrs" },
  { path: ["meta_ads"], length: 1, channels: 1, conversions: 31, attributed: 31, avgTime: "14 days 9 hrs" },
  { path: ["google_ads", "meta_ads"], length: 2, channels: 2, conversions: 28, attributed: 28, avgTime: "17 days 3 hrs" },
  { path: ["meta_ads", "google_ads"], length: 2, channels: 2, conversions: 22, attributed: 22, avgTime: "19 days 11 hrs" },
];

const CHANNEL_COLORS: Record<string, string> = {
  google_ads: "#C17070",
  meta_ads: "#7BA7C4",
};

function JourneyPathDisplay({ path }: { path: string[] }) {
  const display = path.slice(0, 3);
  const hasMore = path.length > 3;
  return (
    <div className="flex items-center gap-1 flex-wrap">
      {display.map((ch, i) => (
        <React.Fragment key={i}>
          <span
            className="text-[13px] leading-[20px]"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 500,
              color: CHANNEL_COLORS[ch] ?? "#1e2125",
            }}
          >
            {ch}
          </span>
          {i < display.length - 1 && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4.5 3L7.5 6L4.5 9" stroke="#a3acb7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </React.Fragment>
      ))}
      {hasMore && (
        <span className="text-[#a3acb7] text-[12px]" style={{ fontFamily: "'Roboto', sans-serif" }}>
          +{path.length - 3} more
        </span>
      )}
    </div>
  );
}

type SortKey = keyof Pick<JourneyRow, "length" | "channels" | "conversions" | "attributed">;

function TopJourneysTable() {
  const [sortKey, setSortKey] = useState<SortKey>("conversions");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const sorted = [...journeyRows].sort((a, b) => {
    const mul = sortDir === "asc" ? 1 : -1;
    return mul * (a[sortKey] - b[sortKey]);
  });

  const colHeader = (label: string, key: SortKey) => (
    <th
      className="px-4 py-3 text-left cursor-pointer select-none whitespace-nowrap"
      onClick={() => handleSort(key)}
    >
      <div className="flex items-center gap-1">
        <span
          className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.24px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
        >
          {label}
        </span>
        <SortIcon />
      </div>
    </th>
  );

  return (
    <div className="bg-white border border-[#c9ced4] rounded-[8px] overflow-hidden w-full">
      <div className="px-6 pt-5 pb-3">
        <div className="flex items-center gap-2">
          <h2
            className="text-[#1e2125] text-[24px] leading-[32px]"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
          >
            Top Journeys
          </h2>
          <InfoIcon />
        </div>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-t border-b border-[#c9ced4] bg-[#f4f6f8]">
            <th className="px-6 py-3 text-left">
              <div className="flex items-center gap-1">
                <span
                  className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.24px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
                >
                  Journey Path
                </span>
                <SortIcon />
              </div>
            </th>
            {colHeader("Length", "length")}
            {colHeader("Channels", "channels")}
            {colHeader("Conversions", "conversions")}
            {colHeader("Attributed", "attributed")}
            <th className="px-4 py-3 text-left whitespace-nowrap">
              <span
                className="text-[#6d7783] text-[12px] leading-[16px] tracking-[0.24px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}
              >
                Avg Time
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#f1f3f4] hover:bg-[#f9fafb] transition-colors cursor-pointer"
            >
              <td className="px-6 py-3">
                <JourneyPathDisplay path={row.path} />
              </td>
              <td className="px-4 py-3">
                <span
                  className="text-[#1e2125] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {row.length}
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className="text-[#1e2125] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {row.channels}
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className="text-[#1e2125] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {row.conversions}
                </span>
              </td>
              <td className="px-4 py-3">
                <span
                  className="text-[#1e2125] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {row.attributed}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span
                  className="text-[#6d7783] text-[14px] leading-[20px]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
                >
                  {row.avgTime}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main Journeys View ────────────────────────────────────

export function JourneysView() {
  return (
    <div className="flex flex-col gap-0">
      {/* Filter bar */}
      <section>
        <JourneysFilterBar />
      </section>

      {/* Stats row */}
      <section className="pt-4 flex gap-2 items-stretch">
        <JourneysStat label="Total conversions" value="1,194" hasInfo />
        <JourneysStat label="Avg path length" value="7" subValue="touches" />
        <JourneysStat label="Avg time to convert" value="14 days" subValue="19 hours" />
        <JourneysStat label="Multi-channel %" value="16%" hasInfo />
      </section>

      {/* Journey Flow */}
      <section className="pt-6">
        <JourneyFlowSection />
      </section>

      {/* Top Journeys */}
      <section className="pt-6">
        <TopJourneysTable />
      </section>
    </div>
  );
}
