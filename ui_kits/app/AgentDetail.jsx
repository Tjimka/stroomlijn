function AgentDetail({ agent, setView }) {
  if (!agent) return null;
  return (
    <div className="page">
      <div style={{display: "flex", alignItems: "center", gap: 8, marginBottom: 16, fontSize: 13}}>
        <button className="btn btn-secondary btn-sm" onClick={() => setView("agents")}>← Agents</button>
        <span style={{color: "var(--fg-3)"}}>/ {agent.name}</span>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-head">
            <div className={`icn-lg ${agent.gold ? "gold" : ""}`} style={agent.gold ? {background: "var(--accent-gold-soft)", color: "var(--brand-gold)"} : {}}>
              <AppIcon.Bot width={28} height={28}/>
            </div>
            <div style={{flex: 1}}>
              <h2>{agent.name}</h2>
              <div className="sub">{agent.desc}</div>
              <div style={{display: "flex", gap: 10, alignItems: "center"}}>
                <span className={`badge ${agent.status}`}>
                  <span className="b-dot" style={{background: agent.status === "live" ? "var(--success)" : "#C89A3C"}}></span>
                  {agent.status === "live" ? "Live" : "In review"}
                </span>
                <span style={{fontSize: 13, color: "var(--fg-3)", fontFamily: "var(--font-mono)"}}>{agent.convs}</span>
              </div>
              <div className="kv-grid">
                <div className="kv"><div className="k">Model</div><div className="v">Claude Haiku 4.5</div></div>
                <div className="kv"><div className="k">Tone</div><div className="v">Menselijk, nuchter</div></div>
                <div className="kv"><div className="k">Kennisbronnen</div><div className="v">3 gekoppeld</div></div>
              </div>
            </div>
            <button className="btn btn-secondary btn-sm">Bewerk</button>
          </div>

          <ChatPanel agent={agent}/>
        </div>

        <div style={{display: "flex", flexDirection: "column", gap: 16}}>
          <div className="panel-card">
            <h4>Prestaties (7 dagen)</h4>
            <div className="kv-list">
              <div className="row"><span className="k">Gesprekken</span><span className="v">284</span></div>
              <div className="row"><span className="k">Succesvol afgerond</span><span className="v">91%</span></div>
              <div className="row"><span className="k">Gem. responstijd</span><span className="v">1,2s</span></div>
              <div className="row"><span className="k">Geëscaleerd naar mens</span><span className="v">9%</span></div>
            </div>
          </div>
          <div className="panel-card">
            <h4>Kennisbronnen</h4>
            <div className="kv-list">
              <div className="row"><span className="k">Notion – FAQ</span><span className="v">142 docs</span></div>
              <div className="row"><span className="k">Google Drive – Handboek</span><span className="v">38 docs</span></div>
              <div className="row"><span className="k">Website – stroomlijn.nu</span><span className="v">24 pagina's</span></div>
            </div>
            <button className="btn btn-secondary btn-sm" style={{marginTop: 14, width: "100%", justifyContent: "center"}}>
              <AppIcon.Plus width={14} height={14}/> Bron toevoegen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
window.AgentDetail = AgentDetail;
