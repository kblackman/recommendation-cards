import svgPaths from "../../imports/AlertInline/svg-68id67mu98";
import { imgInfo } from "../../imports/AlertInline/svg-xh6q3";

interface AlertInlineProps {
  children: React.ReactNode;
  /** "card" = bordered card with left accent (Option A), "inline" = icon + text only (Option B) */
  variant?: "card" | "inline";
}

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="info">
      <div
        className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
        style={{ maskImage: `url('${imgInfo}')` }}
        data-name="info"
      >
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <path d={svgPaths.p1c51e00} fill="#3F51B5" />
        </svg>
      </div>
    </div>
  );
}

export function AlertInline({ children, variant = "card" }: AlertInlineProps) {
  if (variant === "inline") {
    return (
      <div className="content-stretch flex gap-[8px] items-center relative w-full">
        <InfoIcon />
        <p
          className="flex-[1_0_0] min-w-px relative text-[14px] text-[#1e2125] leading-[20px]"
          style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
        >
          {children}
        </p>
      </div>
    );
  }

  // variant === "card"
  return (
    <div className="bg-white relative rounded-[8px] w-full" data-name="Alert inline">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] w-full">
        {/* Left accent bar */}
        <div className="bg-[#3f51b5] self-stretch shrink-0 w-[4px]" />
        {/* Content */}
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center w-full">
            <div className="content-stretch flex gap-[16px] items-center pl-[12px] pr-[16px] py-[12px] w-full">
              {/* Icon circle */}
              <div className="bg-[#f4f5fb] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[48px]">
                <InfoIcon />
              </div>
              {/* Text */}
              <p
                className="flex-[1_0_0] min-w-px relative text-[14px] text-[#1e2125] leading-[20px]"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
              >
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Border overlay */}
      <div
        aria-hidden="true"
        className="absolute border border-[#dde0e4] border-solid inset-0 pointer-events-none rounded-[8px]"
      />
    </div>
  );
}