import React from "react";
import { ArrowUp, TrendingUp, Filter, CircleDollarSign } from "lucide-react";
import svgPaths from "../../imports/FreshpaintInsights/svg-qfbaw5fbvy";

export type BadgeType = "efficiency-decline" | "efficiency-gap" | "portfolio-rebalance" | "channel-win" | "channel-performance" | "funnel-journey" | "budget";

interface CategoryBadgeProps {
  type: BadgeType;
}

// Efficiency Decline – trending-down arrow
function EfficiencyDeclineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <svg width="18.667" height="10.333" x="0.667" y="4.833" viewBox="0 0 18.6667 10.3333" fill="none" preserveAspectRatio="none">
        <path d={svgPaths.p38892980} stroke="#BE1316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </svg>
  );
}

// Efficiency Gap – funnel icon
function EfficiencyGapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <svg width="18.164" height="17.334" x="0.918" y="1.667" viewBox="0 0 18.1644 17.3337" fill="none" preserveAspectRatio="none">
        <path d={svgPaths.p5ae8c80} stroke="#3D444C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </svg>
  );
}

// Portfolio Rebalance – left-right arrows
function PortfolioRebalanceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <svg width="14.833" height="16.5" x="2.583" y="1.75" viewBox="0 0 14.8333 16.5" fill="none" preserveAspectRatio="none">
        <path d={svgPaths.p36c06758} stroke="#3F51B5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </svg>
  );
}

const badgeConfig: Record<
  BadgeType,
  {
    label: string;
    bgColor: string;
    textColor: string;
    icon: React.ReactNode;
  }
> = {
  "efficiency-decline": {
    label: "Efficiency Decline",
    bgColor: "#fcdfdf",
    textColor: "#be1316",
    icon: <EfficiencyDeclineIcon />,
  },
  "efficiency-gap": {
    label: "Efficiency Gap",
    bgColor: "#f1f3f4",
    textColor: "#23303e",
    icon: <EfficiencyGapIcon />,
  },
  "portfolio-rebalance": {
    label: "Portfolio Rebalance",
    bgColor: "#e1e4f4",
    textColor: "#3f51b5",
    icon: <PortfolioRebalanceIcon />,
  },
  "channel-win": {
    label: "Channel Win",
    bgColor: "#DEF7F2",
    textColor: "#249980",
    icon: <ArrowUp size={16} color="#249980" strokeWidth={2} />,
  },
  "channel-performance": {
    label: "Channel performance",
    bgColor: "#DEF7F2",
    textColor: "#249980",
    icon: <TrendingUp size={16} color="#249980" strokeWidth={2} />,
  },
  "funnel-journey": {
    label: "Funnel & journey",
    bgColor: "#F4F5FB",
    textColor: "#26316E",
    icon: <Filter size={14} color="#26316E" strokeWidth={2} />,
  },
  "budget": {
    label: "Budget",
    bgColor: "#E8EAFB",
    textColor: "#3F51B5",
    icon: <CircleDollarSign size={15} color="#3F51B5" strokeWidth={2} />,
  },
};

export function CategoryBadge({ type }: CategoryBadgeProps) {
  const config = badgeConfig[type];

  return (
    <div
      className="inline-flex self-start items-center gap-[5px] px-3 py-1 rounded-[30px] shrink-0"
      style={{ backgroundColor: config.bgColor }}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        {config.icon}
      </div>
      <span
        className="text-[12px] font-medium whitespace-nowrap leading-[16px]"
        style={{ color: config.textColor, fontFamily: "'Roboto', sans-serif" }}
      >
        {config.label}
      </span>
    </div>
  );
}