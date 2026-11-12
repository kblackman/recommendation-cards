import svgPaths from "./svg-vbbists0eh";

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_31_9314)" id="Icon">
          <path d={svgPaths.pa286900} id="Vector" stroke="var(--stroke-0, #900F11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12.75 10.5V1.5" id="Vector_2" stroke="var(--stroke-0, #900F11)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_31_9314">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function NegativeFeedback() {
  return (
    <div className="bg-[#fcdfdf] content-stretch flex items-center justify-center px-[5px] relative rounded-[6px] size-full" data-name="Negative Feedback">
      <Icon />
    </div>
  );
}