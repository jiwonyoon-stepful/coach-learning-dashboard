import { Link } from "react-router-dom"
import { todaysTasks, escalatedTasks, performance, cohortTargets } from "../data/mock"

function CheckIcon({ done }) {
  return done ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" stroke="#47b894">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9d9ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
}

function Badge({ label, variant = "default" }) {
  const styles = {
    default: { background: "#c9d9ea", color: "#1c3954" },
    warning: { background: "#fef3c7", color: "#92400e" },
    respond: { background: "#dce7f3", color: "#1c3954" },
  }
  const s = styles[variant] || styles.default
  return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={s}>
      {label}
    </span>
  )
}

function ProgressBar({ value }) {
  return (
    <div className="h-1.5 rounded-full w-full mt-1" style={{ background: "#dce7f3" }}>
      <div className="h-1.5 rounded-full" style={{ background: "#1c3954", width: `${Math.min(value * 100, 100)}%` }} />
    </div>
  )
}

export default function RightPanel() {
  const done = todaysTasks.filter((t) => t.done).length
  const total = todaysTasks.length + escalatedTasks.length

  return (
    <aside className="w-80 shrink-0 border-l border-gray-100 overflow-y-auto bg-white">
      {/* Today's tasks */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold" style={{ color: "#171717" }}>Today's tasks</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
        <p className="text-2xl font-bold mb-2" style={{ color: "#171717" }}>
          {done} <span className="text-sm font-normal text-gray-400">/{total} tasks</span>
        </p>
        <ProgressBar value={done / total} />
      </div>

      <div className="px-3 pb-3 space-y-0.5">
        {todaysTasks.map((task) => (
          <div key={task.id} className="flex items-start gap-2 px-2 py-2 rounded-lg hover:bg-gray-50">
            <div className="mt-0.5 shrink-0"><CheckIcon done={task.done} /></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-snug" style={{ color: "#171717" }}>{task.name}</p>
              <p className="text-xs mt-0.5" style={{ color: "#395777" }}>{task.cohort}</p>
              <p className="text-xs" style={{ color: "#395777" }}>{task.reason}</p>
            </div>
            <Badge label={task.type} />
          </div>
        ))}

        {escalatedTasks.length > 0 && (
          <>
            <p className="px-2 pt-3 pb-1 text-xs font-semibold" style={{ color: "#171717" }}>Escalated to manager</p>
            {escalatedTasks.map((task) => (
              <div key={task.id} className="flex items-start gap-2 px-2 py-2 rounded-lg hover:bg-gray-50">
                <div className="mt-0.5 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b23e00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium leading-snug" style={{ color: "#171717" }}>{task.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#395777" }}>{task.cohort}</p>
                  <p className="text-xs" style={{ color: "#395777" }}>{task.reason}</p>
                </div>
                <Badge label={task.type} />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="border-t border-gray-100 mx-4" />

      {/* My Performance */}
      <div className="px-5 pt-4 pb-3">
        <Link to="/performance" className="flex items-center justify-between mb-0.5 group">
          <span className="text-sm font-semibold group-hover:underline" style={{ color: "#171717" }}>My Performance</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
        <p className="text-xs mb-3" style={{ color: "#395777" }}>{performance.week}</p>
        <div className="space-y-2 text-sm">
          {[
            { label: "Team rank", value: performance.teamRank, gold: true },
            { label: "Outreach", value: performance.outreach },
            { label: "Sentiment analysis", value: performance.sentiment },
            { label: "Grade pts helped", value: performance.gradePts },
            { label: "Payment collected", value: performance.payment },
          ].map(({ label, value, gold }) => (
            <div key={label} className="flex justify-between">
              <span style={{ color: "#171717" }}>{label}</span>
              <span className="font-medium" style={{ color: gold ? "#d0aa00" : "#171717" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100 mx-4" />

      {/* Weekly Cohort Targets */}
      <div className="px-5 pt-4 pb-6">
        <div className="flex items-center justify-between mb-0.5">
          <span className="text-sm font-semibold" style={{ color: "#171717" }}>Weekly Cohort Targets</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs" style={{ color: "#395777" }}>{cohortTargets.week}</p>
          <span className="text-xs px-2 py-0.5 rounded border text-gray-600 border-gray-200">{cohortTargets.cohort} ▾</span>
        </div>
        <div className="space-y-3">
          {cohortTargets.metrics.map(({ label, value, goal, progress, negative }) => (
            <div key={label}>
              <div className="flex justify-between items-baseline">
                <span className="text-xs" style={{ color: "#395777" }}>{label}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold leading-none" style={{ color: "#171717" }}>{value}</span>
                {goal && <span className="text-xs" style={{ color: "#395777" }}>/{goal} goal</span>}
              </div>
              <ProgressBar value={progress} />
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
