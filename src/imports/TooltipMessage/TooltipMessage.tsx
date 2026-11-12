function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-white w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] mb-0 text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          MID-FUNNEL EVENTS
        </p>
        <p className="leading-[16px] mb-0 text-[12px]">Call_From Website, Contact, Contact_Us_Form_Submit, Email_Newsletter_Sign_Up, Event 2, Event 3, Event 4, Event 5, Event 6, Find_Clinic, Gender_Reveal_Submit, Google Ads Click to Call, TTD Call from Website, TTD - Email Newsletter</p>
        <p className="leading-[16px] mb-0 text-[12px]">​</p>
        <p className="text-[12px]">
          <span className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            LOW-FUNNEL EVENTS
            <br aria-hidden="true" />
          </span>
          <span className="leading-[16px]">[FP Attribution][Google Ads] Appointment Attended, [FP Attribution][Google Ads] Appointment Booked, Event 1, TTD - Virtual Check In New, Virtual Check-In, Virtual_Check_In</span>
        </p>
      </div>
    </div>
  );
}

export default function TooltipMessage() {
  return (
    <div className="bg-[#1e2125] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.2)] flex flex-col gap-[12px] items-start px-[12px] py-[8px] relative rounded-[6px] size-full" data-name="Tooltip message">
      <Frame />
    </div>
  );
}