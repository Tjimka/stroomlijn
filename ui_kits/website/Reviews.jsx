function Reviews() {
  const reviews = [
    {
      stars: 5,
      quote: "Tjimka heeft ons in één werkdag inzicht gegeven waar we maanden over zouden hebben gepraat. Geen hype, geen jargon — gewoon helder.",
      name: "Marleen de Vries",
      role: "Eigenaar · MKB-onderneming Friesland",
      initials: "MV",
    },
    {
      stars: 5,
      quote: "We dachten dat we een chatbot nodig hadden. Tjimka liet zien dat we eerst onze processen moesten stroomlijnen. Eerlijk advies dat ons veel kostte aan haar — en veel opleverde.",
      name: "Pieter Visser",
      role: "Directeur · Servicebedrijf",
      initials: "PV",
    },
    {
      stars: 5,
      quote: "De Stroomlijn Sessie was eye-opening. Eindelijk iemand die het uitlegt zonder neer te kijken. Mijn team kon de volgende dag al aan de slag.",
      name: "Saskia Bakker",
      role: "Teamlead · Zorgorganisatie",
      initials: "SB",
    },
  ];
  return (
    <section className="section" id="reviews" data-screen-label="Reviews" style={{ background: "var(--bg-surface-alt)" }}>
      <div className="container-wide">
        <div className="sec-head" style={{ textAlign: "center", margin: "0 auto 56px" }}>
          <span className="eyebrow">Klantverhalen</span>
          <h2 className="sec-title" style={{ margin: "0 auto 14px" }}>Wat klanten zeggen</h2>
          <p className="sec-lead" style={{ margin: "0 auto" }}>
            Eerlijke verhalen van ondernemers en teams die met Stroomlijn
            aan de slag gingen.
          </p>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Icon.Star key={j} width={16} height={16} />
                ))}
              </div>
              <p className="review-quote">"{r.quote}"</p>
              <div className="review-author">
                <div className="review-avatar">{r.initials}</div>
                <div className="review-meta">
                  <div className="nm">{r.name}</div>
                  <div className="rl">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Reviews = Reviews;
