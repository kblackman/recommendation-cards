export default function Button() {
  return (
    <div className="relative rounded-[6px] size-full" data-name="Button">
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3f51b5] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[16px]">Button</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#8d99d8] border-solid inset-[-2px] pointer-events-none rounded-[8px]" />
    </div>
  );
}