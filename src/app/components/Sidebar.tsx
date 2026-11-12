import SideNav from "../../imports/SideNav/index";

interface SidebarProps {
  onLogoClick?: () => void;
}

export function Sidebar({ onLogoClick }: SidebarProps) {
  return (
    <aside className="w-[240px] shrink-0 h-full relative">
      <SideNav />
      {/* Invisible hit target over the logo area */}
      {onLogoClick && (
        <button
          onClick={onLogoClick}
          aria-label="Show dev panel"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 160,
            height: 68,
            background: "transparent",
            border: "none",
            cursor: "default",
            zIndex: 10,
          }}
        />
      )}
    </aside>
  );
}
