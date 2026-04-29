const icons = {
  home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  ),
  bell: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  calendar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
}

const navItems = [
  { id: "home", icon: icons.home, active: true },
  { id: "users", icon: icons.users },
  { id: "chart", icon: icons.chart },
  { id: "calendar", icon: icons.calendar },
]

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center w-14 shrink-0 py-4 gap-2" style={{ background: "#1c3954" }}>
      {/* Logo */}
      <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 text-sm font-bold" style={{ background: "#fff9ef", color: "#1c3954" }}>
        S
      </div>

      {/* Nav icons */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ id, icon, active }) => (
          <button
            key={id}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{
              background: active ? "#dff4d7" : "transparent",
              color: active ? "#1c3954" : "rgba(255,255,255,0.55)",
            }}
          >
            {icon}
          </button>
        ))}
      </nav>

      {/* Bottom: notification + avatar */}
      <div className="flex flex-col items-center gap-3 mt-auto">
        <button className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ color: "rgba(255,255,255,0.55)" }}>
          {icons.bell}
        </button>
        <div className="relative">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: "#395777", color: "#fff" }}>
            M
          </div>
          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full border-2 border-[#1c3954]" style={{ background: "#47b894" }} />
        </div>
      </div>
    </aside>
  )
}
