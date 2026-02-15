# 709 Pros — Project Guide

## What This Is
Local lead generation site for homeowners in Newfoundland. Homeowners submit a quote request, get matched with pre-screened local contractors. Built as a programmatic SEO (pSEO) static site.

## Stack
- **Framework:** Astro 5.x (static output)
- **Styling:** Tailwind CSS 3.x
- **Sitemap:** @astrojs/sitemap
- **Form:** Fillout (embedded at /quote/, form ID: bQZZKLhwuBus)
- **Automation:** Supabase Edge Function (Fillout webhook → direct DB insert)
- **Database:** Supabase (project ID: ajvitritgrzcauevljka)
- **Hosting:** Netlify (auto-deploys from `main` branch)
- **Live URL:** https://709pros.netlify.app

## Build & Dev
```bash
npm run dev       # Local dev server
npm run build     # Static build → dist/
```

## Architecture

### pSEO Pattern
Cross-product pages from `services × locations` arrays:
- Route: `/services/[service]/[city]`
- 8 services × 6 locations = 48 cross-product pages
- Plus: 8 service pages + 6 area pages + homepage + quote + contact + areas index = **66 total pages**

### Data Layer (src/data/)
All pages auto-generate from these three files:
- `services.ts` — 8 services: Roofing, Heat Pump, Siding, Decks, Windows, Painting, Fence, Yard
- `locations.ts` — 6 locations: St. John's, Mount Pearl, Paradise, Torbay, Conception Bay South, Portugal Cove
- `business.ts` — business name, phone, email, trust signals, tagline

**To add a service or location:** add an entry to the respective data file. Pages generate automatically.

### Key Files
```
src/layouts/BaseLayout.astro          — Base HTML, SEO meta, OG tags, JSON-LD slot
src/pages/index.astro                 — Homepage (lead-gen landing page, 5 sections)
src/pages/quote.astro                 — Fillout form embed
src/pages/contact/index.astro         — Contact page with quote form link
src/pages/services/[slug].astro       — Individual service pages
src/pages/services/[service]/[city].astro — Cross-product pSEO pages
src/pages/areas/[slug].astro          — Individual area pages
src/pages/areas/index.astro           — Areas index
src/components/Header.astro           — Nav: Home, Service Areas, Get Matched Now
src/components/Footer.astro           — Dynamic service/location links
src/components/CTASection.astro       — Reusable CTA block
src/components/Breadcrumbs.astro      — Breadcrumb nav + BreadcrumbList schema
src/components/FAQSection.astro       — FAQ accordion + FAQPage schema
```

### Structured Data
Every page includes JSON-LD: LocalBusiness, Service, FAQPage, BreadcrumbList.

## Lead Pipeline
```
Fillout form → Supabase Edge Function → Supabase "leads" table
```

### Edge Function
- **Name:** `fillout-webhook`
- **Code:** `supabase/functions/fillout-webhook/index.ts`
- **Endpoint:** `https://ajvitritgrzcauevljka.supabase.co/functions/v1/fillout-webhook`
- **Secret:** `SB_SERVICE_ROLE_KEY` (stored in Edge Function Secrets — note: Supabase doesn't allow `SUPABASE_` prefix)
- **JWT Verification:** Disabled (Fillout doesn't send Supabase JWTs)
- **What it does:** Receives Fillout POST payload, parses nested `submission.questions[]` array, maps question **names** (not IDs) to DB columns, inserts into `public.leads`

### Supabase Schema (public.leads)
| Column | Type | Default | Nullable |
|--------|------|---------|----------|
| id | uuid | gen_random_uuid() | NO |
| created_at | timestamptz | now() | YES |
| full_name | text | | YES |
| phone | text | | YES |
| email | text | | YES |
| service | text | | YES |
| service_area | text | | YES |
| timeline | text | | YES |
| budget_range | text | | YES |
| property_type | text | | YES |
| postal_code | text | | YES |
| homeowner | boolean | | YES |
| description | text | | YES |
| photo_urls | jsonb | [] | YES |
| status | text | 'new' | YES |
| contractor_id | uuid | | YES |
| paid | boolean | false | YES |

### Fillout Question Name → DB Column Mapping
The Edge Function matches by question **name** (not ID) to avoid case-sensitivity issues with Fillout's random IDs:
| DB Column | Fillout Question Name |
|-----------|----------------------|
| full_name | Full Name |
| phone | Phone number |
| email | Email |
| service | Service |
| service_area | City/Service Area |
| timeline | Timeline |
| budget_range | Budget range |
| homeowner | Are you the homeowner? |
| property_type | Property type |
| photo_urls | Project Photos |
| postal_code | Postal code |
| description | Describe the Issue |

### Fillout Webhook Payload Structure
Fillout sends a nested structure (NOT flat key-value):
```json
{
  "formId": "...",
  "formName": "...",
  "submission": {
    "submissionId": "...",
    "submissionTime": "...",
    "questions": [
      { "id": "gBFz", "name": "Full Name", "type": "ShortAnswer", "value": "John Doe" },
      ...
    ]
  }
}
```
The Edge Function extracts values from `submission.questions` by matching the `name` field (not `id`).

### Make.com (DEPRECATED — do not use)
Make.com was the original middleware but was abandoned due to persistent field mapping issues (all values arrived as NULL even after extensive debugging). The Supabase Edge Function replaces it entirely.
- Old webhook URL: `https://hook.us2.make.com/jdjhsdsdu21o2hc554ams7laytfbkrm3`
- Old scenario ID: 4125813
- **Status:** Disabled / to be deleted

## Git Workflow
- **Feature branch:** `claude/build-709pros-seo-site-S3O91`
- **Production:** `main` (Netlify auto-deploys)
- Claude Code proxy cannot push to `main` directly (403). Merge via GitHub Codespaces or PR.

## Lessons Learned

### Integration Debugging
- Fillout's "Test" button on webhook setup only pings the URL — it does NOT send form data. Submit a real form entry to test.
- Fillout sends nested `submission.questions[]` array, not flat fields. The Edge Function parses this by matching question **name** (not ID).
- Supabase Edge Function secrets cannot start with `SUPABASE_` prefix — use `SB_SERVICE_ROLE_KEY` instead.
- Edge Functions that receive external webhooks (like Fillout) must have **JWT verification disabled**.
- **Make.com was abandoned** after extensive debugging — field mappings consistently returned NULL for all values, even simple top-level field references. The Edge Function approach is simpler and more reliable.
- **Fillout question IDs are case-sensitive** and had typos in original documentation — matching by question **name** is more reliable. The Edge Function was refactored from ID-based to name-based matching for this reason.
- **Fillout caches webhook endpoints aggressively** (30-60 min). After redeploying an Edge Function, Fillout may still hit the old version. To force a cache clear: delete the webhook in Fillout, wait, then re-add it with a `?v=2` query parameter.
- **Supabase Edge Functions have built-in env vars** — `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_URL` are automatically available, separate from user-defined secrets.

### Database
- Drop NOT NULL constraints during initial integration testing. Allows partial inserts so you can see which fields map correctly vs. which return NULL. Tighten constraints after mappings are confirmed.
- Use Supabase service_role key (not anon key) for server-side integrations like Make.com.
- Never expose service_role key on the frontend.

### Deployment
- Netlify builds from `main` branch. Build command: `npm run build`, publish dir: `dist`.
- After merging to main, Netlify auto-deploys within ~1 minute.

### Browser Claude Extensions
- Browser-based Claude extensions struggle with complex UIs like Make.com (drag-and-drop, modal dialogs, scrolling forms).
- For multi-field form configurations, manual entry is faster and more reliable than browser automation.
- Use CLI-based tools (Claude Code, APIs) for programmatic configuration whenever possible.

## Completed Work
- [x] Deploy Edge Function to Supabase (deployed via CLI with `--no-verify-jwt`)
- [x] Disable JWT verification on the Edge Function
- [x] Update Fillout webhook URL (now `...fillout-webhook?v=2` to bypass cache)
- [x] Fix question ID mismatches — refactored Edge Function to match by question **name** instead of ID
- [x] Add contact page (`/contact/`)
- [x] Full pSEO site build (8 services × 6 locations = 48 cross-product pages + service/area/static pages)

## Pending Work
- [ ] **Verify real Fillout submission populates all fields** — Fillout cache may take 30-60 min to expire; delete and re-add webhook in Fillout to force cache clear
- [ ] Clean up test rows in Supabase leads table (NULL rows + test data)
- [ ] Tighten NOT NULL constraints on leads table after pipeline confirmed (full_name, phone, service, service_area)
- [ ] Remove `webhook_logs` and `raw_payload` debugging artifacts after pipeline confirmed
- [ ] Disable/delete Make.com scenario
- [ ] Create OG image (/og-default.png)
- [ ] Replace testimonials placeholder with real content
- [ ] Custom domain setup
- [ ] Analytics/tracking integration

## Local Dev Setup (Brad's Machine)
- **Claude Code** installed: `claude` command in PowerShell
- **Git Bash path:** `C:\Program Files\Git\bin\bash.exe`
- **Repo cloned to:** `C:\Users\brad\Desktop\709Pros`
- **Environment variable needed each session:** `$env:CLAUDE_CODE_GIT_BASH_PATH = "C:\Program Files\Git\bin\bash.exe"`
- To make permanent: add to PowerShell profile (`$PROFILE`)
