# /wrap — End of Session Protocol
_Claude runs this at the end of every session when user types "/wrap"_

## Steps

### 1. Ask user for session summary
"What did we accomplish this session? Anything to flag for next time?"

### 2. Update 03_next_actions.md
- Check off completed items
- Add any new tasks that came up
- Move urgent items to 🔴 if needed
- Remove stale items

### 3. Update 00_current_state.md
- Update "Last Updated" date and session description
- Update any status indicators that changed
- Update "Active Issues" — remove resolved, add new
- Update "What's Solid" if anything new was completed

### 4. Log decisions (if any were made)
- If a significant technical or product decision was made, create:
  `_claude/decisions/YYYY-MM-DD_topic.md`
- Format: What was decided, why, what was rejected

### 5. Log mistakes (if any were made)
- If something went wrong that cost time, create:
  `_claude/mistakes/YYYY-MM-DD_topic.md`
- Format: What went wrong, root cause, how to avoid next time

### 6. Commit everything
Run via cmd.exe shell:
```
cd /d C:\Users\brad\Desktop\709Pros
git add _claude/
git commit -m "wrap: [brief session description]"
git push
```

### 7. Confirm to user
"Session wrapped. Next time, I'll start with 03_next_actions.md and pick up from [top priority item]."
