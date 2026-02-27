# Cleetus Client Hub

**Cleetus Command Center** - A modern CRM platform built specifically for coaching businesses.

## Overview

The Cleetus Client Hub provides coaches with a comprehensive solution to manage clients, track progress, schedule sessions, and grow their coaching business.

## Features

- **Client Management** - Track clients, their goals, and progress
- **Session Scheduling** - Calendar integration for coaching sessions
- **Progress Tracking** - Visual dashboards and analytics
- **Payment Tracking** - Monitor invoices and payments
- **Communication Hub** - Centralized messaging with clients
- **Document Management** - Share resources and homework

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
- **UI Components**: Radix UI + Custom Components

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   └── ui/          # Reusable UI components
├── lib/             # Utilities and helpers
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
└── services/        # API and external services
```

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in your credentials
3. Run `npm install`
4. Run `npm run dev`

## Environment Variables

See `.env.example` for required environment variables.

## Deployment

This project is configured for automatic deployment on Vercel.

## License

MIT License - Cleetus Command Center