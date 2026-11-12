import svgPaths from "./svg-hxlqa5dayz";
import { ListChecks } from "lucide-react";

function Frame9() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#2fcba9] left-[18px] overflow-clip rounded-[23px] size-[32px] top-[calc(50%+0.5px)]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-[calc(50%+1px)]" data-name="check">
        <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-12.12%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10.25">
              <path d="M13 1L4.75 9.25L1 5.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[45px] left-[82px] overflow-clip rounded-[8px] top-[36px] w-[316px]">
      <div className="-translate-y-1/2 absolute left-[16px] size-[28px] top-[calc(50%+0.5px)]" data-name="check_circle" />
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[75px] text-[#2fcba9] text-[14px] top-[calc(50%-9.5px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI enabled
      </p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#3f51b5] left-[15px] rounded-[23px] size-[38px] top-[calc(50%+1.5px)]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="funnel">
          <div className="absolute inset-[12.5%_8.34%_8.33%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-5.26%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.498 15.7503">
                <path d={svgPaths.p254c6a80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(63,81,181,0.14)] border-solid inset-[-4px] pointer-events-none rounded-[27px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[45px] left-[82px] rounded-[8px] top-[100px] w-[316px]">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[75px] text-[#26316e] text-[14px] top-[calc(50%-8.5px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Define your conversion events
      </p>
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f1f3f4] left-[18px] rounded-[23px] size-[32px] top-[calc(50%+2.5px)]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[18px] top-1/2" data-name="clock" />
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[20px] left-[calc(50%-4px)] text-[#a3acb7] text-[14px] top-[calc(50%-10px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          3
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dde0e4] border-solid inset-[-2px] pointer-events-none rounded-[25px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[45px] left-[82px] rounded-[8px] top-[164px] w-[316px]">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[75px] text-[#5d6875] text-[14px] top-[calc(50%-7.5px)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Get weekly recommendations
      </p>
      <Frame11 />
    </div>
  );
}

function GradientBackground() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[459px]" style={{ backgroundImage: "linear-gradient(97.3776deg, rgb(225, 228, 244) 3.4037%, rgb(255, 255, 255) 96.939%)" }} data-name="Gradient background">
      <div className="absolute h-[33px] left-[116px] top-[75px] w-0">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 33">
            <path d="M1 0V33" id="Vector 1" stroke="var(--stroke-0, #2FCBA9)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[34px] left-[116px] top-[139px] w-0">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 34">
            <path d="M1 0V34" id="Vector 2" stroke="var(--stroke-0, #C9CED4)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ListChecks size={14} color="#3f51b5" strokeWidth={2} />
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d6875] text-[12px] tracking-[1.3px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ONE MORE STEP
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[#1e2125] text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Define your conversion events
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5d6875] text-[14px] w-[715px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Freshpaint AI tailors every recommendation to the events that matter most to your business. Tell us which events represent mid-funnel and bottom-funnel conversions, and your first set of weekly insights will appear here.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">
      <div className="bg-[#3f51b5] content-stretch flex gap-[6px] h-[40px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Button">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Set up conversion events
        </p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px relative w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-full relative shrink-0 w-[1032px]">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[60px] py-[32px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Container">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <GradientBackground />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dde0e4] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}