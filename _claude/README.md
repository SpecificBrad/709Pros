# Claude Memory System

## Session START
1. Read `_claude/03_next_actions.md` → what to do
2. Read `_claude/00_current_state.md` → only if health check needed
3. Read `_claude/01_architecture.md` or `02_environment.md` → only if task requires it

## Session END — type /wrap
Claude will:
1. Ask what was accomplished
2. Update 03_next_actions.md (check off done, add new)
3. Update 00_current_state.md (date, status, issues)
4. Create decisions/ or mistakes/ files if warranted
5. Commit and push everything to GitHub

## File Purposes
| File | Purpose | Update frequency |
|------|---------|---------|
| 03_next_actions.md | Prioritized todo list | Every session |
| 00_current_state.md | Project health | Every session |
| 01_architecture.md | Stack, structure | Rarely |
| 02_environment.md | URLs, keys, config | When env changes |
| decisions/ | Why we chose X | Permanent record |
| mistakes/ | What went wrong | Permanent record |
| WRAP.md | End-of-session protocol | Rarely |
