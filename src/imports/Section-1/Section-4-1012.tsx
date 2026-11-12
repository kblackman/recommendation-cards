import svgPaths from "./svg-y36ybrpaly";

function Icon() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Icon">
          <path d={svgPaths.ped98e80} id="Vector" stroke="var(--stroke-0, #2A3678)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
          <path d="M7.125 14.25H11.875" id="Vector_2" stroke="var(--stroke-0, #2A3678)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
          <path d="M7.91602 17.4165H11.0827" id="Vector_3" stroke="var(--stroke-0, #2A3678)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-[109px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-[-0.07px] text-[#2a3678] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          RECOMMENDATION
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[19px] relative shrink-0 w-[138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.066px] items-center pl-[-0.066px] relative size-full">
        <Text />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#1e2125] text-[14px] w-[343px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Stabilize Google Ads MC-S1 volume to protect downstream MC-S6 output. Review keywords and audiences driving mid-funnel events and increase budget allocation toward those segments.
        </p>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#f4f5fb] content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] relative rounded-[6px] size-full" data-name="Section">
      <Container />
      <Paragraph1 />
    </div>
  );
}