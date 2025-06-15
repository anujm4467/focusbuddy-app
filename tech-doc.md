🧠 FocusBuddy — Technical Architecture Document (Updated with Groq)
📱 Overview
FocusBuddy is a mobile-first AI app that helps ADHD users manage tasks, routines, and reminders using natural voice input, structured AI responses, and gentle nudges — powered by Groq's ultra-fast LLaMA 3.

🧩 Architecture Overview
less
Copy
Edit
[📱 Expo Mobile App]
|
HTTPS API (Axios / fetch)
↓
[🌐 Node.js + NestJS Backend API]
|
┌──────────────┬───────────────┬───────────────────┐
│ │ │ │
[🎙️ Voice Upload] [🧠 AI via Groq] [🔒 Firebase Auth] [💳 Stripe Billing]
│ │ │ │
[S3/GCS + Whisper] └────┐ └──────────┐ └──┐
↓ ↓ ↓
[🧾 PostgreSQL DB] [📲 Notifications] [📤 Usage Tracker]
🧑‍💻 1. Frontend (Expo)
Framework: Expo + React Native

Libraries:

expo-av: Voice recording

axios: API requests

expo-notifications: Push reminders

react-navigation: App navigation

react-native-paper: UI components

🚀 2. Backend (Node.js + NestJS)
Key Modules:
Module Responsibility
auth Firebase token validation
voice Handles voice upload, transcribes using Whisper
tasks Parses tasks using LLaMA 3 via Groq
ai Q&A and summaries
notifications Daily reminders (FCM)
billing Stripe integration
users Profile, preferences, usage tracking

🧠 3. AI (Groq + LLaMA 3)
Why Groq?
⚡ Ultra-low latency

💸 Currently free

🧠 Access to LLaMA 3 70B, comparable to GPT-4 in many tasks

Prompt Examples:
🔹 Task Extraction
css
Copy
Edit
User: "Hey remind me to take my vitamin D at 8 PM every day."
→ Response:
{
"task": "Take vitamin D",
"time": "8:00 PM",
"repeat": "daily",
"category": "health"
}
🔹 Daily Summary
sql
Copy
Edit
User: "Summarize my day."
→ "You completed 3 out of 5 tasks. Great job staying focused on your priorities!"
🔹 Q&A
sql
Copy
Edit
User: "Did I send that birthday message to Alex?"
→ "Yes, you marked it done on June 10."
Integration Snippet:
ts
Copy
Edit
const groq = new OpenAIApi(
new Configuration({
apiKey: process.env.GROQ_API_KEY,
basePath: "https://api.groq.com/openai/v1",
})
);
🧾 4. Database (PostgreSQL via Prisma or TypeORM)
Tables:
users

tasks

voice_notes

summaries

plans (free, pro, family)

usage_logs

notifications

🔐 5. Authentication (Firebase Auth)
Email/password

Google, Apple logins

Secure token-based auth for backend

🎙️ 6. Voice-to-Text (Whisper)
Options:
Option Pros Usage
openai/whisper self-hosted Free, private Run on server with FFmpeg
AssemblyAI Free 5 hours/month Easy cloud API

☁️ 7. Storage
Voice files: S3 / GCS

Transcripts: DB

Use signed URLs for secure uploads/downloads

💳 8. Payments (Stripe)
Plan tiers: Free / Pro / Family

Usage-based upgrade nudges

Webhook handler to sync payment status

🔔 9. Push Notifications
FCM + Expo-notifications

Daily summaries

Custom user-created reminders

Retry logic via cron job (Node + Agenda)

📈 10. Analytics & Monitoring
Tool Use
Sentry Crash reporting
PostHog / Mixpanel User behavior tracking
Logtail / Winston App logs

⚙️ 11. Hosting Options
Component Platform
Backend API Render / Railway / Fly.io
Whisper Self-hosted on VM / Docker
DB Supabase / Neon (free Postgres)
AI (Groq) Cloud (no hosting needed)
Mobile Expo + OTA updates

✅ MVP Launch Stack Summary
Layer Tech
Frontend Expo + React Native
Backend NestJS (Node.js)
AI Model Groq + LLaMA 3 70B
Transcription Whisper (self-hosted)
DB PostgreSQL + Prisma
Auth Firebase
Payments Stripe
Storage AWS S3 or Google Cloud
Notifications FCM + Expo