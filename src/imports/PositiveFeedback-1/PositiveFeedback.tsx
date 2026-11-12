import svgPaths from "./svg-qiizzf0bf4";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_31_9318)" id="Icon">
          <path d={svgPaths.p3cbf2030} id="Vector" stroke="var(--stroke-0, #15803D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.25 7.5V16.5" id="Vector_2" stroke="var(--stroke-0, #15803D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_31_9318">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function PositiveFeedback() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center px-[5px] relative rounded-[6px] size-full" data-name="Positive Feedback">
      <Icon />
    </div>
  );
}