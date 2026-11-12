import svgPaths from "./svg-0zjdfkczjf";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center relative size-full">
        <div className="bg-[#f1f3f4] content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Category Badges">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="funnel">
            <div className="absolute inset-[12.5%_8.34%_8.33%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-4.74%_-4.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1644 17.3337">
                  <path d={svgPaths.p5ae8c80} id="Vector" stroke="var(--stroke-0, #3D444C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#23303e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Efficiency Gap
          </p>
        </div>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[#1e2125] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Google Ads delivers a strong $139 acquisition cost but mid-funnel softness signals future pressure
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M15 5L5 15" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 5L15 15" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ButtonClose() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[32px]" data-name="Button - Close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-[439px]" data-name="Header">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-start p-[33px] relative size-full">
        <Container />
        <ButtonClose />
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#3f51b5] h-[2px] left-0 rounded-tl-[2px] rounded-tr-[2px] top-[43px] w-[43px]" data-name="Text" />;
}

function Tab() {
  return (
    <div className="absolute h-[44px] left-[32.1px] top-0 w-[43px]" data-name="Tab">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[21.9px] text-[#1e2125] text-[14px] text-center top-[11.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Details
      </p>
      <Text />
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute h-[44px] left-[99px] top-0 w-[102px]" data-name="Tab">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[51.21px] text-[#6d7783] text-[14px] text-center top-[11.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supporting Data
      </p>
    </div>
  );
}

function TabList() {
  return (
    <div className="col-1 h-[45px] ml-0 mt-0 relative row-1 w-[439px]" data-name="Tab List">
      <Tab />
      <Tab1 />
    </div>
  );
}

function Icon1() {
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

function Text1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
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

function Container2() {
  return (
    <div className="h-[19px] relative shrink-0 w-[138px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10.066px] items-center pl-[-0.066px] relative size-full">
        <Text1 />
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

function Section() {
  return (
    <div className="bg-[#f4f5fb] relative rounded-[6px] shrink-0 w-[375px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[20px] relative size-full">
        <Container2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[375px]" data-name="Heading 3">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ATTRIBUTION MODEL
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[375px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#1e2125] text-[16px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        First-touch
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[88px] relative shrink-0 w-[375px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#1e2125] text-[14px] top-[-0.25px] w-[375px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Google Ads is labeled an Introducer (68% first-touch), so first-touch attribution best captures its role in generating the top-of-funnel activity that feeds mid-funnel events.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[6px] relative shrink-0">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading1 />
        <Frame />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[375px]" data-name="Heading 3">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        DATA QUALITY
      </p>
    </div>
  );
}

function QualityDot() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Quality dot">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Quality dot">
          <circle cx="8" cy="8" fill="var(--fill-0, #61DABF)" id="Dot" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-[-0.14px] text-[#1e2125] text-[16px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          High
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[6.141px] h-[24px] items-center relative shrink-0 w-[375px]" data-name="Container">
      <QualityDot />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[88px] relative shrink-0 w-[375px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[22px] left-0 text-[#1e2125] text-[14px] top-[-0.25px] w-[375px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Combines a positive finding (strong acquisition cost) with an area for improvement (mid-funnel softness). All metrics verified against source. Specific, actionable recommendation. Satisfies sentiment balance requirement.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pl-[6px] relative shrink-0">
      <Container3 />
      <Paragraph5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <Frame1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] h-[1373px] items-start ml-0 mt-[45px] overflow-clip p-[32px] relative row-1 w-[439px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Content() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Content">
      <TabList />
      <Container1 />
    </div>
  );
}

function InsightDetailPanel() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-[439px]" data-name="InsightDetailPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Content />
      </div>
    </div>
  );
}

export default function InsightDrawer() {
  return (
    <div className="bg-white relative size-full" data-name="InsightDrawer">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-px relative size-full">
        <Header />
        <InsightDetailPanel />
      </div>
      <div aria-hidden="true" className="absolute border-[#c9ced4] border-l border-solid inset-0 pointer-events-none shadow-[-8px_0px_24px_0px_rgba(17,24,39,0.12)]" />
    </div>
  );
}