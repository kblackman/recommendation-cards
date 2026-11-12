import svgPaths from "./svg-lrl54htpbp";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center relative size-full">
        <div className="bg-[#e1e4f4] content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative rounded-[30px] shrink-0" data-name="Category Badges">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left-right">
            <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
              <div className="absolute inset-[-5%_-5.63%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 16.5">
                  <path d={svgPaths.p36c06758} id="Vector" stroke="var(--stroke-0, #3F51B5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3f51b5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Portfolio Rebalance
          </p>
        </div>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[#1e2125] text-[24px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Meta Ads accounts for 44% of spend but only 3% of MC-S6 events
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

function Tab() {
  return (
    <div className="absolute h-[44px] left-[32.1px] top-0 w-[43px]" data-name="Tab">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[21.9px] text-[#6d7783] text-[14px] text-center top-[11.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Details
      </p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#3f51b5] h-[2px] left-0 rounded-tl-[2px] rounded-tr-[2px] top-[43px] w-[102px]" data-name="Text" />;
}

function Tab1() {
  return (
    <div className="absolute h-[44px] left-[99px] top-0 w-[102px]" data-name="Tab">
      <p className="-translate-x-1/2 absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-[51.21px] text-[#1e2125] text-[14px] text-center top-[11.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Supporting Data
      </p>
      <Text />
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

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meta Ads CPA
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        $3,393
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[71px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $47,509 spend ÷ 14 conversions · directional.
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[199px] left-0 rounded-[6px] top-0 w-[375px]" data-name="List Item">
      <Paragraph />
      <Paragraph1 />
      <Container2 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Google Ads CPA
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        $139
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon2 />
      <Text2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[51px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $59,586 spend ÷ 430 conversions = $139.
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[179px] left-0 rounded-[6px] top-[211px] w-[375px]" data-name="List Item">
      <Paragraph3 />
      <Paragraph4 />
      <Container3 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meta Share of Spend
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        44%
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon3 />
      <Text3 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[51px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $47,509 of $107,095 total portfolio spend = 44%.
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[179px] left-0 rounded-[6px] top-[402px] w-[375px]" data-name="List Item">
      <Paragraph6 />
      <Paragraph7 />
      <Container4 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meta Share of Conversions
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        3%
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon4 />
      <Text4 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[31px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        14 of 445 total portfolio conversions = 3%.
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[159px] left-0 rounded-[6px] top-[593px] w-[375px]" data-name="List Item">
      <Paragraph9 />
      <Paragraph10 />
      <Container5 />
      <Paragraph11 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Meta Multi-channel Rate
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        73%
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon5 />
      <Text5 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[51px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        73% of Meta conversions involved 2+ channels — confirm assist role before deeper cuts.
      </p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[179px] left-0 rounded-[6px] top-[764px] w-[375px]" data-name="List Item">
      <Paragraph12 />
      <Paragraph13 />
      <Container6 />
      <Paragraph14 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6d7783] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acquisition Cost Gap
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[36px] left-[18px] top-[38px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1e2125] text-[28px] top-[-0.5px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        ~24x
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d="M4.33398 1.0835V3.25016" id="Vector" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M8.66602 1.0835V3.25016" id="Vector_2" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p3b7aed80} id="Vector_3" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M1.625 5.41667H11.375" id="Vector_4" stroke="var(--stroke-0, #6D7783)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[114px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16px] left-[-0.23px] text-[#6d7783] text-[12px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Mar 23 – Apr 21, 2026
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex gap-[6.234px] h-[16px] items-center left-[18px] top-[80px] w-[337px]" data-name="Container">
      <Icon6 />
      <Text6 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute border-[#c9ced4] border-dashed border-t h-[51px] left-[18px] top-[110px] w-[337px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1e2125] text-[13px] top-[10.5px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        $3,393 Meta CPA ÷ $139 Google CPA ≈ 24x.
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="absolute bg-white border border-[#c9ced4] border-solid h-[179px] left-0 rounded-[6px] top-[955px] w-[375px]" data-name="List Item">
      <Paragraph15 />
      <Paragraph16 />
      <Container7 />
      <Paragraph17 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[1134px] relative shrink-0 w-[375px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[1371px] items-start ml-0 mt-[45px] overflow-clip p-[32px] relative row-1 w-[439px]" data-name="Container">
      <List />
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