export const coach = {
  name: "Sarah Chen",
  avatar: "SC",
  role: "Learning Coach",
}

export const learner = {
  name: "Alex Johnson",
  avatar: "AJ",
  role: "Medical Scribe Trainee",
}

export const tasks = [
  {
    id: 1,
    week: 1,
    title: "Introduction to Medical Terminology",
    description:
      "Complete the foundational module on medical terminology. Focus on prefixes, suffixes, and root words commonly used in clinical documentation.",
    dueDate: "2026-05-02",
    status: "in_progress",
    type: "reading",
    estimatedTime: "45 min",
    submission: null,
    coachResponse: null,
  },
  {
    id: 2,
    week: 1,
    title: "Shadow a Live Patient Encounter",
    description:
      "Observe and document a real patient encounter. Pay attention to how the provider communicates with the patient and the key elements captured in the note.",
    dueDate: "2026-05-04",
    status: "submitted",
    type: "observation",
    estimatedTime: "2 hrs",
    submission: {
      text: "I shadowed Dr. Martinez during three patient encounters today. The first was a follow-up for hypertension — I noticed she captured the BP reading (138/82), medication compliance, and the patient's chief complaint about fatigue. She used SOAP format clearly. In the second encounter, an urgent visit for a URI, the HPI was much shorter and focused on symptom onset and duration. I struggled a bit keeping up with the pace but managed to capture the key elements. The third was a wellness visit — lots of preventive care items like vaccines and screenings which I hadn't practiced before. Overall it was really valuable. I feel more confident about routine visits but need more practice with urgent and complex cases.",
      submittedAt: "2026-04-27T14:30:00Z",
    },
    coachResponse: {
      text: "Great reflection, Alex! You picked up on something really important — the pacing difference between routine and urgent visits is one of the hardest things to adapt to early on. For urgent visits, try focusing on just 3 things first: chief complaint, onset, and severity. Everything else can be filled in after. Your note on the wellness visit preventive items shows good attention to detail. For next time, try drafting a quick bullet list right after the encounter before you write the full note — it helps lock in the details. Keep up the momentum!",
      respondedAt: "2026-04-27T17:45:00Z",
      coachName: "Sarah Chen",
    },
  },
  {
    id: 3,
    week: 1,
    title: "Practice SOAP Note — Case Study",
    description:
      "Using the provided case study transcript, write a complete SOAP note. Submit your draft for coach review.",
    dueDate: "2026-05-06",
    status: "not_started",
    type: "writing",
    estimatedTime: "1 hr",
    submission: null,
    coachResponse: null,
  },
  {
    id: 4,
    week: 2,
    title: "Review Common Abbreviations",
    description:
      "Study the list of 50 approved abbreviations used in your facility. Complete the short quiz at the end.",
    dueDate: "2026-05-09",
    status: "not_started",
    type: "quiz",
    estimatedTime: "30 min",
    submission: null,
    coachResponse: null,
  },
  {
    id: 5,
    week: 2,
    title: "Live Scribing Session #1",
    description:
      "Complete your first independent scribing shift. Your supervising scribe will be available but you'll take the lead. Submit a reflection afterward.",
    dueDate: "2026-05-13",
    status: "not_started",
    type: "hands_on",
    estimatedTime: "4 hrs",
    submission: null,
    coachResponse: null,
  },
]

export const progress = {
  completedTasks: 1,
  totalTasks: 5,
  currentWeek: 1,
  totalWeeks: 4,
  completionRate: 20,
}
