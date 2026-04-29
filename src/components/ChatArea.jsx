import { useState } from "react"
import { chatStates } from "../data/mock"

function AIDraftCard({ draft }) {
  return (
    <div className="mt-3 rounded-xl overflow-hidden border border-green-200" style={{ background: "#dff4d7" }}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-green-200">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#337b64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        <span className="text-xs font-semibold" style={{ color: "#337b64" }}>{draft.subject}</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm leading-relaxed" style={{ color: "#171717" }}>{draft.body}</p>
      </div>
      <div className="flex items-center gap-2 px-4 pb-3">
        {draft.actions.map((action, i) => (
          <button
            key={action}
            className="px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
            style={
              i === 0
                ? { border: "1px solid #b2d9c3", background: "transparent", color: "#171717" }
                : { background: "#1c3954", color: "#fff" }
            }
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}

function StudentCard({ student }) {
  return (
    <div className="flex items-center gap-3 mt-3 p-3 rounded-xl bg-white border border-gray-200">
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold shrink-0" style={{ background: "#c9d9ea", color: "#1c3954" }}>
        {student.avatar}
      </div>
      <div>
        <p className="text-sm font-semibold" style={{ color: "#171717" }}>{student.name}</p>
        <p className="text-xs" style={{ color: "#395777" }}>{student.cohort}</p>
      </div>
      <button className="ml-auto px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50" style={{ color: "#171717" }}>
        View more
      </button>
    </div>
  )
}

function Tag({ label }) {
  const colors = {
    "AI coach escalation": { bg: "#dce7f3", color: "#1c3954" },
    "Technical issue": { bg: "#fff9ef", color: "#b23e00" },
  }
  const c = colors[label] || { bg: "#c9d9ea", color: "#1c3954" }
  return (
    <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={c}>
      {label}
    </span>
  )
}

function AIMessage({ msg }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5" style={{ background: "#47b894", color: "#fff" }}>
        {msg.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold mb-1.5" style={{ color: "#171717" }}>{msg.name}</p>

        {msg.type === "checklist" && (
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-sm mb-3" style={{ color: "#171717" }}>{msg.content}</p>
            <ul className="space-y-2">
              {msg.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#171717" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#395777" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            {msg.footer && <p className="mt-3 text-xs" style={{ color: "#395777" }}>{msg.footer}</p>}
          </div>
        )}

        {(msg.type === "task" || msg.type === "escalation") && (
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            {msg.tags && (
              <div className="flex gap-2 mb-3">
                {msg.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            )}
            <p className="text-sm font-semibold mb-1" style={{ color: "#171717" }}>{msg.content}</p>
            {msg.subtext && <p className="text-sm mb-3" style={{ color: "#395777" }}>{msg.subtext}</p>}
            {msg.studentCard && <StudentCard student={msg.studentCard} />}

            {/* Action steps */}
            {msg.steps && (
              <div className="mt-3 space-y-2">
                {msg.steps.map((step, i) => (
                  <div key={step.id} className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 shrink-0" style={{ borderColor: "#c9d9ea" }} />
                        <span className="text-sm font-medium" style={{ color: "#171717" }}>{step.label}</span>
                      </div>
                      {step.action && (
                        <button className="px-4 py-1.5 rounded-lg text-sm font-semibold text-white" style={{ background: "#1c3954" }}>
                          {step.action}
                        </button>
                      )}
                    </div>
                    {step.aiDraft && <AIDraftCard draft={step.aiDraft} />}
                  </div>
                ))}
              </div>
            )}

            {/* Inline step buttons for task type */}
            {msg.type === "task" && msg.steps && (
              <div className="flex gap-2 mt-3">
                {msg.steps.map((step) => (
                  <button
                    key={step.id}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border"
                    style={
                      step.active
                        ? { background: "#1c3954", color: "#fff", borderColor: "#1c3954" }
                        : { background: "white", color: "#171717", borderColor: "#d1d5db" }
                    }
                  >
                    {step.label}
                  </button>
                ))}
              </div>
            )}

            {msg.aiDraft && <AIDraftCard draft={msg.aiDraft} />}
          </div>
        )}
      </div>
    </div>
  )
}

function UserMessage({ msg }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-xs px-4 py-2.5 rounded-2xl text-sm text-white leading-relaxed" style={{ background: "#1c3954" }}>
        {msg.content}
      </div>
    </div>
  )
}

export default function ChatArea({ stateIndex = 0 }) {
  const [input, setInput] = useState("")
  const state = chatStates[stateIndex]

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-white">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
        {state.messages.map((msg, i) => (
          msg.role === "ai"
            ? <AIMessage key={i} msg={msg} />
            : <UserMessage key={i} msg={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="shrink-0 px-5 py-3 border-t border-gray-100">
        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2.5">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400"
          />
          <button
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold text-white shrink-0"
            style={{ background: "#1c3954" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21L23 12 2 3v7l15 2-15 2v7z"/>
            </svg>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
