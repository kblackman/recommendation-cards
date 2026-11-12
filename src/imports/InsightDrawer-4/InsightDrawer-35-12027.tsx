import svgPaths from "./svg-kp0hjj90vv";

function Heading() {
  return (
    <div className="relative shrink-0 w-[343px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center relative size-full">
        <div className="bg-[#e1e4f4] content-stretch flex gap-[10px] items-center px-[12px] py-[4px] relative rounded-[50px] shrink-0" data-name="Category Badges">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left-right">
            <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
              <div className="absolute inset-[-5%_-5.63%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 16.5">
                  <path d={svgPaths.p36c06758} id="Vector" stroke="var(--stroke-0, #5A2EB4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5a2eb4] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Portfolio Rebalance
          </p>
        </div>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e2125] text-[24px] w-[295px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Meta Ads accounts for 44% of spend but only 3% of MC-S6 events
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#1e2125] text-[0px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[20px] text-[12px]">{`[FP Attribution][Google Ads] Appointment Attended `}</span>
          <span className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] text-[#3f51b5] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            + 19 more
          </span>
        </p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
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
      <div aria-hidden="true" className="absolute border-[#c9ced4] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[33px] pt-[32px] px-[32px] relative size-full">
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

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Call_From_Website
      </p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact_Us_Form_Submit
      </p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email_Newsletter_Sign_Up
      </p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 2
      </p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 3
      </p>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 4
      </p>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 5
      </p>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 6
      </p>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Find_Clinic
      </p>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Gender_Reveal_Submit
      </p>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Google Ads Click to Call
      </p>
    </div>
  );
}

function Label12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TTD - Call from Website
      </p>
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TTD - Email Newsletter Sign Up
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-[337px]">
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label1 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label2 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label3 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label4 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label5 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label6 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label7 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label8 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label9 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label10 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label11 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label12 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label13 />
      </div>
    </div>
  );
}

function MidFunnel() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Mid Funnel">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d6875] text-[12px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        MID-FUNNEL EVENTS
      </p>
      <Frame />
    </div>
  );
}

function Label14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        [FP Attribution][Google Ads] Appointment Attended
      </p>
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        [FP Attribution][Google Ads] Appointment Booked
      </p>
    </div>
  );
}

function Label16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Event 1
      </p>
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        TTD - Virtual Check In New
      </p>
    </div>
  );
}

function Label18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Virtual Check-In
      </p>
    </div>
  );
}

function Label19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#1e2125] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Virtual_Check_In
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-[337px]">
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label14 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label15 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label16 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label17 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label18 />
      </div>
      <div className="bg-[#dde0e4] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Tag">
        <Label19 />
      </div>
    </div>
  );
}

function LowFunnel() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Low-Funnel">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#5d6875] text-[12px] w-[337px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LOW-FUNNEL EVENTS
      </p>
      <Frame1 />
    </div>
  );
}

function ConversionEvents() {
  return (
    <div className="bg-[#f1f3f4] relative rounded-[6px] shrink-0 w-full" data-name="Conversion Events">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start justify-center px-[19px] py-[17px] relative size-full">
          <MidFunnel />
          <LowFunnel />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return <div className="absolute h-[16px] left-[18px] top-[16px] w-[337px]" data-name="Paragraph" />;
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
    <div className="col-1 content-stretch flex flex-col gap-[14px] h-[1371px] items-start ml-0 mt-[45px] overflow-clip p-[32px] relative row-1 w-[439px]" data-name="Container">
      <ConversionEvents />
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