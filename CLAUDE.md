# 709 Pros — Project Guide

## Stack
Astro 5.x · Tailwind 3.x · Supabase · Fillout · Netlify

## Build
```bash
npm run dev       # Local dev server
npm run build     # Static build → dist/
```

## Architecture
pSEO site: `services × locations` → 48 cross-product pages + 18 other = **66 pages**
- Data: `src/data/services.ts` (8), `locations.ts` (6), `business.ts`
- Add a service/location → add entry to data file → pages auto-generate

## Lead Pipeline
```
Fillout form → Edge Function (fillout-webhook) → Supabase "leads" table
```
- Edge Function: `supabase/functions/fillout-webhook/index.ts`
- Maps by question **name** (not ID) — see `docs/schema.md` for mappings

## Git
- Feature branch: `claude/build-709pros-seo-site-S3O91`
- Production: `main` (Netlify auto-deploys)

## Reference Docs
Detailed docs moved to `docs/` to reduce per-turn token cost:
- `docs/schema.md` — DB schema, field mappings, payload structure
- `docs/lessons-learned.md` — Integration debugging, deployment, gotchas
- `docs/pending-work.md` — Remaining tasks
- `docs/completed-work.md` — History of completed work
