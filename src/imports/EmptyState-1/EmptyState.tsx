import svgPaths from "./svg-gsh9wm4449";

function Frame() {
  return (
    <div className="bg-[#e1e4f4] overflow-clip relative rounded-[50px] shrink-0 size-[48px]">
      <div className="-translate-x-1/2 absolute aspect-[24/24] bottom-[28.13%] left-1/2 overflow-clip top-[28.13%]" data-name="calendar-x">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.71%_-6.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 19.5">
              <path d={svgPaths.p30e6080} id="Vector" stroke="var(--stroke-0, #3F51B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
        Not enough recent data for recommendations
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5d6875] text-[14px] text-center w-[540px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`We haven't recorded any conversion events in the last 60 days. Once your campaigns are active, recommendations will appear here.`}</p>
    </div>
  );
}