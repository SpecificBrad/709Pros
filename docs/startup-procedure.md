# 709Pros Session Startup Procedure

## Tools Required
- **Claude Desktop app** (not claude.ai web — DC and Supabase are local MCP only)
- **Desktop Commander** v0.2.37 — configured as local MCP via claude_desktop_config.json
- **Supabase** configured as local MCP via claude_desktop_config.json (PAT auth)
- **Netlify MCP** connected via Connectors tab
- **GitHub** connected via Connectors tab

## Working claude_desktop_config.json
```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest",
        "--access-token", "sbp_7e5f66752d0aa69ec604ba5830c5efb0a4cfb2c7",
        "--project-ref", "ajvitritgrzcauevljka"]
    },
    "desktop-commander": {
      "command": "C:\\Program Files\\nodejs\\node.exe",
      "args": ["C:\\Users\\brad\\AppData\\Roaming\\npm\\node_modules\\@wonderwhy-er\\desktop-commander\\dist\\index.js"],
      "timeout": 60000
    }
  }
}
```

## Lessons Learned (Feb 21 2026)
- **DO NOT use the remote agent** (`npx ... remote`) — web Claude can't reach it
- **DO NOT use npx in the DC command** — too slow, causes timeout before handshake completes
- **Use direct node.exe path** pointing to globally installed DC (`npm install -g @wonderwhy-er/desktop-commander`)
- **Delete the Extension-managed "Desktop Commander" entry** in Settings → Developer — it conflicts with the config-based entry and causes connection failures
- **timeout: 60000** is required in config — DC initialization takes ~16 seconds on this machine
- DC shows **"running"** in Settings → Developer when healthy
- Disk at 100% will cause DC to timeout — wait for disk to settle before opening Claude
- Claude Desktop app uses ~750MB RAM — close Chrome and other heavy apps before starting

## Checklist
- [ ] Claude Desktop app open (not browser)
- [ ] Settings → Developer shows **desktop-commander: running** and **supabase: running**
- [ ] Only ONE desktop-commander entry in Developer (delete any Extension-managed duplicate)
- [ ] Netlify connected under Connectors
- [ ] GitHub connected under Connectors
- [ ] Working inside the 709Pros Claude Project
- [ ] Tell Claude "load project docs" to pull docs via DC

## Step by Step
1. Open **Claude Desktop app**
2. Wait ~30 seconds for DC to initialize (especially after reboot)
3. Go to Settings → Developer → confirm **desktop-commander** shows **running**
4. Confirm **supabase** shows **running**
5. Go to Settings → Connectors → confirm **Netlify** and **GitHub** are connected
6. Open the **709Pros project** in the left sidebar
7. Tell Claude: "load project docs"
