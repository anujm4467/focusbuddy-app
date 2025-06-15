# 🧠 FocusBuddy - AI-Powered Memory Aid for ADHD

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React Native](https://img.shields.io/badge/React%20Native-Expo-blue.svg)](https://expo.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-Backend-red.svg)](https://nestjs.com/)

A gentle, AI-powered memory aid designed for adults with ADHD. FocusBuddy helps convert spontaneous thoughts into structured tasks through natural voice input and provides personalized reminders tailored to ADHD behavior patterns.

## 🌟 Features

### Core Features (Free)
- 🎙️ **Voice to Task**: Record voice notes that are automatically converted to actionable tasks
- 📋 **Smart Todo List**: Tasks categorized by priority (Quick wins, Time-sensitive, Deep focus)
- 🕒 **Daily Summary**: Morning planning and evening recap
- 🔁 **Intelligent Task Loop**: Uncompleted tasks are re-prioritized by AI

### Premium Features (Pro Plan)
- 🧠 **AI Follow-Up**: Interactive Q&A with your task history
- 🎯 **Custom Nudges**: Choose your preferred tone (Calm, Playful, Motivational)
- 📅 **Calendar Sync**: Integration with Google Calendar
- 📈 **Focus Reports**: Weekly insights on productivity patterns
- 👨‍👩‍👧 **Family View**: Caregiver mode for linked accounts

## 🏗️ Architecture

```
📱 Expo Mobile App (React Native)
    ↓ HTTPS API
🌐 NestJS Backend API
    ├── 🎙️ Voice Processing (Whisper)
    ├── 🧠 AI Processing (Groq + LLaMA 3)
    ├── 🔒 Authentication (Firebase)
    ├── 💳 Billing (Stripe)
    └── 🗄️ Database (PostgreSQL)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- Firebase account
- Groq API key
- Expo CLI

### Backend Setup

1. **Clone and install dependencies**
```bash
cd backend
npm install
```

2. **Environment Setup**
```bash
cp .env.example .env
# Fill in your API keys and database credentials
```

3. **Database Setup**
```bash
# Run migrations
npm run migration:run

# Seed database (optional)
npm run seed
```

4. **Start the backend**
```bash
npm run start:dev
```

### Mobile App Setup

1. **Install dependencies**
```bash
cd mobile
npm install
```

2. **Start the Expo development server**
```bash
npx expo start
```

3. **Run on device**
- Install Expo Go app on your phone
- Scan QR code to run the app

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React Native + Expo |
| **Backend** | Node.js + NestJS |
| **AI/ML** | Groq + LLaMA 3, OpenAI Whisper |
| **Database** | PostgreSQL + Prisma/TypeORM |
| **Authentication** | Firebase Auth |
| **Storage** | AWS S3 / Google Cloud Storage |
| **Payments** | Stripe |
| **Notifications** | Firebase Cloud Messaging |
| **Hosting** | Vercel/Render (API), Expo (Mobile) |

## 📱 Key Screens

### Daily Dashboard
- Today's tasks categorized by priority
- Large voice recording button
- Quick access to completed tasks

### Voice Input
- One-tap recording
- Real-time transcription
- AI task interpretation with confirmation

### Task Management
- Swipe actions for quick completion
- Category-based organization
- Gentle reminder system

### Insights & Reports
- Daily/weekly completion rates
- Focus time analytics
- Personalized productivity patterns

## 🧠 AI Integration

### Task Extraction
```typescript
// Example: Voice input processing
User: "Hey remind me to send rent by tomorrow morning."

AI Response:
{
  "task": "Send rent payment",
  "due_date": "2024-01-15T09:00:00Z",
  "category": "urgent",
  "priority": "high"
}
```

### Smart Summaries
The AI generates personalized daily summaries that highlight:
- ✅ Completed tasks
- 🔄 Rolled over items
- 📌 New priorities
- 🎯 Focus areas for tomorrow

## 💰 Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0/month | 5 voice notes/day, basic summaries |
| **Pro** | $7/month | Unlimited input, AI Q&A, custom nudges, calendar sync |
| **Family** | $15/month | Multiple linked accounts with caregiver view |

## 🔧 Development

### Available Scripts

**Backend**
```bash
npm run start:dev    # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run ESLint
```

**Mobile**
```bash
npx expo start       # Start Expo development server
npx expo build       # Build for app stores
npm run test         # Run tests
```

### Database Schema

Key entities:
- `users` - User profiles and preferences
- `tasks` - Task items with AI-generated metadata
- `voice_notes` - Audio recordings and transcriptions
- `summaries` - Daily/weekly AI-generated summaries
- `notifications` - Scheduled reminders

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd backend && npm test

# Mobile tests
cd mobile && npm test

# E2E tests
npm run test:e2e
```

### Test Coverage
- Unit tests for AI prompt processing
- Integration tests for voice-to-task pipeline
- E2E tests for critical user flows

## 📈 Success Metrics

- **Daily Active Users**: Target 1,000 in 3 months
- **Voice Task Accuracy**: >90% correct interpretation
- **User Retention**: 40% weekly retention
- **Upgrade Rate**: 10% conversion to paid plans
- **App Store Rating**: 4.5+ stars

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@focusbuddy.app
- 💬 Discord: [Join our community](https://discord.gg/focusbuddy)
- 📖 Docs: [Documentation](https://docs.focusbuddy.app)

## 🙏 Acknowledgments

- OpenAI for Whisper speech-to-text
- Groq for ultra-fast LLaMA 3 inference
- The ADHD community for inspiration and feedback
- All contributors and beta testers

---

**Made with ❤️ for the neurodivergent community**