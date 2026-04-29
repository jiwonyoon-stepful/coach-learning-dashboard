import { useState } from "react"
import ExpandedSidebar from "../components/ExpandedSidebar"
import TopBar from "../components/TopBar"
import { performanceData } from "../data/mock"

function OnTrackBadge() {
  return (
    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#fff3c4", color: "#7c5f00" }}>
      On track
    </span>
  )
}

function RiskBadge({ status }) {
  if (status === "completed") {
    return (
      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#dff4d7", color: "#1c5c3a" }}>
        Completed
      </span>
    )
  }
  return (
    <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#fff3e0", color: "#b23e00" }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
      At risk
    </span>
  )
}

function RiskFactor({ label }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#c9d9ea", color: "#1c3954" }}>
      {label}
    </span>
  )
}

export default function PerformancePage() {
  const [activeTab, setActiveTab] = useState(0)
  const { week, rank, team, cohortTabs, stats, outreachStudents } = performanceData

  return (
    <div className="flex h-screen overflow-hidden">
      <ExpandedSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-white px-8 py-6">
          {/* Header row */}
          <p className="text-sm mb-1" style={{ color: "#395777" }}>{week}</p>
          <div className="flex items-start justify-between mb-5">
            <h1 className="text-3xl font-bold" style={{ color: "#171717" }}>My performance</h1>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: "#dff4d7" }}>
              <span className="text-base">🏆</span>
              <span className="text-sm font-semibold" style={{ color: "#171717" }}>You are {rank} on {team}</span>
              <button className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white ml-2" style={{ background: "#1c3954" }}>
                View leaderboard
              </button>
            </div>
          </div>

          {/* Cohort tabs */}
          <div className="flex gap-0 border-b border-gray-200 mb-6">
            {cohortTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px"
                style={
                  activeTab === i
                    ? { borderColor: "#1c3954", color: "#1c3954" }
                    : { borderColor: "transparent", color: "#395777" }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          {/* This week's performance */}
          <div className="rounded-2xl px-6 py-5 mb-8" style={{ background: "#fff9ef" }}>
            <h2 className="text-base font-semibold flex items-center gap-2 mb-4" style={{ color: "#171717" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              This week's performance
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {stats.map(({ label, value, unit, note, status }) => (
                <div key={label} className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-sm mb-2" style={{ color: "#395777" }}>{label}</p>
                  <p className="text-3xl font-bold mb-1" style={{ color: "#171717" }}>
                    {value}<span className="text-xl font-normal">{unit}</span>
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#395777" }}>{note}</p>
                  {status === "on_track" && <OnTrackBadge />}
                </div>
              ))}
            </div>
          </div>

          {/* Students I've outreached */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold flex items-center gap-2" style={{ color: "#171717" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Students I've outreached
              </h2>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                {week}
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              {/* Table header */}
              <div className="grid text-xs font-medium px-4 py-3 border-b border-gray-200" style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr 1fr 2fr 40px", background: "#f5f7fa", color: "#395777" }}>
                <div className="flex items-center gap-1">Student <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                <div className="flex items-center gap-1">Status <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                <div className="flex items-center gap-1">Risk factor <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                <div>
                  <div className="flex items-center gap-1">Outreach <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                  <div className="text-gray-400 font-normal">Outreach date</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">Outreach <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                  <div className="text-gray-400 font-normal">Method</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">Outreach <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
                  <div className="text-gray-400 font-normal">Completion date</div>
                </div>
                <div>AI description</div>
                <div />
              </div>

              {/* Rows */}
              {outreachStudents.map((student, i) => (
                <div
                  key={i}
                  className="grid items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50 text-sm"
                  style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr 1fr 2fr 40px", color: "#171717" }}
                >
                  <div className="font-medium">{student.name}</div>
                  <div><RiskBadge status={student.status} /></div>
                  <div><RiskFactor label={student.riskFactor} /></div>
                  <div style={{ color: "#395777" }}>{student.outreachDate}</div>
                  <div style={{ color: "#395777" }}>{student.method}</div>
                  <div style={{ color: "#395777" }}>{student.completionDate}</div>
                  <div style={{ color: "#395777" }}>{student.description}</div>
                  <div className="flex justify-end">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
