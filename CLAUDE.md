# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal baseball portfolio website for Jude McDonald (Class of 2026 RHP) built with SvelteKit and TypeScript. The site features dynamic college-specific landing pages at `/college/[slug]` that personalize content for college recruiters.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Type checking
yarn check
yarn check:watch  # Watch mode

# Linting and formatting
yarn lint         # Check code style
yarn format       # Auto-format code
```

## Architecture

### Component Structure
- **Components**: Located in `src/lib/components/` - reusable Svelte components for Hero, Stats, VideoHighlights, Achievements, Schedule, and ContactForm
- **Services**: Business logic in `src/lib/services/` - currently contains `collegeService.ts` for college data lookup
- **Routes**: SvelteKit file-based routing in `src/routes/`
  - Main page: `src/routes/+page.svelte`
  - Dynamic college pages: `src/routes/college/[slug]/+page.svelte`

### Key Technical Details
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS with custom sports-themed design
- **Deployment**: Vercel adapter configured
- **Analytics**: Vercel Analytics and Speed Insights integrated

### Dynamic College Pages
The application generates personalized landing pages for college recruiters. When creating or modifying college pages:
1. College data is fetched using the Clearbit API in `collegeService.ts`
2. URLs follow the pattern `/college/[college-name]` (e.g., `/college/ucla`)
3. Pages display college logos, colors, and personalized messaging
4. Fallback handling exists for colleges not found in the API

## Important Notes

- **No test framework** is currently configured. When adding tests, you'll need to set up a testing framework first.
- **Environment variables**: Any API keys should be stored in environment variables, not committed to the repository
- **College service**: The `collegeService.ts` uses Clearbit API for college data - handle API failures gracefully
- **Static assets**: Images are stored in `/static/images/`