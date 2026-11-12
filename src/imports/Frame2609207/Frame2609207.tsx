import svgPaths from "./svg-ebag0ztb7q";

function LabelContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label container">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1e2125] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Why wasn’t this useful?</p>
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
            <p className="leading-[24px]">Select…</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Chevron-down">
            <div className="absolute inset-[41.67%_35.02%_39.2%_35.06%]" data-name="Path">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.18049 4.5925">
                <path d={svgPaths.p3d74bc80} fill="var(--fill-0, #6D7783)" id="Path" />
              </svg>
            </div>
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
    <div className="content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[4px] items-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Label container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1e2125]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{`Anything else? `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6d7783]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">(optional)</p>
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
    <div className="bg-white flex-[1_0_0] min-h-[72px] relative rounded-[8px] w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[8px] items-start min-h-[inherit] px-[16px] py-[12px] size-full" />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input container">
      <TextField1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <div className="content-stretch flex gap-[6px] h-[28px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3f51b5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Skip</p>
        </div>
      </div>
      <div className="bg-[#3f51b5] content-stretch flex gap-[6px] h-[28px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Submit</p>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_2px_12px_rgba(0,0,0,0.2)] flex flex-col gap-[16px] items-start px-[23px] py-[18px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#c9ced4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[600px] relative shrink-0 w-full" data-name="Dropdown">
        <Header />
        <InputContainer />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[117px] items-start relative shrink-0 w-full" data-name="Input field">
        <Header1 />
        <InputContainer1 />
      </div>
      <Frame />
      <div className="absolute flex h-[9px] items-center justify-center left-[42px] top-[288px] w-[21px]">
        <div className="-scale-y-100 flex-none">
          <div className="h-[9px] relative w-[21px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
              <g filter="url(#filter0_i_33_11360)" id="Polygon 1">
                <path d="M10.5 0L21 9H0L10.5 0Z" fill="var(--fill-0, white)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9" id="filter0_i_33_11360" width="21" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="-2" />
                  <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.807843 0 0 0 0 0.831373 0 0 0 1 0" />
                  <feBlend in2="shape" mode="normal" result="effect1_innerShadow_33_11360" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}