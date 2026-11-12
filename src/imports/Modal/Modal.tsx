import svgPaths from "./svg-vt3dz4kth1";

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="top-bar">
      <div aria-hidden="true" className="absolute border-[#dde0e4] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center pl-[24px] pr-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[28px] min-w-px relative text-[#1e2125] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Title
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

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e2125] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <LabelContainer />
    </div>
  );
}

function TextField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#a3acb7] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input container">
      <TextField />
    </div>
  );
}

function LabelContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e2125] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Label</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <LabelContainer1 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#a3acb7] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[24px]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input container">
      <TextField1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[600px] relative shrink-0 w-full" data-name="Input field">
        <Header />
        <InputContainer />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[600px] relative shrink-0 w-full" data-name="Input field">
        <Header1 />
        <InputContainer1 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e2125] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Description</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-full" data-name="buttons">
      <div className="content-stretch flex items-center justify-center py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6d7783] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Cancel</p>
        </div>
      </div>
      <div className="bg-[#3f51b5] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] flex items-center justify-center px-[24px] py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[normal]">Save</p>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 w-full" data-name="layout">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center p-[24px] relative size-full">
          <Frame />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_12px_rgba(0,0,0,0.2)] flex flex-col items-center relative rounded-[8px] size-full" data-name="Modal">
      <TopBar />
      <Layout />
    </div>
  );
}