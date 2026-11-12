import React from "react";
import { Info, TriangleAlert } from "lucide-react";
import { colors } from "../../styles/tokens";

interface NoteProps {
  type?: "info" | "warning";
  /** Show the leading icon. Defaults to true. */
  showIcon?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantStyles = {
  info: {
    background: colors.blue[50],                  // #F4F5FB
    border: `1px solid ${colors.blue[200]}`,      // #B7BEE6
    iconColor: colors.blue[500],                  // #3F51B5
    Icon: Info,
    iconSize: 18,
    iconStrokeWidth: 2.25,
    strongColor: colors.blue[500],                // #3F51B5
  },
  warning: {
    background: colors.yellow[50],                // #FFF9E5
    border: `1px solid ${colors.yellow[200]}`,    // #FFEEBA
    iconColor: colors.yellow[600],                // #DBA400
    Icon: TriangleAlert,
    iconSize: 16,
    iconStrokeWidth: 2,
    // yellow.700 is accessible (~5.5:1) on yellow.50 background
    strongColor: colors.yellow[700],              // #A37A00
  },
} as const;

export function Note({
  type = "info",
  showIcon = true,
  children,
  className = "",
}: NoteProps) {
  const { background, border, iconColor, Icon, iconSize, iconStrokeWidth, strongColor } =
    variantStyles[type];

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        background,
        border,
        borderRadius: 6,
        padding: "10px 14px",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {showIcon && (
        <Icon
          size={iconSize}
          strokeWidth={iconStrokeWidth}
          color={iconColor}
          style={{ flexShrink: 0, marginTop: 1 }}
        />
      )}

      {/* strongColor is injected as a CSS custom property so nested
          <strong> elements can pick it up without needing a style tag */}
      <span
        style={
          {
            fontSize: 14,
            lineHeight: "20px",
            fontWeight: 400,
            color: colors.neutral[600],
            "--note-strong-color": strongColor ?? "inherit",
          } as React.CSSProperties
        }
        className="[&_strong]:font-bold [&_strong]:text-[var(--note-strong-color)]"
      >
        {children}
      </span>
    </div>
  );
}