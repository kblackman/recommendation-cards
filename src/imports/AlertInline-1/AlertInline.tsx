import svgPaths from "./svg-4ggamu9sc7";
import { imgInfo } from "./svg-ntx3z";

export default function AlertInline() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Alert inline">
      <div className="relative shrink-0 size-[24px]" data-name="info">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgInfo}')` }} data-name="info">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c51e00} fill="var(--fill-0, #3F51B5)" id="info" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Roboto:Bold',sans-serif] font-bold leading-[0] min-w-px relative text-[#1e2125] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Message lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="decoration-solid leading-[20px] text-[14px] underline" style={{ fontVariationSettings: "'wdth' 100" }}>
          CTA
        </span>
      </p>
    </div>
  );
}