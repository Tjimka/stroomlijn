function Nav({ current, onNav }) {
  const links = [
    { id: "werkwijze", label: "Werkwijze" },
    { id: "aanbod", label: "Aanbod" },
    { id: "platform", label: "Platform" },
    { id: "over", label: "Over Tjimka" },
    { id: "reviews", label: "Klanten" },
    { id: "media", label: "Blog & media" },
  ];
  return (
    <nav className="nav">
      <div className="container-wide nav-inner">
        <div className="nav-logo" onClick={() => onNav("home")} role="button" aria-label="Stroomlijn home">
          <img src="../../assets/logo-wordmark.png" alt="Stroomlijn" />
        </div>
        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.id}
              className={`nav-link ${current === l.id ? "active" : ""}`}
              onClick={() => onNav(l.id)}
            >{l.label}</button>
          ))}
        </div>
        <div className="nav-cta">
  <button className="nav-link" onClick={() => onNav("contact")}>Contact</button>
  
    href="https://calendly.com/afspraak-met-tjimka/stroomlijn"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary btn-sm"
  >
    Plan een gesprek <Icon.ArrowRight width={15} height={15} />
  </a>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
