import svgPaths from "./svg-wffhjisouv";
import { imgVector } from "./svg-75zm7";

function FpLogomark() {
  return (
    <div className="absolute inset-[0_86.21%_2.2%_0]" data-name="FP Logomark">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.2973" preserveAspectRatio="none" viewBox="0 0 23.4441 31.2973" width="23.4441">
        <g id="FP Logomark">
          <path d={svgPaths.p2b56bb00} fill="#EE5757" id="Vector" />
          <path d={svgPaths.p70ef900} fill="#61DABF" id="Vector_2" />
          <path d={svgPaths.p25d71880} fill="#EE5757" id="Vector_3" />
          <path d={svgPaths.pc7f8100} fill="#61DABF" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Freshpaint() {
  return (
    <div className="absolute inset-[18.45%_13.65%_20.64%_22.12%]" data-name="Freshpaint">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.4908" preserveAspectRatio="none" viewBox="0 0 109.188 19.4908" width="109.188">
        <g id="Freshpaint">
          <path d={svgPaths.p3f19d4c0} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[170px]" data-name="Logo">
      <FpLogomark />
      <Freshpaint />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0 size-[40px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="panel-left">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" height="16.5" preserveAspectRatio="none" viewBox="0 0 16.5 16.5" width="16.5">
              <path d={svgPaths.p28974100} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[#23303e] h-[68px] relative shrink-0 w-full" data-name="Logo Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Logo />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g clipPath="url(#clip0_0_55)" id="SVG">
          <path d={svgPaths.p2664ce80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1a193780} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_0_55">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-60 relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">Main</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[24px]">Development</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.01px] items-start relative shrink-0" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="flex items-center justify-center relative shrink-0 size-[20px]">
      <div className="-rotate-90 flex-none">
        <div className="relative size-[20px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="SVG">
              <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[43.5px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Svg1 />
      </div>
    </div>
  );
}

function ProjectSelector1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[8px]" data-name="Project Selector">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[11.98px] items-center px-[12.909px] py-[8.909px] relative size-full">
          <Svg />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ProjectSelector() {
  return (
    <div className="bg-[#23303e] relative shrink-0 w-full" data-name="Project Selector">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <ProjectSelector1 />
        </div>
      </div>
    </div>
  );
}

function GlobalNavItems() {
  return (
    <div className="relative shrink-0 w-full" data-name="Global Nav Items">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <ProjectSelector />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[20.83%_58.33%_79.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-14.29%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 7.5 1.66667" width="7.5">
            <path d="M6.66667 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-[12.5%] right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-11.11%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 9.16667 1.66667" width="9.16667">
            <path d="M8.33333 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_41.67%_70.83%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 1.66667 5" width="1.66667">
            <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_12.5%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 1.66667 5" width="1.66667">
            <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-11.11%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 9.16667 1.66667" width="9.16667">
            <path d="M8.33333 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.17%_12.5%_20.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-20%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 5.83333 1.66667" width="5.83333">
            <path d="M5 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_79.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-14.29%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 7.5 1.66667" width="7.5">
            <path d="M6.66667 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.83px]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 1.66667 5" width="1.66667">
            <path d="M0.833333 0.833333V4.16667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[12.5%] right-[66.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-20%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 5.83333 1.66667" width="5.83333">
            <path d="M5 0.833333H0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[14px] text-white tracking-[0.35px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Setup</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container6 />
    </div>
  );
}

function Menuitem() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <Menuitem />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[12.5%_12.5%_70.83%_70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_70.83%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_29.17%_29.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
            <path d={svgPaths.p36a06a00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start mr-[-0.001px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Events</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[99.901px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container8 />
      <Margin />
    </div>
  );
}

function MenuitemMenu() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin1 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[8.33%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
            <path d={svgPaths.p9be9b00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_8.33%_58.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333" width="8.33333">
            <path d={svgPaths.paa8f200} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start mr-[-0.001px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Integrations</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[63.821px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container11 />
      <Margin1 />
    </div>
  );
}

function MenuitemMenu1() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin2 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu1 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[37.5%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.83px]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 1.66667 8.33333" width="1.66667">
            <path d="M0.833333 7.5V0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 1.66667 11.6667" width="1.66667">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.p284f7580} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.83px]">
          <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 1.66667 4.16667" width="1.66667">
            <path d="M0.833333 3.33333V0.833333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Analytics</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[82.685px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[0.005px] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container14 />
      <Margin2 />
    </div>
  );
}

function MenuitemMenu2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin3 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu2 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-20%_-0.83px]">
          <svg className="block size-full" fill="none" height="5.83333" preserveAspectRatio="none" viewBox="0 0 1.66667 5.83333" width="1.66667">
            <path d="M0.833333 0.833333V5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_33.33%_12.5%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-0.83px]">
          <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 1.66667 7.5" width="1.66667">
            <path d="M0.833333 0.833333V6.66667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_16.67%_12.5%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-9.09%_-0.83px]">
          <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 1.66667 10.8333" width="1.66667">
            <path d="M0.833333 0.833333V10" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_8.33%_37.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-5%]">
          <svg className="block size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 18.3333 11.6667" width="18.3333">
            <path d={svgPaths.p2c3fa000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[16.67%] right-[83.33%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.83px]">
          <svg className="block size-full" fill="none" height="4.16667" preserveAspectRatio="none" viewBox="0 0 1.66667 4.16667" width="1.66667">
            <path d="M0.833333 0.833333V3.33333" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_12.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-0.83px]">
          <svg className="block size-full" fill="none" height="7.5" preserveAspectRatio="none" viewBox="0 0 1.66667 7.5" width="1.66667">
            <path d="M0.833333 0.833333V6.66667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg9 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.99" preserveAspectRatio="none" viewBox="0 0 13.99 13.99" width="13.99">
        <g clipPath="url(#clip0_0_29)" id="SVG">
          <path d={svgPaths.p11909f00} id="Vector" stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16583" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="13.99" width="13.99" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eefbf8] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end p-[4px] relative size-full">
          <Svg10 />
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#186756] text-[10px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[14.29px]">new</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start mr-[-0.002px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Insights</p>
      </div>
      <Background />
    </div>
  );
}

function Svg11() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none">
        <div className="relative size-[20px]" data-name="SVG">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <g id="SVG">
              <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[34.063px] relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container17 />
      <Margin3 />
    </div>
  );
}

function MenuitemMenu3() {
  return (
    <div className="content-stretch flex h-[40px] items-center px-[12px] relative rounded-[8px] shrink-0 w-[216px]" data-name="Menuitem menu">
      <SvgMargin4 />
      <Container16 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Attribution</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container20 />
    </div>
  );
}

function MenuitemMenu4() {
  return (
    <div className="bg-[#535b67] col-1 content-stretch flex h-[40px] items-center justify-end ml-0 mt-0 px-[12px] relative rounded-bl-[8px] rounded-tl-[8px] row-1 w-full" data-name="Menuitem menu">
      <div aria-hidden className="absolute border border-[#3b4552] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-tl-[8px]" />
      <Container19 />
    </div>
  );
}

function SelectedItem() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Selected Item">
      <MenuitemMenu4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Ad Performance</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container22 />
    </div>
  );
}

function MenuitemMenu5() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Web Analytics</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container24 />
    </div>
  );
}

function MenuitemMenu6() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Funnels</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container26 />
    </div>
  );
}

function MenuitemMenu7() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Heatmaps</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container28 />
    </div>
  );
}

function MenuitemMenu8() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Session Replay</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container30 />
    </div>
  );
}

function MenuitemMenu9() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Survey</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container32 />
    </div>
  );
}

function MenuitemMenu10() {
  return (
    <div className="h-[40px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[12px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Submenu() {
  return (
    <div className="relative shrink-0 w-full" data-name="Submenu">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-end justify-center pl-[28px] relative size-full">
          <SelectedItem />
          <MenuitemMenu5 />
          <MenuitemMenu6 />
          <MenuitemMenu7 />
          <MenuitemMenu8 />
          <MenuitemMenu9 />
          <MenuitemMenu10 />
        </div>
      </div>
    </div>
  );
}

function MenuExpanded() {
  return (
    <div className="bg-[#3b4552] content-stretch flex flex-col gap-[10px] items-start overflow-clip pb-[8px] relative rounded-[8px] shrink-0 w-full" data-name="Menu Expanded">
      <MenuitemMenu3 />
      <Submenu />
    </div>
  );
}

function MenuItemMainNavigation4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuExpanded />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[12.5%] left-[8.33%] right-1/4 top-[54.17%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-6.25%]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 15 8.33333" width="15">
            <path d={svgPaths.p3b630c00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_37.5%_45.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
            <path d={svgPaths.p3cf7650} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[15.42%_8.33%_16.67%_73.12%]" data-name="Vector">
        <div className="absolute inset-[-6.14%_-22.47%_-6.13%_-22.48%]">
          <svg className="block size-full" fill="none" height="15.2501" preserveAspectRatio="none" viewBox="0 0 5.37513 15.2501" width="5.37513">
            <path d={svgPaths.p29b4fb40} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame5 />
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg12 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-start mr-[-0.003px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Audiences</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[74.673px] relative size-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container34 />
      <Margin4 />
    </div>
  );
}

function MenuitemMenu11() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin5 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu11 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[54.17%] left-1/4 right-[41.67%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333" width="8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_57.08%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-13.7%]">
          <svg className="block size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 7.75 6.66667" width="7.75">
            <path d={svgPaths.p880e300} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_16.67%_16.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.58%_12.5%_12.5%_79.58%]" data-name="Vector">
        <div className="absolute inset-[-52.63%]">
          <svg className="block size-full" fill="none" height="3.25" preserveAspectRatio="none" viewBox="0 0 3.25 3.25" width="3.25">
            <path d={svgPaths.pd538000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame6 />
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg14 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.99" preserveAspectRatio="none" viewBox="0 0 13.99 13.99" width="13.99">
        <g clipPath="url(#clip0_0_29)" id="SVG">
          <path d={svgPaths.p11909f00} id="Vector" stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16583" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="13.99" width="13.99" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eefbf8] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[3.99px] items-end p-[4px] relative size-full">
          <Svg15 />
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#186756] text-[10px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[14.29px]">new</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Profiles</p>
      </div>
      <Background1 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container37 />
    </div>
  );
}

function Menuitem1() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin6 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <Menuitem1 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
        <div className="absolute inset-[-9.09%_-6.25%]">
          <svg className="block size-full" fill="none" height="10.8333" preserveAspectRatio="none" viewBox="0 0 15 10.8333" width="15">
            <path d={svgPaths.p38669a00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-13.33%_-11.11%]">
          <svg className="block size-full" fill="none" height="7.91667" preserveAspectRatio="none" viewBox="0 0 9.16667 7.91667" width="9.16667">
            <path d={svgPaths.p15032860} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame7 />
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg16 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.99" preserveAspectRatio="none" viewBox="0 0 13.99 13.99" width="13.99">
        <g clipPath="url(#clip0_0_29)" id="SVG">
          <path d={svgPaths.p11909f00} id="Vector" stroke="#186756" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16583" />
        </g>
        <defs>
          <clipPath id="clip0_0_29">
            <rect fill="white" height="13.99" width="13.99" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eefbf8] relative rounded-[4px] self-stretch shrink-0" data-name="Background">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[3.99px] items-end p-[4px] relative size-full">
          <Svg17 />
          <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#186756] text-[10px] tracking-[0.35px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[14.29px]">new</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Consent</p>
      </div>
      <Background2 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.86px] relative shrink-0" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[32.756px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[0.004px] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container39 />
      <Margin5 />
    </div>
  );
}

function MenuitemMenu12() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin7 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu12 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[29.17%_36.02%_45.84%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-18.67%]">
          <svg className="block size-full" fill="none" height="6.66402" preserveAspectRatio="none" viewBox="0 0 6.12996 6.66402" width="6.12996">
            <path d={svgPaths.p2608b800} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[87.5%_29.17%_12.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-10%]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 10 1.66667" width="10">
            <path d="M0.833333 0.833333H9.16667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_8.33%_29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 18.3333 13.3333" width="18.3333">
            <path d={svgPaths.pac6c580} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame8 />
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg19 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[14px] text-white tracking-[0.35px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Video</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container42 />
    </div>
  );
}

function Menuitem2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin8 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <Menuitem2 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
            <path d={svgPaths.pf3beb80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-10%]">
          <svg className="block size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
            <path d={svgPaths.p1e798100} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame9 />
    </div>
  );
}

function SvgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg20 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[14px] text-white tracking-[0.35px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Web Trackers</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container44 />
    </div>
  );
}

function Menuitem3() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin9 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <Menuitem3 />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[37.5%_37.5%_8.36%_8.35%]" data-name="Vector">
        <div className="absolute inset-[-7.7%]">
          <svg className="block size-full" fill="none" height="12.4956" preserveAspectRatio="none" viewBox="0 0 12.496 12.4956" width="12.496">
            <path d={svgPaths.p1d66d700} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[37.5%] left-3/4 right-[8.33%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 5 5" width="5">
            <path d={svgPaths.p31930670} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_10.42%_39.58%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-8.7%_-8%]">
          <svg className="block size-full" fill="none" height="11.25" preserveAspectRatio="none" viewBox="0 0 12.0834 11.25" width="12.0834">
            <path d={svgPaths.p30041380} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame10 />
    </div>
  );
}

function SvgMargin10() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg21 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Internal Tools</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[53.409px] relative size-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[0.001px] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container46 />
      <Margin6 />
    </div>
  );
}

function MenuitemMenu13() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin10 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu13 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.33%_8.33%_58.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 18.3333 8.33333" width="18.3333">
            <path d={svgPaths.p28614a80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_8.33%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-5%]">
          <svg className="block size-full" fill="none" height="8.33333" preserveAspectRatio="none" viewBox="0 0 18.3333 8.33333" width="18.3333">
            <path d={svgPaths.p28614a80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-1/4 right-[74.96%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667" width="1.675">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 right-[74.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" height="1.66667" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667" width="1.675">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame11 />
    </div>
  );
}

function SvgMargin11() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg23 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-start mr-[-0.003px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">WTM Internal</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg24 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[54.673px] relative size-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container49 />
      <Margin7 />
    </div>
  );
}

function MenuitemMenu14() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Menuitem menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin11 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function MenuItemMainNavigation11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu item - Main navigation">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <MenuitemMenu14 />
      </div>
    </div>
  );
}

function ContextualNavItems() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Contextual Nav Items">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[4px] pt-[6px] px-[6px] relative size-full">
          <MenuItemMainNavigation />
          <MenuItemMainNavigation1 />
          <MenuItemMainNavigation2 />
          <MenuItemMainNavigation3 />
          <MenuItemMainNavigation4 />
          <MenuItemMainNavigation5 />
          <MenuItemMainNavigation6 />
          <MenuItemMainNavigation7 />
          <MenuItemMainNavigation8 />
          <MenuItemMainNavigation9 />
          <MenuItemMainNavigation10 />
          <MenuItemMainNavigation11 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.28%_28.21%_29.63%_9.7%]" data-name="Group">
      <div className="absolute inset-[8.28%_28.21%_29.63%_9.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.828px_-1.656px] mask-size-[14.074px_14.074px]" style={{ maskImage: `url("${imgVector}")` }} data-name="Vector">
        <div className="absolute inset-[-5.96%]">
          <svg className="block size-full" fill="none" height="13.8998" preserveAspectRatio="none" viewBox="0 0 13.8998 13.8998" width="13.8998">
            <path d={svgPaths.p3fa1ad00} fill="white" id="Vector" stroke="#23303E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.48148" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_24.07%_29.63%_5.56%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function FreshpaintAiIcon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Freshpaint AI icon">
      <div className="absolute inset-[22.22%_16.67%_11.11%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" height="14.815" preserveAspectRatio="none" viewBox="0 0 14.8148 14.815" width="14.8148">
            <path d={svgPaths.p3163b5c0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.48148" />
          </svg>
        </div>
      </div>
      <ClipPathGroup />
    </div>
  );
}

function Svg25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <FreshpaintAiIcon />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[14px] text-white tracking-[0.35px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Freshpaint AI</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Svg25 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function FreshpaintAi() {
  return (
    <div className="bg-[#23303e] h-[52px] relative shrink-0 w-full" data-name="Freshpaint AI">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative size-full">
          <Link />
        </div>
      </div>
    </div>
  );
}

function LucideActivity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/activity">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="lucide/activity">
          <path d={svgPaths.p28b1aae0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <LucideActivity />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px relative text-[14px] text-white tracking-[0.35px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">System Status</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Svg26 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="bg-[#23303e] h-[52px] relative shrink-0 w-full" data-name="System Status">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[6px] relative size-full">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute inset-[8.41%_12.68%]" data-name="Vector">
        <div className="absolute inset-[-5.01%_-5.58%]">
          <svg className="block size-full" fill="none" height="18.3035" preserveAspectRatio="none" viewBox="0 0 16.5939 18.3035" width="16.5939">
            <path d={svgPaths.p2322a380} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="6.66667" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667" width="6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame12 />
    </div>
  );
}

function SvgMargin12() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start mr-[-0.01px] pr-[8px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <Svg27 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[0.35px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[20px]">Settings</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="SVG">
          <path d={svgPaths.p13c51d00} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[0.85px] relative shrink-0" data-name="Container">
      <Svg28 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="flex-[1_0_0] min-w-[20px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[88.849px] relative size-full">
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[0.001px] items-center min-w-px overflow-clip relative" data-name="Container">
      <Container54 />
      <Margin8 />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <SvgMargin12 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Settings">
      <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
        <Link2 />
      </div>
    </div>
  );
}

function GlobalSettings() {
  return (
    <div className="relative shrink-0 w-full" data-name="Global Settings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[6px] relative size-full">
          <FreshpaintAi />
          <SystemStatus />
          <Settings />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <LogoContainer />
      <GlobalNavItems />
      <div className="bg-[#23303e] h-[0.91px] relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden className="absolute border-[rgba(255,255,255,0.15)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      </div>
      <ContextualNavItems />
      <div className="bg-[#23303e] h-[0.91px] relative shrink-0 w-full" data-name="Horizontal Divider">
        <div aria-hidden className="absolute border-[rgba(255,255,255,0.15)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      </div>
      <GlobalSettings />
    </div>
  );
}

export default function SideNav() {
  return (
    <div className="bg-[#23303e] content-stretch flex flex-col items-start justify-center relative size-full" data-name="Side Nav">
      <Container />
    </div>
  );
}