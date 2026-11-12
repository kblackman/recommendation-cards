import svgPaths from "./svg-wmltrdcadd";

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="top-bar">
      <div aria-hidden="true" className="absolute border-[#dde0e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[24px] pr-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] min-w-px relative text-[#1e2125] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Enable AI Usage
          </p>
          <div className="content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[48px]" data-name="Button">
            <div className="relative shrink-0 size-[24px]" data-name="Close">
              <div className="absolute inset-[22.6%]" data-name="close">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.15 13.15">
                  <path d={svgPaths.p17cc7472} fill="var(--fill-0, #6D7783)" id="close" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#3d444c] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">By enabling AI usage, you agree that any data you submit may be processed by our AI provider (Anthropic Claude) under a Business Associate Agreement. AI-generated responses may not always be accurate, and you are responsible for verifying results by reviewing the underlying data.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function LabelHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label Header">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3d444c] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Frequently asked questions</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
              <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #3D444C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <LabelHeader />
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 w-full" data-name="layout">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame />
        <Container />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="buttons">
      <div aria-hidden="true" className="absolute border-[#dde0e4] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end p-[24px] relative size-full">
          <div className="bg-[#3f51b5] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] flex items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
            <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[normal]">Enable AI Usage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AiConsentModal() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_12px_rgba(0,0,0,0.2)] flex flex-col items-center relative rounded-[8px] size-full" data-name="AI consent modal">
      <TopBar />
      <Layout />
      <Buttons />
    </div>
  );
}