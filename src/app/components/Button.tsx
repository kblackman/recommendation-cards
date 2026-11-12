/**
 * Button — Freshpaint design-system button component
 *
 * States sourced directly from Figma:
 *   Default  → bg #3f51b5  (Button)
 *   Hover    → bg #324090  (Button-1)
 *   Focus    → bg #3f51b5  + 2px #8d99d8 outline ring (Button-2)
 *   Active   → bg #26316e  (Button-4)
 *   Disabled → bg #3f51b5  + opacity-50 (Button-3)
 *
 * ── Swapping a Figma <div data-name="Button"> for this component ──────────────
 *   Replace:  <div data-name="Button" class="bg-[#3f51b5] ..."><p>Label</p></div>
 *   With:     <Button onClick={handler}>Label</Button>
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Variants
 *   primary   — indigo fill (#3f51b5) — default CTA
 *   secondary — transparent text      — ghost / de-emphasis actions
 *   outline   — border + text         — secondary actions on light bg
 *   danger    — red fill (#e81c1f)    — destructive actions
 *
 * Sizes
 *   sm  — h-8  px-4  text-[12px]   (matches compact Figma spec)
 *   md  — h-10 px-5  text-[14px]
 *   lg  — h-12 px-6  text-[16px]
 */

import React from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

// ── Per-state background colours from Figma ──────────────────────────────────

const DEFAULT_BG: Record<Variant, string> = {
  primary:   "#3f51b5",
  secondary: "transparent",
  outline:   "transparent",
  danger:    "#e81c1f",
};

const HOVER_BG: Record<Variant, string> = {
  primary:   "#324090",          // Button-1
  secondary: "rgba(0,0,0,0.04)",
  outline:   "rgba(63,81,181,0.06)",
  danger:    "#c41018",
};

const ACTIVE_BG: Record<Variant, string> = {
  primary:   "#26316e",          // Button-4
  secondary: "rgba(0,0,0,0.08)",
  outline:   "rgba(63,81,181,0.12)",
  danger:    "#a10e14",
};

const FOCUS_RING: Record<Variant, string> = {
  primary:   "#8d99d8",          // Button-2
  secondary: "#8d99d8",
  outline:   "#8d99d8",
  danger:    "#f08080",
};

// ── Layout sizes ─────────────────────────────────────────────────────────────

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { height: 32, padding: "0 16px", fontSize: 12, gap: 6 },
  md: { height: 40, padding: "0 20px", fontSize: 14, gap: 6 },
  lg: { height: 48, padding: "0 24px", fontSize: 16, gap: 8 },
};

// ── Component ─────────────────────────────────────────────────────────────────

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  onFocus,
  onBlur,
  ...props
}: ButtonProps) {
  const [hovered,  setHovered]  = React.useState(false);
  const [pressed,  setPressed]  = React.useState(false);
  const [focused,  setFocused]  = React.useState(false);

  const isDisabled = disabled || loading;

  // Resolve background: pressed > hovered > default
  const bg = isDisabled
    ? DEFAULT_BG[variant]
    : pressed
      ? ACTIVE_BG[variant]
      : hovered
        ? HOVER_BG[variant]
        : DEFAULT_BG[variant];

  // Focus ring matches Button-2: 2px solid #8d99d8, 2px outside → outline-offset:2px
  const outlineStyle: React.CSSProperties =
    focused && !isDisabled
      ? { outline: `2px solid ${FOCUS_RING[variant]}`, outlineOffset: 2 }
      : { outline: "none" };

  // Shadow only on primary & danger default/hover (not while pressed)
  const hasShadow =
    (variant === "primary" || variant === "danger") && !pressed && !isDisabled;

  const computedStyle: React.CSSProperties = {
    // Layout
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    borderRadius:   6,
    whiteSpace:     "nowrap",
    userSelect:     "none",
    cursor:         isDisabled ? "not-allowed" : "pointer",
    // Typography — Roboto Medium, inherits white
    fontFamily:     "'Roboto', sans-serif",
    fontWeight:     500,
    color:          variant === "primary" || variant === "danger" ? "#ffffff" : "#3f51b5",
    // States
    background:     bg,
    opacity:        isDisabled ? 0.5 : 1,
    boxShadow:      hasShadow ? "0px 1px 2px 0px rgba(0,0,0,0.06)" : "none",
    transition:     "background 0.1s ease, box-shadow 0.1s ease, opacity 0.1s ease",
    // Border for outline variant
    border:         variant === "outline" ? "1px solid #3f51b5" : "none",
    // Focus ring
    ...outlineStyle,
    // Size
    ...SIZE_STYLES[size],
    // Consumer overrides
    ...style,
  };

  return (
    <button
      {...props}
      disabled={isDisabled}
      style={computedStyle}
      onMouseEnter={(e) => { setHovered(true);  onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); setPressed(false); onMouseLeave?.(e); }}
      onMouseDown={(e)  => { setPressed(true);  onMouseDown?.(e); }}
      onMouseUp={(e)    => { setPressed(false); onMouseUp?.(e); }}
      onFocus={(e)      => { setFocused(true);  onFocus?.(e); }}
      onBlur={(e)       => { setFocused(false); onBlur?.(e); }}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

// ── Loading spinner (visible when loading=true) ───────────────────────────────

function Spinner() {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none"
      style={{ animation: "fp-btn-spin 0.8s linear infinite", flexShrink: 0 }}
    >
      <style>{`@keyframes fp-btn-spin { to { transform: rotate(360deg); } }`}</style>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M7 2a5 5 0 0 1 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
