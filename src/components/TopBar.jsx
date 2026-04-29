export default function TopBar() {
  return (
    <header className="flex items-center gap-4 px-5 h-12 border-b border-gray-100 bg-white shrink-0">
      {/* Search */}
      <div className="flex items-center gap-2 flex-1 max-w-sm h-8 px-3 rounded-md bg-gray-50 border border-gray-200">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span className="text-xs text-gray-400">Search</span>
      </div>

      <div className="flex-1" />

      {/* Actions */}
      <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Feedback
      </button>
      <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        Support
      </button>
      <button className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      </button>
    </header>
  )
}
