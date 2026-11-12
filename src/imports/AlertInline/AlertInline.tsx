import svgPaths from "./svg-68id67mu98";
import { imgInfo } from "./svg-xh6q3";

function Frame() {
  return (
    <div className="bg-[#f4f5fb] content-stretch flex items-center justify-center relative rounded-[1000px] shrink-0 size-[48px]">
      <div className="relative shrink-0 size-[24px]" data-name="info">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgInfo}')` }} data-name="info">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c51e00} fill="var(--fill-0, #3F51B5)" id="info" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[12px] pr-[16px] py-[12px] relative size-full">
          <Frame />
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[#1e2125] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="text-[14px]">
              <span className="leading-[20px]">{`Message `}</span>
              <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</span>
              <span className="decoration-solid font-['Roboto:Bold',sans-serif] font-bold leading-[20px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
                CTA
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AlertInline() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Alert inline">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#3f51b5] self-stretch shrink-0 w-[4px]" />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dde0e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}