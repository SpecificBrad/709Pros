# Architecture
_Rarely changes. Load only when writing code or debugging structure._

## Stack
- Framework: Astro 5.x (static + SSR)
- Styling: Tailwind 3.x
- DB: Supabase (PostgreSQL)
- Forms: Fillout
- Hosting: Netlify
- Repo: github.com/SpecificBrad/709Pros

## Site Structure
- Model: Programmatic SEO — 8 services × 6 locations = 48 + 18 other = 66 pages
- Data: `src/data/services.ts` + `src/data/locations.ts` drive page generation
- Target: Newfoundland homeowners (area code 709)

## Lead Pipeline
Fillout Form → POST webhook → Netlify Edge Function (fillout-webhook) → Supabase leads table (12 fields)

## Key Directories
- /src/pages/        Astro pages
- /src/data/         services.ts, locations.ts
- /src/components/   reusable components
- /supabase/functions/  edge functions
- /_claude/          Claude session memory
- /docs/             legacy docs (pending-work, lessons-learned, etc.)
