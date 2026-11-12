import svgPaths from "./svg-qtpj3euwb8";

function Frame() {
  return (
    <div className="bg-[#fcdfdf] overflow-clip relative rounded-[50px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[28.13%] left-1/2 overflow-clip top-[28.13%]" data-name="circle-alert">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-5.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path d={svgPaths.p394fc850} id="Vector" stroke="var(--stroke-0, #E81C1F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmptyState() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[8px] size-full" data-name="Empty State">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e2125] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Something went wrong
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5d6875] text-[14px] text-center w-[540px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`We couldn't load your insights right now. This is on us. Please try again later`}</p>
    </div>
  );
}