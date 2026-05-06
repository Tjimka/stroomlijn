# Stroomlijn — App UI kit

Platform replica for `app.stroomlijn.nu`. The live platform was not accessible during build, so this kit extrapolates from the brand fundamentals to produce a plausible AI-agents/automations workspace.

## Files
- `index.html` — interactive click-through (login → dashboard → agent detail → chat)
- `Sidebar.jsx`, `Topbar.jsx`, `Dashboard.jsx`, `AgentList.jsx`, `AgentDetail.jsx`, `ChatPanel.jsx`, `LoginScreen.jsx`

## Flag
⚠️ When Stroomlijn shares real screenshots or codebase of the platform, we should re-sync this kit to match the real layout, data shapes and interactions.

## Pattern
Single-page React app, no router — drives screens via `view` state. Covers:
- Login
- Dashboard overview
- Agents list
- Agent detail + chat panel
