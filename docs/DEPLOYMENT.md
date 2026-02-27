# Deployment Guide

## Vercel Deployment

### Option 1: Vercel Dashboard (Recommended)
1. Go to https://vercel.com/new
2. Import Git Repository: `aicaydo-cell/cleetus-client-hub`
3. Configure Project:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `dist`
4. Add Environment Variables (from .env.local)
5. Deploy

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login and deploy
vercel login
vercel --prod
```

## GitHub Repository
- **URL**: https://github.com/aicaydo-cell/cleetus-client-hub
- **Public**: Yes

## Environment Variables Required
Copy these from `.env.local` to Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_APP_URL`

## Build Configuration
- **Framework**: Next.js 15
- **Node Version**: 18.x or higher
- **Build Command**: `next build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`