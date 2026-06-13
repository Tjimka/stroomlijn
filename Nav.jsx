function Nav({ current, onNav }) {
  const links = [
    { id: "werkwijze", label: "Werkwijze" },
    { id: "aanbod",    label: "Aanbod" },
    { id: "platform",  label: "Platform" },
    { id: "over",      label: "Over Tjimka" },
    { id: "reviews",   label: "Klanten" },
    { id: "media",     label: "Blog & media" },
  ];

  const navRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen((v) => !v);

  /* sluit menu bij klik buiten de nav */
  React.useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  /* data-attribuut stuurt de CSS-toggle aan */
  React.useEffect(() => {
    if (navRef.current) {
      if (open) navRef.current.setAttribute("data-menu-open", "");
      else navRef.current.removeAttribute("data-menu-open");
    }
  }, [open]);

  const handleNav = (id) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="container-wide nav-inner">
        <div className="nav-logo" onClick={() => handleNav("home")} role="button" aria-label="Stroomlijn home">
          <img src="/assets/logo-wordmark.png" alt="Stroomlijn" />
        </div>

        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.id}
              className={`nav-link ${current === l.id ? "active" : ""}`}
              onClick={() => handleNav(l.id)}
            >{l.label}</button>
          ))}
        </div>

        <div className="nav-cta">
          <button className="nav-link" onClick={() => handleNav("contact")}>Contact</button>
          <button className="btn btn-primary btn-sm" onClick={() => handleNav("contact")}>
            Plan een gesprek <Icon.ArrowRight width={15} height={15} />
          </button>

          {/* hamburger – alleen zichtbaar via CSS op ≤960px */}
          <button
            className="nav-burger"
            onClick={toggle}
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
window.Nav = Nav;
