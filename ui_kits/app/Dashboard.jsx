function Dashboard({ setView }) {
  const stats = [
    { lbl: "Actieve agents", num: "6", delta: "+1 deze week" },
    { lbl: "Gesprekken (7d)", num: "1.284", delta: "+18%" },
    { lbl: "Workflow-runs", num: "3.412", delta: "+6%" },
    { lbl: "Opgeloste tickets", num: "89%", delta: "+4%", },
  ];
  const activities = [
    { t: "09:14", a: "Klantenservice-bot", m: "beantwoordde 34 gesprekken", s: "live" },
    { t: "08:40", a: "Factuur-workflow", m: "verwerkte 12 PDFs naar Exact", s: "live" },
    { t: "gisteren", a: "Offerte-assistent", m: "gepubliceerd", s: "live" },
    { t: "gisteren", a: "Kennisbank-sync", m: "Notion → vector-store vernieuwd", s: "live" },
    { t: "2 dgn", a: "Nieuwe intake-agent", m: "in review door team", s: "review" },
  ];
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Goedemorgen, Rients 👋</h1>
          <div className="sub">Hier is wat er deze week loopt bij Stroomlijn.</div>
        </div>
        <button className="btn btn-primary" onClick={() => setView("agents")}>
          <AppIcon.Plus width={16} height={16}/> Nieuwe agent
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <div className="lbl">{s.lbl}</div>
            <div className="num">{s.num}</div>
            <div className="delta"><AppIcon.ArrowUp width={12} height={12}/>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20}}>
        <div className="section-card">
          <div className="section-head">
            <h3>Recente activiteit</h3>
            <button className="btn btn-secondary btn-sm">Alles bekijken</button>
          </div>
          {activities.map((it, i) => (
            <div key={i} style={{display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 14, padding: "14px 20px", borderBottom: i === activities.length - 1 ? "none" : "1px solid var(--border-1)", alignItems: "center"}}>
              <div style={{fontSize: 12, color: "var(--fg-3)", fontFamily: "var(--font-mono)"}}>{it.t}</div>
              <div>
                <span style={{fontSize: 14, fontWeight: 600}}>{it.a}</span>
                <span style={{fontSize: 14, color: "var(--fg-2)"}}> — {it.m}</span>
              </div>
              <span className={`badge ${it.s}`}><span className="b-dot" style={{background: it.s === "live" ? "var(--success)" : "#C89A3C"}}></span>{it.s === "live" ? "live" : "review"}</span>
            </div>
          ))}
        </div>

        <div className="section-card">
          <div className="section-head">
            <h3>Aan de slag</h3>
          </div>
          <div style={{padding: 20, display: "flex", flexDirection: "column", gap: 12}}>
            <button className="btn btn-secondary" style={{justifyContent: "flex-start", padding: "14px 16px"}} onClick={() => setView("agents")}>
              <AppIcon.Bot width={18} height={18}/> Een agent bouwen
              <AppIcon.ChevronRight width={16} height={16} style={{marginLeft: "auto"}}/>
            </button>
            <button className="btn btn-secondary" style={{justifyContent: "flex-start", padding: "14px 16px"}}>
              <AppIcon.Workflow width={18} height={18}/> Workflow opzetten
              <AppIcon.ChevronRight width={16} height={16} style={{marginLeft: "auto"}}/>
            </button>
            <button className="btn btn-secondary" style={{justifyContent: "flex-start", padding: "14px 16px"}}>
              <AppIcon.Database width={18} height={18}/> Kennisbank koppelen
              <AppIcon.ChevronRight width={16} height={16} style={{marginLeft: "auto"}}/>
            </button>
            <div style={{fontSize: 13, color: "var(--fg-3)", marginTop: 8, padding: "12px 14px", background: "var(--accent-soft)", borderRadius: 8}}>
              Nog vragen? We zitten op donderdag live in het forum om 14:00.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
