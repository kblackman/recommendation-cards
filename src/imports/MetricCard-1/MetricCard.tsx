import svgPaths from "./svg-zuerjhmxyh";

export default function MetricCard({ className }: { className?: string }) {
  return (
    <div className={className || "bg-white content-stretch flex flex-col gap-[14px] items-start px-[19px] py-[17px] relative rounded-[6px] w-[375px]"} data-name="Metric Card">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Data">
        <div className="content-stretch flex gap-[5px] items-center relative shrink-0 w-full" data-name="Title">
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d6875] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Metric Title
          </p>
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="info">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <div className="absolute inset-[-7.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
                  <path d={svgPaths.p2ff23c00} id="Vector" stroke="var(--stroke-0, #A3ACB7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#1e2125] text-[28px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          0
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6d7783] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
      <div className="relative shrink-0 w-full" data-name="Description Section">
        <div className="content-stretch flex flex-col items-start overflow-clip pt-[17px] relative rounded-[inherit] size-full">
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[13px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Description text here.
          </p>
        </div>
        <div aria-hidden="true" className="absolute border-[#dde0e4] border-solid border-t inset-0 pointer-events-none" />
      </div>
      <div className="content-start flex flex-wrap gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Tags">
        <div className="bg-[#f1f3f4] content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-[2px] relative rounded-[1000px] shrink-0" data-name="Chip - Low Funnel Events">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="target">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                  <g id="Vector">
                    <path d={svgPaths.p16fbdc80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p26103f80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pe3ad500} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Low funnel events
          </p>
        </div>
        <div className="bg-[#f1f3f4] content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-[2px] relative rounded-[1000px] shrink-0" data-name="Chip - Mid Funnel Events">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="milestone">
            <div className="absolute inset-[12.5%_8.33%_12.5%_12.5%]" data-name="Vector">
              <div className="absolute inset-[-5.56%_-5.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10">
                  <path d={svgPaths.p3b59400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Mid funnel events
          </p>
        </div>
        <div className="bg-[#f1f3f4] content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-[2px] relative rounded-[1000px] shrink-0" data-name="Chip - Ad Spend Data">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="dollar-sign">
            <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="Vector">
              <div className="absolute inset-[-5%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
                  <path d={svgPaths.p3c49c500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Ad spend data
          </p>
        </div>
        <div className="bg-[#f1f3f4] content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-[2px] relative rounded-[1000px] shrink-0" data-name="Chip - Touches Data">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="mouse-pointer-click">
            <div className="absolute inset-[9.17%_12.5%_12.49%_9.17%]" data-name="Vector">
              <div className="absolute inset-[-5.32%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4002 10.401">
                  <path d={svgPaths.p2130b800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Touches data
          </p>
        </div>
      </div>
    </div>
  );
}