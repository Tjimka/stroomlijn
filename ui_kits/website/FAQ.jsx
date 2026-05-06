function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: "Hoe snel kan ik AI in mijn bedrijf gebruiken?",
      a: "Sneller dan je denkt. Een eerste werkende oplossing, bijvoorbeeld een AI-assistent voor klantvragen of interne kennis. — staat vaak binnen twee tot vier weken. Een gratis kennismaking duurt 30 minuten."
    },
    {
      q: "Wat kost het om te starten?",
      a: "Het eerste gesprek is gratis. Een Stroomlijn Sessie is een vaste prijs. Implementatieprojecten begroten we vooraf — geen open eindes, geen verrassingen. Kleine trajecten starten vanaf een paar duizend euro; grote pakken we in fases aan."
    },
    {
      q: "Wat als ik geen technische kennis heb?",
      a: "Dan ben je bij mij aan het juiste adres. Ik leg AI uit in normale taal en zorg dat je het zelf snapt en kunt sturen. Geen jargon, geen technologische push. Mijn klanten zijn meestal ondernemers en teams zonder IT-achtergrond."
    },
    {
      q: "Waar is Stroomlijn gevestigd?",
      a: "In Lemmer, Friesland. Ik werk met klanten in heel Noord-Nederland en online of fysiek door heel Nederland. Op aanvraag ook in EU-landen, in het Engels."
    },
    {
      q: "Werk je alleen of met een team?",
      a: "Ik werk als zelfstandig ondernemer. Voor grotere projecten trek ik experts uit mijn netwerk erbij — developers, vormgevers, specialisten — en werk daar nauw mee samen. Zo blijft de kwaliteit hoog en blijf jij één aanspreekpunt houden."
    },
    {
      q: "Hoe zit het met de EU AI-Act?",
      a: "De EU AI-Act stelt eisen aan AI-gebruik in bedrijven. Ik help je compliant te werken — denk aan transparantie, risico-classificatie en datagebruik. Compliance is geen extraatje maar een vast onderdeel van elk traject."
    },
  ];
  return (
    <section className="section" data-screen-label="FAQ">
      <div className="container-wide">
        <div className="faq-grid">
          <div>
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 className="sec-title">Goede vragen, eerlijke antwoorden.</h2>
            <p className="sec-lead">
              Staat jouw vraag er niet bij? Stel hem in een gratis kennismaking — dan
              kijken we er samen naar.
            </p>
            <button className="btn btn-secondary" style={{ marginTop: 24 }}>
              <Icon.Mail width={16} height={16} /> Stel je vraag
            </button>
          </div>
          <div className="faq-list">
            {items.map((it, i) => (
              <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  {it.q} <Icon.ChevronDown width={20} height={20} />
                </button>
                <div className="faq-body">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
