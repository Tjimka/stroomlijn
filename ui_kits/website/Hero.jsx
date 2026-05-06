function Hero({ onNav }) {
  const slides = [
    "../../assets/photos/hero-slider-1.png",
    "../../assets/photos/hero-slider-2.png",
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero hero-slider" data-screen-label="Hero">
      <div className="hero-slides">
        {slides.map((src, i) => (
          <div
            key={i}
            className={"hero-slide" + (i === idx ? " is-active" : "")}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden={i !== idx}
          />
        ))}
        <div className="hero-veil" />
      </div>
      <div className="container-wide hero-content">
        <span className="eyebrow">Voor MKB-ondernemers en teams in Noord-Nederland</span>
        <h1 className="hero-title">
          AI die past bij<br />
          <em>hoe jij werkt.</em>
        </h1>
        <p className="hero-lead">
          Veel ondernemers weten dat ze iets met AI moeten, maar weten niet waar te beginnen.
          Ik kijk mee naar jouw werkzaamheden en zorg dat het gewoon werkt.
        </p>
        <div className="hero-ctas">
         href="https://calendly.com/afspraak-met-tjimka/stroomlijn"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary btn-lg"
>
  Plan een vrijblijvend gesprek <Icon.ArrowRight width={17} height={17} />
</a>
          <button className="btn btn-secondary btn-lg" onClick={() => onNav("werkwijze")}>
            Zo werk ik
          </button>
        </div>
        <div className="hero-trust">
          <span><Icon.MapPin width={15} height={15} /> Lemmer · Friesland</span>
          <span><Icon.Check width={15} height={15} /> Eerste gesprek kosteloos</span>
          <span><Icon.Shield width={15} height={15} /> EU AI-Act conform</span>
        </div>
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slider">
        {slides.map((_, i) => (
          <button
            key={i}
            className={"hero-dot" + (i === idx ? " is-active" : "")}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === idx}
          />
        ))}
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z" fill="var(--bg-canvas)" />
      </svg>
    </section>
  );
}
window.Hero = Hero;
