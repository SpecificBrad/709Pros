# Environment & Connections
_Load only when debugging connections or writing integration code._

## Live URLs
- Site: https://709pros.com (DNS propagating as of Feb 21)
- Netlify: https://709pros.netlify.app (always works)
- Supabase: https://app.supabase.com/project/ajvitritgrzcauevljka

## Netlify
- Site ID: 263572a1-c83c-4ef8-918b-c572ee770db1
- Edge function: fillout-webhook (JWT verification DISABLED)
- Webhook URL: https://709pros.netlify.app/.netlify/functions/fillout-webhook?v=2

## Supabase
- Project ref: ajvitritgrzcauevljka
- MCP: Local config with PAT (expires 2026-03-22)
- Use SUPABASE_SERVICE_ROLE_KEY server-side (NOT anon key)
- Edge Function env vars are auto-injected — no manual setup needed

## Fillout
- Field matching: By question NAME not ID
- Cache: Aggressively caches webhooks 30-60min. Force clear with ?v=N param.
- Test button only pings URL — submit a real form to test field mapping

## Desktop Commander (Windows)
- Config: C:\Users\brad\AppData\Roaming\Claude\claude_desktop_config.json
- Command: C:\Program Files\nodejs\node.exe
- Args: C:\Users\brad\AppData\Roaming\npm\node_modules\@wonderwhy-er\desktop-commander\dist\index.js
- Timeout: 120000 (increased from 60000 — DC takes ~16s to init on this machine)
- Git for DC: use shell "cmd.exe" not powershell (git not in PS PATH)

## Git
- Always use cmd.exe shell for git commands via DC
- Repo: C:\Users\brad\Desktop\709Pros
