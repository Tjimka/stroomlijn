function Sidebar({ view, setView }) {
  const item = (key, label, icon, count) => (
    <button className={`sb-item ${view === key ? "active" : ""}`} onClick={() => setView(key)}>
      {icon}<span>{label}</span>
      {count != null && <span className="cnt">{count}</span>}
    </button>
  );
  return (
    <aside className="sb">
      <div className="sb-logo">
        <img src="../../assets/favicon-s-mark.png" alt="" className="sb-logo-mark"/>
        <img src="../../assets/logo-wordmark.png" alt="Stroomlijn"/>
      </div>
      {item("dashboard", "Overzicht", <AppIcon.Home width={18} height={18}/>)}
      <div className="sb-section">Werk</div>
      {item("agents", "Agents", <AppIcon.Bot width={18} height={18}/>, 6)}
      {item("workflows", "Automatiseringen", <AppIcon.Workflow width={18} height={18}/>, 12)}
      {item("knowledge", "Kennisbank", <AppIcon.Database width={18} height={18}/>)}
      <div className="sb-section">Inzicht</div>
      {item("analytics", "Analytics", <AppIcon.Chart width={18} height={18}/>)}
      {item("library", "Bibliotheek", <AppIcon.Library width={18} height={18}/>)}
      <div className="sb-bottom">
        {item("settings", "Instellingen", <AppIcon.Settings width={18} height={18}/>)}
        <div className="sb-user" style={{marginTop: 12}}>
          <div className="av">RD</div>
          <div style={{minWidth: 0}}>
            <div className="name">Rients Dijkstra</div>
            <div className="email">rients@dijkstra.nl</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
