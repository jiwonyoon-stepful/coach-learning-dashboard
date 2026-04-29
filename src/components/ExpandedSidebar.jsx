import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const ToolsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
)
const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const ChevronIcon = ({ open }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    className={`transition-transform ${open ? "rotate-180" : ""}`}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)
const ChatIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

export default function ExpandedSidebar() {
  const [toolsOpen, setToolsOpen] = useState(true)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItemClass = (active) =>
    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors w-full text-left ${
      active
        ? "font-semibold"
        : "text-white/70 hover:text-white hover:bg-white/8"
    }`

  return (
    <aside className="flex flex-col w-60 shrink-0 h-full" style={{ background: "#1c3954" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "#fff9ef", color: "#1c3954" }}>
            S
          </div>
        </div>
        <button className="text-white/50 hover:text-white text-xs">«</button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
        <Link to="/" className={navItemClass(isActive("/"))} style={isActive("/") ? { color: "white" } : {}}>
          <HomeIcon /> Home
        </Link>

        {/* Coach Tools group */}
        <button
          onClick={() => setToolsOpen((o) => !o)}
          className={navItemClass(false) + " justify-between"}
        >
          <span className="flex items-center gap-2.5">
            <ToolsIcon /> Coach Tools
          </span>
          <ChevronIcon open={toolsOpen} />
        </button>

        {toolsOpen && (
          <div className="pl-6 space-y-0.5">
            {[
              { to: "/performance", label: "My Performance" },
              { to: "/cohorts", label: "Cohorts" },
              { to: "/students", label: "Students" },
              { to: "/tuition", label: "Tuition forgiveness" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block px-3 py-2 rounded-lg text-sm transition-colors"
                style={
                  isActive(to)
                    ? { background: "#dff4d7", color: "#1c3954", fontWeight: 600 }
                    : { color: "rgba(255,255,255,0.7)" }
                }
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-3 space-y-0.5 border-t border-white/10 pt-3">
        <button className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/8 w-full">
          <ChatIcon /> Community
        </button>
        <div className="flex items-center gap-2.5 px-3 py-2 mt-1">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0" style={{ background: "#395777" }}>
            <div className="w-full h-full flex items-center justify-center text-xs font-semibold text-white">MR</div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Maria Rhye</p>
            <p className="text-xs text-white/50 truncate">Learning Coach</p>
          </div>
          <button className="text-white/40 hover:text-white shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
