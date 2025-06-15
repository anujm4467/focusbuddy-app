📝 Product Requirement Document (PRD)
📌 Product Name
FocusBuddy
A gentle, AI-powered memory aid designed for adults with ADHD

🧭 1. Product Overview
1.1 Problem Statement
Adults with ADHD often struggle with memory recall, task prioritization, and follow-through. Existing productivity apps are complex and overwhelming. Users need a system that:

Works with how their brain works (voice input, minimal friction)

Provides daily structure

Offers gentle reminders and follow-ups

Helps manage memory gaps and emotional overwhelm

1.2 Solution
FocusBuddy uses AI to help ADHD users:

Convert spontaneous thoughts into structured tasks

Receive nudges and summaries tailored to ADHD behavior

Interact with their day through voice, not typing

🎯 2. Goals and Objectives
Goal Description
✅ Ease of use Minimal UI, voice-first interface
✅ Task capture Convert chaotic thoughts into clear action
✅ Gentle productivity No rigid deadlines, just flow
✅ Personalized reminders Adapted to user patterns and tone
✅ Monetization Basic free use, Pro plan with AI-enhanced features

👥 3. Target Audience
Segment Characteristics
Adults with ADHD Diagnosed/self-identified, 18–40 years, digital-native
Neurodivergent-friendly Those who don't resonate with traditional task apps
Caregivers Parents or partners who help ADHD loved ones

🚀 4. Key Features
4.1 Core Features (All Plans)
Feature Description
🎙️ Voice to Task User records voice note → AI transcribes + converts to actionable task
📋 Smart Todo List Tasks are categorized (Quick wins, Time-sensitive, Deep focus)
🕒 Daily Summary Morning: "Here's your plan." Evening: "Here's what you completed."
🔁 Task Loop Tasks not done are re-prioritized by AI next day

4.2 Premium Features (Pro Plan)
Feature Description
🧠 AI Follow-Up Ask GPT: "Did I already do this?", "Can you rephrase this task?"
🎯 Custom Nudges Choose tone: Calm, Playful, Motivational
📅 Calendar Sync Sync with Google Calendar
📈 Focus Report Weekly report: completed tasks, missed items, active hours
👨‍👩‍👧 Family View Caregiver mode: see summaries for linked account

🧑‍💻 5. User Flow
5.1 Morning Routine
App sends "Good Morning" summary at set time

User reviews today's tasks or adds new via voice

5.2 During the Day
User adds spontaneous thoughts via voice note

Tasks show up in 3 categories:

🔥 Urgent

🎯 Focus

🍃 Light

5.3 Evening Recap
AI sends a short summary:

✅ Completed

🔁 Rolled over

📌 Pending

🧑‍🎨 6. UI/UX Requirements
Screen Description
Dashboard "Today's tasks" + big record button
Voice Input Press → Record → Show AI result
Task View Editable tasks, categorized by priority
Summary Screen Daily/weekly recap with visual graphs
Settings Nudges, calendar integration, Pro subscription

🛠️ 7. Technical Requirements
7.1 Tech Stack
Layer Tech
Frontend React Native (iOS + Android)
Backend Node.js + NestJS
AI Services Whisper (STT), GPT-4o (task interpretation, follow-up), cron for summary
DB PostgreSQL (tasks, users), Redis (caching), S3 (voice storage)
Auth Firebase or Auth0
Notifications Firebase Cloud Messaging / OneSignal
Billing Stripe
Hosting Vercel (frontend), AWS/GCP (backend APIs)

7.2 APIs and AI Prompts
Example: Task Extraction Prompt
plaintext
Copy
Edit
User voice: "Hey remind me to send rent by tomorrow morning."
Prompt:
"Extract the intent, due date, and category for the following note. Output in JSON."

Output:
{
"task": "Send rent",
"due": "Tomorrow 9 AM",
"category": "Urgent"
}
Example: Summary Generation Prompt
plaintext
Copy
Edit
Prompt:
"Summarize the following tasks as a daily wrap-up. Highlight what was done, what is pending, and what will be rolled over."

Input: [List of tasks + completion status]
📊 8. Data Model (Simplified)
sql
Copy
Edit
Users (
id UUID PRIMARY KEY,
name TEXT,
email TEXT,
plan TEXT,
caregiver_user_id UUID
)

Tasks (
id UUID PRIMARY KEY,
user_id UUID,
text TEXT,
status TEXT, -- pending, completed, rolled_over
due_time TIMESTAMP,
category TEXT,
created_at TIMESTAMP
)

VoiceNotes (
id UUID PRIMARY KEY,
user_id UUID,
s3_url TEXT,
transcript TEXT,
processed BOOLEAN
)
💸 9. Pricing Strategy
Plan Price Features
Free $0 5 voice notes/day, basic summaries
Pro $7/month Unlimited input, GPT Q&A, nudges, calendar sync
Family $15/month Add linked accounts (view-only)

📈 10. Success Metrics
Metric Goal
Daily Active Users (DAU) 1,000 in 3 months
Retention 40% weekly retention
Voice Task Accuracy > 90% correct interpretation
Upgrade Rate 10% of users move to paid plan
Feedback Rating 4.5+ on app stores

🧪 11. MVP Scope (4–6 Weeks)
In MVP:

User onboarding + voice task flow

Daily summary

GPT task interpretation

Basic task list (create/edit/delete)

Firebase Auth + Email login

Pro plan toggle (mock billing)

Post-MVP:

Calendar integration

Weekly reports

GPT follow-up queries

Custom nudges

Caregiver mode

📅 12. Timeline (Suggested)
Week Milestone
1 Onboarding, Auth, DB setup
2 Voice note recording + Whisper
3 GPT task extraction, task UI
4 Daily summary + push notifications
5 Basic Pro features + Stripe
6 Bug fixes + MVP Launch on Play Store/TestFlight