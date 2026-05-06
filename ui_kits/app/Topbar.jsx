function Topbar({ title }) {
  return (
    <header className="tb">
      <div className="tb-title">{title}</div>
      <div className="tb-spacer"></div>
      <div className="tb-search">
        <AppIcon.Search width={16} height={16} />
        <input placeholder="Zoeken in agents, workflows, docs…"/>
      </div>
      <button className="tb-icon-btn" title="Meldingen"><AppIcon.Bell width={18} height={18}/></button>
    </header>
  );
}
window.Topbar = Topbar;
