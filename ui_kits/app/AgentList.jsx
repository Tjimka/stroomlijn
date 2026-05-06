function AgentList({ setView, setAgent }) {
  const agents = [
    { id: 1, name: "Klantenservice-bot", desc: "Behandelt veelgestelde vragen, escaleert bij twijfel.", convs: "1.284 gesprekken", status: "live", gold: false },
    { id: 2, name: "Offerte-assistent", desc: "Genereert offertes op basis van intakeformulier.", convs: "86 offertes", status: "live", gold: true },
    { id: 3, name: "Factuur-verwerker", desc: "Leest PDF-facturen, stuurt naar Exact.", convs: "412 verwerkt", status: "live", gold: false },
    { id: 4, name: "HR-assistent", desc: "Beantwoordt medewerkersvragen over verlof, ziek, regelingen.", convs: "214 gesprekken", status: "live", gold: false },
    { id: 5, name: "Intake-agent", desc: "Nieuwe klantaanvragen sorteren en kwalificeren.", convs: "nog geen data", status: "review", gold: true },
    { id: 6, name: "Kennisbank-search", desc: "Intern semantisch zoeken door Notion en Drive.", convs: "572 queries", status: "live", gold: false },
  ];
  return (
    <div className="page">
      <div className="page-head">
        <div>
          <h1>Agents</h1>
          <div className="sub">AI-agents die jullie werk dagelijks ondersteunen.</div>
        </div>
        <button className="btn btn-primary"><AppIcon.Plus width={16} height={16}/> Nieuwe agent</button>
      </div>

      <div className="section-card">
        <div className="section-head">
          <h3>Alle agents ({agents.length})</h3>
          <div style={{display: "flex", gap: 8}}>
            <button className="btn btn-secondary btn-sm">Alle</button>
            <button className="btn btn-secondary btn-sm">Live</button>
            <button className="btn btn-secondary btn-sm">In review</button>
          </div>
        </div>
        {agents.map(a => (
          <div key={a.id} className="agent-row" onClick={() => { setAgent(a); setView("agent-detail"); }}>
            <div className={`icn-box ${a.gold ? "gold" : ""}`}><AppIcon.Bot width={22} height={22}/></div>
            <div>
              <div className="name">{a.name}</div>
              <div className="desc">{a.desc}</div>
            </div>
            <div className="meta">{a.convs}</div>
            <span className={`badge ${a.status}`}>
              <span className="b-dot" style={{background: a.status === "live" ? "var(--success)" : "#C89A3C"}}></span>
              {a.status === "live" ? "Live" : "Review"}
            </span>
            <AppIcon.ChevronRight width={16} height={16} style={{color: "var(--fg-muted)"}}/>
          </div>
        ))}
      </div>
    </div>
  );
}
window.AgentList = AgentList;
