export const coach = {
  name: "Maria",
  initials: "M",
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

// Full linear conversation — Steppy AI gives tasks one by one, coach responds/completes each
export const conversation = [
  // ── Morning briefing ──────────────────────────────────────────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "checklist",
    content: "Good morning, Maria! Here's what you need to do by Friday to be on track this week:",
    items: [
      "Resolve 3 suspensions (Retention 65% → 90%)",
      "Grade outreach (Pass rate 66% → Mild 56% → 80%)",
      "15 connections by Friday (Enrollment Mild 52% → 85%)",
      "View grade outreach (1/2 outreach done)",
    ],
    footer: "You have 5 tasks for today in the weekly urgent reports.",
  },
  {
    role: "user",
    content: "I'm all ready now.",
  },

  // ── Task 1: Jasmine Ford suspension / outstanding balance ─────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "task",
    taskNumber: 1,
    content: "Help Jasmine pay $150 of her $300 outstanding balance before 5 pm.",
    subtext: "Jasmine Ford's suspension soon expires at 5 pm today. She was unsuspended after a partial payment on Apr 21.",
    studentCard: { name: "Jasmine Ford", cohort: "M56 Evening 11 · Outstanding balance", avatar: "JF" },
    steps: [
      { id: "call", label: "Call", active: true },
      { id: "email", label: "Email" },
      { id: "sms", label: "SMS" },
    ],
    aiDraft: {
      subject: "AI draft",
      body: "Hi Jasmine, your suspension expires at 5 pm today. Please pay $150 of your $300 outstanding balance to keep your access to the classroom. Would you like to discuss a forgiveness option? I'm here to support you!",
      actions: ["Skip for now", "Reply in Community"],
    },
  },
  {
    role: "user",
    content: "I suggested her before she said no. I would like to talk to my manager.",
  },
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "text",
    content: "No problem. This has been escalated. You don't need to complete this task now. Do you want to complete the next task?",
  },
  {
    role: "user",
    content: "Yes",
  },

  // ── Task 2: Sofia Mario low-grade outreach ────────────────────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "task",
    taskNumber: 2,
    content: "Reach out to Sofia Mario about her low grade before end of day.",
    subtext: "Sofia's current grade is 58% — below the 65% threshold. She has 3 incomplete assignments that could bring her back on track.",
    studentCard: { name: "Sofia Mario", cohort: "M54 Morning 3 · Low grade", avatar: "SM" },
    steps: [
      { id: "sms", label: "SMS", active: true },
      { id: "email", label: "Email" },
      { id: "call", label: "Call" },
    ],
    aiDraft: {
      subject: "AI draft",
      body: "Hi Sofia, I noticed you have 3 incomplete assignments that are affecting your grade. Completing them could bring you from 58% to above the 65% passing threshold. I'm here to help — let me know if you'd like to review them together!",
      actions: ["Skip for now", "Send message"],
    },
  },
  {
    role: "user",
    content: "Sent! She replied saying she'll complete them by Thursday.",
  },
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "text",
    content: "Great work! I've marked Sofia's outreach as completed. Ready for the next one?",
  },
  {
    role: "user",
    content: "Yes, let's keep going.",
  },

  // ── Task 3: Deven Rose suspension ─────────────────────────────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "task",
    taskNumber: 3,
    content: "Follow up with Deven Rose on her suspension — she hasn't responded to the last outreach.",
    subtext: "Deven was suspended on Apr 27 for non-payment. An email was sent but no response received. Her access expires in 2 days.",
    studentCard: { name: "Deven Rose", cohort: "M54 Morning 3 · Suspension", avatar: "DR" },
    steps: [
      { id: "call", label: "Call", active: true },
      { id: "sms", label: "SMS" },
      { id: "email", label: "Email" },
    ],
    aiDraft: {
      subject: "AI draft",
      body: "Hi Deven, I wanted to follow up about your suspended account. Your access expires in 2 days. I'd love to help you find a solution — is there a good time to talk today?",
      actions: ["Skip for now", "Send message"],
    },
  },
  {
    role: "user",
    content: "Called her — she said she'll make a payment today by 3 pm. Marking as resolved.",
  },
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "text",
    content: "Excellent! Deven's suspension outreach is complete. You're making great progress today — 3 tasks down, 2 to go.",
  },

  // ── Task 4: Jamie Lee low-grade ───────────────────────────────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "task",
    taskNumber: 4,
    content: "Contact Jamie Lee about incomplete module submissions impacting her grade.",
    subtext: "Jamie has a 52% grade in M56 Evening 11. She's missing 4 module submissions from the past two weeks. Engagement has been low.",
    studentCard: { name: "Jamie Lee", cohort: "M56 Evening 11 · Low grade", avatar: "JL" },
    steps: [
      { id: "email", label: "Email", active: true },
      { id: "sms", label: "SMS" },
      { id: "call", label: "Call" },
    ],
    aiDraft: {
      subject: "AI draft",
      body: "Hi Jamie, I wanted to check in — you're missing 4 module submissions and your grade is currently at 52%. Completing those modules could get you back on track quickly. Let me know how I can support you!",
      actions: ["Skip for now", "Send message"],
    },
  },
  {
    role: "user",
    content: "Sent the email. She opened it but hasn't replied yet. I'll follow up tomorrow if no response.",
  },
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "text",
    content: "Noted! I've logged the outreach for Jamie. One last task remaining — this one needs your judgment.",
  },

  // ── Task 5: Keyon Moore AI escalation ─────────────────────────────
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "escalation",
    taskNumber: 5,
    tags: ["AI coach escalation", "Technical issue"],
    content: "Respond to Keyon's request to switch payment method",
    subtext: "Keyon asked to switch payment method through AI coach because he was not able to update the payment method in the classroom.",
    studentCard: { name: "Keyon Moore", cohort: "M54 Morning 3", avatar: "KM" },
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
  {
    role: "ai",
    avatar: "S",
    name: "Steppy AI",
    type: "completion",
    content: "All 5 tasks completed! 🎉 Great work today, Maria. You've helped 4 students and escalated 1 issue to your manager. Check your performance summary to see today's impact.",
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
