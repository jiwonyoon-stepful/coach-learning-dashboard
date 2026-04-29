import { useState } from "react"
import Layout from "../components/Layout"
import ChatArea from "../components/ChatArea"
import RightPanel from "../components/RightPanel"

const STATE_LABELS = [
  "First task",
  "Coach response",
  "Last task",
]

// Alert banner mimicking the Figma notification at the top
function AlertBanner({ text }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2 text-xs" style={{ background: "#d8f5ea", color: "#171717" }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#337b64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>{text}</span>
    </div>
  )
}

export default function Dashboard() {
  const [stateIndex, setStateIndex] = useState(0)

  return (
    <Layout>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AlertBanner text="Nova L completed her assignment while you were away! Great job helping her get one step closer to graduating!" />

        {/* State switcher for prototype navigation */}
        <div className="flex items-center gap-1 px-5 py-2 border-b border-gray-100 bg-white">
          <span className="text-xs text-gray-400 mr-2">Screen:</span>
          {STATE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => setStateIndex(i)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
              style={
                stateIndex === i
                  ? { background: "#1c3954", color: "#fff" }
                  : { background: "#f3f4f6", color: "#6b7280" }
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-1 overflow-hidden">
          <ChatArea stateIndex={stateIndex} />
          <RightPanel />
        </div>
      </div>
    </Layout>
  )
}
