# Pending Work

## Critical — Webhook Pipeline
- [ ] **Fix Fillout field mapping** — only phone/homeowner/budget_range populate; other fields arrive NULL. Check Edge Function logs for actual question names sent by Fillout
- [ ] Clean up test/junk rows in Supabase leads table (31 rows, mostly incomplete)
- [ ] Tighten NOT NULL constraints after pipeline confirmed (full_name, phone, service, service_area)

## Cleanup
- [ ] Remove `webhook_logs` and `raw_payload` debugging artifacts
- [ ] Disable/delete Make.com scenario

## Site Improvements
- [ ] Create OG image (`/og-default.png`)
- [ ] Replace testimonials placeholder with real content
- [ ] Custom domain setup
- [ ] Analytics/tracking integration
