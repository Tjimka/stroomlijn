function AppMain() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [view, setView] = React.useState("dashboard");
  const [agent, setAgent] = React.useState(null);

  if (!loggedIn) return <LoginScreen onLogin={() => setLoggedIn(true)}/>;

  const titles = {
    dashboard: "Overzicht",
    agents: "Agents",
    "agent-detail": agent?.name || "Agent",
    workflows: "Automatiseringen",
    knowledge: "Kennisbank",
    analytics: "Analytics",
    library: "Bibliotheek",
    settings: "Instellingen",
  };

  return (
    <div className="app">
      <Sidebar view={view === "agent-detail" ? "agents" : view} setView={(v) => { setView(v); setAgent(null); }}/>
      <div className="main-col">
        <Topbar title={titles[view] || "Stroomlijn"}/>
        {view === "dashboard" && <Dashboard setView={setView}/>}
        {view === "agents" && <AgentList setView={setView} setAgent={setAgent}/>}
        {view === "agent-detail" && <AgentDetail agent={agent} setView={setView}/>}
        {["workflows", "knowledge", "analytics", "library", "settings"].includes(view) && (
          <div className="page">
            <div className="page-head">
              <div>
                <h1>{titles[view]}</h1>
                <div className="sub">Dit scherm is nog niet uitgewerkt in de UI-kit.</div>
              </div>
            </div>
            <div className="section-card" style={{padding: 48, textAlign: "center", color: "var(--fg-3)"}}>
              <AppIcon.Workflow width={32} height={32} style={{color: "var(--brand-teal)", margin: "0 auto 12px", display: "block"}}/>
              Placeholder — in een volgende iteratie vullen we dit scherm met
              echte content op basis van de bestaande platform-UI.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppMain/>);
