# Lessons Learned

## Integration Debugging
- Fillout's "Test" button only pings the URL — does NOT send form data. Submit a real form to test.
- Fillout sends nested `submission.questions[]` array, not flat fields.
- Supabase Edge Function secrets cannot start with `SUPABASE_` prefix — use `SB_SERVICE_ROLE_KEY`.
- Edge Functions receiving external webhooks must have **JWT verification disabled**.
- **Make.com was abandoned** — field mappings consistently returned NULL. Edge Function is simpler and more reliable.
- **Fillout question IDs are case-sensitive** — matching by question **name** is more reliable. Edge Function was refactored from ID-based to name-based matching.
- **Fillout caches webhook endpoints aggressively** (30-60 min). To force cache clear: delete the webhook in Fillout, wait, re-add with `?v=2` query parameter.
- **Supabase Edge Functions have built-in env vars** — `SUPABASE_SERVICE_ROLE_KEY` and `SUPABASE_URL` are automatically available.

## Database
- Drop NOT NULL constraints during initial integration testing to see which fields map correctly.
- Use service_role key (not anon key) for server-side integrations.
- Never expose service_role key on the frontend.

## Deployment
- Netlify builds from `main` branch. Build command: `npm run build`, publish dir: `dist`.
- After merging to main, Netlify auto-deploys within ~1 minute.

## MCP Setup (Windows)
- Windows requires `cmd /c` wrapper for npx-based MCP servers in `.mcp.json`
- `--env` flag for `claude mcp add` doesn't work in PowerShell — edit JSON config manually
- MCP config scoped to project lives in `<project>/.mcp.json`
- Supabase MCP needs `SUPABASE_ACCESS_TOKEN` in env block

## Local Dev (Brad's Machine)
- Claude Code: `claude` command in PowerShell
- Git Bash path: `C:\Program Files\Git\bin\bash.exe`
- Repo: `C:\Users\brad\Desktop\709Pros`
- Env var needed: `$env:CLAUDE_CODE_GIT_BASH_PATH = "C:\Program Files\Git\bin\bash.exe"`

## Token Management — CRITICAL
- **CLAUDE.md is loaded every turn** — keep it under 40 lines. Move everything else to `docs/`
- **All Claude Code models share the same Pro plan token quota** — Haiku isn't free, just cheaper per-token
- **MCP tool definitions add hidden per-turn overhead** — only connect servers you're actively using
- **Never debug infrastructure inside Claude Code** — edit JSON configs, dashboard settings, and MCP setup manually in terminal/editor. Save Claude for code.
- **Minimize back-and-forth** — give Claude everything in one prompt. Each turn carries the full system prompt cost.
- **Run `/doctor` first** when setting up MCP on Windows — it catches the `cmd /c` wrapper issue immediately
