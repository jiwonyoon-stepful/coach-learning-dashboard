export const coach = {
  name: "Maria",
  initials: "M",
  avatar: "/avatar.png",
}

export const todaysTasks = [
  { id: 1, name: "Deven Rose", cohort: "M54 Morning 3", type: "Outreach", reason: "Suspension", done: true },
  { id: 2, name: "Sofia Mario", cohort: "M54 Morning 3", type: "Outreach", reason: "Suspension", done: true },
  { id: 3, name: "Jamie Lee", cohort: "M56 Evening 11", type: "Outreach", reason: "Low grade", done: true },
  { id: 4, name: "Keyon Moore", cohort: "M54 Morning 3", type: "Respond", reason: "AI coach escalation", done: false },
]

export const escalatedTasks = [
  { id: 5, name: "Jasmine Ford", cohort: "M56 Evening 11", type: "Outreach", reason: "Suspension", escalated: true },
]

export const performance = {
  week: "May 8-14, 2026",
  teamRank: "#3 of 8",
  outreach: "10 students",
  sentiment: "4/5",
  gradePts: "+47 pts",
  payment: "$1240",
}

export const cohortTargets = {
  week: "May 8-14, 2026",
  cohort: "M54",
  metrics: [
    { label: "Retention", value: "85%", goal: "90%", progress: 85 / 90 },
    { label: "Pass rate", value: "66%", goal: "70%", progress: 66 / 70 },
    { label: "Enrollment", value: "58%", goal: "65%", progress: 58 / 65 },
    { label: "Suspensions", value: "8", goal: "5 or less", progress: 0.4, negative: true },
    { label: "Low-grade outreach", value: "1/2", goal: "", progress: 0.5 },
  ],
}

// Chat states: 0 = first task, 1 = coach responded, 2 = last task
export const chatStates = [
  {
    id: 0,
    messages: [
      {
        role: "ai",
        avatar: "S",
        name: "Steppy AI",
        content: "Good morning, Maria! Here's what you need to do by Friday to be on track this week:",
        type: "checklist",
        items: [
          "Resolve 3 suspensions (Retention 65% → 90%)",
          "Grade outreach (Pass rate 66% → Mild 56% → 80%)",
          "15 connections by Friday (Enrollment Mild 52% → 85%)",
          "View grade outreach (1/2 outreach done)",
        ],
        footer: "You have 5 tasks for today in the weekly urgent reports.",
      },
    ],
  },
  {
    id: 1,
    messages: [
      {
        role: "ai",
        avatar: "S",
        name: "Steppy AI",
        content: "Help Jasmine pay $150 of her $300 outstanding balance before 5 pm.",
        type: "task",
        subtext: "Jasmine Ford's suspension soon expires at 5 pm today. She was unsuspended after a partial payment on Apr 21.",
        studentCard: {
          name: "Jasmine Ford",
          cohort: "M56 Evening 11 · Outstanding balance",
          avatar: "JF",
        },
        steps: [
          {
            id: "call",
            label: "Call",
            active: true,
          },
          {
            id: "email",
            label: "Email",
          },
          {
            id: "sms",
            label: "SMS",
          },
        ],
        aiDraft: {
          subject: "Al draft",
          body: "Hi Jasmine, your suspension expires at 5 pm today. Please pay $150 of your $300 outstanding balance to keep your access to the classroom. Would you like to discuss a forgiveness option? I'm here to support you!",
          actions: ["Skip for now", "Reply in Community"],
        },
      },
      {
        role: "user",
        content: "I suggested her before she said no. I would like to talk to my manager.",
      },
    ],
  },
  {
    id: 2,
    messages: [
      {
        role: "ai",
        avatar: "S",
        name: "Steppy AI",
        content: "Respond Keyon's request to switch payment method",
        type: "escalation",
        tags: ["AI coach escalation", "Technical issue"],
        subtext: "Keyon asked to switch payment method through AI coach because he was not able to update the payment method in the classroom.",
        studentCard: {
          name: "Keyon Moore",
          cohort: "M54 Morning 3",
          avatar: "KM",
        },
        steps: [
          {
            id: "triage",
            label: "Create a triage ticket",
            action: "Confirm",
          },
          {
            id: "message",
            label: "Send message to Keyon",
            aiDraft: {
              subject: "AI draft",
              body: "Hi Keyon, I was notified that you have an issue to update your payment method in the classroom. We are investigating an issue and we will get back to you.",
              actions: ["Skip for now", "Reply in Community"],
            },
          },
        ],
      },
      {
        role: "user",
        content: "It makes sense to me. Just go ahead.",
      },
    ],
  },
]

export const performanceData = {
  week: "May 8-14, 2026",
  rank: "3rd",
  team: "Green team",
  cohortTabs: ["M53 Evening 13", "M55 Morning 11", "M56 Evening 1"],
  stats: [
    { label: "Outreach", value: "10", unit: "", note: "+3 more than last week", status: "on_track" },
    { label: "Sentiment analysis", value: "4", unit: "/5", note: "Same as last week", status: "on_track" },
    { label: "Grade pts helped", value: "+47 pts", unit: "", note: "You helped 3 students for grade", status: "on_track" },
    { label: "Tuition Collection", value: "$1240", unit: "", note: "Cumulative Cash Collected", status: "on_track" },
  ],
  outreachStudents: [
    { name: "Rosa Luis", status: "completed", riskFactor: "Payment", outreachDate: "05/06/26", method: "Email", completionDate: "05/08/26", description: "$200 of $300 balance paid" },
    { name: "Darius Moore", status: "completed", riskFactor: "Payment", outreachDate: "05/06/26", method: "Email", completionDate: "05/09/26", description: "$200 of $300 balance paid" },
    { name: "Keyon Harris", status: "completed", riskFactor: "Grade", outreachDate: "05/04/26", method: "SMS", completionDate: "05/09/26", description: "3 Assignments completed. Grade increased 64% → 68%" },
    { name: "Sofia Mario", status: "completed", riskFactor: "Grade", outreachDate: "05/04/26", method: "SMS", completionDate: "05/09/26", description: "3 Assignments completed. Grade increased 66% → 70%" },
    { name: "Deven Rose", status: "at_risk", riskFactor: "Grade", outreachDate: "04/27/26", method: "Email", completionDate: "--", description: "No response" },
    { name: "James Thompson", status: "at_risk", riskFactor: "Grade", outreachDate: "04/27/26", method: "Email", completionDate: "--", description: "No response" },
  ],
}
