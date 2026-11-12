import React from "react";
import {
  CircleDollarSign,
  Layers,
  Route,
  TrendingUp,
  Crosshair,
  Filter,
  ChartNoAxesColumn,
  Ellipsis,
  type LucideIcon,
} from "lucide-react";
import { colors } from "../../styles/tokens";

// Category Badges V2: the eight categories agreed with the data team.
export type BadgeType =
  | "budget"
  | "portfolio"
  | "channel-role"
  | "channel-performance"
  | "attribution"
  | "funnel-journey"
  | "trend"
  | "other";

interface CategoryBadgeProps {
  type: BadgeType;
}

export const badgeConfig: Record<
  BadgeType,
  { label: string; bgColor: string; textColor: string; Icon: LucideIcon }
> = {
  budget: {
    label: "Budget",
    bgColor: colors.blue[100],
    textColor: colors.blue[700],
    Icon: CircleDollarSign,
  },
  portfolio: {
    label: "Portfolio",
    bgColor: colors.purple[100],
    textColor: colors.purple[500],
    Icon: Layers,
  },
  "channel-role": {
    label: "Channel role",
    bgColor: colors.yellow[100],
    textColor: colors.yellow[900],
    Icon: Route,
  },
  "channel-performance": {
    label: "Channel performance",
    bgColor: colors.teal[100],
    textColor: colors.teal[700],
    Icon: TrendingUp,
  },
  attribution: {
    // No orange ramp in tokens.ts yet; values taken from the V2 badge design.
    label: "Attribution",
    bgColor: "#F8DCC4",
    textColor: "#5C3311",
    Icon: Crosshair,
  },
  "funnel-journey": {
    label: "Funnel & Journey",
    bgColor: colors.blue[50],
    textColor: colors.blue[700],
    Icon: Filter,
  },
  trend: {
    label: "Trend",
    bgColor: colors.green[50],
    textColor: colors.green[700],
    Icon: ChartNoAxesColumn,
  },
  other: {
    label: "Other",
    bgColor: colors.neutral[100],
    textColor: colors.neutral[600],
    Icon: Ellipsis,
  },
};

export function CategoryBadge({ type }: CategoryBadgeProps) {
  const { label, bgColor, textColor, Icon } = badgeConfig[type];

  return (
    <div
      className="inline-flex self-start items-center gap-[5px] px-3 py-1 rounded-[30px] shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        <Icon size={15} color={textColor} strokeWidth={2} />
      </div>
      <span
        className="text-[12px] font-medium whitespace-nowrap leading-[16px]"
        style={{ color: textColor, fontFamily: "'Roboto', sans-serif" }}
      >
        {label}
      </span>
    </div>
  );
}
