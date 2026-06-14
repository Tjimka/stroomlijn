function Aanbod({ onNav }) {
  const cards = [
    {
      cls: "",
      icon: <Icon.Strategy width={26} height={26} />,
      title: "Advies & strategie",
      desc: "Wat heeft jouw bedrijf nodig, en wat juist niet. Heldere keuzes, zonder technologische push.",
      bullets: ["AI-scan van je processen", "Strategie & roadmap", "Risico's & EU AI-Act"],
      cta: "Lees meer over advies",
    },
    {
      cls: "gold",
      icon: <Icon.Training width={26} height={26} />,
      title: "Training & kennissessies",
      desc: "Voor jou alleen of met je team. Praktisch, rustig en direct toepasbaar - geen drie-dagen-cursus.",
      bullets: ["Stroomlijn Sessie (1-op-1)", "Team workshops", "Kennissessies op maat"],
      cta: "Bekijk trainingen",
    },
    {
      cls: "navy",
      icon: <Icon.Implementation width={26} height={26} />,
      title: "Implementatie",
      desc: "AI-assistenten, chatbots, kennisbanken en geautomatiseerde workflows die jouw werkdag dragen.",
      bullets: ["AI-agents & chatbots", "Kennisbanken & knowhow", "Workflow-automatisering"],
      cta: "Zie implementaties",
    },
  ];

  // Externe vervolgpagina's op app.stroomlijn.nu
  const meer = [
    { href: "https://app.stroomlijn.nu/p/xqaaJSySar/interactieve-demos", label: "Bekijk de interactieve demo's" },
    { href: "https://app.stroomlijn.nu/p/XedeEG7p/social-media-bureau", label: "Social media bureau" },
  ];

  return (
    <section className="section" id="aanbod" data-screen-label="Aanbod" style={{ background: "var(--bg-surface-alt)" }}>
      <div className="container-wide">
        <div className="sec-head">
          <span className="eyebrow">Aanbod</span>
          <h2 className="sec-title">Van eerste vraag tot werkend systeem</h2>
          <p className="sec-lead">
            Ik begeleid je in drie vormen. Soms is één genoeg. Soms loopt het een
            natuurlijke route: eerst advies, dan training, dan implementatie. Wat past, past.
            <p></p>
            De voorbeelden hieronder zijn een greep uit de mogelijkheden. In de interactieve demo's zie je enkele werkende voorbeelden die je zelf kunt aanklikken. 
            Een website die je via een Google Sheet beheert, een AI-assistent die klanten te woord staat, een digitale wallet-pas, een webshop, automatisch weekoverzicht en meer. Geen technische kennis nodig.<br>
Daarnaast laat ik in een aparte demo zien hoe ik social media-beheer voor meerdere klanten inricht. Van intake tot geplande post, inclusief last-minute wijzigingen.<br></br>

  De keuze: ik bouw het, of jij bouwt het

Ik bouw het voor je. Jij vertelt wat je nodig hebt, ik richt de tools, agents en flows in. Klaar om te gebruiken.
Je bouwt het zelf. Met een abonnement op app.stroomlijn.nu maak je dit soort tools en agents in je eigen omgeving. Ik help je op weg.

Wat past, past. Soms is begeleiding genoeg, soms neem ik het hele traject over.
          <p></p>
        </div>
        <div className="aanbod-grid">
          {cards.map((c, i) => (
            <div className={`aanbod-card ${c.cls}`} key={i}>
              <div className="ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <ul>
                {c.bullets.map((b, j) => <li key={j}><Icon.Check width={16} height={16} /> {b}</li>)}
              </ul>
              <span className="link">{c.cta} <Icon.ArrowRight width={14} height={14} /></span>
            </div>
          ))}
        </div>

        {/* Vervolgpagina's: demo's en social media bureau */}
        <div style={{ marginTop: "32px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {meer.map((m, i) => (
            <a
              key={i}
              className="btn btn-secondary"
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {m.label} <Icon.ArrowRight width={15} height={15} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Aanbod = Aanbod;
