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

### Tech Stack

- **Framework**: SvelteKit with file-based routing
- **Language**: TypeScript (strict mode enabled in tsconfig.json)
- **Styling**: Custom CSS variables defined in `src/app.html` (no Tailwind CSS configured)
- **Build Tool**: Vite
- **Deployment**: Vercel adapter with Analytics and Speed Insights

### Project Structure

- `src/lib/components/` - Reusable Svelte components:
  - `Hero.svelte`, `Stats.svelte`, `VideoHighlights.svelte`
  - `PerfectGameProfile.svelte` - Perfect Game statistics display
  - `Achievements.svelte`, `Schedule.svelte`, `ContactForm.svelte`
- `src/lib/services/collegeService.ts` - Clearbit API integration for college data lookup
- `src/routes/` - SvelteKit pages:
  - `+page.svelte` - Main landing page
  - `college/[slug]/+page.svelte` - Dynamic college-specific pages
  - `+layout.svelte` - Root layout with Vercel Analytics

### Dynamic College Pages

The `/college/[slug]` route creates personalized landing pages for college recruiters:

- College data fetched via Clearbit API (`collegeService.ts`)
- Handles common abbreviations (e.g., `ucla`, `mit`, `usc`)
- Graceful fallback for colleges not found in API
- College logos and branding dynamically displayed

### Key Configuration

- **TypeScript**: Strict mode, bundler module resolution
- **SvelteKit**: Vercel adapter, prerender warnings ignored
- **Package Manager**: Yarn with resolutions for esbuild
- **No Testing Framework**: Tests need to be set up if required

## Important Notes

- **CSS Styling**: Uses CSS custom properties defined in `app.html`, not Tailwind
- **Static Assets**: Images stored in `/static/images/`
- **Perfect Game Data**: Hardcoded in `PerfectGameProfile.svelte` component
- **Environment Variables**: Required for any API keys (not committed to repo)
