# Cleetus Client Hub - Architecture Documentation

## System Architecture

### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Radix UI primitives + custom components
- **State Management**: React hooks + Context API
- **Authentication**: Supabase Auth

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with Row Level Security
- **Storage**: Supabase Storage for documents
- **API**: Next.js API Routes + Server Actions

### Deployment
- **Hosting**: Vercel (configured for static export)
- **Domain**: valuemagnets.io (to be configured)

## Database Schema

### Tables

#### clients
- id: uuid (primary key)
- user_id: uuid (coach reference)
- first_name: text
- last_name: text
- email: text
- phone: text
- status: enum (active, inactive, prospective)
- created_at: timestamp
- updated_at: timestamp

#### sessions
- id: uuid (primary key)
- client_id: uuid (foreign key)
- scheduled_at: timestamp
- duration: integer (minutes)
- status: enum (scheduled, completed, cancelled)
- notes: text
- created_at: timestamp

#### goals
- id: uuid (primary key)
- client_id: uuid (foreign key)
- title: text
- description: text
- target_date: date
- status: enum (active, completed, archived)
- created_at: timestamp

#### payments
- id: uuid (primary key)
- client_id: uuid (foreign key)
- amount: decimal
- status: enum (pending, paid, overdue)
- due_date: date
- paid_at: timestamp
- created_at: timestamp

## Security

- Row Level Security (RLS) policies on all tables
- Authentication required for all data access
- Coaches can only access their own client data

## API Structure

### Client Endpoints
- GET /api/clients - List all clients
- POST /api/clients - Create new client
- GET /api/clients/[id] - Get client details
- PUT /api/clients/[id] - Update client
- DELETE /api/clients/[id] - Delete client

### Session Endpoints
- GET /api/sessions - List sessions
- POST /api/sessions - Schedule session
- PUT /api/sessions/[id] - Update session

## Environment Variables

See `.env.example` for required configuration.

## Development Workflow

1. Local development with `npm run dev`
2. Push to GitHub triggers Vercel deployment
3. Production builds use static export