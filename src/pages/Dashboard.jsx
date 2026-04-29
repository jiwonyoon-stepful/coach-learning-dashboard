import TaskCard from "../components/TaskCard"
import { tasks, progress, coach, learner } from "../data/mock"

function ProgressRing({ value, size = 56, stroke = 5 }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke="#6366f1" strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Dashboard() {
  const firstTask = tasks.find((t) => t.status === "in_progress" || t.status === "not_started")
  const submittedWithResponse = tasks.find((t) => t.coachResponse)
  const lastTask = tasks[tasks.length - 1]

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-gray-400 mb-1">Welcome back,</p>
        <h1 className="text-2xl font-bold text-gray-900">{learner.name} 👋</h1>
      </div>

      {/* Progress summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-4">
          <div className="relative">
            <ProgressRing value={progress.completionRate} />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600">
              {progress.completionRate}%
            </span>
          </div>
          <div>
            <p className="text-xs text-gray-400">Completion</p>
            <p className="text-lg font-bold text-gray-900">
              {progress.completedTasks}/{progress.totalTasks}
            </p>
            <p className="text-xs text-gray-400">tasks done</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-400 mb-1">Current week</p>
          <p className="text-2xl font-bold text-gray-900">{progress.currentWeek}</p>
          <p className="text-xs text-gray-400">of {progress.totalWeeks} weeks</p>
          <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full"
              style={{ width: `${(progress.currentWeek / progress.totalWeeks) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs text-gray-400 mb-1">Your coach</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-semibold shrink-0">
              {coach.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{coach.name}</p>
              <p className="text-xs text-gray-400">{coach.role}</p>
            </div>
          </div>
          <button className="mt-3 w-full text-xs text-indigo-600 font-medium hover:underline text-left">
            Send a message →
          </button>
        </div>
      </div>

      {/* Task list sections */}
      <div className="space-y-8">
        {/* Section: First task (in progress / up next) */}
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Up Next
          </h2>
          {firstTask && (
            <TaskCard task={firstTask} isFirst defaultOpen />
          )}
        </section>

        {/* Section: Submitted with coach response */}
        {submittedWithResponse && (
          <section>
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Coach Feedback
            </h2>
            <TaskCard task={submittedWithResponse} defaultOpen />
          </section>
        )}

        {/* Section: All tasks */}
        <section>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            All Tasks
          </h2>
          <div className="space-y-3">
            {tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                task={task}
                isFirst={i === 0}
                isLast={i === tasks.length - 1}
                defaultOpen={false}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
