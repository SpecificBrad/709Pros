# 709 Pros — Project Guide

## What This Is
Local lead generation site for homeowners in Newfoundland. Homeowners submit a quote request, get matched with pre-screened local contractors. Built as a programmatic SEO (pSEO) static site.

## Stack
- **Framework:** Astro 5.x (static output)
- **Styling:** Tailwind CSS 3.x
- **Sitemap:** @astrojs/sitemap
- **Form:** Fillout (embedded at /quote/, form ID: bQZZKLhwuBus)
- **Automation:** Make.com (webhook from Fillout → Supabase insert)
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
- Plus: 8 service pages + 6 area pages + homepage + quote + areas index = **66 total pages**

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
Fillout form → Make.com webhook → Supabase "leads" table
```

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

### Make.com Webhook
- Scenario ID: 4125813
- Webhook URL: https://hook.us2.make.com/jdjhsdsdu21o2hc554ams7laytfbkrm3
- Flow: Webhooks (module 4) → Supabase Create a Row (module 6)

### Fillout Question IDs (for Make.com field mapping)
| Field | Fillout Question ID | Fillout Name |
|-------|---------------------|--------------|
| full_name | gBFz | Full Name |
| phone | 5M4s | Phone number |
| email | hhBy | Email |
| service | jmOc | Service |
| service_area | oF6y | City/Service Area |
| timeline | iJcBc | Timeline |
| budget_range | vRdb | Budget range |
| homeowner | f3j8 | Are you the homeowner? |
| property_type | pOm7 | Property type |
| photo_urls | 2Aa4 | Project Photos |
| postal_code | dyap | Postal code |
| description | ? | Describe the Issue (ID unknown — match by name) |

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
Field values must be extracted from `submission.questions` array by matching `id`.

### Make.com Field Mapping — CORRECT Syntax
The Make.com webhook module (4) receives the Fillout payload **without** a `body` wrapper.
The correct path is `4.submission.questions` — **NOT** `4.body.submission.questions`.

**Correct formula example:**
```
{{map(4.submission.questions; "value"; "id"; "gBFz")}}
```

**Wrong (current, causes all NULLs):**
```
{{map(4.body.submission.questions; "value"; "id"; "gBFz")}}
```

Full mapping table:
| Supabase Column | Make.com Formula |
|----------------|-----------------|
| full_name | `{{map(4.submission.questions; "value"; "id"; "gBFz")}}` |
| phone | `{{map(4.submission.questions; "value"; "id"; "5M4s")}}` |
| email | `{{map(4.submission.questions; "value"; "id"; "hhBy")}}` |
| service | `{{map(4.submission.questions; "value"; "id"; "jmOc")}}` |
| service_area | `{{map(4.submission.questions; "value"; "id"; "oF6y")}}` |
| timeline | `{{map(4.submission.questions; "value"; "id"; "iJcBc")}}` |
| budget_range | `{{map(4.submission.questions; "value"; "id"; "vRdb")}}` |
| property_type | `{{map(4.submission.questions; "value"; "id"; "pOm7")}}` |
| homeowner | `{{map(4.submission.questions; "value"; "id"; "f3j8")}}` |
| photo_urls | `{{map(4.submission.questions; "value"; "id"; "2Aa4")}}` |
| postal_code | `{{map(4.submission.questions; "value"; "id"; "dyap")}}` |
| description | `{{map(4.submission.questions; "value"; "name"; "Describe the Issue")}}` |

To redetermine the webhook data structure: right-click Webhooks module → Redetermine data structure → submit a form entry.

## Git Workflow
- **Feature branch:** `claude/build-709pros-seo-site-S3O91`
- **Production:** `main` (Netlify auto-deploys)
- Claude Code proxy cannot push to `main` directly (403). Merge via GitHub Codespaces or PR.

## Lessons Learned

### Integration Debugging
- When Make.com Supabase module shows `ENOTFOUND: https://.supabase.co/rest/v1/` — the **Project ID** in the connection is blank or wrong. It should be just the project ID (e.g., `ajvitritgrzcauevljka`), not the full URL.
- Make.com's Supabase connector adds `.supabase.co` automatically — don't include it in the Project ID field.
- Fillout's "Test" button on webhook setup only pings the URL — it does NOT send form data. Submit a real form entry to test.
- Fillout sends nested `submission.questions[]` array, not flat fields. Make.com `map()` function needed to extract values by question ID.
- **CRITICAL:** Make.com webhook module (4) does NOT wrap the payload in `body`. Use `4.submission.questions`, not `4.body.submission.questions`. The `body.` prefix causes all fields to be NULL.
- After changing the webhook or connection, you must **redetermine the data structure**: right-click the Webhooks module → "Redetermine data structure" → submit a real form entry. Without this, the mapping variable panel only shows `executionId`.
- Make.com's Supabase connection Project ID field wants JUST the project ID (e.g., `ajvitritgrzcauevljka`), not `ajvitritgrzcauevljka.supabase.co`. The module adds the domain suffix automatically.

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

## Pending Work
- [ ] **FIX FIRST:** Make.com field mappings — change `4.body.submission.questions` to `4.submission.questions` in every Supabase module field. This is the ONE fix needed to make the pipeline fully work. Clear each field (Ctrl+A, Delete) and paste the corrected formula from the mapping table above.
- [ ] Clean up test rows in Supabase leads table (NULL rows + "Test User" rows)
- [ ] Tighten NOT NULL constraints on leads table after mappings confirmed (full_name, phone, service, service_area)
- [ ] Find Fillout question ID for "Describe the Issue" (currently matching by name)
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
