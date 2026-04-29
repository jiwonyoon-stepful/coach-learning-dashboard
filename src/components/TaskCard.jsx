import { useState } from "react"

const STATUS_STYLES = {
  in_progress: { dot: "bg-blue-500", badge: "bg-blue-50 text-blue-700", label: "In Progress" },
  submitted: { dot: "bg-amber-500", badge: "bg-amber-50 text-amber-700", label: "Submitted" },
  not_started: { dot: "bg-gray-300", badge: "bg-gray-100 text-gray-500", label: "Not Started" },
  completed: { dot: "bg-green-500", badge: "bg-green-50 text-green-700", label: "Completed" },
}

const TYPE_ICONS = {
  reading: "📖",
  observation: "👁️",
  writing: "✍️",
  quiz: "📝",
  hands_on: "🩺",
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function CoachResponse({ response }) {
  return (
    <div className="mt-4 rounded-xl bg-indigo-50 border border-indigo-100 p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold shrink-0">
          SC
        </div>
        <span className="text-sm font-semibold text-indigo-900">{response.coachName}</span>
        <span className="text-xs text-indigo-400 ml-auto">
          {new Date(response.respondedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
        </span>
      </div>
      <p className="text-sm text-indigo-800 leading-relaxed">{response.text}</p>
    </div>
  )
}

export default function TaskCard({ task, isFirst, isLast, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false)
  const style = STATUS_STYLES[task.status]

  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md ${
        isFirst ? "ring-2 ring-indigo-500 ring-offset-1" : ""
      }`}
    >
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="mt-0.5 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-base shrink-0">
          {TYPE_ICONS[task.type]}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Week {task.week}</span>
            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${style.badge}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
              {style.label}
            </span>
            {isFirst && (
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                Up next
              </span>
            )}
          </div>
          <h3 className="mt-1 text-sm font-semibold text-gray-900 leading-snug">{task.title}</h3>
          <p className="mt-0.5 text-xs text-gray-400">
            Due {new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · {task.estimatedTime}
          </p>
        </div>

        <div className="mt-1 text-gray-400 shrink-0">
          <ChevronIcon open={open} />
        </div>
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-gray-50">
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">{task.description}</p>

          {task.submission && (
            <div className="mt-4 rounded-xl bg-gray-50 border border-gray-100 p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Your Submission</p>
              <p className="text-sm text-gray-700 leading-relaxed">{task.submission.text}</p>
              <p className="mt-2 text-xs text-gray-400">
                Submitted {new Date(task.submission.submittedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          )}

          {task.coachResponse && <CoachResponse response={task.coachResponse} />}

          {task.status === "in_progress" && (
            <button className="mt-4 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors">
              Start Task
            </button>
          )}
          {task.status === "not_started" && (
            <button className="mt-4 w-full py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors">
              Mark as Started
            </button>
          )}
          {task.status === "submitted" && !task.coachResponse && (
            <p className="mt-4 text-xs text-center text-gray-400">Waiting for coach feedback…</p>
          )}
        </div>
      )}
    </div>
  )
}
