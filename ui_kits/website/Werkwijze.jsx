function Werkwijze({ onNav }) {
  const steps = [
    {
      n: 1,
      icon: <Icon.Phone width={22} height={22} />,
      title: "Gratis kennismaking",
      desc: "We bellen of zien elkaar — fysiek of online. Ik luister naar je situatie. Geen pitch, geen verplichtingen.",
      meta: "30 minuten · kosteloos"
    },
    {
      n: 2,
      icon: <Icon.Compass width={22} height={22} />,
      title: "Stroomlijn Sessie",
      desc: "Een werksessie waarin we samen kijken waar AI rust en winst oplevert in jouw bedrijf. Helder, concreet, praktisch.",
      meta: "Halve of hele dag"
    },
    {
      n: 3,
      icon: <Icon.Stream width={22} height={22} />,
      title: "Plan van aanpak",
      desc: "Een helder plan met keuzes, prioriteiten en kosten. Inclusief wat je zelf doet en waar ik je bij help.",
      meta: "Schriftelijk uitgewerkt"
    },
  ];
  return (
    <section className="section" id="werkwijze" data-screen-label="Werkwijze">
      <div className="container-wide">
        <div className="sec-head" style={{ textAlign: "center", margin: "0 auto 56px" }}>
          <span className="eyebrow">Werkwijze</span>
          <h2 className="sec-title" style={{ margin: "0 auto 14px" }}>Drie stappen, één doel: AI werkend krijgen</h2>
          <p className="sec-lead" style={{ margin: "0 auto" }}>
            Geen lange trajecten zonder einde. We beginnen klein, leveren snel resultaat,
            en bouwen verder vanaf wat werkt.
          </p>
        </div>
        <div className="werkwijze-grid">
          {steps.map(s => (
            <div className="step-card" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="meta"><Icon.Clock width={13} height={13} /> {s.meta}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <button className="btn btn-primary btn-lg" onClick={() => onNav("contact")}>
            Start met stap 1 <Icon.ArrowRight width={17} height={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
window.Werkwijze = Werkwijze;
