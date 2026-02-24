# Mistakes & Learnings — 2026-02-24 Setup Session

## 1. MCP Startup Errors Are Cosmetic
**What happened:** Spent time troubleshooting "Could not load connectors directory" error thinking MCPs were broken.
**Root cause:** UI warning on Connectors tab, unrelated to MCP server status.
**Fix:** Always check Settings → Developer first. If servers show "running" there, ignore UI warnings elsewhere.

## 2. DC Timeout Was the Real Issue
**What happened:** Desktop Commander consistently failing to connect on launch.
**Root cause:** Default 60s timeout too short — DC takes ~16s to init on this machine plus overhead.
**Fix:** Set `"timeout": 120000` in claude_desktop_config.json.
**Note:** This should have been documented after Feb 21 session but wasn't carried forward.

## 3. Git via Desktop Commander on Windows
**What happened:** Multiple failed git push attempts before finding working pattern.
**Root causes:**
- PowerShell: git not in PATH, `&&` not valid separator
- cmd.exe inline: quote escaping breaks commit messages with spaces
**Fix:** Always use a `.bat` file for multi-step git operations via cmd.exe shell.
**Pattern that works:**
```
cd /d C:\Users\brad\Desktop\709Pros
git add _claude/
git commit -m "short message no special chars"
git push
```

## 4. Always Pull Before Push
**What happened:** Push rejected because remote had diverged (previous session pushed changes we didn't have locally).
**Fix:** Always `git pull` before pushing. If conflicts, use `git checkout --theirs` for files you want to keep remote version of.

## 5. Memory System Belongs in Claude Desktop Only
**What happened:** Started this session in Claude web, spent time realizing web Claude can't write files or push to GitHub.
**Fix:** All 709Pros dev work in Claude Desktop. Web Claude = one-off questions only.
